"use client";
import { useState, useRef, useEffect, HTMLAttributes } from "react";
import * as d3 from "d3";

interface PieChartTypes extends HTMLAttributes<HTMLDivElement> {
  charData?: Object;
}

const color = [
  "#ffa8a8",
  "#faa2c1",
  "#e599f7",
  "#b197fc",
  "#91a7ff",
  "#8ce99a",
  "#74c0fc",
  "#66d9e8",
  "#63e6be",
  "#c0eb75",
  "#ffe066",
  "#ffc078",
];

export const PieChart = ({ className }: PieChartTypes) => {
  const data = [2, 4, 8, 10, 14, 20];
  const svgRef = useRef();

  useEffect(() => {
    const svg = d3.select(svgRef.current);

    const width = +svg.attr("width");
    const height = +svg.attr("height");
    const radius = Math.min(width, height) / 2;

    var g = svg
      .append("g")
      .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

    var pie = d3.pie();
    var arc = d3.arc().innerRadius(50).outerRadius(radius);

    var arcs = g
      .selectAll("arc")
      .data(pie(data))
      .enter()
      .append("g")
      .attr("class", "arc");

    arcs
      .append("path")
      .attr("fill", function (d, i) {
        return color[i];
      })
      .attr("d", arc);
  });

  return <svg className={className} width="500" height="500" ref={svgRef} />;
};
