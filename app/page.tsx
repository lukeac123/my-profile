"use client";
import { Stack, Text, Title, Flex, Image } from "@mantine/core";
import { Card, CardTitle, CardContent } from "../components";
import { cards } from "../utils/db";
import "./page.css";

const iconStyle = { width: "10px", height: "10px" };

export default function BlogPage() {
  return (
    <Stack style={{ paddingLeft: "50px" }}>
      <div style={{ marginTop: "20px", marginBottom: "20px" }}>
        <Title order={1} ta="left">
          A Documentation of my Journey across South America
        </Title>
        <br></br>
        <Text size="lg" ta="left" style={{ overflow: "wrap" }}>
          My name is Luke Atkinson-Coyle, I'm 25 and born an raised in North
          London. I have decided to quit my job and leave the corporate world
          behind to chance my arm travelling across the South American
          continent. Follow this page for updates on the places I visit, the
          people I meet as well as plenty of phoots and audio clips.
        </Text>
      </div>

      <Flex
        gap={"lg"}
        style={{
          width: "100%",
          flexWrap: "wrap",
          overflowY: "visible",
          display: "flex",
        }}
      >
        {cards.map((card) => {
          const { title, description, link } = card;
          return (
            <Card link={link} key={title} className="listCard">
              <Image src="/banner-image.jpg" height={200} />
              <CardContent>
                <CardTitle>{title}</CardTitle>
                <Text size="md"> {description}</Text>
              </CardContent>
            </Card>
          );
        })}
      </Flex>
    </Stack>
  );
}
