import { Stack, Text } from "@mantine/core";
import { Card, Title, CardContent, Carousel } from "../../components";
import { insertSpaces, makePrefixer } from "../../utils";
import path from "path";
import { promises as fs } from "fs";
import { places } from "../../utils";
import "./page.css";

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

export default function PlacesPage() {
  return (
    <>
      <Title order={1} ta="center">
        Places
      </Title>

      <div className={withBaseName("container")}>
        {places.map((places) => {
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
