import { Card } from "../../components";
import { Text, Title } from "@mantine/core";
import styles from "./page.module.css";
import { travel } from "../../utils/db";
import { IconClick } from "@tabler/icons-react";

export default function PlacesPage() {
  return (
    <div className={styles.blogPage}>
      <Title ta="center" order={1}>
        Blog
      </Title>
      {travel.map((blog) => {
        const { title, caption, category, date, id } = blog;
        return (
          <Card
            className={styles.blogPageCard}
            withBorder
            key={title}
            adornment={<IconClick />}
          >
            <Text>{title}</Text>
            <Text>{caption}</Text>
            <Text>{date}</Text>
            <Text>{category}</Text>
          </Card>
        );
      })}
    </div>
  );
}
