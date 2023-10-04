"use client";
import { Text, Stack } from "@mantine/core";
import { Card } from "../components/Card";

export default function HomePage() {
  return (
    <Stack gap="m" align="center">
      <Text size="xl" fw={900}>
        Luke Atkinson-Coyle
      </Text>
      <Text size="m" fw={300}>
        Trying to put a creative spin on the technical{" "}
      </Text>
      <Stack align="center" justify="center" gap={"xl"}>
        {cards.map((card) => {
          return <Card></Card>;
        })}
      </Stack>
    </Stack>
  );
}

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
