import { Stack, Text, Image } from "@mantine/core";
import { Card, Title, CardContent } from "../components";
import { makePrefixer } from "../utils";
import { people, food, audioClips, places } from "../utils/db";
import "./page.css";

const db = [people, food, audioClips, places];

// const latestItems = db.map((item) => {
//   const sortedItems = item.sort((a, b) => {
//     return new Date(b.date) - new Date(a.date);
//   });
// });

const latestItems = [people[0], food[0], audioClips[0], places[0]];

const withBaseName = makePrefixer("homePage");

export default function BlogPage() {
  return (
    <Stack>
      <Title order={1} ta="center" hiddenFrom="sm">
        Queer Abroad
      </Title>
      <div className={withBaseName()}>
        <div className={withBaseName("aboutContainer")}>
          <Image src="/me.jpg" className={withBaseName("photo")} />
          <CardContent>
            <Title>About Me</Title>
            <Text size="lg" className={withBaseName("text")}>
              My name is Luke, I'm 25 and born an raised in North London. After
              leaving university 3 years ago and going starting a graduate
              scheme at a bank, I've decided to leave the corporate world behind
              and travel across the South American continent. Follow this page
              for updates on the places I visit, the people I meet as well as
              plenty of phoots and audio clips.
            </Text>
          </CardContent>
        </div>
        <>
          <Title underlined className={withBaseName("latestTitle")}>
            Latest Updates
          </Title>
          <div className={withBaseName("latestContainer")}>
            {latestItems.map((item) => {
              const { title, imgSrc, date, link } = item;
              return (
                <Card className={withBaseName("latestCard")} link={link}>
                  <Image
                    src={imgSrc}
                    className={withBaseName("latestCardImage")}
                  />
                  <CardContent>
                    <Title> {title} </Title>
                    <Text size="lg" className={withBaseName("text")}>
                      {date}
                    </Text>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </>
      </div>
    </Stack>
  );
}

{
  /* <Stack style={{ width: width > 992 ? "40%" : "100%" }} gap={"lg"}>
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
        </Stack> */
}
