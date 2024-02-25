"use client";
import { useEffect, useRef } from "react";

export const Canvas = ({ animate, init, ...rest }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (canvasRef) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");
      let frameCount = 0;
      let animationFrameId: number;

      const canvasAnimate = () => {
        frameCount++;
        animate(ctx, frameCount);
        animationFrameId = window.requestAnimationFrame(animate);
      };

      init && init();
      canvasAnimate();

      return () => {
        window.cancelAnimationFrame(animationFrameId);
      };
    }
  }, [animate]);

  return <canvas ref={canvasRef} {...rest} />;
};
