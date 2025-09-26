"use client";
import { createTheme } from "@mantine/core";

export const theme = createTheme({
  components: {
    Divider: {
      styles: {
        root: {
          borderColor: "var(--colorMode-color)",
          borderWidth: "var(--my-border-width)",
        },
      },
    },
    Slider: {
      styles: {
        root: { color: "var(--colorMode-color)" },
        thumb: {
          display: "none",
        },
      },
    },
    Text: {
      styles: {
        root: { fontWeight: "var(--my-font-weight)" },
      },
    },
    Title: {
      styles: {
        root: { fontWeight: "var(--my-font-weight)" },
      },
    },
    Radio: {
      styles: {
        root: { fontWeight: "var(--my-font-weight)" },
      },
    },
    Card: {
      styles: {
        root: { padding: "30px" },
      },
    },
  },
  defaultRadius: 4,
  focusRing: "auto",
});
