"use client";

import { useState } from "react";

export function MobileNav() {
  const [open, setOpen] = useState(false);

  const links = [
    { label: "Products", href: "#products" },
    { label: "About", href: "#about" },
    { label: "Journal", href: "/journal" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <div className="md:hidden">
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label="Toggle menu"
        className="flex flex-col gap-1.5 p-2 cursor-pointer"
      >
        <span
          className={`block h-px w-6 bg-white transition-all duration-300 origin-center ${
            open ? "rotate-45 translate-y-[3.5px]" : ""
          }`}
        />
        <span
          className={`block h-px w-6 bg-white transition-all duration-300 ${
            open ? "-rotate-45 -translate-y-[3.5px]" : ""
          }`}
        />
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex flex-col">
          {/* backdrop */}
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-md"
            onClick={() => setOpen(false)}
          />
          {/* panel */}
          <div className="relative z-10 ml-auto w-full max-w-sm h-full liquid-glass flex flex-col pt-24 px-8 gap-8">
            <button
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="absolute top-6 right-8 flex flex-col gap-1.5 p-2 cursor-pointer"
            >
              <span className="block h-px w-6 bg-white rotate-45 translate-y-[3.5px]" />
              <span className="block h-px w-6 bg-white -rotate-45 -translate-y-[3.5px]" />
            </button>
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-2xl font-normal text-white/80 hover:text-white transition-colors"
                style={{ fontFamily: "'Instrument Serif', serif" }}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="liquid-glass rounded-full px-6 py-2.5 text-sm text-white text-center mt-4 w-fit"
            >
              Get in Touch
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
