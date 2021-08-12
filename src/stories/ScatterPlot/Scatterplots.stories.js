import React, { useState, lazy, Suspense } from "react";

// Storybook
import { storiesOf } from "@storybook/react";
import ScatterPlot from "../../charts/ScatterPlot";

const stories = storiesOf("ScatterPlots", module);

stories.add("Basic Scatterplot", () => {
  const randBetween = (x, y) => Math.floor(x + Math.random() * (y - x));

  const categories = ["Category A", "Category B"];

  const colorMap = { "Category A": "#0099FF", "Category B": "#FF5252" };

  const data = new Array(50).fill("").map(v => ({
    dependant: randBetween(1000, 1500),
    independant: randBetween(300, 500),
    sizeVariable: randBetween(100, 400),
    category: categories[randBetween(0, 2)]
  }));

  const shapeMap = { UDF: "square", LDF: "diamond" };

  return (
    <ScatterPlot
      id="random-scatter"
      data={data}
      x={{ key: "independant", axisTicks: 10, start: 0 }}
      y={{
        key: "dependant",
        start: 0,
        axisTicks: 10
      }}
      shape={{ key: "category", map: shapeMap }}
      size={{ key: "sizeVariable", min: 10, max: 40 }}
      color={{ key: "category", map: colorMap }}
      style={{ opacity: "0.5" }}
      tooltip={{
        html: row =>
          `<div class="m-2 p-2 rounded" style="background-color: ${
            colorMap[row.category]
          }">${row.sizeVariable}</div>`
      }}
      width={480}
      height={300}
      paddingBottom={10}
      paddingLeft={10}
    />
  );
});
