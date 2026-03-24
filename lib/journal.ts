import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";
import { type PostCategory, CATEGORY_COLORS } from "./journal-constants";

export type { PostCategory };
export { CATEGORY_COLORS };

export interface JournalPost {
  slug: string;
  title: string;
  excerpt: string;
  category: PostCategory;
  date: string;
  published: boolean;
  readingTime: string;
  content: string;
}

const JOURNAL_DIR = path.join(process.cwd(), "content/journal");

type ParsedPost = JournalPost & { _rawDate: string };

function parsePost(slug: string): ParsedPost | null {
  try {
    const filePath = path.join(JOURNAL_DIR, `${slug}.mdx`);
    const raw = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(raw);
    const rt = readingTime(content);
    const rawDate = data.date as string;
    const date = new Date(rawDate).toLocaleDateString("en-US", {
      month: "long",
      year: "numeric",
    });
    return {
      slug,
      title: data.title as string,
      excerpt: data.excerpt as string,
      category: data.category as PostCategory,
      date,
      published: (data.published as boolean) ?? true,
      readingTime: rt.text,
      content,
      _rawDate: rawDate,
    };
  } catch {
    return null;
  }
}

export function getAllSlugs(): string[] {
  try {
    return fs
      .readdirSync(JOURNAL_DIR)
      .filter((f) => f.endsWith(".mdx"))
      .map((f) => f.replace(/\.mdx$/, ""));
  } catch {
    return [];
  }
}

export function getAllPosts(): JournalPost[] {
  const posts = getAllSlugs()
    .map(parsePost)
    .filter((p): p is ParsedPost => p !== null && p.published);
  posts.sort((a, b) => b._rawDate.localeCompare(a._rawDate));
  return posts;
}

export function getPostBySlug(slug: string): JournalPost | null {
  const post = parsePost(slug);
  if (!post || !post.published) return null;
  return post;
}
