"use client";
import { Stack, Text, Title } from "@mantine/core";
import { Card } from "../components/Card";

const cards = [
  {
    title: "A World In Colour",
    caption: "Visulisations of Audio Clips Taken From Around the World",
    link: "",
    headerImage:
      "https://images.unsplash.com/photo-1579263477001-7a703f1974e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80",
    gridImages: [
      "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80",
      "https://images.unsplash.com/photo-1444723121867-7a241cacace9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80",
      "https://images.unsplash.com/photo-1444084316824-dc26d6657664?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80",
    ],
  },
];

export default function HomePage() {
  return (
    <Stack gap="0" align="center" style={{ width: "70%" }}>
      <div style={{ marginTop: "20px", marginBottom: "20px" }}>
        <Title order={1} ta="left">
          Engineer. Developer. Artist.
        </Title>
        <Text size="lg" ta="left">
          Mechanical Engineer by Learning, Front End Developer by profession,
          Artists by desire. Within only a few years as software engineer,
          starting in 2021 I'm still new to the space and enjoying the porcess
          of learning new tools and finding methods of applying them creative an
          intersting ways.
        </Text>
        <br />
        <Text ta="left" td="underline" size="lg">
          Highlights so Far:
        </Text>
      </div>

      {cards.map((card) => {
        return (
          <Card
            id={card.title}
            key={card.title}
            gridImages={card.gridImages}
            headerImage={card.headerImage}
            title={card.title}
            caption={card.caption}
          />
        );
      })}
    </Stack>
  );
}
