import {
  CaseStudyHero,
  CaseStudySection,
  CaseStudyNav,
} from "@/components/CaseStudy";

export default function LeafAfrica() {
  return (
    <div>
      <CaseStudyHero
        eyebrow="Case Study 01 — Brand Strategy · Organizational Repositioning"
        title="LEAF Africa"
        tagline="LEAF is building a thriving business ecosystem for African entrepreneurs and global investors through stronger intelligence, sharper storytelling, and meaningful connection."
        theme="bg-[var(--leaf-green)] text-[#f3ebdd]"
      />

      <CaseStudySection title="Strategic Choice">
        <p>
          The easy move would have been a visual refresh: a new name, a new
          mark, and the same operations underneath. That approach was
          deliberately rejected.
        </p>
        <p>
          Instead, the brand strategy was designed to drive real change, not
          simply communicate it. Outputs were reframed to speak to a
          continental audience rather than retain the narrower voice of a
          youth-focused platform.
        </p>
        <p>
          Operations were deliberately expanded across African regions so
          that &ldquo;pan-African&rdquo; became something the organization
          demonstrated, not merely claimed. Inclusivity became an explicit
          operating principle.
        </p>
      </CaseStudySection>

      <CaseStudySection title="Building the System">
        <p>
          The working brand strategy became the operating document for the
          transition: positioning, voice, and language guidelines ensured
          every output spoke continentally rather than regionally; a
          research programme was established to generate the evidence base
          the new positioning required; and an operational diversification
          plan expanded team representation and activity across multiple
          African regions — turning the brand&rsquo;s central claim into an
          organizational reality.
        </p>
      </CaseStudySection>

      <CaseStudySection title="Right Standard, Continental by Practice">
        <p>
          The result is a brand system built to hold up under scrutiny from
          a continental audience: one where the organization&rsquo;s
          operating footprint, not just its messaging, backs the claim of
          being pan-African.
        </p>
      </CaseStudySection>

      <CaseStudyNav
        next={{ href: "/case-studies/chyberrport", name: "ChyberrPort" }}
      />
    </div>
  );
}
