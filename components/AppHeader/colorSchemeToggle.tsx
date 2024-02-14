"use client";
import { DEFAULT_THEME, ColorPicker, Popover, Button } from "@mantine/core";
import { useColorSchemeContext } from "../../app/Providers";

export default function ColorSchemeToggle() {
  const { colorScheme, setColorScheme } = useColorSchemeContext();

  return (
    <Popover width={400} position="bottom" withArrow shadow="md">
      <Popover.Target>
        <Button
          style={{
            background: `${colorScheme}`,
            width: "50px",
            border: "solid 1px black",
          }}
        ></Button>
      </Popover.Target>
      <Popover.Dropdown>
        <ColorPicker
          format="hsl"
          value={colorScheme}
          onChange={setColorScheme}
          withPicker={false}
          fullWidth
          swatches={[
            "#5169DB",
            "#9351DB",
            "#5194DB",
            "#6650DB",
            "#C051DB",
            // ...DEFAULT_THEME.colors.red.slice(0, 7),
            // ...DEFAULT_THEME.colors.green.slice(0, 7),
            // ...DEFAULT_THEME.colors.blue.slice(0, 7),
          ]}
        />
      </Popover.Dropdown>
    </Popover>
  );
}
