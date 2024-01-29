import { Stack, Text, Title, Image, Card, Flex } from "@mantine/core";
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
    <Stack gap="lg" align="center" style={{ width: "90%" }}>
      <Title order={1}> {blogData.location} </Title>
      <Flex direction={"row"} gap={"xl"}>
        <Stack>
          <Card shadow="sm" padding="lg" radius="md" withBorder>
            <Text> {blogData.description} </Text>
          </Card>
          <Card shadow="sm" padding="lg" radius="md" withBorder>
            <Suspense fallback={<LoadingSpinner />}>
              Picture of the Day
              <Image
                src={`/blogs/${blogData.imgSrc}`}
                style={{ width: "100%" }}
              />
            </Suspense>
          </Card>
        </Stack>
        <Stack>
          <Card shadow="sm" padding="lg" radius="md" withBorder>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2480.191219097855!2d-0.10831542318198292!3d51.564727971826485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761b9b2e08a38b%3A0xba5d26747ab58306!2sFinsbury%20Park!5e0!3m2!1sen!2suk!4v1705690477712!5m2!1sen!2suk"
              width="600"
              height="450"
              // style="border:0;"
              // allowfullscreen=""
              loading="lazy"
              // referrerpolicy="no-referrer-when-downgrade"
            />
          </Card>
          <audio style={{ width: "100%" }} controls src=""></audio>
        </Stack>
      </Flex>
    </Stack>
  );
}

function LoadingSpinner() {
  return <> ...loading </>;
}
