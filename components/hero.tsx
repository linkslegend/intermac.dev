import { Navbar } from "./navbar";

const VIDEO_URL = "https://intermac-files.b-cdn.net/video/intermac_hero_video_grokai.mp4";

//   "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260314_131748_f2ca2a28-fed7-44c8-b9a9-bd9acdd5ec31.mp4";

export function Hero() {
  return (
    <section className="relative w-full min-h-screen flex flex-col overflow-hidden">
      {/* Background video */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src={VIDEO_URL} type="video/mp4" />
      </video>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/20 z-0" />

      {/* Navigation */}
      <Navbar transparent />

      {/* Hero content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center flex-1 px-6 pt-16 pb-40">
        <h1
          className="animate-fade-rise text-5xl sm:text-7xl md:text-8xl leading-[0.95] font-normal text-white"
          style={{
            fontFamily: "'Instrument Serif', serif",
            letterSpacing: "-2.46px",
          }}
        >
          Where{" "}
          <em className="not-italic text-muted-foreground">precision</em> meets{" "}
          <em className="not-italic text-muted-foreground">imagination.</em>
        </h1>

        <p className="animate-fade-rise-delay text-muted-foreground max-w-2xl mt-8 text-base sm:text-lg leading-relaxed">
          We build focused software for professionals who value clarity. From
          AI-powered clinical tools to platforms that amplify trust — every
          product starts with deep understanding.
        </p>

        <a
          href="#products"
          className="animate-fade-rise-delay-2 liquid-glass rounded-full px-14 py-5 text-base text-white mt-12 hover:scale-[1.03] transition-transform duration-300 inline-block"
        >
          Explore Our Work
        </a>
      </div>
    </section>
  );
}
