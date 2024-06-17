"use client";

import { RefObject, useRef, ReactNode } from "react";

export interface VisualisationProps extends HTMLAttributes<HTMLDivElement> {
  isPlaying: boolean;
  analyser: RefObject<ReactNode>;
}

let animationController;

export const Visualisation = ({ isPlaying, analyser }: VisualisationProps) => {
  const canvasRef = useRef();
  const visualizeData = () => {
    animationController = window.requestAnimationFrame(visualizeData);
    if (!isPlaying) {
      return cancelAnimationFrame(animationController);
    }
    const songData = new Uint8Array(150);
    analyser.current.getByteFrequencyData(songData);

    const bar_width = 3;
    let start = 0;
    const ctx = canvasRef.current.getContext("2d");
    ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
    for (let i = 0; i < songData.length; i++) {
      // compute x coordinate where we would draw
      start = i * 4;
      //create a gradient for the  whole canvas
      let gradient = ctx.createLinearGradient(
        0,
        0,
        canvasRef.current.width,
        canvasRef.current.height
      );
      gradient.addColorStop(0.2, "#2392f5");
      gradient.addColorStop(0.5, "#fe0095");
      gradient.addColorStop(1.0, "purple");
      ctx.fillStyle = gradient;
      ctx.fillRect(start, canvasRef.current.height, bar_width, -songData[i]);
    }
  };

  visualizeData();

  return (
    <canvas
      ref={canvasRef}
      width={500}
      height={200}
      style={{ background: "pink" }}
    />
  );
};
