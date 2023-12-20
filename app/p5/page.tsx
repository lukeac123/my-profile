"use client";
import { Stack } from "@mantine/core";
import { P5CanvasInstance, SketchProps } from "@p5-wrapper/react";
import dynamic from "next/dynamic";
import { useState, useEffect, Suspense } from "react";

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
    p5.background(250);
    // p5.normalMaterial();
  };
}

function sketch(p5: P5CanvasInstance<MySketchProps>) {
  let sketchData: any;

  p5.setup = setup(p5);
  // How are the props passed to updateWithChildren, is there a better way to pass this into the setUp / draw functions
  p5.updateWithProps = (data) => {
    if (data) {
      sketchData = data;
    }
  };

  //This draw loop works, but why doesn't the data pass down when using as a detached function ?
  p5.draw = () => {
    // p5.fill(255);
    console.log(sketchData.data);
    sketchData?.data?.map((dataPoint) => {
      const x = Math.random() * 100;
      p5.fill(x, 204, 0, 0.5);
      console.log(dataPoint.vel);
      p5.circle(dataPoint.lon, dataPoint.lat, dataPoint.vel * 11);
    });

    p5.circle(200, 10, 100);

    // p5.background(250);
    // p5.normalMaterial();
    // p5.push();
    // p5.rotateZ(p5.frameCount * 0.01);
    // p5.rotateX(p5.frameCount * 0.01);
    // p5.rotateY(p5.frameCount * 0.01);
    // p5.plane(100);
    // p5.pop();
  };
}

export default function P5Sketch() {
  const [data, setData] = useState();

  // "https://ssd-api.jpl.nasa.gov/fireball.api?date-min=2020-01-01&req-alt=true" - NASA Fireball Data

  useEffect(() => {
    const getData = async () => {
      const resp = await fetch(
        "https://ssd-api.jpl.nasa.gov/fireball.api?date-min=2020-01-01&req-alt=true"
        // "http://datapoint.metoffice.gov.uk/public/data/val/wxobs/all/json/3377?res=hourly&key=e03b31b3-0dcd-4b3f-8ddc-45c27609ba66"
      );
      const json = await resp.json();
      setData(json);
    };
    getData();
  }, []);

  // const metOfficeData = () => {
  //   const weatherDataPerHour = data?.SiteRep.DV.Location.Period[1].Rep;
  //   weatherDataPerHour?.map((weatherData) => {
  //     return { ...weatherData, testing: "testing" };
  //     // console.log(weatherData);
  //     // weatherData?.reduce((accumulator, currentValue) => {
  //     //   console.log(currentValue);
  //     // });
  //   });
  //   console.log(weatherDataPerHour);
  // };

  const NasaDataObject = data?.data.map((value) => {
    const object = data?.fields.reduce((acc, element, index) => {
      return {
        ...acc,
        [element]: value[index],
      };
    }, {});
    return object;
  });

  // console.log(NasaDataObject);

  return (
    <Stack
      gap="0"
      align="center"
      justify="center"
      style={{ width: "100vw", height: "100vh" }}
    >
      {/* Why can i not see the fallback when the sketch is loading ? */}
      <Suspense
        fallback={
          <div style={{ background: "pink", height: "100%", width: "100%" }}>
            Loading
          </div>
        }
      >
        <NextReactP5Wrapper sketch={sketch} data={NasaDataObject} />
      </Suspense>
    </Stack>
  );
}

// capabilities
// locationId=352297
