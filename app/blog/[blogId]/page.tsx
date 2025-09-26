import { Card, ImageCluster } from "../../../components";
import { Text, Title } from "@mantine/core";
import path from "path";
import fs from "fs";
import styles from "./page.module.css";
import { blogs } from "../../../utils/db";

interface BlogType {
  id: number;
  title: "string";
  content: {};
}

async function getImageSrc(id: number) {
  const imageDir = path.join(process.cwd(), `/public/blog/${id}`);
  if (!fs.existsSync(imageDir)) return;
  try {
    const images = await fs.promises.readdir(imageDir);
    const imagePaths = await images?.map((image) => `/blog/${id}/${image}`);
    return imagePaths;
  } catch (err) {
    console.error(err);
  }
}

function getBlogById(blogs: BlogType[], blogId: number) {
  return blogs.filter((blog) => blog.id == blogId)[0];
}

export default async function PlacesPage({
  params,
}: {
  params: Promise<{ blogId: number }>;
}) {
  const { blogId } = await params;

  const imageArray = await getImageSrc(blogId);

  const blog = getBlogById(blogs, blogId);

  const { title, content } = blog;

  return (
    <div className={styles.blogPage}>
      <Title ta="center" order={1}>
        {blog.title}
      </Title>
      {imageArray && (
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
      )}
      {/* This will change when blogs are swapped to markdown  */}
      {!imageArray && (
        <Card key={title} className={styles.blogPageCardSolo}>
          {Object.entries(content).map((content) => {
            return (
              <div key={content[0]}>
                <Text>{content[0]}:</Text>
                <Text>{content[1]}</Text>
              </div>
            );
          })}
        </Card>
      )}
    </div>
  );
}
