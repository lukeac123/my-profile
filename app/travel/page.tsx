import { Card, Text, Carousel } from "../../components";
import { insertSpaces, makePrefixer } from "../../utils";
import path from "path";
import { promises as fs } from "fs";
import { travel, type Place, dateToUKFormat } from "../../utils";
import "./page.css";

const withBaseName = makePrefixer("travelPage");

async function getImageSrc(imgDir: string) {
  const imagePlaceDirectory = path.join(
    process.cwd(),
    "/public/travel",
    imgDir
  );
  const imgSrcDir = await fs.readdir(imagePlaceDirectory).then((response) => {
    const imageArray = response.map((response) => {
      return path.join("/travel", imgDir, response);
    });
    return imageArray;
  });
  return <Carousel images={imgSrcDir} className={withBaseName("carousel")} />;
}

function sortPlacesByDate(places: Place[]) {
  const arrayOfEntries = Object.values(travel);
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
  const placesByDate: Place[] = sortPlacesByDate(travel);
  return (
    <>
      <Text title ta="center">
        Places
      </Text>
      <div className={withBaseName("container")}>
        {placesByDate.map((place: Place) => {
          const { title, content, imgDir } = place;

          const updatedContent = updateContent(content);
          return (
            <Card key={title} className={withBaseName("card")}>
              <Text underlined padding>
                {title}
              </Text>
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
