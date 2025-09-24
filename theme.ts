"use client";
import { createTheme } from "@mantine/core";

export const theme = createTheme({
  components: {
    Slider: {
      styles: {
        thumb: {
          display: "none",
        },
      },
    },
  },
  defaultRadius: 4,
  focusRing: "auto",
});
