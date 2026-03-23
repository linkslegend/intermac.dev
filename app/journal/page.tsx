import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { getAllPosts, CATEGORY_COLORS } from "@/lib/journal";

export const metadata: Metadata = {
  title: "Journal — intermac",
  description:
    "Thoughts on building, shipping, and everything in between. Engineering deep-dives, product stories, and industry perspectives from intermac.",
};

export default function JournalPage() {
  const posts = getAllPosts();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 w-full px-6 py-20">
        <div className="max-w-5xl mx-auto">
          {/* Page header */}
          <div className="mb-16">
            <h1
              className="text-5xl md:text-7xl font-normal text-white leading-none"
              style={{ fontFamily: "'Instrument Serif', serif" }}
            >
              Journal
            </h1>
            <p className="mt-4 text-base text-muted-foreground max-w-xl">
              Thoughts on building, shipping, and everything in between.
            </p>
          </div>

          {/* Posts grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/journal/${post.slug}`}
                className="block group"
                aria-label={post.title}
              >
                <article className="liquid-glass card-journal rounded-2xl p-8 flex flex-col gap-4 h-full cursor-pointer">
                  <span
                    className="text-xs tracking-widest font-medium uppercase"
                    style={{ color: CATEGORY_COLORS[post.category] }}
                  >
                    {post.category}
                  </span>

                  <h2
                    className="text-2xl font-normal text-white leading-snug"
                    style={{ fontFamily: "'Instrument Serif', serif" }}
                  >
                    {post.title}
                  </h2>

                  <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                    {post.excerpt}
                  </p>

                  <p className="text-xs text-muted-foreground mt-auto pt-4 border-t border-white/5">
                    {post.date}
                  </p>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
