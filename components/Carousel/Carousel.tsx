"use client"; //Cannot dot into Carousel component on the server side
import { Image } from "@mantine/core";
import { HTMLAttributes } from "react";
import { makePrefixer } from "../../utils/makePrefixer";
import { Carousel as MantineCarousel } from "@mantine/carousel";

const withBaseName = makePrefixer("carousel");

export interface CarouselProps extends HTMLAttributes<HTMLDivElement> {
  images: string[];
}

export const Carousel = ({ className, images }: CarouselProps) => {
  console.log(images);
  return (
    <MantineCarousel
      className={className}
      align="start"
      slideSize="100%"
      slideGap="md"
      withIndicators
    >
      {images.map((imageSrc) => {
        return (
          <MantineCarousel.Slide>
            <Image src={imageSrc} className={withBaseName("image")} />{" "}
          </MantineCarousel.Slide>
        );
      })}
    </MantineCarousel>
  );
};
