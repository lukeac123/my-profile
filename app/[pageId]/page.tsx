export type Page = {
  pageId: string;
  title: string;
  description: string;
};

function getData(pageId: string) {
  const pageData = Object.values(insightPages).reduce(
    (results: any, page: Page) => {
      if (pageId === page.pageId) {
        return page;
      }
      return results;
    }
  );
  return pageData;
}

export default function InsightsPage({ params }) {
  const data = getData(params.pageId);
  return <div> {data.title} </div>;
}

const insightPages = [
  {
    pageId: "projects",
    title: "Projects",
    description: "list of all the projetcts you are doing",
  },
  {
    pageId: "about",
    title: "About",
    description: "picture of you and description of what you're trying to do",
  },
  {
    pageId: "cv",
    title: "CV",
    description: "Add you CV here with a download link",
  },
];
