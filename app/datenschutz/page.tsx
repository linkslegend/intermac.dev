import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Datenschutz — intermac",
  description: "Datenschutzerklärung für intermac.dev",
};

export default function DatenschutzPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 w-full px-6 py-32">
        <div className="max-w-3xl mx-auto">
          <h1
            className="text-4xl md:text-5xl font-normal text-white mb-16"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            Datenschutzerklärung
          </h1>

          <div className="space-y-10 text-foreground/80 leading-relaxed">
            <section>
              <h2 className="text-lg font-medium text-foreground mb-3">
                1. Datenschutz auf einen Blick
              </h2>

              <h3 className="font-medium text-foreground/90 mb-2">
                Allgemeine Hinweise
              </h3>
              <p className="mb-6">
                Die folgenden Hinweise geben einen einfachen Überblick darüber,
                was mit Ihren personenbezogenen Daten passiert, wenn Sie diese
                Website besuchen. Personenbezogene Daten sind alle Daten, mit
                denen Sie persönlich identifiziert werden können.
              </p>

              <h3 className="font-medium text-foreground/90 mb-2">
                Datenerfassung auf dieser Website
              </h3>

              <p className="font-medium text-foreground/90 mb-1">
                Wer ist verantwortlich für die Datenerfassung auf dieser Website?
              </p>
              <p className="mb-6">
                Die Datenverarbeitung auf dieser Website erfolgt durch den
                Websitebetreiber. Dessen Kontaktdaten können Sie dem Impressum
                dieser Website entnehmen.
              </p>

              <p className="font-medium text-foreground/90 mb-1">
                Wie erfassen wir Ihre Daten?
              </p>
              <p className="mb-6">
                Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese
                mitteilen. Hierbei kann es sich z.B. um Daten handeln, die Sie
                in ein Kontaktformular eingeben. Andere Daten werden automatisch
                beim Besuch der Website durch unsere IT-Systeme erfasst. Das
                sind vor allem technische Daten (z.B. Internetbrowser,
                Betriebssystem oder Uhrzeit des Seitenaufrufs).
              </p>

              <p className="font-medium text-foreground/90 mb-1">
                Wofür nutzen wir Ihre Daten?
              </p>
              <p className="mb-6">
                Ein Teil der Daten wird erhoben, um eine fehlerfreie
                Bereitstellung der Website zu gewährleisten. Andere Daten können
                zur Analyse Ihres Nutzerverhaltens verwendet werden.
              </p>

              <p className="font-medium text-foreground/90 mb-1">
                Welche Rechte haben Sie bezüglich Ihrer Daten?
              </p>
              <p>
                Sie haben jederzeit das Recht unentgeltlich Auskunft über
                Herkunft, Empfänger und Zweck Ihrer gespeicherten
                personenbezogenen Daten zu erhalten. Sie haben außerdem ein
                Recht, die Berichtigung oder Löschung dieser Daten zu verlangen.
                Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie
                sich jederzeit an uns wenden.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-medium text-foreground mb-3">
                2. Hosting
              </h2>
              <p className="mb-4">
                Diese Website wird bei einem externen Dienstleister gehostet
                (Hoster). Die personenbezogenen Daten, die auf dieser Website
                erfasst werden, werden auf den Servern des Hosters gespeichert.
                Hierbei kann es sich v.a. um IP-Adressen, Kontaktanfragen,
                Meta- und Kommunikationsdaten, Vertragsdaten, Kontaktdaten,
                Namen, Webseitenzugriffe und sonstige Daten, die über eine
                Website generiert werden, handeln.
              </p>
              <p className="font-medium text-foreground/90 mb-1">
                Unser Hoster ist:
              </p>
              <p>
                Hetzner Online GmbH
                <br />
                Industriestr. 25
                <br />
                91710 Gunzenhausen
                <br />
                Deutschland
              </p>
            </section>

            <section>
              <h2 className="text-lg font-medium text-foreground mb-3">
                3. Allgemeine Hinweise und Pflichtinformationen
              </h2>

              <h3 className="font-medium text-foreground/90 mb-2">
                Datenschutz
              </h3>
              <p className="mb-6">
                Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen
                Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten
                vertraulich und entsprechend der gesetzlichen
                Datenschutzvorschriften sowie dieser Datenschutzerklärung.
              </p>

              <h3 className="font-medium text-foreground/90 mb-2">
                Hinweis zur verantwortlichen Stelle
              </h3>
              <p className="mb-2">
                Die verantwortliche Stelle für die Datenverarbeitung auf dieser
                Website ist:
              </p>
              <p>
                intermac systems
                <br />
                Norbert Doetsch
                <br />
                Sendnicher Str. 58a
                <br />
                56072 Koblenz
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
                4. Datenerfassung auf dieser Website
              </h2>

              <h3 className="font-medium text-foreground/90 mb-2">
                Server-Log-Dateien
              </h3>
              <p className="mb-4">
                Der Provider der Seiten erhebt und speichert automatisch
                Informationen in so genannten Server-Log-Dateien, die Ihr
                Browser automatisch an uns übermittelt. Dies sind:
              </p>
              <ul className="list-disc list-inside space-y-1 mb-4">
                <li>Browsertyp und Browserversion</li>
                <li>verwendetes Betriebssystem</li>
                <li>Referrer URL</li>
                <li>Hostname des zugreifenden Rechners</li>
                <li>Uhrzeit der Serveranfrage</li>
                <li>IP-Adresse</li>
              </ul>
              <p>
                Eine Zusammenführung dieser Daten mit anderen Datenquellen wird
                nicht vorgenommen.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-medium text-foreground mb-3">
                5. Kontakt
              </h2>
              <p>
                Bei Fragen zum Datenschutz erreichen Sie uns unter:
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
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
