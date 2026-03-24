"use client";

import { Brain, Star, Stethoscope, BarChart3, Link as LinkIcon, type LucideIcon } from "lucide-react";
import { FadeUp } from "./fade-up";

interface Feature {
  text: string;
}

interface Product {
  name: string;
  tagline: string;
  description: string;
  features: Feature[];
  Icon: LucideIcon;
  accentClass: string;
  iconBg: string;
  iconColor: string;
  href?: string;
  comingSoon?: boolean;
}

const PRODUCTS: Product[] = [
  {
    name: "Psynex",
    tagline: "AI-powered documentation for psychotherapists",
    description:
      "Psynex removes the documentation burden from clinical practice. Record sessions, generate compliant reports, and focus on what matters — your patients.",
    features: [
      { text: "Transcription & Dictation" },
      { text: "AI Documentation" },
      { text: "Context Chat" },
      { text: "OCR & Handwriting" },
      { text: "Evidence Research" },
      { text: "AI Analysis" },
      { text: "Multilingual (DE, EN)" },
      { text: "Browser-based, no installation" },
    ],
    Icon: Brain,
    accentClass: "card-amber",
    iconBg: "rgba(251, 191, 36, 0.1)",
    iconColor: "rgba(251, 191, 36, 0.8)",
    href: "https://psynex.de",
  },
  {
    name: "Mocha",
    tagline: "Testimonial collection & display",
    description:
      "Mocha turns customer trust into your most powerful growth lever. Collect, manage, and display social proof that converts — across every channel.",
    features: [
      { text: "Collect video & text testimonials" },
      { text: "Embeddable widget" },
      { text: "Import from other sources" },
      { text: "Build in designer" },
      { text: "Browser-based, no installation" },
    ],
    Icon: Star,
    accentClass: "card-rose",
    iconBg: "rgba(244, 114, 100, 0.1)",
    iconColor: "rgba(244, 114, 100, 0.8)",
    href: "https://mocha.de",
  },
  {
    name: "Curadat",
    tagline: "AI documentation for all medical specialties",
    description:
      "Curadat transcribes patient conversations automatically and generates structured medical documentation — so you can focus on what matters.",
    features: [
      { text: "Transcription & Dictation" },
      { text: "AI-structured medical reports" },
      { text: "Multilingual (DE, EN)" },
      { text: "Browser-based, no installation" },
    ],
    Icon: Stethoscope,
    accentClass: "card-sky",
    iconBg: "rgba(56, 189, 248, 0.1)",
    iconColor: "rgba(56, 189, 248, 0.8)",
    href: "https://curadat.com",
    comingSoon: true,
  },
  {
    name: "GetSEO",
    tagline: "SEO market intelligence for data-driven growth",
    description:
      "Track keyword rankings, monitor competitors, discover content gaps, and generate optimized content — all from one dashboard.",
    features: [
      { text: "Keyword rank tracking" },
      { text: "Competitor monitoring" },
      { text: "Content gap analysis" },
      { text: "AI content engine" },
    ],
    Icon: BarChart3,
    accentClass: "card-teal",
    iconBg: "rgba(45, 212, 191, 0.08)",
    iconColor: "rgba(45, 212, 191, 0.6)",
    href: "https://getseo.de",
    comingSoon: true,
  },
  {
    name: "TecLinkz",
    tagline: "AI-powered backlink automation for startups",
    description:
      "Paste your URL, and TecLinkz builds your company profile, then creates profiles and posts across 30+ platforms — Crunchbase, Medium, Product Hunt, and more — with human review before every submission.",
    features: [
      { text: "AI site analysis & profile builder" },
      { text: "30+ platform automation" },
      { text: "Human-in-the-loop review" },
      { text: "Browser agent submissions" },
    ],
    Icon: LinkIcon,
    accentClass: "card-purple",
    iconBg: "rgba(168, 85, 247, 0.1)",
    iconColor: "rgba(168, 85, 247, 0.7)",
    comingSoon: true,
  },
];

const LIVE_PRODUCTS = PRODUCTS.filter((p) => !p.comingSoon);
const SOON_PRODUCTS = PRODUCTS.filter((p) => p.comingSoon);

function ProductCard({
  product,
  index,
}: {
  product: Product;
  index: number;
}) {
  const { Icon } = product;

  const cardClass = product.comingSoon
    ? "liquid-glass-muted rounded-3xl p-8 md:p-10 flex flex-col gap-5 h-full opacity-65"
    : `liquid-glass ${product.accentClass} rounded-3xl p-8 md:p-10 flex flex-col gap-5 h-full`;

  const cardFooter = product.comingSoon ? (
    <span className="text-xs text-muted-foreground tracking-widest uppercase">
      Coming Soon
    </span>
  ) : (
    <a
      href={product.href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-sm text-white/70 hover:text-white transition-colors inline-flex items-center gap-1"
    >
      Learn more →
    </a>
  );

  return (
    <FadeUp delay={index * 0.1}>
      <div className={cardClass}>
        {/* Icon */}
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
          style={{ background: product.iconBg }}
        >
          <Icon size={18} style={{ color: product.iconColor }} strokeWidth={1.5} />
        </div>

        {/* Name + coming soon badge */}
        <div className="flex items-start justify-between gap-3">
          <span
            className="text-4xl md:text-5xl font-normal text-white leading-none"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            {product.name}
          </span>
          {product.comingSoon && (
            <span className="mt-1 shrink-0 liquid-glass rounded-full px-3 py-1 text-xs text-muted-foreground">
              Soon
            </span>
          )}
        </div>

        {/* Tagline */}
        <p className="text-sm text-muted-foreground leading-relaxed">
          {product.tagline}
        </p>

        {/* Description */}
        <p className="text-sm leading-relaxed text-white/40">
          {product.description}
        </p>

        {/* Features */}
        <ul className="flex flex-col gap-2 mt-1">
          {product.features.map((f) => (
            <li
              key={f.text}
              className="flex items-center gap-3 text-sm text-muted-foreground"
            >
              <span className="w-1 h-1 rounded-full bg-white/30 shrink-0" />
              {f.text}
            </li>
          ))}
        </ul>

        {/* Footer */}
        <div className="mt-auto pt-4">{cardFooter}</div>
      </div>
    </FadeUp>
  );
}

export function Products() {
  return (
    <section
      id="products"
      className="relative w-full py-32 px-6"
      style={{ background: "hsl(var(--background))" }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Section heading */}
        <FadeUp className="text-center mb-16">
          <h2
            className="text-4xl md:text-5xl font-normal text-white"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            What we&apos;re building
          </h2>
          <p className="mt-4 text-base text-muted-foreground">
            Focused products for professionals who demand clarity.
          </p>
        </FadeUp>

        {/* Live products: 1-col mobile → 2-col md+ */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {LIVE_PRODUCTS.map((product, i) => (
            <ProductCard key={product.name} product={product} index={i} />
          ))}
        </div>

        {/* Coming soon: 1-col mobile → 2-col md → 3-col lg */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SOON_PRODUCTS.map((product, i) => (
            <ProductCard
              key={product.name}
              product={product}
              index={LIVE_PRODUCTS.length + i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
