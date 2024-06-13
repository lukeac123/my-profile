"use client";
import { useContext, createContext, useState } from "react";
import { MantineProvider } from "@mantine/core";
import { theme } from "../theme";

export function Providers({ children }: { children: React.ReactNode }) {
  return <MantineProvider theme={theme}>{children}</MantineProvider>;
}
