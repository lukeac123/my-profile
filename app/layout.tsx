"use client";
import "@mantine/core/styles.css";
import React from "react";
import { Providers } from "./providers";
import { ColorSchemeScript } from "@mantine/core";
import "@mantine/core/styles.css";
import { AppShell } from "@mantine/core";
import { AppHeader } from "../components/AppHeader";
import { useColorScheme } from "@mantine/hooks";

// export const metadata = {
//   title: "Luke Atkinson-Coyle",
// };

// const mode = useColorScheme();
// console.log(mode);

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
          <AppShell>
            {/* <AppShell.Header p="sm"> */}
            <AppHeader />
            {/* </AppShell.Header> */}
            {/* <AppShell.Main>{children}</AppShell.Main> */}
            {children}
          </AppShell>
        </Providers>
      </body>
    </html>
  );
}
