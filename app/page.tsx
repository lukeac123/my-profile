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
      <Title order={1} ta="center" hiddenFrom="sm" underlined>
        Queer Abroad
      </Title>
      <iframe
        className={withBaseName("map")}
        src="https://www.travellerspoint.com/embed/map.cfm/#/embed/1139683/"
        width="100%"
        height="500px"
      />
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
        <div className={withBaseName("spotifyPlaylistContainer")}>
          <Card>
            <iframe
              src="https://open.spotify.com/embed/playlist/2d3W35gRiH2pSfSNA0C5B5?utm_source=generator&theme=0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              width="100%"
              height="352"
              frameBorder="0"
              loading="lazy"
              style={{ borderRadius: "20px" }}
            />
            <CardContent>
              <Title underlined>Travel Playlist</Title>
              <Text size="lg">
                While travelling I’ve been asking each person I meet to add
                their favourite song to this playlist. This playlist is a
                reflection of my experience and the interactions I’ve had with
                the people I’ve met, but also their unique personalities and
                individuality. I've also added in a few of my favourite songs
                along the way.
              </Text>
            </CardContent>
          </Card>
        </div>
      </div>
    </Stack>
  );
}
