"use client";
import { useContext, createContext, useState } from "react";
import { MantineProvider } from "@mantine/core";
import { theme } from "../theme";

export const ColorSchemeContext = createContext<{
  colorScheme: string;
  setColorScheme: any;
}>({
  colorScheme: "",
  setColorScheme: null,
});

export const useColorSchemeContext = () => {
  return useContext(ColorSchemeContext);
};

export function Providers({ children }: { children: React.ReactNode }) {
  const [colorScheme, setColorScheme] = useState("purple");
  return (
    <MantineProvider theme={theme} defaultColorScheme="dark">
      <ColorSchemeContext.Provider value={{ colorScheme, setColorScheme }}>
        {children}
      </ColorSchemeContext.Provider>
    </MantineProvider>
  );
}
