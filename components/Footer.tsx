import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--line)]">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 md:flex-row md:items-center md:justify-between md:px-10">
        <p className="text-xs text-[var(--fg-muted)]">
          © {new Date().getFullYear()} MadebyAMW. Ibrahim Babatunde Orisunbare.
        </p>
        <div className="flex gap-6 text-xs text-[var(--fg-muted)]">
          <a
            href="https://instagram.com/madebyamw"
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-[var(--fg)]"
          >
            @madebyamw
          </a>
          <a
            href="mailto:artmindworks@gmail.com"
            className="transition-colors hover:text-[var(--fg)]"
          >
            artmindworks@gmail.com
          </a>
          <Link href="/contact" className="transition-colors hover:text-[var(--fg)]">
            Get in touch
          </Link>
        </div>
      </div>
    </footer>
  );
}
