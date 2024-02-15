import { Stack, Text, Title, Flex } from "@mantine/core";
import { Card, CardTitle, CardFooter } from "../components";
import { blogs } from "../utils/db";
import "./page.css";

export default function BlogPage() {
  return (
    <Stack style={{ width: "90%" }}>
      <div style={{ marginTop: "20px", marginBottom: "20px" }}>
        <Title order={1} ta="center">
          Personal Blog
        </Title>
        <Title order={2} ta="center">
          A documentation of my travels across South America
        </Title>
        <Text size="lg" ta="left"></Text>
      </div>

      <Flex
        gap={"lg"}
        style={{
          width: "100%",
          flexWrap: "wrap",
          overflowY: "visible",
          display: "flex",
          justifyContent: "center",
        }}
      >
        {blogs.map((blog) => {
          const { location, city, country, date, caption, link } = blog;
          return (
            <Card link={link} className="listCard">
              <Flex className={"listCardContent"}>
                <Stack>
                  <CardTitle>
                    <Title order={3}> {location} </Title>
                  </CardTitle>
                  <Text size="md"> {caption}</Text>

                  <CardFooter>
                    <Flex
                      className={"listCardContentSecondary"}
                      justify="flex-start"
                      align="flex-end"
                    >
                      {/* This should be looping through an array not being done manually */}
                      <Stack gap={0}>
                        <Text size="md">
                          City: <strong> {city} </strong>
                        </Text>
                        <Text size="md">
                          Country: <strong> {country} </strong>
                        </Text>
                        <Text size="md">
                          Date: <strong> {date} </strong>
                        </Text>
                      </Stack>
                    </Flex>
                  </CardFooter>
                </Stack>
              </Flex>
            </Card>
          );
        })}
      </Flex>
    </Stack>
  );
}
