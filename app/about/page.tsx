export default function About() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-20 md:px-10 md:py-28">
      <p className="mb-6 text-sm text-[var(--fg-muted)]">About</p>
      <h1 className="mb-10 font-[family-name:var(--font-display)] text-4xl font-extrabold tracking-normal md:text-6xl">
        theBIO
      </h1>

      <div className="flex flex-col gap-6 text-lg leading-relaxed text-[var(--fg-muted)]">
        <p>
          Ibrahim Babatunde Orisunbare is a Creative Director running{" "}
          <span className="text-[var(--fg)]">MadebyAMW</span>, a one-man
          studio built to operate at a full-stack level: brand strategy,
          identity systems, verbal identity, campaign direction, packaging,
          digital experience, production, and system design — under one
          roof, for one point of view.
        </p>
        <p>
          His work spans pan-African brand development and a national
          government technology agency engagement, built on a computer
          science background that he treats as a genuine differentiator, not
          a footnote — using AI as leverage across the creative process
          rather than as a gimmick layered on at the end.
        </p>
        <p>
          The studio is building toward senior Creative Director and
          Executive Creative Director-level roles at global agencies and
          holding companies. The current focus: a portfolio strong enough to
          win larger brand clients and signal ECD-level thinking to
          decision-makers evaluating that kind of work.
        </p>
      </div>

      <div className="mt-16 border-t border-[var(--line)] pt-10">
        <p className="mb-4 text-sm text-[var(--fg-muted)]">Get in touch</p>
        <div className="flex flex-col gap-2 text-lg">
          <a
            href="mailto:artmindworks@gmail.com"
            className="w-fit transition-colors hover:text-[var(--accent)]"
          >
            artmindworks@gmail.com
          </a>
          <a
            href="https://instagram.com/madebyamw"
            target="_blank"
            rel="noreferrer"
            className="w-fit transition-colors hover:text-[var(--accent)]"
          >
            @madebyamw
          </a>
        </div>
      </div>
    </div>
  );
}
