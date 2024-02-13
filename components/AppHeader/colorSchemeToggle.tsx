"use client";
import {
  Button,
  useMantineColorScheme,
  MantineColorScheme,
} from "@mantine/core";
import { IconSun, IconMoon } from "@tabler/icons-react";

export default function ToggleColorScheme() {
  const { colorScheme, setColorScheme } = useMantineColorScheme();

  function toggle(colorScheme: MantineColorScheme) {
    if (colorScheme === "dark") {
      setColorScheme("light");
    } else setColorScheme("dark");
  }

  return (
    <Button
      onClick={() => {
        toggle(colorScheme);
      }}
    >
      {colorScheme === "dark" ? <IconSun /> : <IconMoon />}
    </Button>
  );
}
