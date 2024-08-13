import { Stack, Text, Flex } from "@mantine/core";
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
  return <Carousel images={imgSrcDir} />;
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
              <CardContent>
                <Flex
                  gap={"xs"}
                  //TODO: use media query for this ?
                  direction={{
                    base: "column",
                    xl: "row",
                    lg: "row",
                    md: "row",
                    sm: "column",
                    xs: "column",
                  }}
                >
                  {getImageSrc(imgDir)}
                  <div className={withBaseName("cardColumnn1")}>
                    {Object.entries(content).map((content) => {
                      return (
                        <Flex gap={0} key={content[1]}>
                          <Text
                            size="lg"
                            fw={700}
                            className={withBaseName("cardDescriptionColumn1")}
                          >
                            {insertSpaces(content[0])}:
                          </Text>
                          <Text size="lg">{content[1]}</Text>
                        </Flex>
                      );
                    })}
                    <Card className={withBaseName("googleIframe")}>
                      <iframe src={googleMapsIframeUrl} loading="lazy" />
                    </Card>
                  </div>
                </Flex>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </Stack>
  );
}
