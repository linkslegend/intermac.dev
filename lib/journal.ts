export type PostCategory = "ENGINEERING" | "PRODUCT" | "INDUSTRY";

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
    slug: "real-time-transcription-dual-pass-ai",
    title: "How we built real-time transcription with dual-pass AI",
    excerpt:
      "A deep dive into our architecture using gpt-4o-mini for live polling and gpt-4o for final-pass transcription accuracy.",
    category: "ENGINEERING",
    date: "March 2026",
    published: true,
    content: `<p>Building real-time transcription that actually works in a clinical setting is harder than it sounds. The challenge isn't just accuracy — it's latency, speaker diarization, and the specific vocabulary of medical documentation. Here's how we approached it at Psynex and Curadat.</p>

<h2>The dual-pass architecture</h2>

<p>Our system uses two models in sequence. The first pass runs gpt-4o-mini during the live session — it's fast and cheap enough to poll every five seconds, giving the clinician a real-time transcript that's roughly 92% accurate. The second pass triggers when the session ends: gpt-4o takes the full audio and the rough transcript as context, producing the final corrected version with proper medical terminology and structured sections.</p>

<p>This split gives us the best of both worlds: responsive live feedback during the consultation, and high-accuracy final output for the documentation that ends up in the patient file. The latency on the live pass averages 800ms from speech to text — natural enough in practice that clinicians stop noticing it after a few sessions.</p>

<h2>What we learned about context</h2>

<p>The biggest surprise was how much context the model needs to handle German medical jargon correctly. A generic transcription model would hallucinate drug names or misidentify ICD codes. Feeding a short system prompt with specialty context — for example, "This is a psychotherapy session focused on CBT, patient presents with generalized anxiety" — before each polling call reduced terminology errors by 60% in internal testing. Small prompt investment, large accuracy return.</p>`,
  },
  {
    slug: "why-we-built-mocha",
    title: "Why we built Mocha — and what we learned launching in 2 weeks",
    excerpt:
      "From idea to paying customers: the story of building a multi-tenant testimonial platform from scratch.",
    category: "PRODUCT",
    date: "March 2026",
    published: true,
    content: `<p>In early 2026 we noticed the same pattern across three different client projects: every business wanted testimonials on their website, but the workflow was painful. Copy-pasting from email threads, screenshotting Slack messages, manually updating embeds. There had to be a better way.</p>

<h2>Two weeks, one product</h2>

<p>We gave ourselves a tight constraint: two weeks from idea to paying customers. That constraint was deliberate — we've seen too many studio projects die in planning. The scope was minimal: a magic link to collect testimonials, a simple embeddable widget, Stripe for billing. No CMS, no onboarding wizard, no analytics dashboard in v1.</p>

<p>The first paying customer signed up on day 11. They found us through a tweet about the widget design. By the end of week two we had eight paying accounts — enough signal to confirm the market was real and worth continuing.</p>

<h2>What we'd do differently</h2>

<p>The multi-tenant architecture was the right call early — isolating workspace data by tenant made GDPR compliance much cleaner. What we underestimated was the variety of embed contexts: customers wanted to drop testimonials into Webflow, Framer, React apps, and plain HTML pages. The iframe-based widget we shipped first covered 80% of cases; the JavaScript SDK we added in week three handled the rest. If we were starting again, we'd build the SDK first.</p>`,
  },
  {
    slug: "ai-german-healthcare-2026",
    title: "The state of AI in German healthcare: 2026 reality check",
    excerpt:
      "What's actually working, what's hype, and where the real opportunities are for medical AI in the DACH region.",
    category: "INDUSTRY",
    date: "February 2026",
    published: true,
    content: `<p>We've spent the last 18 months building AI tools for German healthcare professionals. Here's what we've actually learned about what works, what doesn't, and where the real market opportunity lies in the DACH region right now.</p>

<h2>What's actually working</h2>

<p>Documentation automation is the clear winner. Physicians and therapists spend 30–40% of their working hours on paperwork — session notes, discharge summaries, referral letters. These tasks are structured, repetitive, and high-stakes in ways that AI handles well. The ROI is obvious enough that adoption happens bottom-up: individual practitioners adopt tools like Psynex and Curadat personally, long before any institutional IT procurement conversation begins.</p>

<p>Diagnostic support is more complicated. The liability question isn't resolved, and German regulations are stricter than US equivalents. Most of what's currently marketed as "AI diagnostics" is closer to intelligent search over clinical literature — useful, but not transformative yet. The real breakthroughs there are 2–3 years out.</p>

<h2>Where the real opportunity is</h2>

<p>The DACH healthcare system is structurally fragmented — Kassenärztliche Vereinigungen, private insurers, hospital networks, and solo practitioners all operate on different systems with different incentives. That fragmentation is actually an opportunity. Tools that run in the browser, require no IT integration, and comply with German data protection law out of the box face almost no competition from legacy vendors. That's the space we're building in, and it's larger than it looks from the outside.</p>`,
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
  INDUSTRY: "rgba(56, 189, 248, 0.9)",
};
