import { Stack, Text, Title, Flex, Image } from "@mantine/core";
import { Card, CardTitle, CardContent, SpotifyCard } from "../components";
import "./page.css";

export default function BlogPage() {
  return (
    <Stack style={{ paddingLeft: "50px" }}>
      <div style={{ marginTop: "20px", marginBottom: "20px" }}>
        <Title order={1} ta="left" hiddenFrom="sm">
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
          <div style={{ width: "60%" }}>
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
          <div style={{ width: "40%" }}>
            <SpotifyCard style={{ width: "100%" }}> Spotify </SpotifyCard>
          </div>
        </Flex>
      </div>
    </Stack>
  );
}

{
  /* <Flex
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
</Flex> */
}
