import { Stack, Text, Title, Card } from "@mantine/core";
import { SelectableCard } from "../components";
import { blogs } from "../utils/db";

export default function BlogPage() {
  return (
    <Stack gap="0" align="center" style={{ width: "70%" }}>
      <div style={{ marginTop: "20px", marginBottom: "20px" }}>
        <Title order={1} ta="center">
          Personal Blog
        </Title>
        <Title order={2} ta="center">
          A documentation of my travels across South America
        </Title>
        <Text size="lg" ta="left"></Text>
      </div>

      <Stack>
        {blogs.map((blog) => {
          const { location, city, country, date, caption, link } = blog;
          return (
            <SelectableCard
              location={location}
              city={city}
              country={country}
              date={date}
              caption={caption}
              link={link}
              key={location}
            />
          );
        })}
      </Stack>
    </Stack>
  );
}
