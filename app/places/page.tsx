import { Stack, Text } from "@mantine/core";
import { Card, Title, CardContent, Carousel } from "../../components";
import { insertSpaces, makePrefixer } from "../../utils";
import path from "path";
import { promises as fs } from "fs";
import { places } from "../../utils";
import "./page.css";
import { usePageLeave } from "@mantine/hooks";

const withBaseName = makePrefixer("placesPage");

async function getImageSrc(imgDir: string) {
  const imagePlaceDirectory = path.join(
    process.cwd(),
    "/public/places",
    imgDir
  );
  const imgSrcDir = await fs.readdir(imagePlaceDirectory).then((response) => {
    const imageArray = response.map((response) => {
      return path.join("/places", imgDir, response);
    });
    return imageArray;
  });
  return <Carousel images={imgSrcDir} className={withBaseName("carousel")} />;
}

function sortPlacesByDate(places: Array<Object>) {
  const arrayOfKeys = Object.keys(places);
  const keysSortedByDate = arrayOfKeys.sort((a, b) => {
    return (
      Math.floor(new Date(places[b].content.ArrivalDate)) -
      Math.floor(new Date(places[a].content.ArrivalDate))
    );
  });

  const newSortedByDate = keysSortedByDate.map((key: number) => {
    return places[key];
  });

  return newSortedByDate;
}

export default function PlacesPage() {
  const placesByDate = sortPlacesByDate(places);

  return (
    <>
      <Title order={1} ta="center">
        Places
      </Title>

      <div className={withBaseName("container")}>
        {placesByDate.map((places) => {
          const { title, content, imgDir } = places;
          return (
            <Card key={title} className={withBaseName("card")}>
              <Title underlined padding>
                {title}
              </Title>
              <div className={withBaseName("cardContent")}>
                {getImageSrc(imgDir)}
                <div className={withBaseName("cardDescription")}>
                  {Object.entries(content).map((content) => {
                    return (
                      <div>
                        <Text size="lg" fw={700}>
                          {insertSpaces(content[0])}:
                        </Text>
                        <Text size="lg">{content[1]}</Text>
                      </div>
                    );
                  })}
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </>
  );
}
