"use client"; // Cannot dot into Carousel component on the server side
import { Image } from "@mantine/core";
import { HTMLAttributes } from "react";
import { Carousel as MantineCarousel } from "@mantine/carousel";

export interface CarouselProps extends HTMLAttributes<HTMLDivElement> {
  images: string[];
}

export const Carousel = ({ className, images }: CarouselProps) => {
  return (
    <MantineCarousel
      className={className}
      align="center"
      slideGap="md"
      slideSize="100%"
      withIndicators
      controlSize={40}
    >
      {images.map((imageSrc) => {
        return (
          <MantineCarousel.Slide key={imageSrc}>
            <Image />
          </MantineCarousel.Slide>
        );
      })}
    </MantineCarousel>
  );
};
