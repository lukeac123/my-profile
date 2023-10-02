"use client";
import { Flex, Text, Stack, Image } from "@mantine/core";
import Link from "next/link";
import Card from "../components/Card/Card";

const links = [
  { id: "Projects", link: "./projects" },
  { id: "About", link: "./about" },
  { id: "CV", link: "./cv" },
];

const cards = [
  {
    id: "Project Card",
    image:
      "https://images.unsplash.com/photo-1579227114347-15d08fc37cae?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80",
    link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    title: "You&apos;ve won a million dollars in cash!",
    caption:
      "Please click anywhere on this card to claim your reward, this is not a fraud, trust us",
  },
  {
    id: "Project Card",
    image:
      "https://images.unsplash.com/photo-1579227114347-15d08fc37cae?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80",
    link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    title: "You&apos;ve won a million dollars in cash!",
    caption:
      "Please click anywhere on this card to claim your reward, this is not a fraud, trust us",
  },
  {
    id: "Project Card",
    image:
      "https://images.unsplash.com/photo-1579227114347-15d08fc37cae?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80",
    link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    title: "You&apos;ve won a million dollars in cash!",
    caption:
      "Please click anywhere on this card to claim your reward, this is not a fraud, trust us",
  },
];

export default function HomePage() {
  return (
    <Stack gap="xl" align="center">
      <Flex
        justify="center"
        align="center"
        direction="column"
        gap="md"
        style={{ paddingTop: 50, paddingBottom: 20 }}
      >
        <Text size="xl" fw={900}>
          Luke Atkinson-Coyle
        </Text>
        <Flex gap={"lg"}>
          {links.map((link) => {
            return (
              <Link href={link.link}>
                <Text size="l" fw={300}>
                  {link.id}
                </Text>
              </Link>
            );
          })}
        </Flex>
      </Flex>

      <Stack align="center">
        {cards.map((card) => {
          return (
            <Card />
            //   <Card.Section>
            //     <Image src={card.image} h={160} alt={card.id} />
            //   </Card.Section>

            //   <Text fw={500} size="lg" mt="md">
            //     {card.title}
            //   </Text>

            //   <Text mt="xs" c="dimmed" size="sm">
            //     {card.caption}
            //   </Text>
            // </Card>
          );
        })}
      </Stack>
    </Stack>
  );
}
