"use client";
import { Stack, Text, Title, Flex, Image } from "@mantine/core";
import { useViewportSize } from "@mantine/hooks";
import { Card, CardTitle, CardContent } from "../components";
import "./page.css";

export default function BlogPage() {
  const { width } = useViewportSize();
  return (
    <Stack>
      <Title
        order={1}
        ta="center"
        hiddenFrom="sm"
        style={{ paddingBottom: "10px" }}
      >
        Queer Abroad
      </Title>
      <Flex
        direction={{
          base: "column",
          xs: "column",
          sm: "column",
          md: "row",
          lg: "row",
          xl: "row",
        }}
        gap={"lg"}
      >
        <div style={{ width: width > 992 ? "60%" : "100%" }}>
          <Card style={{ width: "100%" }}>
            <Image src="/me.jpg" />
            <CardContent>
              <CardTitle>Looks Its Me!</CardTitle>
              <Text size="lg" ta="left" style={{ overflow: "wrap" }}>
                My name is Luke Atkinson-Coyle, I'm 25 and born an raised in
                North London. I have decided to quit my job and leave the
                corporate world behind to chance my arm travelling across the
                South American continent. Follow this page for updates on the
                places I visit, the people I meet as well as plenty of phoots
                and audio clips.
              </Text>
            </CardContent>
          </Card>
        </div>
        <Stack style={{ width: width > 992 ? "40%" : "100%" }} gap={"lg"}>
          <Card>
            <iframe
              src="https://open.spotify.com/embed/track/3tZm76otWH20xzJC7icHCk?utm_source=generator"
              width="100%"
              height="352"
              frameBorder="0"
              allowFullScreen=""
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            />
          </Card>
          <Card>
            <iframe
              height="454"
              width="100%"
              frameBorder="0"
              src="https://www.strava.com/athletes/50370447/latest-rides/1a80f93342d7917f32afd94cd2946476e5d80b2c"
            />
          </Card>
        </Stack>
      </Flex>
    </Stack>
  );
}
