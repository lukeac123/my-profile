"use client";
import React, { HTMLAttributes, useEffect, useRef } from "react";
import { Text } from "../Text";
import * as d3 from "d3";
import "./LineChart.component.css";

//TODO: Responsive styling for d3
//TODO: Get computed styles, change the color of the graph according to light / dark mode
//TODO: Look into just passing the SVG to <path>, looks at Tom's method

interface LineChartData {
  id: string;
  name: string;
  values: Array<Object>;
}

interface LineChart extends HTMLAttributes<HTMLDivElement> {
  width?: number;
  height?: number;
  data: LineChartData[];
}

export const LineChart = ({
  className,
  data,
  width = 800,
  height = 400,
}: LineChart) => {
  const svgRef = useRef();

  useEffect(() => {
    if (!data || data.length === 0) return;

    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove(); // Clear previous render

    const margin = { top: 30, right: 30, bottom: 30, left: 30 };
    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;

    const allValues = data.flatMap((series) => series.values);

    const color = d3
      .scaleOrdinal()
      .range(["#ffa8a8", "#8ce99a", "#ffe066", "#ffc078"]);

    const x = d3
      .scaleLinear()
      .domain(d3.extent(allValues, (d) => d.x)) // => d3.extent returns [minX, maxX]
      .range([0, innerWidth]);

    const y = d3
      .scaleLinear()
      .domain([0, d3.max(allValues, (d) => d.y)]) // => d3.max return maxY, we state starting doamin is 0
      .range([innerHeight, 0]);

    const line = d3
      .line()
      .x((d) => x(d.x))
      .y((d) => y(d.y))
      .curve(d3.curveBasis);

    const area = d3
      .area()
      .x((d) => x(d.x))
      .y0(innerHeight) // baseline (bottom of chart)
      .y1((d) => y(d.y))
      .curve(d3.curveBasis);

    const g = svg
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    // X-Axis
    const xAxis = d3
      .axisBottom(x)
      .tickValues(
        d3.range(
          d3.min(allValues, (d) => d.x),
          d3.max(allValues, (d) => d.x + 1),
          1
        )
      )

      .tickFormat(d3.format("d")); // optional: number of ticks
    g.append("g")
      .attr("transform", `translate(0,${innerHeight})`)
      .call(d3.axisBottom(x))
      .call(xAxis);

    // Area Paint
    g.selectAll(".line")
      .data(data)
      .enter()
      .append("path")
      .attr("fill", (d) => color(d.id))
      .attr("opacity", 0.1)
      .attr("d", (d) => area(d.values));

    // Line Paint
    g.selectAll(".line") // select placeholder (none exist yet)
      .data(data) // each item is a series { id, values }
      .enter()
      .append("path")
      .attr("class", (d) => `line-${d.id}`)
      .attr("fill", "none")
      .attr("stroke", (d) => color(d.id)) // color by series
      .attr("stroke-width", 1)
      .attr("d", (d) => line(d.values));

    // Legend
    const legendDiv = d3.select("#legend");

    const legendItems = legendDiv
      .selectAll(".legend-item")
      .data(data)
      .enter()
      .append("div")
      .attr("class", `legend-item`)
      .on("mouseover", (event, d) => {
        d3.selectAll(`.line-${d.id}`).style("stroke-width", "10");
      })
      .on("mouseout", (event, d) => {
        d3.selectAll(`.line-${d.id}`).style("stroke-width", "1");
      });

    legendItems
      .append("span")
      .attr("class", "legend-color")
      .style("background", (d) => color(d.id));

    legendItems
      .append("div")
      .attr("class", "legend-label")
      .text((d) => d.label);
  }, [data, width, height]);

  return (
    <div className={"line-chart"}>
      <svg
        ref={svgRef}
        width={width}
        height={height}
        className="line-chart-svg"
      />
      <div id={"legend"} className={"legend"} />
      <Text fw={700}>
        Figure 1: D3 line graph showing my experience so far.....
      </Text>
    </div>
  );
};
