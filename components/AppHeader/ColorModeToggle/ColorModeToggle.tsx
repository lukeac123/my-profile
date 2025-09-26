"use client";
import { Button } from "@mantine/core";
import { useCallback, useState } from "react";

const colors = [
  "#ffa8a8", // --mantine-color-red-3,
  "#faa2c1", // --mantine-color-pink-3,
  "#e599f7", // --mantine-color-grape-3,
  "#b197fc", // --mantine-color-violet-3,
  "#91a7ff", // --mantine-color-indigo-3,
  "#8ce99a", // --mantine-color-green-3,
  "#74c0fc", // --mantine-color-blue-3,
  "#66d9e8", // --mantine-color-cyan-3,
  "#63e6be", // --mantine-color-teal-3,
  "#c0eb75", // --mantine-color-lime-3,
  "#ffe066", // --mantine-color-yellow-3,
  "#ffc078", // --mantine-color-orange-3,
];

export function ColorModeToggle() {
  const [increment, setIncrement] = useState(0);

  const changeColorMode = useCallback(() => {
    setIncrement((prev) => (prev >= colors.length - 1 ? 0 : prev + 1));
    console.log(colors[increment], increment, colors.length);
    document.documentElement.dataset.colorMode = colors[increment];
  }, [increment]);

  return (
    <Button
      aria-label="Toggle ColorMode"
      style={{ backgroundColor: "var(--colorMode-color)" }}
      onClick={changeColorMode}
    />
  );
}
