import { Card } from "../../components";
import { Text, Title } from "@mantine/core";
import styles from "./page.module.css";
import { blogs } from "../../utils/db";
import { IconClick } from "@tabler/icons-react";
import { Badge } from "@mantine/core";
import path from "path";
import matter from "gray-matter";
import { promises as fs } from "fs";

const bageColors = {
  travel: ["green"],
  coding: ["blue"],
  life: ["yellow"],
};

async function getBlogs() {
  const blogsDir = path.join(process.cwd(), "posts");
  const blogs = await fs.readdir(blogsDir);

  const blogsData = blogs.map((blog) => {
    const blogPath = path.join(blogsDir, `${blog}`);
    const { title, caption } = matter.read(blogPath).data;
    return { title, caption };
  });

  return blogsData;
}

export default async function PlacesPage() {
  const blogsArray = await getBlogs();
  return (
    <div className={styles.blogPage}>
      <Title ta="center" order={1}>
        Blog
      </Title>
      {blogs.map((blog) => {
        const { title, caption, id, category, disabled } = blog;
        return (
          <Card
            className={styles.blogPageCard}
            withBorder
            key={title}
            disabled={disabled}
            adornment={
              <>
                <IconClick />
                {/* <Badge color={`${bageColors[category][0]}`}>{category}</Badge> */}
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
    </div>
  );
}
