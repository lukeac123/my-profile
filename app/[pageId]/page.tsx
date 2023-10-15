import { pages } from "../../utils/db";

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
  const data = getData(params.pageId);
  return <div> {data.title} </div>;
}
