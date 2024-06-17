"use client";
import { Stack, Text, Title, Flex, Image } from "@mantine/core";
import { AudioPlayer, Card, CardContent, CardTitle } from "../../components";
import { useViewportSize } from "@mantine/hooks";

const AudioClips = [
  {
    title: "Medillin",
    description:
      "Audio taken sitting in the center of the medina in Medillin. Walking through the local markets selling things ranging from fresh fruit ang veg, fake sliders and gucci belts, you can hear tourists bartering with the local venders. The sounds of mopeds and carts over the cobblestone streets ",
    audioSrc: "audio/yala-national-park.mp3",
    imageSrc: "me.jpg",
    audioVisulisation: false,
  },
  {
    title: "Bogota",
    description: "",
    audioSrc: "audio/yala-national-park.mp3",
    imageSrc: "",
    audioVisulisation: false,
  },
];

export default function AudioPage() {
  const { width } = useViewportSize();
  return (
    <Stack gap={"lg"}>
      <Title order={1} ta="center" className={"title"}>
        Audio Clips
      </Title>
      {AudioClips.map((audio) => {
        const { title, description, audioSrc, imageSrc } = audio;
        return (
          <Card>
            <Flex
              direction={{
                base: "column",
                xs: "column",
                sm: "column",
                md: "row",
                lg: "row",
                xl: "row",
              }}
              gap={"lg"}
            >
              <CardContent
                style={{
                  width: width > 992 ? "50%" : "100%",
                  display: "flex",
                  alignContent: "center",
                }}
              >
                <Stack gap={"md"}>
                  <CardTitle>{title}</CardTitle>
                  <Text size="lg" ta="left" style={{ overflow: "wrap" }}>
                    {description}
                  </Text>
                  <AudioPlayer title={title} src={audioSrc} />
                </Stack>
              </CardContent>
              <Image
                src={imageSrc}
                style={{ width: width > 992 ? "50%" : "100%" }}
              />
            </Flex>
          </Card>
        );
      })}
    </Stack>
  );
}
