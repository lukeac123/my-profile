import { Stack, Image } from "@mantine/core";
import { Audio, Card } from "../../components";
import { Text, Title } from "@mantine/core";
import { audioClips } from "../../utils";
import styles from "./page.module.css";

export default function AudioPage() {
  return (
    <div className={styles.audioPage}>
      <Title ta="center" order={1}>
        Audio Clips
      </Title>
      <div className={styles.audioPageCards}>
        {audioClips.map((audio) => {
          const { title, description, audioSrc, indexImgSrc } = audio;
          return (
            <Card withBorder key={title} className={styles.audioPageCard}>
              <Title order={2} ta="center">
                {title}
              </Title>
              <Stack gap={"md"}>
                <Audio
                  title={title}
                  src={audioSrc}
                  className={styles.audioPagePlayer}
                />
              </Stack>
              <Image src={indexImgSrc} className={styles.audioPageImage} />
              <Text className={styles.audioPageDescription} ta="left">
                {description}
              </Text>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
