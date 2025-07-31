"use client";
import React, { HTMLAttributes, useEffect, useRef, useState } from "react";
import { Radio, Group, CheckIcon } from "@mantine/core";
import { Text } from "../Text";
import * as d3 from "d3";
import "./LineChart.component.css";

interface LineChartData {
  id: string;
  label: string;
  color: string;
  values: Array<Object>;
}

interface LineChart extends HTMLAttributes<HTMLDivElement> {
  width?: number;
  height?: number;
  data: LineChartData[];
}

export const LineChart = ({ data }: LineChart) => {
  const svgRef = useRef();
  const [checked, setChecked] = useState(data[0].id ?? "");
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 1000, height: 400 });

  useEffect(() => {
    if (!containerRef.current) return;

    const resizeObserver = new ResizeObserver((entries) => {
      console.log(entries);
      for (let entry of entries) {
        const { width, height } = entry.contentRect;
        setDimensions({ width, height: 400 }); // fallback height
      }
    });

    resizeObserver.observe(containerRef.current);
    return () => resizeObserver.disconnect();
  }, []);

  useEffect(() => {
    if (!data || data.length === 0) return;

    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove(); // Clear previous render

    const margin = { top: 30, right: 30, bottom: 30, left: 30 };
    const innerWidth = dimensions.width - margin.left - margin.right;
    const innerHeight = dimensions.height - margin.top - margin.bottom;

    const allValues = data.flatMap((series) => series.values);

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
      .attr("fill", (d) => `${d.color}`)
      .attr("opacity", 0.1)
      .attr("d", (d) => area(d.values));

    // Line Paint
    g.selectAll(".line")
      .data(data)
      .enter()
      .append("path")
      .attr("class", (d) => `line-${d.id}`)
      .attr("fill", "none")
      .attr("stroke", (d) => `${d.color}`)
      .attr("stroke-width", (d) => (checked === d.id ? "10" : "1"))
      .attr("d", (d) => line(d.values));
  }, [data, dimensions, checked]);

  return (
    <div className={"line-chart"}>
      <div ref={containerRef} className={"line-chart-container"}>
        <svg
          ref={svgRef}
          className="line-chart-svg"
          width="100%"
          height="100%"
          viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}
          preserveAspectRatio="xMidYMidmeet"
        />
      </div>
      <div className="textContent">
        <Group className="legend">
          {data.map((dataPoint) => {
            return (
              <Radio
                key={dataPoint.id}
                label={dataPoint.label}
                color={dataPoint.color}
                variant="outline"
                icon={CheckIcon}
                value={dataPoint.id}
                onClick={() => setChecked(dataPoint.id)}
                checked={checked === dataPoint.id ? true : false}
              />
            );
          })}
        </Group>
        <Text fw={700} ta="center">
          Figure 1: D3 line graph showing my experience so far.....
        </Text>
      </div>
    </div>
  );
};
