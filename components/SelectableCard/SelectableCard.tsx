import { Stack, Text, Title, Flex, Button, Anchor, Card } from "@mantine/core";
import Link from "next/link";
import "./SelectableCard.component.css";

export type ListCardProps = {
  location: string;
  city: string;
  country: string;
  date: string;
  caption: string;
  link: string;
};

// Sort out the styling on the Selectable Card
// Look into the issue with the audio not loading sometimes
// Issue with Card link and hydration error, could be the same as the toggleTheme

export const SelectableCard = ({
  location,
  city,
  country,
  date,
  caption,
  link,
}: ListCardProps) => {
  return (
    // <Link href={link}>
    <Card
      className={"listCardContainer"}
      shadow="sm"
      padding="lg"
      radius="md"
      withBorder
    >
      <Flex
        style={{ width: "100%" }}
        className={"listCardContent"}
        direction={{
          base: "column",
          xs: "column",
          sm: "column",
          md: "row",
          lg: "row",
          xl: "row",
        }}
        gap={"sm"}
      >
        <Stack gap={0} style={{ flexGrow: 1 }}>
          <Title order={3}> {location} </Title>
          <Text size="md"> {caption}</Text>
          <Anchor href={link}> Go to Page </Anchor>
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
    </Card>
    // </Link>
  );
};
