"use client";
import { Stack, Text, Title, Image, Flex } from "@mantine/core";
import { blogs } from "../../../utils/db";
import { Suspense } from "react";
import { AudioPlayer, Card, Moodcheck } from "../../../components";
import "./page.css";

export type Page = {
  pageId: string;
  title: string;
  description: string;
  link?: string;
};

function getData(pageId: string) {
  const data = Object.values(blogs).reduce((results: any, page: Page) => {
    if (pageId === page.link) {
      return page;
    }
    return results;
  });
  return data;
}

export default function BlogPage({ params }) {
  const blogData = getData(params.pageId);
  return (
    <Stack gap="lg" align="center" style={{ width: "80%" }}>
      <Title order={1}> {blogData.location} </Title>
      <Flex
        direction={{
          base: "column",
          xs: "column",
          sm: "column",
          md: "row",
          lg: "row",
          xl: "row",
        }}
        gap={"xl"}
      >
        <Stack>
          <Card>
            <Text> {blogData.description} </Text>
          </Card>
          <Card>
            <Suspense fallback={<LoadingSpinner />}>
              Picture of the Day
              <Image src={`/blogs/${blogData.imgSrc}`} />
            </Suspense>
          </Card>
        </Stack>
        <Stack>
          <Card>
            <iframe src={blogData.googleMapsIframeUrl} loading="lazy" />
          </Card>
          <Card>
            <AudioPlayer
              title={blogData.audioTitle}
              src={`/blogs/${blogData.audioSrc}`}
            />
          </Card>
          <Moodcheck emotion="happy" />
        </Stack>
      </Flex>
    </Stack>
  );
}

function LoadingSpinner() {
  return <> ...loading </>;
}
