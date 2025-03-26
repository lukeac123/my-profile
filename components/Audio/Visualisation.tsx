"use client";
import { RefObject, useRef, ReactNode, HTMLAttributes, useEffect } from "react";
export interface VisualisationProps extends HTMLAttributes<HTMLDivElement> {
  isPlaying: boolean;
  analyser: RefObject<ReactNode>;
}

let animationController;
let particles: Particle[] = [];

const setUp = (canvasRef: any) => {
  const ctx = canvasRef.current?.getContext("2d");
  const canvasX = canvasRef.current?.width;
  const canvasY = canvasRef.current?.height;
  ctx?.clearRect(0, 0, canvasX, canvasY);
  ctx.fillStyle = getComputedStyle(canvasRef.current).getPropertyValue(
    "--colorMode-color"
  );
  ctx.strokeStyle = getComputedStyle(canvasRef.current).getPropertyValue(
    "--colorMode-color"
  );

  for (let i = 0; i < 5; i++) {
    particles[i] = new Particle(100, 10, 50);
  }
  return { ctx, particles };
};

export const Visualisation = ({
  isPlaying,
  analyser,
  ...rest
}: VisualisationProps) => {
  const canvasRef = useRef();

  const songData = new Uint8Array(150);

  const draw = (ctx: CanvasRenderingContext2D, particles: Particle[]) => {
    isPlaying
      ? (animationController = window.requestAnimationFrame(draw))
      : cancelAnimationFrame(animationController);

    analyser.current?.getByteFrequencyData(songData);

    console.log(particles);

    particles?.forEach((particle: Particle, i: number) => {
      particle.move(songData[i]);
      particle.show(ctx);
    });
  };

  if (canvasRef.current) {
    const { ctx, particles } = setUp(canvasRef);
    draw(ctx, particles);
  }

  return <canvas {...rest} ref={canvasRef} />;
};

class Particle {
  x: number;
  y: number;
  r: number;
  show: (ctx: CanvasRenderingContext2D) => void;
  move: (songData: number) => void;

  constructor(x: number, y: number, r: number) {
    this.x = x;
    this.y = y;
    this.r = r;

    this.show = (ctx) => {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
      ctx.stroke();
    };

    this.move = (songData) => {
      this.r = songData;
    };
  }
}
