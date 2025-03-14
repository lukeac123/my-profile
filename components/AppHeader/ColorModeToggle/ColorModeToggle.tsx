"use client";
import { useLayoutEffect, useState } from "react";
import { ColorPicker, Popover, Button } from "@mantine/core";
import "./ColorModeToggle.component.css";
import { IconColorPicker } from "@tabler/icons-react";

export function ColorModeToggle() {
  const userSetColorMode = localStorage.getItem("colorMode");

  // this changes the state but when the state changes it donesn't refresh all the other components
  // this is all done in the the css
  const [colorMode, setColorMode] = useState(userSetColorMode ?? "#74c0fc");

  const changeColorMode = (color: string) => {
    document.documentElement.dataset.colorMode = color;
    localStorage.setItem("colorMode", color);
    setColorMode(color);
  };

  return (
    <Popover width={500} position="bottom" withArrow shadow="md">
      <Popover.Target>
        <Button style={{ background: "var(--colorMode-color)" }}>
          <IconColorPicker />
        </Button>
      </Popover.Target>
      <Popover.Dropdown>
        <ColorPicker
          value={colorMode}
          onChange={changeColorMode}
          withPicker={false}
          fullWidth
          swatches={[
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
          ]}
        />
      </Popover.Dropdown>
    </Popover>
  );
}
