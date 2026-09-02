import {
  CaseStudyHero,
  CaseStudySection,
  CaseStudyStats,
  CaseStudyNav,
} from "@/components/CaseStudy";

export default function ChyberrPort() {
  return (
    <div>
      <CaseStudyHero
        eyebrow="Case Study 02 — Brand Strategy · Identity"
        title="ChyberrPort"
        tagline="A pan-African digital talent platform, designed to take people from raw potential, through training, into real, paid digital work."
        theme="bg-[#0e1420] text-[#e8ecff]"
      />

      <CaseStudySection title="The Starting Point">
        <p>
          ChyberrPort set out to be more than another learning bootcamp. It
          was conceived as an ecosystem designed to take people from raw
          potential, through training, into real, paid digital work.
        </p>
        <p>
          The name existed before the identity work began. The task was not
          to name the platform, but to give form to an intangible idea: the
          exact moment learning turns into employment. The challenge was to
          translate that idea into a visual identity precise enough for
          developers to respect, yet accessible enough for students and
          earners to trust.
        </p>
      </CaseStudySection>

      <CaseStudySection title="What Was Actually Wrong">
        <p>
          The brief was ambitious in a way that created a genuine design
          challenge: how do you visualize a transformation rather than a
          product? &ldquo;Learning&rdquo; and &ldquo;earning&rdquo; are both
          abstract ideas until the point of transition between them becomes
          visible.
        </p>
        <p>
          Without a clear visual metaphor for that journey, ChyberrPort
          risked looking like just another generic ed-tech brand —
          forgettable and difficult to distinguish from the many bootcamp
          identities already competing for attention.
        </p>
      </CaseStudySection>

      <CaseStudySection title="The Turn">
        <p>
          The mark resolved the metaphor directly: a letterform engineered
          from &ldquo;too soft&rdquo; into something structurally precise —
          the same transformation the platform promises its users, made
          visible in the identity itself.
        </p>
      </CaseStudySection>

      <CaseStudyStats
        stats={[
          { value: "50", label: "Markets" },
          { value: "30K+", label: "Talents on the platform" },
        ]}
      />

      <CaseStudyNav
        prev={{ href: "/case-studies/leaf-africa", name: "LEAF Africa" }}
        next={{ href: "/case-studies/techland", name: "Techland" }}
      />
    </div>
  );
}
