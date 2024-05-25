import React from "react";
import { ColorSchemeScript, Flex } from "@mantine/core";
import { AppHeader } from "../components/AppHeader";
import { Providers } from "./Providers";
import "@mantine/core/styles.css";

export const metadata = {
  title: "Luke Atkinson-Coyle",
};

export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript defaultColorScheme="dark" />
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=10px, user-scalable=no"
        />
      </head>
      <body>
        <Providers>
          <AppHeader />
          {/* //TODO: fix the padding below, can this not be margin ?  */}
          <div style={{ paddingRight: "100px", width: "100%" }}>{children}</div>
        </Providers>
      </body>
    </html>
  );
}
