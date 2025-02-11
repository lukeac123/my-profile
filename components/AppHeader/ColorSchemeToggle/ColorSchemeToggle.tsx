import {
  Button,
  useMantineColorScheme,
  useComputedColorScheme,
} from "@mantine/core";
import { IconSun, IconMoon } from "@tabler/icons-react";
import "./ColorSchemeToggle.component.css";

export function ColorSchemeToggle() {
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme("dark", {
    getInitialValueInEffect: true,
  });

  return (
    <Button
      className="modeToggle"
      variant="default"
      onClick={() =>
        setColorScheme(computedColorScheme === "light" ? "dark" : "light")
      }
    >
      <IconSun style={{ display: "var(--lightModeToggle-display)" }} />
      <IconMoon style={{ display: "var(--darkModeToggle-display)" }} />
    </Button>
  );
}
