import Link from "next/link";
import { MobileNav } from "./mobile-nav";

const NAV_LINKS = [
  { label: "Products", href: "/#products" },
  { label: "About", href: "/#about" },
  { label: "Journal", href: "/journal" },
  { label: "Contact", href: "/#contact" },
];

interface NavbarProps {
  transparent?: boolean;
}

export function Navbar({ transparent = false }: NavbarProps) {
  return (
    <nav
      className={
        transparent
          ? "relative z-10 w-full"
          : "sticky top-0 z-50 w-full border-b border-white/5"
      }
      style={
        transparent
          ? {}
          : {
              background: "hsla(var(--background) / 0.85)",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
            }
      }
    >
      <div className="max-w-7xl mx-auto px-8 py-6 flex items-center justify-between">
        <Link
          href="/"
          className="text-3xl tracking-tight text-white select-none"
          style={{ fontFamily: "'Instrument Serif', serif" }}
        >
          intermac.dev
        </Link>

        <ul className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <Link
            href="/#contact"
            className="hidden md:inline-flex liquid-glass rounded-full px-6 py-2.5 text-sm text-white hover:opacity-90 transition-opacity"
          >
            Get in Touch
          </Link>
          <MobileNav />
        </div>
      </div>
    </nav>
  );
}
