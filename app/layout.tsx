import React from "react";
import { Providers } from "./Providers";
import { AppFooter, AppHeader, Card } from "../components";
import "@mantine/core/styles.css";
import "@mantine/carousel/styles.css";
import "./myLayout.css";

export const metadata = {
  title: "Luke Atkinson-Coyle",
};

export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="en" data-color-mode="#91a7ff" data-mantine-color-scheme="dark">
      <head>
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
          <div style={{ paddingBottom: "60px" }}>
            <AppHeader />
          </div>
          <Card>{children}</Card>
          <AppFooter />
        </Providers>
      </body>
    </html>
  );
}
