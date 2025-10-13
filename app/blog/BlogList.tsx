import { Card } from "../../components";
import { Text } from "@mantine/core";
import styles from "./page.module.css";
import { IconClick } from "@tabler/icons-react";
import { Badge } from "@mantine/core";
import { getBlogs } from "./action";

export const categoryColors = {
  travel: ["green"],
  coding: ["blue"],
  general: ["yellow"],
};

export default async function BlogList({ category }: { category: string }) {
  let blogs = [];
  blogs = await getBlogs();

  if (category !== "") {
    blogs = blogs.filter(
      (element) => element.frontmatter.category === category
    );
  }

  return (
    <>
      {blogs?.map((blog) => {
        const { title, caption, disabled, category, id } = blog.frontmatter;
        return (
          <Card
            className={styles.blogPageCard}
            withBorder
            key={id}
            disabled={disabled}
            adornment={
              <div className={styles.cardAdornment}>
                {disabled ? <Text>WIP</Text> : <IconClick />}
                <Badge color={`${categoryColors[category]}`}>{category}</Badge>
              </div>
            }
            link={`/blog/${id}`}
            hover
          >
            <Text>{title}</Text>
            <Text>{caption}</Text>
          </Card>
        );
      })}
    </>
  );
}
