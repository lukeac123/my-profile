import { promises as fs } from "fs";
import path from "path";
import { Stack, Title, Image, Text } from "@mantine/core";
import { Card, CardContent, CardTitle } from "../../components";
import { makePrefixer } from "../../utils";
import "./page.css";

const withBaseName = makePrefixer("photosPage");

export default async function GalleryPage() {
  const imageGalleryDirectory = path.join(process.cwd(), "/public/gallery");
  const imageLocationFolders = await fs.readdir(imageGalleryDirectory);
  const galleryItem = await Promise.all(
    imageLocationFolders.map(async (folder) => {
      const imageFolderDirectory = path.join(
        process.cwd(),
        "/public/gallery",
        `${folder}`,
      );
      const imageDirs = await fs.readdir(imageFolderDirectory);
      const firstImageSrc = path.join(
        "/gallery",
        `/${folder}`,
        imageDirs[0].toString(),
      );
      return { folder, firstImageSrc };
    }),
  );

  return (
    <div>
      <Title order={1} ta="center">
        Photos
      </Title>
      <div className={withBaseName()}>
        {galleryItem.map((item) => {
          return (
            <Card className={withBaseName("card")}>
              <CardContent>
                <CardTitle>
                  {item.folder.charAt(0).toUpperCase() + item.folder.slice(1)}
                </CardTitle>
              </CardContent>
              <Image
                className={withBaseName("image")}
                src={item.firstImageSrc}
              />
            </Card>
          );
        })}
      </div>
    </div>
  );
}
