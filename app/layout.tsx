import "@mantine/core/styles.css";
import React from "react";
import { Providers } from "./providers";
import { ColorSchemeScript } from "@mantine/core";
import "@mantine/core/styles.css";
import { AppShell } from "@mantine/core";
import { AppHeader } from "../components/AppHeader";

export const metadata = {
  title: "Luke Atkinson-Coyle",
};

export default function RootLayout({ children }: { children: any }) {
  console.log(children);
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
          {children}
        </Providers>
      </body>
    </html>
  );
}
