import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Impressum — intermac",
  description: "Impressum und Angaben gemäß § 5 TMG für intermac.",
};

export default function ImpressumPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 w-full px-6 py-32">
        <div className="max-w-3xl mx-auto">
          <h1
            className="text-4xl md:text-5xl font-normal text-white mb-16"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            Impressum
          </h1>

          <div className="space-y-10 text-foreground/80 leading-relaxed">
            <section>
              <h2 className="text-lg font-medium text-foreground mb-3">
                Angaben gemäß § 5 TMG
              </h2>
              <p>
                intermac systems
                <br />
                Sendnicher Str. 58a
                <br />
                56072 Koblenz
                <br />
                Deutschland
              </p>
            </section>

            <section>
              <h2 className="text-lg font-medium text-foreground mb-3">
                Vertreten durch
              </h2>
              <p>Norbert Doetsch</p>
            </section>

            <section>
              <h2 className="text-lg font-medium text-foreground mb-3">
                Kontakt
              </h2>
              <p>
                Telefon: +49-151-2755-5942
                <br />
                E-Mail:{" "}
                <a
                  href="mailto:info@intermac.de"
                  className="hover:text-foreground transition-colors"
                >
                  info@intermac.de
                </a>
              </p>
            </section>

            <section>
              <h2 className="text-lg font-medium text-foreground mb-3">
                Umsatzsteuer-ID
              </h2>
              <p>
                Umsatzsteuer-Identifikationsnummer gemäß §27a
                Umsatzsteuergesetz:
                <br />
                DE178012433
              </p>
            </section>

            <section>
              <h2 className="text-lg font-medium text-foreground mb-3">
                Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
              </h2>
              <p>
                Norbert Doetsch
                <br />
                Sendnicher Str. 58a
                <br />
                56072 Koblenz
              </p>
            </section>

            <section>
              <h2 className="text-lg font-medium text-foreground mb-3">
                Haftungsausschluss
              </h2>

              <h3 className="font-medium text-foreground/90 mb-2">
                Haftung für Inhalte
              </h3>
              <p className="mb-6">
                Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt.
                Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte
                können wir jedoch keine Gewähr übernehmen.
              </p>

              <h3 className="font-medium text-foreground/90 mb-2">
                Haftung für Links
              </h3>
              <p className="mb-6">
                Unser Angebot enthält Links zu externen Webseiten Dritter, auf
                deren Inhalte wir keinen Einfluss haben. Für die Inhalte der
                verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber
                der Seiten verantwortlich.
              </p>

              <h3 className="font-medium text-foreground/90 mb-2">
                Urheberrecht
              </h3>
              <p>
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf
                diesen Seiten unterliegen dem deutschen Urheberrecht.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
