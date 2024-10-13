import { Stack, Title, Image } from "@mantine/core";
import NextImage from "next/image";
import path from "path";
import { promises as fs } from "fs";
import "./page.css";
import { makePrefixer } from "../../../utils";

const withBaseName = makePrefixer("photosPage");

async function getImages(params) {
  const imageGalleryDirectory = path.join(
    process.cwd(),
    `/public/gallery/${params.location}`
  );
  const imageLocationFolders = await fs.readdir(imageGalleryDirectory);

  return imageLocationFolders.map((image) => {
    return (
      <Image
        component={NextImage}
        alt={image}
        className={withBaseName("image")}
        src={`/gallery/${params.location}/${image}`}
        width={600}
        height={500}
      />
    );
  });
}

export default async function PhotoPage({ params }) {
  return (
    <Stack className={withBaseName()}>
      <Title order={1} ta="center">
        {params.location.charAt(0).toUpperCase() + params.location.slice(1)}
      </Title>
      <div className={withBaseName("photoContainer")}>{getImages(params)}</div>
    </Stack>
  );
}
