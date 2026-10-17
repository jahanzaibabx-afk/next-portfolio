import ProjectCard from './ProjectCard';

export default function Projects({ projects }) {
  return (
    <section className="border-t border-white/[0.07] py-20" id="projects">
      <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-300">
            Selected work
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white">
            Featured Projects
          </h2>
        </div>
        <p className="max-w-sm text-sm leading-6 text-slate-500">
          A glimpse at the kinds of useful, considered experiences I love
          bringing to life.
        </p>
      </div>
      {projects.length > 0 ? (
        <div className="grid gap-5 md:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.slug}
              number={String(index + 1).padStart(2, '0')}
              project={project}
            />
          ))}
        </div>
      ) : (
        <p className="text-sm text-slate-400">
          Projects will be added here soon.
        </p>
      )}
    </section>
  );
}
