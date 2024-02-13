import { Stack, Text, Title, Image, Card, Flex } from "@mantine/core";
import { blogs } from "../../../utils/db";
import { Suspense } from "react";
import { AudioPlayer } from "../../../components";

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
          <Card shadow="sm" padding="lg" radius="md" withBorder>
            <Text> {blogData.description} </Text>
          </Card>
          <Card shadow="sm" padding="lg" radius="md" withBorder>
            {/* <Suspense fallback={<LoadingSpinner />}> */}
            Picture of the Day
            <Image
              src={`/blogs/${blogData.imgSrc}`}
              // style={{ width: "100%" }}
            />
            {/* </Suspense> */}
          </Card>
        </Stack>
        {/* Copy the same implementation for the breakpoints using the hook to define the % widths in css - alretatively could use media queries */}
        <Stack>
          <Card shadow="sm" padding="lg" radius="md" withBorder>
            <iframe src={blogData.googleMapsIframeUrl} loading="lazy" />
          </Card>
          <Card shadow="sm" padding="lg" radius="md" withBorder>
            <AudioPlayer
              title={blogData.audioTitle}
              src={`/blogs/${blogData.audioSrc}`}
            />
          </Card>
        </Stack>
      </Flex>
    </Stack>
  );
}

function LoadingSpinner() {
  return <> ...loading </>;
}
