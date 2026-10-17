export default function About() {
  return (
    <section
      className="grid gap-8 border-t border-white/[0.07] py-20 md:grid-cols-[0.7fr_1.3fr] md:gap-16"
      id="about"
    >
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-300">
          A little about me
        </p>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white">
          About Me
        </h2>
      </div>
      <div className="space-y-4 text-base leading-7 text-slate-400">
        <p>
          I&apos;m Jahanzaib, a developer passionate about building accessible,
          high-performance experiences for the web. I enjoy working across the
          stack—from shaping a responsive interface to connecting it with
          dependable APIs.
        </p>
        <p>
          My approach is thoughtful and practical: keep the experience clear,
          the implementation maintainable, and every interaction purposeful.
        </p>
      </div>
    </section>
  );
}
