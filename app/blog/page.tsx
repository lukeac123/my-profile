import { Card } from "../../components";
import { Text, Title } from "@mantine/core";
import styles from "./page.module.css";

export default function PlacesPage() {
  return (
    <div className={styles.travelPageContainer}>
      <Title ta="center" order={1}>
        Blog
      </Title>
      <Card withBorder>
        <Text>Blog Title</Text>
        <Text>Blog Description</Text>
        <Text>Category: Travel </Text>
      </Card>
    </div>
  );
}
