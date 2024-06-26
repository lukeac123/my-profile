"use client";
import { Stack, Text, Title, Flex, Image } from "@mantine/core";
import { Card, CardTitle, CardContent } from "../../components";
import { insertSpaces, makePrefixer } from "../../utils";
import { useViewportSize } from "@mantine/hooks";
import "./page.css";
import { places } from "../../utils";

const withBaseName = makePrefixer("placesPage");

export default function PlacesPage() {
  const { width } = useViewportSize();
  return (
    <Stack>
      <Title order={1} ta="center">
        Places
      </Title>

      <div className={withBaseName("container")}>
        {places.map((places) => {
          const { location, content, imgSrc, googleMapsIframeUrl } = places;
          return (
            <Card key={location} className={withBaseName("card")}>
              <CardTitle className={withBaseName("cardTitle")}>
                {location}
              </CardTitle>
              <CardContent>
                <Flex
                  direction={{
                    base: "column",
                    xl: "row",
                    lg: "row",
                    md: "row",
                    sm: "column",
                    xs: "column",
                  }}
                  gap={"xs"}
                >
                  <Image
                    src={imgSrc}
                    style={{
                      width: width > 992 ? "50%" : "100%",
                      height: width > 992 ? "" : "100px",
                    }}
                  />
                  <div
                    className={withBaseName("cardColumnn1")}
                    style={{
                      width: width > 992 ? "50%" : "100%",
                    }}
                  >
                    {Object.entries(content).map((content) => {
                      return (
                        <Flex
                          gap={0}
                          key={content[1]}
                          direction={{
                            base: "column",
                            xl: "row",
                            lg: "row",
                            md: "row",
                            sm: "column",
                            xs: "column",
                          }}
                        >
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
