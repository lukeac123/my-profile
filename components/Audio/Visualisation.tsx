"use client";
import { RefObject, useRef, ReactNode, HTMLAttributes, useEffect } from "react";
export interface VisualisationProps extends HTMLAttributes<HTMLDivElement> {
  isPlaying: boolean;
  analyser: RefObject<ReactNode>;
}

let animationController;

export const Visualisation = ({
  isPlaying,
  analyser,
  ...rest
}: VisualisationProps) => {
  const canvasRef = useRef();

  useEffect(() => {
    const visualizeData = () => {
      isPlaying
        ? (animationController = window.requestAnimationFrame(visualizeData))
        : cancelAnimationFrame(animationController);

      const songData = new Uint8Array(150);
      if (analyser.current) {
        analyser.current.getByteFrequencyData(songData);
      }

      const bar_width = 3;
      let start = 0;

      if (canvasRef.current) {
        const ctx = canvasRef.current.getContext("2d");
        ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
        for (let i = 0; i < songData.length; i++) {
          start = i * 4;
          ctx.fillStyle = getComputedStyle(canvasRef.current).getPropertyValue(
            "--mantine-color-white"
          );
          const ypos = canvasRef.current.height / 2 + songData[i] / 2;
          ctx.fillRect(start, ypos, bar_width, -songData[i]);
        }
      }
    };
    visualizeData();
  });

  return <canvas {...rest} ref={canvasRef} />;
};
