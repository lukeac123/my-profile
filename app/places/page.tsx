"use client";
import { Stack, Text, Flex, Image } from "@mantine/core";
import { Card, Title, CardContent } from "../../components";
import { insertSpaces, makePrefixer } from "../../utils";
// import { useViewportSize } from "@mantine/hooks";
import { places } from "../../utils";
import "./page.css";

const withBaseName = makePrefixer("placesPage");

export default function PlacesPage() {
  // const { width } = useViewportSize();
  return (
    <Stack>
      <Title order={1} ta="center">
        Places
      </Title>

      <div className={withBaseName("container")}>
        {places.map((places) => {
          const { title, content, imgSrc, googleMapsIframeUrl } = places;
          return (
            <Card key={title} className={withBaseName("card")}>
              <Title underlined className={withBaseName("cardTitle")}>
                {title}
              </Title>
              <CardContent>
                <Flex
                  gap={"xs"}
                  direction={{
                    base: "column",
                    xl: "row",
                    lg: "row",
                    md: "row",
                    sm: "column",
                    xs: "column",
                  }}
                >
                  <Image src={imgSrc} className={withBaseName("image")} />
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
