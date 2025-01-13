"use client"; // Cannot dot into Carousel component on the server side
import { CroppedImage } from "../Image";
import { HTMLAttributes } from "react";
import { makePrefixer } from "../../utils/makePrefixer";
import { Carousel as MantineCarousel } from "@mantine/carousel";
import { clsx } from "clsx";

const withBaseName = makePrefixer("carousel");

export interface CarouselProps extends HTMLAttributes<HTMLDivElement> {
  images: string[];
}

export const Carousel = ({ className, images }: CarouselProps) => {
  return (
    <MantineCarousel
      className={clsx(withBaseName(), className)}
      align="center"
      slideGap="md"
      slideSize="100%"
      withIndicators
      controlSize={40}
    >
      {images.map((imageSrc) => {
        return (
          <MantineCarousel.Slide key={imageSrc}>
            <CroppedImage imageSrc={imageSrc} />
          </MantineCarousel.Slide>
        );
      })}
    </MantineCarousel>
  );
};
