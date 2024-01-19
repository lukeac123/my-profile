import { MantineProvider } from "@mantine/core";
import { theme } from "../theme";
import "@mantine/core/styles.css";

const mode = "dark";

export const Providers = ({ children }) => {
  return (
    <MantineProvider theme={theme} defaultColorScheme={mode}>
      {children}
    </MantineProvider>
  );
};
