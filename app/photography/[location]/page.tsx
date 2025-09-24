import { Stack, Title, Image } from "@mantine/core";
import NextImage from "next/image";
import path from "path";
import { promises as fs } from "fs";
import "./page.css";
import { makePrefixer } from "../../../utils";

const withBaseName = makePrefixer("photosPage");

async function getImages(location: string) {
  const imageGalleryDirectory = path.join(
    process.cwd(),
    `/public/photography/${location}`
  );
  const imageLocationFolders = await fs.readdir(imageGalleryDirectory);

  return imageLocationFolders.map((image) => {
    return (
      <Image
        key={image}
        component={NextImage}
        alt={image}
        className={withBaseName("image")}
        src={`/photography/${location}/${image}`}
        width={600}
        height={500}
      />
    );
  });
}

export default async function PhotoPage({
  params,
}: {
  params: Promise<{ location: string }>;
}) {
  const { location } = await params;

  return (
    <Stack className={withBaseName()}>
      <Title order={1} ta="center">
        {location.charAt(0).toUpperCase() + location.slice(1)}
      </Title>
      <div className={withBaseName("photoContainer")}>
        {getImages(location)}
      </div>
    </Stack>
  );
}
