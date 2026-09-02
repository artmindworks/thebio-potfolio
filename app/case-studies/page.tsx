import Link from "next/link";

const CASE_STUDIES = [
  {
    n: "01",
    href: "/case-studies/leaf-africa",
    name: "LEAF Africa",
    tag: "Brand strategy · Organizational repositioning",
    line: "Full brand direction through organizational repositioning — from LEADWITHYES to a pan-African business ecosystem.",
    theme: "bg-[var(--leaf-green)] text-[#f3ebdd]",
  },
  {
    n: "02",
    href: "/case-studies/chyberrport",
    name: "ChyberrPort",
    tag: "Brand strategy · Identity",
    line: "Brand strategy and identity for a pan-African digital talent platform — visualizing the exact moment learning turns into employment.",
    theme: "bg-[#0e1420] text-[#e8ecff]",
  },
  {
    n: "03",
    href: "/case-studies/techland",
    name: "Techland",
    tag: "Brand identity · Pitch deck",
    line: "Brand identity and pitch deck for a Nigerian tech education venture.",
    theme: "bg-[#0a1330] text-[#e8f0ff]",
  },
];

export default function CaseStudies() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-28">
      <p className="mb-6 text-sm text-[var(--fg-muted)]">Portfolio</p>
      <h1 className="mb-16 font-[family-name:var(--font-display)] text-5xl font-extrabold tracking-tight md:text-7xl">
        Case Studies
      </h1>

      <div className="grid gap-6 md:grid-cols-3">
        {CASE_STUDIES.map((cs) => (
          <Link
            key={cs.href}
            href={cs.href}
            className={`group flex min-h-[22rem] flex-col justify-between rounded-2xl p-8 transition-transform hover:-translate-y-1 ${cs.theme}`}
          >
            <div>
              <span className="text-sm opacity-70">{cs.n}</span>
              <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl font-extrabold tracking-tight">
                {cs.name}
              </h2>
              <p className="mt-2 text-sm opacity-70">{cs.tag}</p>
            </div>
            <div>
              <p className="text-sm leading-relaxed opacity-90">{cs.line}</p>
              <span className="mt-6 inline-block text-sm underline decoration-1 underline-offset-4 opacity-80 transition-opacity group-hover:opacity-100">
                View case study
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
