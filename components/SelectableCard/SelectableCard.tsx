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

export const SelectableCard = ({
  location,
  city,
  country,
  date,
  caption,
  link,
}: ListCardProps) => {
  return (
    <Card
      className={"selectableCard"}
      shadow="sm"
      padding="lg"
      radius="md"
      withBorder
    >
      <a href={link} style={{ height: "100%", width: "100%" }}>
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
          gap={{
            base: 0,
            xs: 0,
            sm: "xs",
            md: "xl",
            lg: "xl",
            xl: "xl",
          }}
        >
          <Stack gap={0} style={{ flexGrow: 1 }}>
            <Title order={3}> {location} </Title>
            <Text size="md"> {caption}</Text>
          </Stack>

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
        </Flex>
      </a>
    </Card>
  );
};
