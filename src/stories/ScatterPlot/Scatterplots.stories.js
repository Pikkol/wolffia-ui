import React, { useState, lazy, Suspense } from "react";

// Storybook
import { storiesOf } from "@storybook/react";
import ScatterPlot from "../../charts/ScatterPlot";

const stories = storiesOf("ScatterPlots", module);

stories.add("Basic Scatterplot", () => {
  const randBetween = (x, y) => Math.floor(x + Math.random() * (y - x));

  const categories = ["UDF", "LDF"];

  const colorMap = { UDF: "#0099FF", LDF: "#FF5252" };

  const data = new Array(50).fill("").map(v => ({
    dependant: randBetween(1000, 1500),
    independant: randBetween(300, 500),
    sizeVariable: randBetween(1, 4),
    category: categories[randBetween(0, 2)]
  }));

  return (
    <ScatterPlot
      id="random-scatter"
      data={data}
      x={{ key: "independant", axisTicks: 10, start: 0, end: 600 }}
      y={{ key: "dependant", axisTicks: 10, start: 0, end: 2000 }}
      size={{ key: "sizeVariable", scale: "sqrt", min: 1, max: 2 }}
      color={{ key: "category", map: colorMap }}
      className="bg-white"
      width={480}
      height={300}
    />
  );
});
