import { FadeUp } from "./fade-up";

export function Contact() {
  return (
    <section
      id="contact"
      className="w-full py-24 px-6"
      style={{ background: "hsl(var(--background))" }}
    >
      <div className="max-w-3xl mx-auto text-center">
        <FadeUp>
          <h2
            className="text-3xl md:text-5xl font-normal text-white"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            Let&apos;s build something together
          </h2>
        </FadeUp>

        <FadeUp delay={0.15}>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground">
            Whether you&apos;re a potential customer, partner, or just curious —
            we&apos;d love to hear from you.
          </p>
        </FadeUp>

        <FadeUp delay={0.3}>
          {/* Thin decorative divider */}
          <div className="flex items-center gap-4 my-10 max-w-xs mx-auto">
            <div className="flex-1 h-px bg-white/8" />
            <span className="text-white/20 text-xs tracking-widest uppercase">reach out</span>
            <div className="flex-1 h-px bg-white/8" />
          </div>

          <a
            href="mailto:hello@intermac.dev"
            className="liquid-glass btn-contact rounded-full px-14 py-5 text-base text-white inline-block"
          >
            hello@intermac.dev
          </a>
        </FadeUp>
      </div>
    </section>
  );
}
