"use client";

import Link from "next/link";
import { FadeUp } from "./fade-up";
import { CATEGORY_COLORS } from "@/lib/journal-constants";
import type { JournalPost } from "@/lib/journal";

function JournalCard({
  post,
  index,
}: {
  post: JournalPost;
  index: number;
}) {
  return (
    <FadeUp delay={index * 0.12}>
      <Link
        href={`/journal/${post.slug}`}
        className="block h-full"
        aria-label={post.title}
      >
        <article className="liquid-glass card-journal rounded-2xl p-7 flex flex-col gap-4 h-full cursor-pointer">
          {/* Category tag */}
          <span
            className="text-xs tracking-widest font-medium uppercase"
            style={{ color: CATEGORY_COLORS[post.category] }}
          >
            {post.category}
          </span>

          {/* Title */}
          <h3
            className="text-xl font-normal text-white leading-snug line-clamp-2"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            {post.title}
          </h3>

          {/* Excerpt */}
          <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2 flex-1">
            {post.excerpt}
          </p>

          {/* Date + reading time */}
          <p className="text-xs text-muted-foreground mt-auto pt-2 border-t border-white/5">
            {post.date} · {post.readingTime}
          </p>
        </article>
      </Link>
    </FadeUp>
  );
}

export function JournalPreview({ posts }: { posts: JournalPost[] }) {
  return (
    <section
      id="journal"
      className="w-full py-24 px-6 border-t border-white/5"
      style={{ background: "hsl(var(--background))" }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <FadeUp className="text-center mb-14">
          <h2
            className="text-4xl md:text-5xl font-normal text-white"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            Journal
          </h2>
          <p className="mt-4 text-base text-muted-foreground">
            Thoughts on building, shipping, and everything in between.
          </p>
        </FadeUp>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {posts.map((post, i) => (
            <JournalCard key={post.slug} post={post} index={i} />
          ))}
        </div>

        {/* View all */}
        <FadeUp delay={0.35} className="text-center mt-12">
          <Link
            href="/journal"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1"
          >
            View all posts →
          </Link>
        </FadeUp>
      </div>
    </section>
  );
}
