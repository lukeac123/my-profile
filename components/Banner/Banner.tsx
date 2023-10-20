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

//TDOD: On hover increase the foucs on the image

export const Banner = () => {
  //   const { title, caption, imageSrc, buttonLink } = getData();

  const clickHandler = () => {
    console.log("hi");
  };

  const imageHeight = "70%";
  const imageWidth = "90%";

  return (
    <Flex className={"banner-container"} align={"center"} justify={"center"}>
      <Image
        onClick={() => clickHandler()}
        className={"banner-image"}
        alt={"image alt"}
        src="/banner-image.jpg"
        h={imageHeight}
        w={imageWidth}
        style={{ position: "absolute" }}
      />
      <Flex
        align={"flex-end"}
        justify={"flex-end"}
        style={{
          zIndex: 1,
          width: imageWidth,
          height: imageHeight,
        }}
      >
        <Stack className={"banner-text"} align="center">
          <Text ta="center"> A World in Colour </Text>
          <Text ta="center">
            Snippets of audio from around the world, condensed into a single
            visilisation
          </Text>
        </Stack>
      </Flex>
    </Flex>
  );
};
