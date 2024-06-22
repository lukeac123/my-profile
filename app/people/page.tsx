"use client";
import { Stack, Text, Title, Flex, Image } from "@mantine/core";
import { Card, CardTitle, CardContent } from "../../components";
import { useViewportSize } from "@mantine/hooks";
import { insertSpaces, makePrefixer } from "../../utils";
import "./page.css";
import { people } from "../../utils";

const withBaseName = makePrefixer("peoplePage");

export default function PeoplePage() {
  const { width } = useViewportSize();
  return (
    <Stack>
      <Title order={1} ta="center">
        Travel Buddies
      </Title>

      <div className={withBaseName("container")}>
        {people.map((people) => {
          const { name, imgSrc, content } = people;
          return (
            <Card
              key={name}
              style={{
                width: width > 768 ? "600px" : "100%",
              }}
              className={withBaseName("card")}
            >
              <Image src={imgSrc} className={withBaseName("cardImage")} />
              <CardContent>
                <CardTitle>{name}</CardTitle>
                <div className={withBaseName("cardDescription")}>
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
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </Stack>
  );
}
