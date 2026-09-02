import Link from "next/link";
import type { ReactNode } from "react";

export function CaseStudyHero({
  eyebrow,
  title,
  tagline,
  theme,
}: {
  eyebrow: string;
  title: string;
  tagline: string;
  theme: string;
}) {
  return (
    <section className={`px-6 py-24 md:px-10 md:py-32 ${theme}`}>
      <div className="mx-auto max-w-4xl text-center">
        <p className="mb-6 text-sm opacity-70">{eyebrow}</p>
        <h1 className="font-[family-name:var(--font-display)] text-6xl font-extrabold tracking-tight md:text-8xl">
          {title}
        </h1>
        <p className="mx-auto mt-8 max-w-xl text-lg leading-relaxed opacity-90">
          {tagline}
        </p>
      </div>
    </section>
  );
}

export function CaseStudySection({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="mx-auto max-w-3xl px-6 py-14 md:px-10">
      <h2 className="mb-6 font-[family-name:var(--font-display)] text-2xl font-bold tracking-tight md:text-3xl">
        {title}
      </h2>
      <div className="flex flex-col gap-5 text-lg leading-relaxed text-[var(--fg-muted)]">
        {children}
      </div>
    </section>
  );
}

export function CaseStudyStats({
  stats,
}: {
  stats: { value: string; label: string }[];
}) {
  return (
    <section className="border-y border-[var(--line)]">
      <div className="mx-auto grid max-w-4xl grid-cols-1 divide-y divide-[var(--line)] px-6 sm:grid-cols-3 sm:divide-x sm:divide-y-0 md:px-10">
        {stats.map((s) => (
          <div key={s.label} className="flex flex-col gap-2 px-6 py-10 text-center">
            <span className="font-[family-name:var(--font-display)] text-4xl font-extrabold tracking-tight">
              {s.value}
            </span>
            <span className="text-sm text-[var(--fg-muted)]">{s.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export function CaseStudyNav({
  prev,
  next,
}: {
  prev?: { href: string; name: string };
  next?: { href: string; name: string };
}) {
  return (
    <nav className="mx-auto flex max-w-4xl items-center justify-between border-t border-[var(--line)] px-6 py-10 md:px-10">
      {prev ? (
        <Link
          href={prev.href}
          className="text-sm text-[var(--fg-muted)] transition-colors hover:text-[var(--fg)]"
        >
          ← {prev.name}
        </Link>
      ) : (
        <span />
      )}
      <Link
        href="/case-studies"
        className="text-sm text-[var(--fg-muted)] transition-colors hover:text-[var(--fg)]"
      >
        All case studies
      </Link>
      {next ? (
        <Link
          href={next.href}
          className="text-sm text-[var(--fg-muted)] transition-colors hover:text-[var(--fg)]"
        >
          {next.name} →
        </Link>
      ) : (
        <span />
      )}
    </nav>
  );
}
