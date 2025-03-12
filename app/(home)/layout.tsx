import React from "react";
import { AppHeader, Card } from "../../components";
import { makePrefixer } from "../../utils";
import "@mantine/core/styles.css";
import "@mantine/carousel/styles.css";
import "./layout.css";

const withBaseName = makePrefixer("homePage");

export default function RootLayout({ children }: { children: any }) {
  return (
    <>
      <AppHeader />
      <Card className={withBaseName("box")}>{children}</Card>
    </>
  );
}
