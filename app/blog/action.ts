"use server";
import { compileMDX } from "next-mdx-remote/rsc";
import { promises as fs } from "fs";
import { useMDXComponents } from "../../mdx-components";
import { ReactElement } from "react";
import path from "path";

export type FrontMatterType = {
  id: string;
  title: string;
  caption: string;
  disabled: boolean;
  category: "coding" | "travel" | "general";
};

export async function parseMDX(blogPath: string): Promise<{
  frontmatter: FrontMatterType;
  content: ReactElement;
}> {
  const fileContent = await fs.readFile(blogPath);

  const { frontmatter, content } = await compileMDX({
    source: fileContent,
    options: { parseFrontmatter: true },
    components: useMDXComponents(),
  });
  //@ts-ignore
  return { frontmatter, content };
}

export async function getBlogs() {
  const blogsDir = path.join(process.cwd(), "public/posts");
  const blogs = await fs.readdir(blogsDir);

  const blogsData = Promise.all(
    blogs.map(async (blog) => {
      const blogPath = path.join(process.cwd(), `public/posts/${blog}`);
      return await parseMDX(blogPath);
    })
  );

  return blogsData;
}
