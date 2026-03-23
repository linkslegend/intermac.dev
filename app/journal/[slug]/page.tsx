import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { getAllPosts, getPostBySlug, CATEGORY_COLORS } from "@/lib/journal";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: `${post.title} — intermac Journal`,
    description: post.excerpt,
  };
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

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
          <div
            className="prose-journal"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </main>

      <Footer />
    </div>
  );
}
