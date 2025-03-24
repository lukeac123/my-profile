import { Stack, Image } from "@mantine/core";
import { Audio, Card, CardContent, Title, Text } from "../../components";
import { audioClips } from "../../utils";
import { makePrefixer } from "../../utils";
import "./page.css";

const withBaseName = makePrefixer("audioPage");

export default function AudioPage() {
  return (
    <div>
      <Title ta="center" order={1}>
        Audio Clips
      </Title>
      <div className={withBaseName()}>
        {audioClips.map((audio) => {
          const { title, description, audioSrc, indexImgSrc } = audio;
          return (
            <Card key={title} className={withBaseName("card")}>
              <CardContent>
                <Title order={2}>{title}</Title>
                <Stack gap={"md"}>
                  <Audio title={title} src={audioSrc} />
                </Stack>
              </CardContent>
              <Image src={indexImgSrc} className={withBaseName("image")} />
              <Text className={withBaseName("description")} size="lg" ta="left">
                {description}
              </Text>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
