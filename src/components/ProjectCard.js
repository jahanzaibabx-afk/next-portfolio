import ArrowIcon from './ArrowIcon';

const accents = {
  cyan: 'from-cyan-400/20 via-sky-500/5 to-transparent',
  violet: 'from-violet-400/20 via-indigo-500/5 to-transparent',
  emerald: 'from-emerald-400/20 via-teal-500/5 to-transparent',
};

export default function ProjectCard({ project, number }) {
  const accent = accents[project.accent] ?? accents.cyan;

  return (
    <article className="group overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0e1118] transition hover:-translate-y-1 hover:border-white/15">
      <div
        className={`relative flex h-44 items-center justify-center overflow-hidden bg-gradient-to-br ${accent}`}
      >
        <div className="absolute inset-4 rounded-xl border border-white/[0.08] bg-[#0b0e14]/50" />
        <span className="relative text-6xl font-light text-white/80 transition duration-300 group-hover:scale-110">
          {project.mark ?? '↗'}
        </span>
        <span className="absolute left-6 top-6 text-xs tracking-[0.16em] text-white/50">
          {number}
        </span>
        <span className="absolute bottom-6 right-6 text-white/60 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-white">
          <ArrowIcon />
        </span>
      </div>
      <div className="p-6">
        <p className="text-[10px] font-semibold tracking-[0.16em] text-teal-300">
          {project.category}
        </p>
        <h3 className="mt-3 text-lg font-semibold text-white">
          {project.title}
        </h3>
        <p className="mt-2 min-h-[4.5rem] text-sm leading-6 text-slate-400">
          {project.description}
        </p>
        <ul
          aria-label={`${project.title} technologies`}
          className="mt-5 flex flex-wrap gap-2 border-t border-white/[0.07] pt-4"
        >
          {project.tags.map((tag) => (
            <li
              className="rounded-full bg-white/[0.05] px-2.5 py-1 text-[11px] text-slate-400"
              key={tag}
            >
              {tag}
            </li>
          ))}
        </ul>
        {(project.githubLink || project.liveLink) && (
          <div className="mt-5 flex gap-4 text-xs font-medium text-slate-300">
            {project.githubLink && (
              <a
                className="inline-flex items-center gap-1.5 transition hover:text-teal-200"
                href={project.githubLink}
                rel="noreferrer"
                target="_blank"
              >
                GitHub <ArrowIcon />
              </a>
            )}
            {project.liveLink && (
              <a
                className="inline-flex items-center gap-1.5 transition hover:text-teal-200"
                href={project.liveLink}
                rel="noreferrer"
                target="_blank"
              >
                Live site <ArrowIcon />
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}
