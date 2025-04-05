"use client";
import { RefObject, useRef, ReactNode, HTMLAttributes, useEffect } from "react";
export interface VisualisationProps extends HTMLAttributes<HTMLDivElement> {
  isPlaying: boolean;
  analyser: RefObject<ReactNode>;
}

let animationController;
let particles: Particle[] = [];

export const Visualisation = ({
  isPlaying,
  analyser,
  ...rest
}: VisualisationProps) => {
  const canvasRef = useRef();

  const songData = new Uint8Array(150);

  const ctx = canvasRef.current?.getContext("2d");

  const setUp = () => {
    ctx.fillStyle = getComputedStyle(canvasRef.current).getPropertyValue(
      "--colorMode-color"
    );
    ctx.strokeStyle = getComputedStyle(canvasRef.current).getPropertyValue(
      "--colorMode-color"
    );
    for (let i = 0; i < 50; i++) {
      const randX = Math.random() * 500;
      const randY = Math.random() * 500;
      particles[i] = new Particle(randX, randY, 0);
    }
  };

  const draw = () => {
    const canvasX = canvasRef.current?.width;
    const canvasY = canvasRef.current?.height;
    isPlaying
      ? (animationController = window.requestAnimationFrame(draw))
      : cancelAnimationFrame(animationController);

    ctx.clearRect(0, 0, canvasX, canvasY);

    analyser.current?.getByteFrequencyData(songData);

    ctx.beginPath();

    particles?.forEach((particle: Particle, i: number) => {
      particle.move(songData[i]);
      particle.show(ctx, canvasX, canvasY);
    });

    ctx.stroke();
  };

  if (canvasRef.current) {
    setUp();
    draw();
  }

  return <canvas {...rest} ref={canvasRef} />;
};

class Particle {
  x: number;
  y: number;
  r: number;
  show: (
    ctx: CanvasRenderingContext2D,
    canvasX: number,
    canvasY: number
  ) => void;
  move: (songData: number) => void;

  constructor(x: number, y: number, r: number) {
    this.x = x;
    this.y = y;
    this.r = r;

    this.show = (ctx, canvasX, canvasY) => {
      ctx.beginPath();
      ctx.bezierCurveTo(0, 0, canvasX / 2, this.r, canvasX, canvasY / 2);
      ctx.stroke();
    };

    this.move = (songData) => {
      this.r = songData;
    };
  }
}
