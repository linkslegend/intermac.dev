export type PostCategory = "ENGINEERING" | "PRODUCT" | "FOUNDER" | "INDUSTRY";

export interface JournalPost {
  slug: string;
  title: string;
  excerpt: string;
  category: PostCategory;
  date: string;
  content: string;
  published: boolean;
}

export const POSTS: JournalPost[] = [
  {
    slug: "shipping-saas-in-2-weeks-mocha",
    title: "Shipping a SaaS in 2 weeks: lessons from building Mocha",
    excerpt:
      "How we went from idea to paying customers in 14 days — our process for rapid product development with Next.js, Stripe, and BunnyCDN.",
    category: "PRODUCT",
    date: "March 2026",
    published: true,
    content: `<p>Coming soon.</p>`,
  },
  {
    slug: "dual-pass-transcription-real-time-medical-ai",
    title: "Dual-pass transcription: how we handle real-time medical AI",
    excerpt:
      "Why we run two AI models in sequence — one for speed, one for accuracy — and what we learned about German medical terminology along the way.",
    category: "ENGINEERING",
    date: "March 2026",
    published: true,
    content: `<p>Coming soon.</p>`,
  },
  {
    slug: "building-for-german-healthcare-bootstrapped",
    title: "Building for the German healthcare market as a bootstrapped founder",
    excerpt:
      "DSGVO, KBV compliance, medical vocabulary, and the reality of selling AI tools to therapists and doctors in the DACH region.",
    category: "FOUNDER",
    date: "February 2026",
    published: true,
    content: `<p>Coming soon.</p>`,
  },
];

export function getAllPosts(): JournalPost[] {
  return POSTS.filter((p) => p.published);
}

export function getPostBySlug(slug: string): JournalPost | undefined {
  return POSTS.find((p) => p.slug === slug && p.published);
}

export const CATEGORY_COLORS: Record<PostCategory, string> = {
  ENGINEERING: "rgba(251, 191, 36, 0.9)",
  PRODUCT: "rgba(244, 114, 100, 0.9)",
  FOUNDER: "rgba(167, 139, 250, 0.9)",
  INDUSTRY: "rgba(56, 189, 248, 0.9)",
};
