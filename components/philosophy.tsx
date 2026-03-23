import { FadeUp } from "./fade-up";

export function Philosophy() {
  return (
    <section
      id="about"
      className="relative w-full py-32 px-6 border-t border-white/5"
      style={{ background: "hsl(var(--background))" }}
    >
      {/* Subtle radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 50%, rgba(255,255,255,0.02) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-4xl mx-auto text-center">
        {/* Decorative oversized quote mark */}
        <span
          aria-hidden="true"
          className="absolute -top-14 left-1/2 -translate-x-1/2 select-none pointer-events-none leading-none"
          style={{
            fontFamily: "'Instrument Serif', serif",
            fontSize: "36rem",
            color: "rgba(255,255,255,0.06)",
            lineHeight: 1,
          }}
        >
          &ldquo;
        </span>

        <FadeUp>
          <blockquote
            className="relative text-3xl md:text-5xl font-normal text-white leading-snug"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            We believe the best tools disappear into the workflow. No noise. No
            clutter. Just clarity, built for the people who need it most.
          </blockquote>
        </FadeUp>

        <FadeUp delay={0.2}>
          <p className="mt-12 text-base leading-relaxed max-w-2xl mx-auto text-muted-foreground">
            intermac is a software studio based in Germany, building focused
            products at the intersection of AI and professional workflows.
            Founded with the belief that technology should serve depth, not
            distraction.
          </p>
        </FadeUp>
      </div>

      {/* Bottom divider */}
      <div className="absolute bottom-0 left-0 right-0 border-b border-white/5" />
    </section>
  );
}
