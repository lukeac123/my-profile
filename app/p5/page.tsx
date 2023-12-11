"use client";
import { Stack } from "@mantine/core";
import { P5CanvasInstance, SketchProps } from "@p5-wrapper/react";
import dynamic from "next/dynamic";
import { useState, useEffect } from "react";

export const NextReactP5Wrapper = dynamic(
  async () => (await import("@p5-wrapper/react")).ReactP5Wrapper,
  { ssr: false }
);

type MySketchProps = SketchProps & {
  data: Array<string>;
};

function setup(p5: P5CanvasInstance) {
  console.log("setup");
  return () => {
    p5.createCanvas(600, 400, p5.WEBGL);
  };
}

function sketch(p5: P5CanvasInstance<MySketchProps>) {
  let sketchData: any;

  p5.setup = setup(p5);

  p5.updateWithProps = (data) => {
    if (data) {
      sketchData = data;
    }
  };

  //This draw loop works, but why doesn't the data pass down when using as a detached function ?
  p5.draw = () => {
    p5.background(250);
    p5.normalMaterial();
    p5.push();
    p5.rotateZ(p5.frameCount * 0.01);
    p5.rotateX(p5.frameCount * 0.01);
    p5.rotateY(p5.frameCount * 0.01);
    p5.plane(100);
    p5.pop();
  };
}

export default function P5Sketch() {
  const [data, setData] = useState("");

  useEffect(() => {
    const getData = async () => {
      const resp = await fetch("https://api.sampleapis.com/switch/games");
      const json = await resp.json();
      setData(json);
    };
    getData();
  }, []);

  return (
    <Stack
      gap="0"
      align="center"
      justify="center"
      style={{ width: "100vw", height: "100vh" }}
    >
      {data && <NextReactP5Wrapper sketch={sketch} data={data} />}
    </Stack>
  );
}
