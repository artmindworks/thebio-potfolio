export default function Contact() {
  return (
    <div className="mx-auto flex min-h-[70vh] max-w-3xl flex-col justify-center px-6 py-20 md:px-10">
      <p className="mb-6 text-sm text-[var(--fg-muted)]">Contact</p>
      <h1 className="mb-10 font-[family-name:var(--font-display)] text-6xl font-extrabold tracking-normal md:text-8xl">
        Let&rsquo;s
        <br />
        Connect
      </h1>

      <div className="flex flex-col gap-6 text-xl">
        <a
          href="https://instagram.com/madebyamw"
          target="_blank"
          rel="noreferrer"
          className="group flex items-center justify-between border-b border-[var(--line)] pb-4 transition-colors hover:border-[var(--fg)]"
        >
          <span>Instagram</span>
          <span className="text-[var(--fg-muted)] transition-colors group-hover:text-[var(--fg)]">
            @madebyamw
          </span>
        </a>
        <a
          href="mailto:artmindworks@gmail.com"
          className="group flex items-center justify-between border-b border-[var(--line)] pb-4 transition-colors hover:border-[var(--fg)]"
        >
          <span>Email</span>
          <span className="text-[var(--fg-muted)] transition-colors group-hover:text-[var(--fg)]">
            artmindworks@gmail.com
          </span>
        </a>
        <a
          href="tel:+2348118208641"
          className="group flex items-center justify-between border-b border-[var(--line)] pb-4 transition-colors hover:border-[var(--fg)]"
        >
          <span>WhatsApp</span>
          <span className="text-[var(--fg-muted)] transition-colors group-hover:text-[var(--fg)]">
            +234 811 820 8641
          </span>
        </a>
      </div>
    </div>
  );
}
