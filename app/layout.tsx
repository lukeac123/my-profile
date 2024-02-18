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
          <Flex align={"center"} justify={"center"}>
            {children}
          </Flex>
        </Providers>
      </body>
    </html>
  );
}
