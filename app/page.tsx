import Link from "next/link";
import Image from "next/image";

const CAPABILITIES = [
  { n: "01", label: "Brand Strategy & Positioning" },
  { n: "02", label: "Design Systems & Identity Architecture" },
  { n: "03", label: "Brand & Visual Identity" },
  { n: "04", label: "Campaign & Content Direction" },
  { n: "05", label: "Packaging & Retail Identity" },
  { n: "06", label: "Production & Governance" },
];

const CASE_STUDIES = [
  {
    n: "01",
    href: "/case-studies/leaf-africa",
    name: "LEAF Africa",
    line: "Repositioning a pan-African business ecosystem — from platform to institution.",
  },
  {
    n: "02",
    href: "/case-studies/chyberrport",
    name: "ChyberrPort",
    line: "Giving form to an intangible idea: the exact moment learning turns into employment.",
  },
  {
    n: "03",
    href: "/case-studies/techland",
    name: "Techland",
    line: "Brand identity and pitch narrative for a Nigerian tech education venture.",
  },
];

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage: "url('/images/grid-bg.svg')",
            backgroundSize: "700px",
            backgroundRepeat: "repeat",
          }}
        />
        <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 pb-16 pt-20 md:grid-cols-[1.15fr_0.85fr] md:gap-8 md:px-10 md:pb-24 md:pt-28">
          <div>
            <p className="mb-6 text-sm text-[var(--fg-muted)]">Portfolio — MadebyAMW</p>
            <h1 className="font-[family-name:var(--font-display)] text-[13vw] font-extrabold leading-[1.05] tracking-normal md:text-[5.5rem]">
              ORISUNBARE
              <br />
              IBRAHIM
              <br />
              BABATUNDE
            </h1>
            <div className="mt-10 max-w-xl">
              <p className="text-lg leading-relaxed text-[var(--fg-muted)]">
                Creative Director building brands across strategy, identity, verbal
                identity, campaign direction, packaging, digital experience,
                production, and system design — with a computer science
                background as leverage, not a footnote.
              </p>
              <div className="mt-8 flex gap-4">
                <Link
                  href="/case-studies"
                  className="rounded-full bg-[var(--fg)] px-6 py-3 text-sm font-medium text-[var(--bg)] transition-opacity hover:opacity-90"
                >
                  View case studies
                </Link>
                <Link
                  href="/about"
                  className="rounded-full border border-[var(--line)] px-6 py-3 text-sm font-medium transition-colors hover:border-[var(--fg)]"
                >
                  About
                </Link>
              </div>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-sm md:max-w-none">
            <Image
              src="/images/headshot.png"
              alt="Ibrahim Babatunde Orisunbare"
              width={1422}
              height={1433}
              priority
              className="h-auto w-full"
            />
          </div>
        </div>
      </section>

      {/* Capability index */}
      <section className="border-y border-[var(--line)] bg-[#0f0f12]">
        <div className="mx-auto max-w-6xl px-6 py-16 md:px-10">
          <p className="mb-10 text-sm text-[var(--fg-muted)]">Capability</p>
          <div className="grid gap-px overflow-hidden rounded-lg bg-[var(--line)] md:grid-cols-2">
            {CAPABILITIES.map((c) => (
              <div
                key={c.n}
                className="flex items-baseline gap-4 bg-[#0f0f12] px-6 py-6"
              >
                <span className="font-[family-name:var(--font-ui)] text-sm text-[var(--fg-muted)]">
                  {c.n}
                </span>
                <span className="font-[family-name:var(--font-ui)] text-lg font-semibold">
                  {c.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case studies preview */}
      <section className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-28">
        <div className="mb-12 flex items-end justify-between">
          <h2 className="font-[family-name:var(--font-display)] text-3xl font-extrabold tracking-normal md:text-5xl">
            Case Studies
          </h2>
          <Link
            href="/case-studies"
            className="hidden text-sm text-[var(--fg-muted)] transition-colors hover:text-[var(--fg)] md:block"
          >
            View all
          </Link>
        </div>
        <div className="flex flex-col divide-y divide-[var(--line)] border-y border-[var(--line)]">
          {CASE_STUDIES.map((cs) => (
            <Link
              key={cs.href}
              href={cs.href}
              className="group flex flex-col gap-2 py-8 transition-colors hover:bg-white/[0.02] md:flex-row md:items-center md:gap-8"
            >
              <span className="font-[family-name:var(--font-ui)] text-sm text-[var(--fg-muted)] md:w-10">
                {cs.n}
              </span>
              <span className="font-[family-name:var(--font-ui)] text-2xl font-bold md:w-64">
                {cs.name}
              </span>
              <span className="text-[var(--fg-muted)] md:flex-1">{cs.line}</span>
              <span className="text-sm text-[var(--fg-muted)] transition-transform group-hover:translate-x-1">
                View case study
              </span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
