const PROJECTS = [
  { name: "AlphaTop", desc: "Stationery, packaging & applied identity" },
  { name: "Byteflow", desc: "Applied identity & digital product surfaces" },
  { name: "CoraPay", desc: "Fintech identity & product surfaces" },
  { name: "Synergy", desc: "Identity system & brand applications" },
];

export default function Branding() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-28">
      <p className="mb-6 text-sm text-[var(--fg-muted)]">Portfolio</p>
      <h1 className="mb-4 font-[family-name:var(--font-display)] text-5xl font-extrabold tracking-tight md:text-7xl">
        Branding
      </h1>
      <p className="mb-16 max-w-lg text-[var(--fg-muted)]">
        Applied identity and brand-system work. Drop mockup exports into{" "}
        <code className="rounded bg-white/10 px-1.5 py-0.5 text-sm">
          /public/branding/
        </code>{" "}
        to replace these placeholders with real imagery.
      </p>

      <div className="grid gap-6 sm:grid-cols-2">
        {PROJECTS.map((p) => (
          <div
            key={p.name}
            className="flex aspect-[4/3] flex-col justify-end rounded-2xl border border-[var(--line)] bg-[#0f0f12] p-8 transition-colors hover:border-[var(--fg-muted)]"
          >
            <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold">
              {p.name}
            </h2>
            <p className="mt-1 text-sm text-[var(--fg-muted)]">{p.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
