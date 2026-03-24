export function Footer() {
  const links = [
    { label: "Psynex", href: "https://psynex.de", external: true },
    { label: "Mocha", href: "https://mocha.de", external: true },
    { label: "Curadat", href: "https://curadat.com", external: true, muted: true, },
    {
      label: "GetSEO",
      href: "https://getseo.de",
      external: true,
      muted: true,
    },
    { label: "TecLinkz", href: "#", external: false, muted: true },
    { label: "Impressum", href: "/impressum", external: false },
    { label: "Datenschutz", href: "/datenschutz", external: false },
  ];

  return (
    <footer className="w-full py-12 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <p className="text-sm text-muted-foreground">&copy; 2026 intermac.dev</p>

        <nav className="flex flex-wrap items-center gap-6">
          {links.map((link) => (
            <span key={link.label} className="flex items-center gap-1.5">
              <a
                href={link.href}
                {...(link.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
              {"muted" in link && link.muted && (
                <span className="text-xs text-white/20">soon</span>
              )}
            </span>
          ))}
        </nav>
      </div>
    </footer>
  );
}
