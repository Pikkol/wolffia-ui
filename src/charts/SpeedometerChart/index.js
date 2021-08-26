import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { scaleLinear } from "d3-scale";

import { max, min } from "d3-array";
import { axisBottom } from "d3-axis";
import { select, selectAll, pointer } from "d3-selection";
import { arc, symbolTriangle, symbol } from "d3-shape";

import { interpolate } from "d3-interpolate";
import { mergeTailwindClasses } from "../../utils";

const SpeedometerChart = ({
  data,
  label,
  id,
  className,
  marginTop = 0,
  marginBottom = 20,
  marginLeft = 40,
  marginRight = 40,
  regions = [],
  axisTicks = 5,
  needleRadius = 0.8,
}) => {
  const PI = Math.PI,
    MIN_ANGLE = -PI / 2,
    MAX_ANGLE = PI / 2,
    maxValue = max(regions.map(region => region.limit));

  regions.sort((a, b) => b.limit - a.limit);

  const setup = () => {
    const svg = select(`#${id}`);

    svg.selectAll("*").remove();

    const g = svg.append("g");

    const width = +svg.style("width").split("px")[0],
      height = +svg.style("height").split("px")[0];

    g.attr("transform", `translate(${width / 2},${marginTop + width / 2})`);

    const innerWidth = width - marginLeft - marginRight,
      chartRadius = innerWidth / 2;

    const scale = scaleLinear()
      .domain([0, maxValue])
      .range([MIN_ANGLE, MAX_ANGLE]);

    const arcFn = arc()
      .innerRadius((d, i) => chartRadius * 0.7)
      .outerRadius((d, i) => chartRadius)
      .startAngle(MIN_ANGLE)
      .endAngle(d => scale(d));
    const arcsG = g.append("g").attr("class", "gauge-levels");

    arcsG
      .selectAll("path")
      .data(regions)
      .enter()
      .append("path")
      .attr("class", d =>
        mergeTailwindClasses(
          "gauge-level fill-current stroke-current",
          d.className,
        ),
      )
      .attr("d", d => arcFn(d.limit));

    const [xStart, xEnd] = scale.domain();
    const gap = (xEnd - xStart) / axisTicks;
    const axisTickLabels = new Array(axisTicks + 2)
      .fill("")
      .map((_, i) => +((i - 1) * gap).toFixed(1));

    const dataG = g.append("g").attr("class", "data-group");
    dataG
      .append("circle")
      .attr("cx", 0)
      .attr("cy", 0)
      .attr("r", 3)
      .attr("class", "fill-current stroke-current");

    const needle = dataG
      .append("line")
      .attr("x1", 0)
      .attr("x2", -chartRadius * needleRadius)
      .attr("y1", 0)
      .attr("y2", 0)
      .attr("class", "fill-current stroke-current stroke-2");

    dataG
      .append("path")
      .attr("d", symbol(symbolTriangle).size(50))
      .attr(
        "transform",
        `translate(${-chartRadius * needleRadius},0)rotate(-90)`,
      )
      .attr("class", "fill-current stroke-current stroke-2");
    refreshChart();
    const labelText =
      label &&
      g
        .append("text")
        .attr("text-anchor", "middle")
        .attr("class", `fill-current ${label?.className}`)
        .attr("x", 0)
        .attr("y", height - marginBottom - marginTop - width / 2)
        .text(label.text);

    const xAxis = g =>
      g.attr("text-anchor", "middle").call(g =>
        g
          .selectAll("g")
          .data(axisTickLabels)
          .enter()
          .append("g")
          .attr(
            "transform",
            d =>
              `rotate(${(scale(d) * 180) / Math.PI - 90}) translate(${
                chartRadius * 0.7
              },0)`,
          )
          .call(g =>
            g
              .append("line")
              .attr("x1", 4)
              .attr("x2", -4)
              .attr("class", "axis-line stroke-current"),
          )
          .call(g =>
            g
              .append("text")
              .attr("class", "text-xs fill-current")
              .attr("transform", d =>
                ((scale(d) + PI) / 2) % (2 * PI) < PI
                  ? `rotate(90)translate(0,16)`
                  : `rotate(-90)translate(0,-9)`,
              )
              .text(d => d),
          ),
      );

    g.call(xAxis);
  };

  const refreshChart = () => {
    select(".data-group")
      .data([data])
      .transition()
      .duration(1000)
      .attr("transform", d => {
        return `rotate(${
          ((d / maxValue) * (MAX_ANGLE - MIN_ANGLE) * 180) / PI
        })`;
      });
  };

  useEffect(() => {
    refreshChart();
  }, [data]);

  useEffect(() => {
    setup();
    return () => {
      selectAll(".tooltip").remove();
    };
  }, []);

  return (
    <svg
      id={id}
      className={mergeTailwindClasses(
        `w-full md:w-6/12 lg:w-4/12 dark:bg-gray-800 text-gray-900 dark:text-gray-50 h-64 chart`,
        className || "",
      )}
    />
  );
};

export default SpeedometerChart;
