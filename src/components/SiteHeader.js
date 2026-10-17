export default function SiteHeader() {
  return (
    <header className="flex h-20 items-center justify-between border-b border-white/[0.07]">
      <a
        className="text-sm font-semibold tracking-[0.18em] text-white"
        href="#home"
      >
        JA<span className="text-teal-300">.</span>
      </a>
      <nav
        aria-label="Main navigation"
        className="hidden items-center gap-8 text-sm text-slate-400 sm:flex"
      >
        <a className="transition hover:text-white" href="#about">
          About
        </a>
        <a className="transition hover:text-white" href="#skills">
          Skills
        </a>
        <a className="transition hover:text-white" href="#projects">
          Projects
        </a>
      </nav>
      <a
        className="rounded-full border border-white/15 px-4 py-2 text-xs font-medium text-slate-200 transition hover:border-teal-300/60 hover:text-teal-200"
        href="mailto:hello@jahanzaib.dev"
      >
        Let&apos;s talk <span aria-hidden="true">↗</span>
      </a>
    </header>
  );
}
