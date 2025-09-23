import type { MDXComponents } from "mdx/types";

// Create mappings from standard HTML to custom components e.g link => next/link
// or H2 => <Title>
const components: MDXComponents = {};

export function useMDXComponents(): MDXComponents {
  return components;
}
