const SETS = [
  { name: "LWY", desc: "Leading Our Future Entrepreneurs — social system" },
  { name: "SPL", desc: "Campaign content & post templates" },
  { name: "Synergy", desc: "Social content system" },
];

export default function Social() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-28">
      <p className="mb-6 text-sm text-[var(--fg-muted)]">Portfolio</p>
      <h1 className="mb-4 font-[family-name:var(--font-display)] text-5xl font-extrabold tracking-tight md:text-7xl">
        Social Media Designs
      </h1>
      <p className="mb-16 max-w-lg text-[var(--fg-muted)]">
        Post systems and campaign content. Drop exports into{" "}
        <code className="rounded bg-white/10 px-1.5 py-0.5 text-sm">
          /public/social/
        </code>{" "}
        to replace these placeholders.
      </p>

      <div className="flex flex-col gap-16">
        {SETS.map((set) => (
          <div key={set.name}>
            <div className="mb-6 flex items-baseline justify-between border-b border-[var(--line)] pb-4">
              <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold">
                {set.name}
              </h2>
              <span className="text-sm text-[var(--fg-muted)]">{set.desc}</span>
            </div>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              {Array.from({ length: 4 }).map((_, i) => (
                <div
                  key={i}
                  className="flex aspect-square items-center justify-center rounded-lg border border-[var(--line)] bg-[#0f0f12] text-xs text-[var(--fg-muted)]"
                >
                  {set.name} {i + 1}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
