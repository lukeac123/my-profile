import { Stack, Text, Image } from "@mantine/core";
import { Card, Title, CardContent } from "../components";
import { makePrefixer } from "../utils";
import { friends, food, audioClips, places } from "../utils/db";
import "./page.css";

const db = [friends, food, audioClips, places];

// const latestItems = db.map((item) => {
//   const sortedItems = item.sort((a, b) => {
//     return new Date(b.date) - new Date(a.date);
//   });
// });

const latestItems = [friends[0], food[0], audioClips[0], places[0]];

const withBaseName = makePrefixer("homePage");

export default function BlogPage() {
  return (
    <Stack>
      <iframe
        className={withBaseName("map")}
        src="https://www.travellerspoint.com/embed/map.cfm/#/embed/1139683/"
        width="100%"
        height="500px"
      />
      <Title order={1} ta="center" hiddenFrom="sm">
        Queer Abroad
      </Title>
      <div className={withBaseName()}>
        <div className={withBaseName("aboutContainer")}>
          <Image src="/me.jpg" className={withBaseName("photo")} />
          <CardContent>
            <Title underlined>About Me</Title>
            <Text size="lg" className={withBaseName("text")}>
              Hello and welcome to Queer Abroad, a website documenting my
              experiences traveling across South America as a Queer Man. Living
              the majority of my life in London and working in the corporate
              world as a software engineer for the last 3 years, I've decided to
              put the predictable pendulum of London life behind me and solo
              backpack across the South American continent. Swapping high-rises
              for sun-rises and the clicky clack of the tude for the passionate
              and expressive beats of Latin America. Follow this page for
              updates on the places I visit, the people I meet as well as plenty
              of photos and audio clips.
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
