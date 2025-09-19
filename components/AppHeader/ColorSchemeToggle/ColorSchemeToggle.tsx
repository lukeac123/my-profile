import {
  Button,
  useMantineColorScheme,
  useComputedColorScheme,
} from "@mantine/core";
import { IconSun, IconMoon } from "@tabler/icons-react";
import styles from "./ColorSchemeToggle.module.css";
import clsx from "clsx";

export function ColorSchemeToggle() {
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme("dark", {
    getInitialValueInEffect: true,
  });

  return (
    <Button
      aria-label={
        computedColorScheme === "light"
          ? "Toggle Dark Mode"
          : "Toggle Light Mode"
      }
      className={styles.modeToggle}
      variant="default"
      onClick={() =>
        setColorScheme(computedColorScheme === "light" ? "dark" : "light")
      }
    >
      <IconSun
        aria-hidden
        className={clsx({
          [`${styles.modeToggleHideIcon}`]: computedColorScheme === "light",
        })}
      />
      <IconMoon
        aria-hidden
        className={clsx({
          [`${styles.modeToggleHideIcon}`]: computedColorScheme === "dark",
        })}
      />
    </Button>
  );
}
