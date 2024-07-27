import { promises as fs } from "fs";
import path from "path";
import { Stack, Image, Text } from "@mantine/core";
import { Card, CardContent, Title } from "../../components";
import { makePrefixer } from "../../utils";
import "./page.css";

const withBaseName = makePrefixer("galleryPage");

export default async function GalleryPage() {
  const imageGalleryDirectory = path.join(process.cwd(), "/public/gallery");
  const imageLocationFolders = await fs.readdir(imageGalleryDirectory);
  const galleryItem = imageLocationFolders.map((folder) => {
    const indexImageSrc = `/gallery/${folder}/index.jpeg`;
    return { folder, indexImageSrc };
  });
  return (
    <Stack>
      <Title order={1} ta="center">
        Gallery
      </Title>
      <div className={withBaseName()}>
        {galleryItem.map((item) => {
          return (
            <Card
              className={withBaseName("card")}
              link={`gallery/${item.folder}`}
            >
              <Title order={1} className={withBaseName("overlay")}>
                {item.folder.charAt(0).toUpperCase() + item.folder.slice(1)}
              </Title>

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
