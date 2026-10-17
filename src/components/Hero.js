import VisitorCounter from './VisitorCounter';

export default function Hero() {
  return (
    <section
      className="grid min-h-[650px] items-center gap-14 py-24 lg:grid-cols-[1.15fr_0.85fr] lg:py-28"
      id="home"
    >
      <div>
        <p className="mb-7 inline-flex items-center gap-2 rounded-full border border-teal-300/20 bg-teal-300/[0.06] px-3.5 py-2 text-xs font-medium tracking-wide text-teal-200">
          <span className="h-1.5 w-1.5 rounded-full bg-teal-300 shadow-[0_0_10px_rgba(94,234,212,0.9)]" />
          BUILDING FOR THE MODERN WEB
        </p>
        <h1 className="max-w-3xl text-5xl font-semibold leading-[1.08] tracking-[-0.055em] text-white sm:text-6xl lg:text-7xl">
          JAHANZAIB
          <br />
          <span className="bg-gradient-to-r from-white via-slate-200 to-slate-500 bg-clip-text text-transparent">
            AHMAD
          </span>
        </h1>
        <p className="mt-6 text-xl font-medium tracking-tight text-slate-300 sm:text-2xl">
          Jamstack &amp; Node.js Developer
        </p>
        <p className="mt-5 max-w-xl text-base leading-7 text-slate-400">
          I build fast, thoughtful digital experiences with modern JavaScript
          technologies—bringing elegant interfaces and reliable back ends
          together.
        </p>
        <div className="mt-9 flex flex-wrap items-center gap-4">
          <a
            className="inline-flex items-center gap-2 rounded-full bg-teal-300 px-5 py-3 text-sm font-semibold text-[#07110f] transition hover:bg-teal-200"
            href="#projects"
          >
            Explore my work <span aria-hidden="true">↗</span>
          </a>
          <a
            className="rounded-full px-4 py-3 text-sm font-medium text-slate-300 transition hover:text-white"
            href="#about"
          >
            More about me <span aria-hidden="true">↓</span>
          </a>
        </div>
      </div>
      <VisitorCounter />
    </section>
  );
}
