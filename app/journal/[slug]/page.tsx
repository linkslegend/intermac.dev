import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { getAllSlugs, getPostBySlug, CATEGORY_COLORS } from "@/lib/journal";
import { YouTube } from "@/components/mdx/youtube";
import { Tweet } from "@/components/mdx/tweet";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: `${post.title} — intermac Journal`,
    description: post.excerpt,
  };
}

const mdxComponents = { YouTube, Tweet };

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  // Dynamic import of compiled MDX
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { default: PostContent } = (await import(
    `@/content/journal/${slug}.mdx`
  )) as { default: React.ComponentType<{ components?: Record<string, unknown> }> };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 w-full px-6 py-16">
        <div className="max-w-3xl mx-auto">
          {/* Back link */}
          <Link
            href="/journal"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-12"
          >
            ← Back to Journal
          </Link>

          {/* Meta */}
          <div className="flex items-center gap-4 mb-6">
            <span
              className="text-xs tracking-widest font-medium uppercase"
              style={{ color: CATEGORY_COLORS[post.category] }}
            >
              {post.category}
            </span>
            <span className="text-xs text-white/20">·</span>
            <span className="text-xs text-muted-foreground">{post.date}</span>
            <span className="text-xs text-white/20">·</span>
            <span className="text-xs text-muted-foreground">
              {post.readingTime}
            </span>
          </div>

          {/* Title */}
          <h1
            className="text-4xl md:text-5xl font-normal text-white leading-tight mb-12"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            {post.title}
          </h1>

          {/* Divider */}
          <div className="border-t border-white/8 mb-12" />

          {/* Post body */}
          <div className="prose-journal">
            <PostContent components={mdxComponents} />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
