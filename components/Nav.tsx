"use client";

import Link from "next/link";
import { useState } from "react";

const LINKS = [
  { href: "/about", label: "About" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/logofolio", label: "Logofolio" },
  { href: "/branding", label: "Branding" },
  { href: "/social", label: "Social" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--line)] bg-[var(--bg)]/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-10">
        <Link
          href="/"
          className="font-[family-name:var(--font-display)] text-sm font-extrabold tracking-tight"
        >
          made by AMW
        </Link>

        <nav className="hidden gap-8 md:flex">
          {LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-[var(--fg-muted)] transition-colors hover:text-[var(--fg)]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          className="flex h-8 w-8 flex-col items-center justify-center gap-1.5 md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <span
            className={`h-px w-5 bg-[var(--fg)] transition-transform ${open ? "translate-y-[3px] rotate-45" : ""}`}
          />
          <span
            className={`h-px w-5 bg-[var(--fg)] transition-transform ${open ? "-translate-y-[3px] -rotate-45" : ""}`}
          />
        </button>
      </div>

      {open && (
        <nav className="flex flex-col border-t border-[var(--line)] px-6 py-4 md:hidden">
          {LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="py-3 text-sm text-[var(--fg-muted)] transition-colors hover:text-[var(--fg)]"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
