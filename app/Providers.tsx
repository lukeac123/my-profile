"use client";
import { MantineProvider } from "@mantine/core";
import { theme } from "../theme";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <MantineProvider defaultColorScheme="dark" theme={theme}>
      {children}
    </MantineProvider>
  );
}
