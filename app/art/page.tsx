"use client";
import { Stack, Text, Flex, Button } from "@mantine/core";
import { Card, Canvas } from "../../components";
import { useState, useRef, useEffect } from "react";

export default function FullHeart() {
  const [heartSize, setHeartSize] = useState(10);
  const text =
    heartSize > 200 ? "My Heart is Full!" : "Click to show me some love!";

  function handleClick(heartSize: number) {
    if (heartSize > 200) return;
    setHeartSize(heartSize + 10);
  }

  const init = (ctx: CanvasRenderingContext2D) => {
    console.log("testing");
  };

  const animate = (ctx: CanvasRenderingContext2D, frameCount: number) => {
    if (ctx.canvas) {
      const x = ctx?.canvas.width / 2;
      const y = 1;
      const width = ctx?.canvas.width;
      const height = ctx?.canvas.height;
      ctx.beginPath();
      var topCurveHeight = height * 0.3;
      ctx.moveTo(x, y + topCurveHeight);
      // top left curve
      ctx.bezierCurveTo(
        x,
        y,
        x - width / 2,
        y,
        x - width / 2,
        y + topCurveHeight
      );

      // bottom left curve
      ctx.bezierCurveTo(
        x - width / 2,
        y + (height + topCurveHeight) / 2,
        x,
        y + (height + topCurveHeight) / 2,
        x,
        y + height
      );

      // bottom right curve
      ctx.bezierCurveTo(
        x,
        y + (height + topCurveHeight) / 2,
        x + width / 2,
        y + (height + topCurveHeight) / 2,
        x + width / 2,
        y + topCurveHeight
      );

      // top right curve
      ctx.bezierCurveTo(x + width / 2, y, x, y, x, y + topCurveHeight);

      ctx.closePath();
      ctx.fillStyle = "red";
      ctx.fill();
      ctx.restore();
    }
  };

  return (
    <Flex direction={"column"}>
      <Button onClick={() => handleClick(heartSize)}>Click Me!</Button>
      <Button onClick={() => setHeartSize(10)}> reset </Button>
      <Card>
        {text}
        <Canvas height={500} width={500} animate={animate} init={init} />
      </Card>
    </Flex>
  );
}
