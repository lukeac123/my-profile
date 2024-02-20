"use client";
import { useState, useLayoutEffect, useCallback } from "react";
import {
  DEFAULT_THEME,
  ColorPicker,
  Popover,
  Button,
  Flex,
} from "@mantine/core";
import "./ColorSchemeToggle.component.css";

//TODO: store the value color value in a ref, on refresh the colour defaults back to the original
//TODO: is there a better way to do color toggle

export default function ColorSchemeToggle() {
  const [colorScheme, setColorScheme] = useState("#b197fc");

  useLayoutEffect(() => {
    document.documentElement.dataset.colorScheme = colorScheme;
  }, [colorScheme]);

  return (
    <Popover width={400} position="bottom" withArrow shadow="md">
      <Popover.Target>
        <Button
          className="colorSchemeToggle"
          style={{ background: "var(--colorScheme-color)" }}
        />
      </Popover.Target>
      <Popover.Dropdown>
        <ColorPicker
          value={colorScheme}
          onChange={setColorScheme}
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
