import { Button, Flex, Image, Text, Stack } from "@mantine/core";
import { banners } from "../../utils/db";
import "./Banner.component.css";

export type Banner = {
  id: string;
  title: string;
  caption: string;
  imageSrc: string;
  buttonLink: string;
};

function getData(pageId: string) {
  const data = Object.values(banners).reduce((results: any, banner: Banner) => {
    if (pageId === banner.id) {
      return banner;
    }
    return results;
  });
  const title = data.title;
  const caption = data.caption;
  const imageSrc = data.imageSrc;
  const buttonLink = data.buttonLink;
  return { title, caption, imageSrc, buttonLink };
}

export const Banner = () => {
  //   const { title, caption, imageSrc, buttonLink } = getData();

  return (
    <div className={"banner-container"}>
      <Image
        src="/banner-image.jpg"
        h={"100%"}
        style={{ position: "absolute" }}
      />
      <Flex
        justify={"flex-end"}
        align={"end"}
        style={{
          position: "relative",
          padding: "50px",
          height: "100%",
          width: "100%",
        }}
      >
        <Stack align="flex-end" justify="end" style={{ width: "30%" }}>
          <Text ta="right"> A World in Colour </Text>
          <Text ta="right">
            Snippets of audio from around the world, condensed into a single
            visilisation
          </Text>
          <Button>Explore</Button>
        </Stack>
      </Flex>
    </div>
  );
};
