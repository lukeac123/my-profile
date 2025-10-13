import { Title } from "@mantine/core";
import styles from "./page.module.css";
import { Suspense } from "react";
import dynamic from "next/dynamic";
import { BlogsFilter } from "./BlogsFilter";

const BlogList = dynamic(() => import("./BlogList"));

export default async function Page({
  searchParams,
}: {
  searchParams: Record<string, string>;
}) {
  const filterParams = await searchParams;
  return (
    <div className={styles.blogPage}>
      <Title ta="center" order={1}>
        Blog
      </Title>
      <BlogsFilter />
      {/* Lazy Load in Blogs List */}
      <Suspense fallback={<>.....Loading</>}>
        <BlogList category={filterParams.category ?? ""} />
      </Suspense>
    </div>
  );
}
