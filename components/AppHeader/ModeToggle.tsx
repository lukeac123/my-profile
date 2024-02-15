"use client";
import {
  Button,
  useMantineColorScheme,
  MantineColorScheme,
} from "@mantine/core";
import { IconSun, IconMoon } from "@tabler/icons-react";

export default function ModeToggle() {
  const { colorScheme, setColorScheme } = useMantineColorScheme();

  function toggleMode(colorScheme: MantineColorScheme) {
    if (colorScheme === "dark") {
      setColorScheme("light");
    } else setColorScheme("dark");
  }

  return (
    <Button
      onClick={() => {
        toggleMode(colorScheme);
      }}
    >
      {colorScheme === "dark" ? <IconSun /> : <IconMoon />}
    </Button>
  );
}
