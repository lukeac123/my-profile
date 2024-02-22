import { Stack, Text, Title, Flex } from "@mantine/core";
import { Card, CardTitle, CardFooter, CardContent } from "../components";
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
            <Card link={link} key={location} className="listCard">
              <CardTitle>{location}</CardTitle>
              <CardContent>
                <Text size="md"> {caption}</Text>
              </CardContent>
              <CardFooter className="listCard-footer">
                <Text size="sm" style={{ marginRight: "10px" }}>
                  {city} - {country} - {date}
                </Text>
              </CardFooter>
            </Card>
          );
        })}
      </Flex>
    </Stack>
  );
}
