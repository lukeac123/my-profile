"use server";
import { compileMDX } from "next-mdx-remote/rsc";
import { promises as fs } from "fs";
import { useMDXComponents } from "../../mdx-components";
import { ReactElement } from "react";

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
