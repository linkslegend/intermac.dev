import { Hero } from "@/components/hero";
import { Products } from "@/components/products";
import { JournalPreview } from "@/components/journal-preview";
import { Philosophy } from "@/components/philosophy";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { getAllPosts } from "@/lib/journal";

export default function Home() {
  const previewPosts = getAllPosts().slice(0, 3);

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
      <JournalPreview posts={previewPosts} />
      <Philosophy />
      <Contact />
      <Footer />
    </main>
  );
}
