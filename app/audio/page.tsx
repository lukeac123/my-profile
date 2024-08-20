import { Stack, Text, Flex, Image } from "@mantine/core";
import { Audio, Card, CardContent, Title } from "../../components";
import { audioClips } from "../../utils";
import { makePrefixer } from "../../utils";
import "./page.css";

const withBaseName = makePrefixer("audioPage");

export default function AudioPage() {
  return (
    <Stack gap={"lg"}>
      <Title order={1} ta="center">
        Audio Clips
      </Title>
      <div className={withBaseName()}>
        {audioClips.map((audio) => {
          const { title, description, audioSrc, indexImgSrc } = audio;
          return (
            <Card key={title} className={withBaseName("card")}>
              <CardContent>
                <Title underlined>{title}</Title>
                <Stack gap={"md"}>
                  <Audio title={title} src={audioSrc} />
                </Stack>
              </CardContent>
              <Image src={indexImgSrc} className={withBaseName("image")} />
              <Text
                className={withBaseName("description")}
                size="lg"
                ta="left"
                style={{ overflow: "wrap" }}
              >
                {description}
              </Text>
            </Card>
          );
        })}
      </div>
    </Stack>
  );
}
