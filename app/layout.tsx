import React from "react";
import { ColorSchemeScript } from "@mantine/core";
import { Providers } from "./Providers";
import { AppFooter } from "../components";
import "@mantine/core/styles.css";
import "@mantine/carousel/styles.css";

export const metadata = {
  title: "Luke Atkinson-Coyle",
};

export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript defaultColorScheme="dark" />
        <link
          rel="apple-touch-icon"
          sizes="favicon/180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="favicon/site.webmanifest" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=10px, user-scalable=no"
        />
      </head>
      <body>
        <Providers>
          {children}
          <AppFooter />
        </Providers>
      </body>
    </html>
  );
}
