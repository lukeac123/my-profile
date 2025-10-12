import { Card } from "../../components";
import { Text, Title } from "@mantine/core";
import styles from "./page.module.css";
import { IconClick } from "@tabler/icons-react";
import { Badge } from "@mantine/core";
import path from "path";
import { promises as fs } from "fs";
import { Suspense } from "react";
import { FrontMatterType, parseMDX } from "./action";

const bageColors = {
  travel: ["green"],
  coding: ["blue"],
  general: ["yellow"],
};

async function getBlogs() {
  // await sleep(3000);
  const blogsDir = path.join(process.cwd(), "posts");
  const blogs = await fs.readdir(blogsDir);

  const blogsData = Promise.all(
    blogs.map(async (blog) => {
      const blogPath = path.join(process.cwd(), `posts/${blog}`);
      return await parseMDX(blogPath);
    })
  );

  return blogsData;
}

export default async function PlacesPage() {
  const blogsArray = await getBlogs();

  return (
    <div className={styles.blogPage}>
      <Title ta="center" order={1}>
        Blog
      </Title>
      {/* //To get suspense to work and stream in data we need to compatmentalise the aysnc and await,
      then use suspense in the top level component. So separate out blogs list
      into a separate compnent */}
      <Suspense fallback={<>...Be Patient</>}>
        {blogsArray?.map((blog) => {
          const { title, caption, disabled, category, id } = blog.frontmatter;
          return (
            <Card
              className={styles.blogPageCard}
              withBorder
              key={id}
              disabled={disabled}
              adornment={
                <>
                  <IconClick />
                  <Badge color={`${bageColors[category]}`}>{category}</Badge>
                </>
              }
              link={`/blog/${id}`}
              hover
            >
              <Text>{title}</Text>
              <Text>{caption}</Text>
            </Card>
          );
        })}
      </Suspense>
    </div>
  );
}
