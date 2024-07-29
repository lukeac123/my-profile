import { Stack, Text, Flex, Image } from "@mantine/core";
import { Card, Title, CardContent } from "../../components";
import { insertSpaces, makePrefixer } from "../../utils";
import "./page.css";
import { friends } from "../../utils";

const withBaseName = makePrefixer("peoplePage");

export default function PeoplePage() {
  return (
    <Stack>
      <Title order={1} ta="center">
        Travel Buddies
      </Title>

      <div className={withBaseName("container")}>
        {friends.map((friend) => {
          const { title, imgSrc, content } = friend;
          return (
            <Card key={title} className={withBaseName("card")}>
              <Image src={imgSrc} className={withBaseName("cardImage")} />
              <CardContent>
                <Title underlined>{title}</Title>
                <div className={withBaseName("cardDescription")}>
                  {Object.entries(content).map((content) => {
                    return (
                      <Flex
                        gap={0}
                        key={content[1]}
                        style={{ flexShrink: 0 }}
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
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </Stack>
  );
}
