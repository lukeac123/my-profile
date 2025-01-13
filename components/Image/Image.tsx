import { HTMLAttributes, useRef, useEffect } from "react";
import { clsx } from "clsx";
import NextImage from "next/image";
import { makePrefixer } from "../../utils/makePrefixer";
import "./Image.component.css";

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  imageSrc: string;
}

const withBaseName = makePrefixer("croppedImage");

export const CroppedImage = ({
  className,
  children,
  imageSrc,
  ...rest
}: CardProps) => {
  const canvasRef = useRef<null>();
  const imageRef = useRef<null>();

  // const myImage = new Image(100, 100);

  useEffect(() => {
    const canvas = canvasRef.current;
    const myImage = imageRef.current;
    if (canvas) {
      const context = canvas.getContext("2d");
      const desiredWidth = 500;
      const desiredHeight = 500;

      context.fillStyle = "pink";

      // myImage.src = imageSrc;

      context.drawImage(myImage, 0, 0, desiredWidth, desiredHeight);
    }
  }, []);

  return (
    <>
      <img ref={imageRef} src={imageSrc} style={{ display: "hidden" }} />
      <canvas ref={canvasRef} className={clsx(withBaseName(), className)} />
    </>
  );
};
