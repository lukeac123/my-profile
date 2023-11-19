import { pages } from "../../utils/db";
import { Stack, Text } from "@mantine/core";

export type Page = {
  pageId: string;
  title: string;
  description: string;
};

function getData(pageId: string) {
  const data = Object.values(pages).reduce((results: any, page: Page) => {
    if (pageId === page.pageId) {
      return page;
    }
    return results;
  });
  return data;
}

export default function InsightsPage({ params }) {
  const pageData = getData(params.pageId);
  return (
    <Stack gap="0" align="center" style={{ width: "70%" }}>
      <Text> {pageData.title}</Text>
      <Text> {pageData.description}</Text>
    </Stack>
  );
}
