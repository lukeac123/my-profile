import { Stack, Text, Flex, Image } from "@mantine/core";
import { Audio, Card, CardContent, Title } from "../../components";
import { audioClips } from "../../utils";
import { makePrefixer } from "../../utils";
import "./page.css";

const withBaseName = makePrefixer("audioPage");

export default function AudioPage() {
  return (
    <Stack gap={"lg"} className={withBaseName()}>
      <Title order={1} ta="center">
        Audio Clips
      </Title>
      {audioClips.map((audio) => {
        const { title, description, audioSrc, imgSrc } = audio;
        return (
          <Card key={title}>
            <Flex gap={"lg"}>
              <CardContent className={withBaseName("card")}>
                <Stack gap={"md"}>
                  <Title>{title}</Title>
                  <Audio title={title} src={audioSrc} />
                  <Text size="lg" ta="left" style={{ overflow: "wrap" }}>
                    {description}
                  </Text>
                </Stack>
              </CardContent>
              <Image src={imgSrc} className={withBaseName("image")} />
            </Flex>
          </Card>
        );
      })}
    </Stack>
  );
}
