import path from "path";
import { promises as fs } from "fs";
import styles from "./page.module.css";

import { Text, Title } from "@mantine/core";
import { FrontMatterType, parseMDX } from "../action";
import { ReactElement } from "react";

interface BlogType {
  id: number;
  disabled?: boolean;
  title: string;
  caption: string;
  location?: string;
  date?: string;
  content: {};
}

// Static pages generated at build time
export async function generateStaticParams() {
  const blogs = await fs.readdir(path.join(process.cwd(), "posts"));
  return blogs.map((blog) => ({
    blog: blog,
  }));
}

// export const revalidate = 3600; // Regenerate pages every hour, could put this in the fetch when content moved to CMS

const BlogPage = async ({ params }: { params: Promise<{ blog: any }> }) => {
  const { blog }: { blog: string } = await params;
  const blogPath = path.join(process.cwd(), `posts/${blog}.mdx`);

  const { content }: { frontmatter: FrontMatterType; content: ReactElement } =
    await parseMDX(blogPath);

  return <div className={styles.blogPage}>{content}</div>;
};

export default BlogPage;
