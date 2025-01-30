import { Stack, Image } from "@mantine/core";
import { Audio, Card, CardContent, Text } from "../../components";
import { audioClips } from "../../utils";
import { makePrefixer } from "../../utils";
import "./page.css";

const withBaseName = makePrefixer("audioPage");

export default function AudioPage() {
  return (
    <Stack gap={"lg"}>
      <Text title ta="center" colorMode>
        Audio Clips
      </Text>
      <div className={withBaseName()}>
        {audioClips.map((audio) => {
          const { title, description, audioSrc, indexImgSrc } = audio;
          return (
            <Card key={title} className={withBaseName("card")}>
              <CardContent>
                <Text colorMode>{title}</Text>
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
    </Stack>
  );
}
