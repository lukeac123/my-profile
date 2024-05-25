import { ReactNode } from "react";
import { Image, Paper, Text, Title, Stack, Flex } from "@mantine/core";
import { clsx } from "clsx";
import { makePrefixer } from "../../utils/makePrefixer";
import "./Banner.component.css";
import { AudioPlayer } from "../AudioPlayer";
import { HTMLAttributes } from "react";
import { relative } from "path";

export interface BannerProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  title?: string;
  caption?: string;
  audioSrc?: string;
  imgSrc?: string;
}

const withBaseName = makePrefixer("banner");

export const Banner = ({
  children,
  title,
  caption,
  audioSrc,
  imgSrc,
  className,
  ...rest
}: BannerProps) => {
  return (
    <Paper className={clsx(withBaseName(), className)} {...rest}>
      {/* <Flex> */}
      <div style={{ background: "pink", flexGrow: 1, height: "100%" }}>
        <div>Hi</div>
        {/* <Stack style={{ flexGrow: 1, background: "red" }}>
          <Title order={1} ta="left">
          {title}
          </Title>
          <Text size="lg" ta="left">
          {caption}
          </Text>
        </Stack> */}
        <div
          style={{
            background: "blue",
            height: "100%",
            alignItems: "flex-end",
          }}
        >
          Test
          {/* {imgSrc && (
            <Image src={imgSrc} style={{ width: "300px", height: "300px" }} />
            )}
          {audioSrc && <AudioPlayer src={audioSrc} />} */}
        </div>
      </div>
      {/* </Flex> */}
    </Paper>
  );
};
