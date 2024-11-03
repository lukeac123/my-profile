import { Stack, Text, Image } from "@mantine/core";
import { Card, Title, CardContent } from "../components";
import { makePrefixer } from "../utils";
import { people, food, audioClips, places } from "../utils/db";
import "./page.css";

const db = [people, food, audioClips, places];

const latestItems = [people[0], food[0], audioClips[0], places[0]];

const withBaseName = makePrefixer("homePage");

export default function BlogPage() {
  return (
    <>
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
          <Image src="/me.jpeg" className={withBaseName("photo")} />
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
          <Title padding>Latest Updates</Title>
          <div className={withBaseName("latestContainer")}>
            {latestItems.map((item) => {
              const { title, indexImgSrc, link } = item;
              return (
                <Card className={withBaseName("latestCard")} link={link}>
                  <Image
                    src={indexImgSrc}
                    className={withBaseName("latestCardImage")}
                  />
                  <Title className={withBaseName("cardTitle")} underlined>
                    {title}
                  </Title>
                </Card>
              );
            })}
          </div>
        </>
        <div className={withBaseName("spotifyPlaylistContainer")}>
          <Card>
            <Title padding underlined>
              Colombia Playlist
            </Title>
            <iframe
              src="https://open.spotify.com/embed/playlist/2d3W35gRiH2pSfSNA0C5B5?utm_source=generator&theme=0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              width="100%"
              height="352"
              frameBorder="0"
              loading="lazy"
              style={{ borderRadius: "20px" }}
            />
          </Card>
          <Card>
            <Title padding underlined>
              Peru Playlist
            </Title>
            <iframe
              src="https://open.spotify.com/embed/playlist/1Rq56XkUjpcuorF5ABX2q5?utm_source=generator&theme=0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              width="100%"
              height="352"
              frameBorder="0"
              loading="lazy"
              style={{ borderRadius: "20px" }}
            />
          </Card>
        </div>
      </div>
    </>
  );
}
