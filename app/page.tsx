import { Hero } from "@/components/hero";
import { Products } from "@/components/products";
import { JournalPreview } from "@/components/journal-preview";
import { Philosophy } from "@/components/philosophy";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main>
      <Hero />

      {/* Gradient fade from video hero to solid background */}
      <div
        className="-mt-32 h-32 relative z-10 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, transparent, hsl(var(--background)))",
        }}
      />

      <Products />
      <JournalPreview />
      <Philosophy />
      <Contact />
      <Footer />
    </main>
  );
}
