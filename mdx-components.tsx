import type { MDXComponents } from "mdx/types";
import { Audio } from "./components";

// Create mappings from standard HTML to custom components e.g link => next/link
// or H2 => <Title>
const components: MDXComponents = { Audio };

export function useMDXComponents(): MDXComponents {
  return components;
}
