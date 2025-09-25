import { Card, Carousel } from "../../../components";
import { Text, Title } from "@mantine/core";
import { insertSpaces } from "../../../utils";
import path from "path";
import { promises as fs } from "fs";
import { travel, type Place, dateToUKFormat } from "../../../utils";
import styles from "./page.module.css";

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
  return <Carousel images={imgSrcDir} className={styles.travelPageCarousel} />;
}

// function sortPlacesByDate(places: Place[]) {
//   const arrayOfEntries = Object.values(travel);
//   const entriesSortedByDate = arrayOfEntries.sort((a, b) => {
//     return (
//       Math.floor(new Date(b.content.ArrivalDate)) -
//       Math.floor(new Date(a.content.ArrivalDate))
//     );
//   });

//   return entriesSortedByDate;
// }

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
  // const placesByDate: Place[] = sortPlacesByDate(travel);
  return (
    <div className={styles.travelPageContainer}>
      <Title ta="center" order={1}>
        Travel
      </Title>
      {placesByDate.map((place: Place) => {
        const { title, content, imgDir } = place;
        const updatedContent = updateContent(content);
        return (
          <Card key={title} className={styles.travelPageCard}>
            <Title order={2}>{title}</Title>
            <div className={styles.travelPageCardContent}>
              {getImageSrc(imgDir)}
              <div className={styles.travelPageCardDescription}>
                {Object.entries(updatedContent).map((content) => {
                  return (
                    <div key={content[0]}>
                      <Text>{insertSpaces(content[0])}:</Text>
                      <Text>{content[1]}</Text>
                    </div>
                  );
                })}
              </div>
            </div>
          </Card>
        );
      })}
    </div>
  );
}
