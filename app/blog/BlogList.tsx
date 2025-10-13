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

  const categories = category.split(",");

  if (category.length > 0) {
    blogs = blogs.filter((element) =>
      categories.some((category) => category === element.frontmatter.category)
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
