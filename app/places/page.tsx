"use client";
import { Stack, Text, Title, Flex, Image } from "@mantine/core";
import { Card, CardTitle, CardContent } from "../../components";
import { insertSpaces, makePrefixer } from "../../utils";
import "./page.css";
import { places } from "../../utils";

const withBaseName = makePrefixer("placesPage");

export default function PlacesPage() {
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
                <div
                  style={{
                    display: "flex",
                    gap: "10px",
                    width: "100%",
                  }}
                >
                  <div className={withBaseName("cardColumnn1")}>
                    {Object.entries(content).map((content) => {
                      return (
                        <Flex
                          gap={"lg"}
                          key={content[1]}
                          style={{ flexShrink: 0 }}
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
                  <Image src={imgSrc} className={withBaseName("cardImage")} />{" "}
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </Stack>
  );
}

function LoadingSpinner() {
  return <> ...loading </>;
}
