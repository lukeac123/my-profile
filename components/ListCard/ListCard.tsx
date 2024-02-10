import { Stack, Text, Title, Flex, Button, Anchor, Card } from "@mantine/core";
import "./ListCard.component.css";

export type ListCardProps = {
  location: string;
  city: string;
  country: string;
  date: string;
  caption: string;
  link: string;
};

//Make whole card a link

export const ListCard = ({
  location,
  city,
  country,
  date,
  caption,
  link,
}: ListCardProps) => {
  return (
    <Card
      className={"listCardContainer"}
      shadow="sm"
      padding="lg"
      radius="md"
      withBorder
    >
      <Flex direction={"row"} align="stretch">
        <Flex className={"listCardContent"} justify="flex-start">
          <Stack gap={0}>
            <Title order={3}> {location} </Title>
            <Text size="md"> {caption}</Text>
            <Anchor href={`/blog/${link}`}> Go to Page </Anchor>
          </Stack>

          <Flex
            className={"listCardContentSecondary"}
            justify="flex-start"
            align="flex-end"
          >
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
        </Flex>
      </Flex>
    </Card>
  );
};
