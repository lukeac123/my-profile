import React from "react";
import { AppHeader } from "../../components";
import "@mantine/core/styles.css";
import "@mantine/carousel/styles.css";

export const metadata = {
  title: "Luke Atkinson-Coyle",
};

export default function RootLayout({ children }: { children: any }) {
  return (
    <>
      <div style={{ paddingBottom: "60px" }}>
        <AppHeader />
      </div>
      <div style={{ padding: "10px" }}>{children}</div>
    </>
  );
}
