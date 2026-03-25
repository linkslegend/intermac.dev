import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "intermac — Software Studio",
  description:
    "intermac is a software studio building focused products at the intersection of AI and professional workflows.",
  metadataBase: new URL("https://intermac.dev"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
      <script defer src="https://umami.intermac.dev/script.js" data-website-id="0409d360-d12e-4f6b-83eb-ea6df51c767c"></script>
    </html>
  );
}
