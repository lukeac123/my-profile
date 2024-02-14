import React from "react";
import { ColorSchemeScript } from "@mantine/core";
import { AppHeader } from "../components/AppHeader";
import { AppBody } from "../components/AppBody";
import { Providers } from "./Providers";
import { MantineProvider } from "@mantine/core";
import { theme } from "../theme";
import "@mantine/core/styles.css";

export const metadata = {
  title: "Luke Atkinson-Coyle",
};

export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=10px, user-scalable=no"
        />
      </head>
      <body>
        <Providers>
          <AppHeader />
          <AppBody> {children} </AppBody>
        </Providers>
      </body>
    </html>
  );
}
