import { Card } from "../../components";
import { Text, Title } from "@mantine/core";
import styles from "./page.module.css";
import { blogs } from "../../utils/db";
import { IconClick } from "@tabler/icons-react";
import { Badge } from "@mantine/core";

const bageColors = {
  travel: ["green"],
  coding: ["blue"],
  life: ["yellow"],
};

export default function PlacesPage() {
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
                <Badge color={`${bageColors[category][0]}`}>{category}</Badge>
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
