import Image from "next/image";

export default function About() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-20 md:px-10 md:py-28">
      <p className="mb-6 text-sm text-[var(--fg-muted)]">About</p>
      <h1 className="mb-10 font-[family-name:var(--font-display)] text-4xl font-extrabold tracking-normal md:text-6xl">
        theBIO
      </h1>

      <div className="flex flex-col gap-6 text-lg leading-relaxed text-[var(--fg-muted)]">
        <p>
          I&rsquo;m a Creative Director who treats brand as infrastructure,
          not decoration.
        </p>
        <p>
          My background in Computer Science shapes how I think: every
          identity I build is a system with logic, not a collection of
          nice-looking artifacts but tied to rules that hold up across
          teams, markets and years, not just a hero case study.
        </p>
        <p>
          Across six-plus years, I have diversified through working from a
          national government agency to higher educational institutions to
          organizations building brand infrastructure across various
          continents, building identity and design systems, campaign and
          content direction, through to the production and governance
          discipline that actually gets ambitious ideas shipped.
        </p>
        <p>
          I work fluently across Adobe Creative Suite and Figma, and use AI
          tools deliberately for exploration, iteration and production speed
          while keeping brand judgment, taste and final decisions human.
        </p>
        <p>
          I don&rsquo;t hand off a nice mockup and hope it holds together. I
          build the system that lets a brand stay itself at scale under real
          production pressure, across every touchpoint, for years after
          I&rsquo;ve left the room.
        </p>
      </div>

      <div className="mt-16">
        <p className="mb-6 text-sm text-[var(--fg-muted)]">Tools</p>
        <Image
          src="/images/tools.png"
          alt="Adobe Photoshop, Illustrator, InDesign, Premiere Pro, After Effects, and Figma"
          width={1054}
          height={383}
          className="h-auto w-full max-w-md"
        />
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
