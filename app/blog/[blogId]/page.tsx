import { Card, ImageCluster } from "../../../components";
import { Text, Title } from "@mantine/core";
import path from "path";
import { promises as fs } from "fs";
import styles from "./page.module.css";
import { blogs } from "../../../utils/db";

async function getImageSrc(id: number) {
  const images = await fs.readdir(
    path.join(process.cwd(), `/public/blog/${id}`)
  );
  const imagePaths = await images.map((image) => `/blog/${id}/${image}`);

  return imagePaths;
}

export default async function PlacesPage({
  params,
}: {
  params: Promise<{ blogId: number }>;
}) {
  const { blogId } = await params;

  const imageArray = await getImageSrc(blogId);

  const { title, content } = blogs[blogId];

  return (
    <div className={styles.blogPage}>
      <Title ta="center" order={1}>
        {title}
      </Title>
      <Card key={title} className={styles.blogPageCard}>
        <ImageCluster
          imgSrcArray={imageArray}
          className={styles.blogPageImageCluster}
        />
        <div className={styles.blogPageContent}>
          {Object.entries(content).map((content) => {
            return (
              <div key={content[0]}>
                <Text>{content[0]}:</Text>
                <Text>{content[1]}</Text>
              </div>
            );
          })}
        </div>
      </Card>
    </div>
  );
}
