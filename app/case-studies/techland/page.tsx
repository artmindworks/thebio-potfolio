import {
  CaseStudyHero,
  CaseStudySection,
  CaseStudyStats,
  CaseStudyNav,
} from "@/components/CaseStudy";

export default function Techland() {
  return (
    <div>
      <CaseStudyHero
        eyebrow="Case Study 03 — Brand Identity · Pitch Deck"
        title="Techland"
        tagline="Brand identity and pitch narrative for a Nigerian tech education venture — scoped to the foundational identity work, precise about what came after."
        theme="bg-[#0a1330] text-[#e8f0ff]"
      />

      <CaseStudySection title="Understanding the Market">
        <p>
          Nigeria&rsquo;s tech education space is crowded with platforms
          promising the same outcome through the same visual language:
          generic course-platform blue, stock imagery of laptops, and
          identity systems interchangeable with a dozen competitors.
        </p>
        <p>
          Techland needed to signal something more specific from the first
          impression — not another course platform, but infrastructure for
          a career.
        </p>
      </CaseStudySection>

      <CaseStudySection title="The Build">
        <p>
          The identity and pitch deck were built to carry that distinction
          through to the investor conversation: a mark and system precise
          enough to read as serious infrastructure, and a narrative
          structured around the pilot evidence rather than aspiration alone.
        </p>
        <p className="text-sm text-[var(--fg-muted)]">
          Scope note: this case study covers the brand identity and pitch
          deck. Social and campaign content produced in 2024–2025 was
          executed by others using the system built here, and is not
          claimed as part of this work.
        </p>
      </CaseStudySection>

      <CaseStudyStats
        stats={[
          { value: "100+", label: "Trained in the pilot" },
          { value: "10+", label: "Partners" },
          { value: "5", label: "B2B clients" },
        ]}
      />

      <CaseStudyNav
        prev={{ href: "/case-studies/chyberrport", name: "ChyberrPort" }}
      />
    </div>
  );
}
