const LOGO_NAMES = [
  "LEAF",
  "ChyberrPort",
  "Techland",
  "AlphaTop",
  "Byteflow",
  "CoraPay",
  "Synergy",
  "SPL",
  "LWY",
];

export default function Logofolio() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-28">
      <p className="mb-6 text-sm text-[var(--fg-muted)]">Portfolio</p>
      <h1 className="mb-4 font-[family-name:var(--font-display)] text-5xl font-extrabold tracking-normal md:text-7xl">
        Logofolio
      </h1>
      <p className="mb-16 max-w-lg text-[var(--fg-muted)]">
        A working index of marks. Swap each tile below for the exported PNG
        or SVG from Figma — drop files into{" "}
        <code className="rounded bg-white/10 px-1.5 py-0.5 text-sm">
          /public/logofolio/
        </code>{" "}
        and reference them here.
      </p>

      <div className="grid grid-cols-2 gap-px overflow-hidden rounded-lg bg-[var(--line)] sm:grid-cols-3">
        {LOGO_NAMES.map((name) => (
          <div
            key={name}
            className="flex aspect-square flex-col items-center justify-center gap-3 bg-[#0f0f12] p-6 transition-colors hover:bg-[#141417]"
          >
            <div className="font-[family-name:var(--font-display)] text-2xl font-extrabold tracking-tight">
              {name}
            </div>
            <span className="text-xs text-[var(--fg-muted)]">Mark placeholder</span>
          </div>
        ))}
      </div>
    </div>
  );
}
