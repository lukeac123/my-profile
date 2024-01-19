"use client";
import { Stack } from "@mantine/core";
import { P5CanvasInstance, SketchProps } from "@p5-wrapper/react";
import dynamic from "next/dynamic";
import { useState, useEffect, Suspense } from "react";
import { dataNormalisation } from "../../utils/dataTransformation";

export const NextReactP5Wrapper = dynamic(
  async () => (await import("@p5-wrapper/react")).ReactP5Wrapper,
  { ssr: false }
);

type MySketchProps = SketchProps & {
  data: Array<string>;
};

function setup(p5: P5CanvasInstance, data: Array<Object>) {
  const test = dataNormalisation(50, 0, 50);
  console.log(test);

  return () => {
    p5.createCanvas(600, 400, p5.WEBGL);
    p5.background(250);
    // p5.ambientLight(60, 60, 60);
    // p5.pointLight(255, 150, 0, 255, 0, 0);
    // p5.torus(80, 20, 4, 5);
    // p5.normalMaterial();
  };
}

function drawDataPoints(p5, NasaDataObject) {
  return NasaDataObject.map((element) => {
    const { lon, lat, energy, vel } = element;
    p5.circle(lon, lat, energy);
    p5.torus(energy, vel, 24, 16);
  });
}

export default function P5Sketch() {
  const [data, setData] = useState();

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

  const NasaDataObject = data?.data.map((value) => {
    const object = data?.fields.reduce((acc, element, index) => {
      return {
        ...acc,
        [element]: value[index],
      };
    }, []);
    return object;
  });

  function sketch(p5: P5CanvasInstance<MySketchProps>) {
    p5.setup = setup(p5, NasaDataObject);

    p5.draw = () => {
      const OrderedData = NasaDataObject.sort((a, b) => {
        return b.energy - a.energy;
      });
      drawDataPoints(p5, OrderedData);
    };
  }

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
            Stop Being Impatient......
          </div>
        }
      >
        {NasaDataObject && (
          <NextReactP5Wrapper sketch={sketch} data={NasaDataObject} />
        )}
      </Suspense>
    </Stack>
  );
}

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
