import { Title } from "@mantine/core";
import styles from "./page.module.css";
import { Suspense } from "react";
import { BlogsFilter } from "./BlogsFilter";
import BlogList from "./BlogList";

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
      {/* Fallback for Blogs List Fetch */}
      <Suspense fallback={<>.....Loading</>}>
        <BlogList category={filterParams.category ?? ""} />
      </Suspense>
    </div>
  );
}
