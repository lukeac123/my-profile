import { Stack, Text, Title, Image } from "@mantine/core";
import { blogs } from "../../../utils/db";
import { Suspense } from "react";

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

export default function InsightsPage({ params }) {
  const blogData = getData(params.pageId);
  return (
    <Stack gap="0" align="center" style={{ width: "70%" }}>
      <Title order={1}> {blogData.location} </Title>
      <Text> {blogData.description} </Text>
      <Suspense fallback={<LoadingSpinner />}>
        <Image
          width={100}
          height={100}
          src={`/blogs/${blogData.imgSrc}`}
          style={{ width: "500px", height: "500px" }}
        />
      </Suspense>
    </Stack>
  );
}

function LoadingSpinner() {
  return <> ...loading </>;
}
