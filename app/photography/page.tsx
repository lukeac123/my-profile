import { Stack, Text, Title } from "@mantine/core";
import Image from "next/image";
import { Card } from "../../components";
import { promises as fs } from "fs";
import path from "path";
import styles from "./page.module.css";

export default async function GalleryPage() {
  const imageGalleryDirectory = path.join(process.cwd(), "/public/photography");
  const imageLocationFolders = await fs.readdir(imageGalleryDirectory);
  const travelItem = imageLocationFolders.map((folder) => {
    const indexImageSrc = `/photography/${folder}/index.jpeg`;
    return { folder, indexImageSrc };
  });
  return (
    <Stack>
      <Title ta="center" order={1}>
        Photography
      </Title>
      <div className={styles.photographyPage}>
        {travelItem.map((item) => {
          return (
            <Card
              className={styles.photographyPageCard}
              link={`photography/${item.folder}`}
              key={item.indexImageSrc}
              withBorder
            >
              <Text className={styles.photographyPageOverlay}>
                {item.folder.charAt(0).toUpperCase() + item.folder.slice(1)}
              </Text>
              <Image
                alt={item.indexImageSrc}
                className={styles.photographyPageImage}
                src={item.indexImageSrc}
                height="600"
                width="400"
              />
            </Card>
          );
        })}
      </div>
    </Stack>
  );
}
