import { Stack, Image } from "@mantine/core";
import { Card, Text } from "../../components";
import { makePrefixer } from "../../utils";
import { promises as fs } from "fs";
import path from "path";
import "./page.css";

const withBaseName = makePrefixer("travelPage");

export default async function GalleryPage() {
  const imageGalleryDirectory = path.join(process.cwd(), "/public/photography");
  const imageLocationFolders = await fs.readdir(imageGalleryDirectory);
  const travelItem = imageLocationFolders.map((folder) => {
    const indexImageSrc = `/photography/${folder}/index.jpeg`;
    return { folder, indexImageSrc };
  });
  return (
    <Stack>
      <Text title ta="center">
        Gallery
      </Text>
      <div className={withBaseName()}>
        {travelItem.map((item) => {
          return (
            <Card
              className={withBaseName("card")}
              link={`photography/${item.folder}`}
              key={item.indexImageSrc}
            >
              <Text title className={withBaseName("overlay")}>
                {item.folder.charAt(0).toUpperCase() + item.folder.slice(1)}
              </Text>
              <Image
                className={withBaseName("image")}
                src={item.indexImageSrc}
              />
            </Card>
          );
        })}
      </div>
    </Stack>
  );
}
