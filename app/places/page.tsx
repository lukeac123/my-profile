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
    <Stack>
      <Title order={1} ta="center">
        Places
      </Title>

      <div className={withBaseName("container")}>
        {places.map((places) => {
          const { title, content, imgDir, googleMapsIframeUrl } = places;
          return (
            <Card key={title} className={withBaseName("card")}>
              <Title underlined className={withBaseName("cardTitle")}>
                {title}
              </Title>
              <CardContent className={withBaseName("cardContent")}>
                {getImageSrc(imgDir)}
                <div className={withBaseName("cardColumn1")}>
                  {Object.entries(content).map((content) => {
                    return (
                      <div>
                        <Text
                          size="lg"
                          fw={700}
                          className={withBaseName("cardDescriptionColumn1")}
                        >
                          {insertSpaces(content[0])}:
                        </Text>
                        <Text size="lg">{content[1]}</Text>
                      </div>
                    );
                  })}
                  {/* <Card className={withBaseName("googleIframe")}>
                      <iframe src={googleMapsIframeUrl} loading="lazy" />
                    </Card> */}
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </Stack>
  );
}
