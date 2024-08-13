import { Stack, Text, Flex, Image } from "@mantine/core";
import { Card, Title, CardContent } from "../../components";
import { insertSpaces, makePrefixer } from "../../utils";
import "./page.css";
import { food } from "../../utils";

const withBaseName = makePrefixer("foodPage");

export default function FoodPage() {
  return (
    <Stack>
      <Title order={1} ta="center">
        Bordain Style
      </Title>

      <div className={withBaseName("container")}>
        {food.map((food) => {
          const { title, indexImgSrc, content } = food;
          return (
            <Card key={title} className={withBaseName("card")}>
              <Image src={indexImgSrc} className={withBaseName("cardImage")} />
              <CardContent>
                <Title underlined>{title}</Title>
                <div className={withBaseName("cardDescription")}>
                  {Object.entries(content).map((content) => {
                    return (
                      <Flex gap={0} key={content[1]} style={{ flexShrink: 0 }}>
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
