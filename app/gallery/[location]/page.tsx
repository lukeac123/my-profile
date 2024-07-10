import { Stack, Text, Image, Title } from "@mantine/core";
import path from "path";
import { promises as fs } from "fs";
import "./page.css";
import { makePrefixer } from "../../../utils";

const withBaseName = makePrefixer("photosPage");

export default async function PhotoPage({ params }) {
  const imageGalleryDirectory = path.join(
    process.cwd(),
    `/public/gallery/${params.location}`,
  );
  const imageLocationFolders = await fs.readdir(imageGalleryDirectory);
  return (
    <Stack>
      <Title order={1} ta="center">
        {params.location.charAt(0).toUpperCase() + params.location.slice(1)}
      </Title>
      <div className={withBaseName()}>
        {imageLocationFolders.map((image) => {
          console.log(image);
          return (
            <Image
              className={withBaseName("image")}
              src={`/gallery/${params.location}/${image}`}
            />
          );
        })}
      </div>
    </Stack>
  );
}
