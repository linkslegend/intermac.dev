import type { MDXComponents } from "mdx/types";
import { YouTube } from "@/components/mdx/youtube";
import { Tweet } from "@/components/mdx/tweet";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    YouTube,
    Tweet,
  };
}
