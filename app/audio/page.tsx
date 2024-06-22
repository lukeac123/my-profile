"use client";
import { Stack, Text, Title, Flex, Image } from "@mantine/core";
import { Audio, Card, CardContent, CardTitle } from "../../components";
import { useViewportSize } from "@mantine/hooks";
import { audioClips } from "../../utils";

export default function AudioPage() {
  const { width } = useViewportSize();
  return (
    <Stack gap={"lg"}>
      <Title order={1} ta="center" className={"title"}>
        Audio Clips
      </Title>
      {audioClips.map((audio) => {
        const { title, description, audioSrc, imageSrc } = audio;
        return (
          <Card key={title}>
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
                  <Audio title={title} src={audioSrc} />
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
