import {
  Card as MantineCard,
  Group,
  Text,
  Menu,
  ActionIcon,
  Image,
  SimpleGrid,
  rem,
} from "@mantine/core";
// import { IconDots, IconEye, IconFileZip, IconTrash } from "@tabler/icons-react";
import { banners } from "../../utils/db";
import "./Card.component.css";

export type CardProps = {
  id: string;
  title: string;
  caption: string;
  headerImage: string;
  gridImages: Array<string>;
};

function getData(pageId: string) {
  const data = Object.values(banners).reduce(
    (results: any, card: CardProps) => {
      if (pageId === card.id) {
        return card;
      }
      return results;
    }
  );
  const title = data.title;
  const caption = data.caption;
  const imageSrc = data.imageSrc;
  const buttonLink = data.buttonLink;
  return { title, caption, imageSrc, buttonLink };
}

export const Card = ({
  headerImage,
  gridImages,
  title,
  caption,
}: CardProps) => {
  return (
    <MantineCard withBorder shadow="sm" radius="md" className="card">
      <MantineCard.Section mt="sm">
        <Image alt={"cardHeader-Image"} src={`${headerImage}`} />
      </MantineCard.Section>

      <MantineCard.Section inheritPadding mt="sm" pb="md">
        <SimpleGrid cols={3}>
          {gridImages.map((image) => (
            <Image alt={image} src={image} key={image} radius="sm" />
          ))}
        </SimpleGrid>
      </MantineCard.Section>

      <Text mt="sm" size="m">
        {title}
        <br />
        <Text span size="sm" c="dimmed">
          {caption}
        </Text>
      </Text>
    </MantineCard>
  );
};

{
  /* <Text span inherit c="var(--mantine-color-anchor)"> */
}
