import React from "react";
import { Image, Title } from "@mantine/core";
import { AppHeader } from "../../components/AppHeader";
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
    <div>
      <AppHeader />
      <div className={withBaseName("heroImgContainer")}>
        <Image src={heroImage.imgSrc} className={withBaseName("heroImg")} />
        <div className={withBaseName("title")}>
          <Title ta="right">Luke Atkinson-Coyle</Title>
          <Title ta="right" order={6}>
            Photo: El Glaciar Perito Moreno, El Calafate, Argentina, December
            2024
          </Title>
        </div>
      </div>
      {children}
    </div>
  );
}
