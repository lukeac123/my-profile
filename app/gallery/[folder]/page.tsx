import { Stack, Text, Image, Title } from "@mantine/core";

export type Page = {
  pageId: string;
  title: string;
  description: string;
};

function getData(pageId: string) {
  // const data = Object.values(pages).reduce((results: any, page: Page) => {
  //   if (pageId === page.pageId) {
  //     return page;
  //   }
  //   return results;
  // });
  // return data;
  return "helloWolrd";
}

export default function PhotoPage({ params }) {
  const galleryFolder = getData(params.folder);
  console.log(params.folder);
  return (
    <Stack gap="0" align="center" style={{ width: "70%" }}>
      <Title />
      <Image />
    </Stack>
  );
}
