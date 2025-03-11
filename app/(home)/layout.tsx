import React from "react";
import { Image } from "@mantine/core";
import { AppHeader, Text } from "../../components";
import { makePrefixer } from "../../utils";
import { heroImages, type HeroImage } from "../../utils/db";
import "@mantine/core/styles.css";
import "@mantine/carousel/styles.css";
import "./layout.css";

function getHeroImage() {
  const random = Math.floor(Math.random() * heroImages.length);
  return heroImages[random];
}

const heroImage: HeroImage = getHeroImage();

const withBaseName = makePrefixer("homePage");

export default function RootLayout({ children }: { children: any }) {
  return (
    <>
      <AppHeader />
      <div style={{ paddingTop: "60px" }}>{children}</div>
    </>
  );
}
