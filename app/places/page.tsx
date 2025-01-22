import { Text } from "@mantine/core";
import { Card, Title, Carousel } from "../../components";
import { insertSpaces, makePrefixer } from "../../utils";
import path from "path";
import { promises as fs } from "fs";
import { places, type Place, dateToUKFormat } from "../../utils";
import "./page.css";
import { usePageLeave } from "@mantine/hooks";

const withBaseName = makePrefixer("placesPage");

async function getImageSrc(imgDir: string) {
  const imagePlaceDirectory = path.join(
    process.cwd(),
    "/public/places",
    imgDir
  );
  const imgSrcDir = await fs.readdir(imagePlaceDirectory).then((response) => {
    const imageArray = response.map((response) => {
      return path.join("/places", imgDir, response);
    });
    return imageArray;
  });
  return <Carousel images={imgSrcDir} className={withBaseName("carousel")} />;
}

function sortPlacesByDate(places: Place[]) {
  const arrayOfEntries = Object.values(places);
  const entriesSortedByDate = arrayOfEntries.sort((a, b) => {
    return (
      Math.floor(new Date(b.content.ArrivalDate)) -
      Math.floor(new Date(a.content.ArrivalDate))
    );
  });

  return entriesSortedByDate;
}

const updateContent = (content: {
  Country: string;
  City: string;
  Rating: JSX.Element;
  ArrivalDate: string;
  DepartureDate: string;
  Duration: string;
  Description: string;
}) => {
  return {
    ...content,
    ArrivalDate: dateToUKFormat(content.ArrivalDate),
    DepartureDate: dateToUKFormat(content.DepartureDate),
  };
};

export default function PlacesPage() {
  const placesByDate: Place[] = sortPlacesByDate(places);

  return (
    <>
      <Title order={1} ta="center">
        Places
      </Title>

      <div className={withBaseName("container")}>
        {placesByDate.map((place: Place) => {
          const { title, content, imgDir } = place;

          const updatedContent = updateContent(content);
          return (
            <Card key={title} className={withBaseName("card")}>
              <Title underlined padding>
                {title}
              </Title>
              <div className={withBaseName("cardContent")}>
                {getImageSrc(imgDir)}
                <div className={withBaseName("cardDescription")}>
                  {Object.entries(updatedContent).map((content) => {
                    return (
                      <div>
                        <Text size="lg" fw={700}>
                          {insertSpaces(content[0])}:
                        </Text>
                        <Text size="lg">{content[1]}</Text>
                      </div>
                    );
                  })}
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </>
  );
}
