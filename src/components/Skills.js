const skills = [
  'Next.js',
  'React',
  'Node.js',
  'TypeScript',
  'Tailwind CSS',
  'Headless CMS',
  'REST APIs',
  'Git & GitHub',
];

export default function Skills() {
  return (
    <section className="border-t border-white/[0.07] py-20" id="skills">
      <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-300">
            Tools of the trade
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white">
            My Technical Skills
          </h2>
        </div>
        <p className="max-w-sm text-sm leading-6 text-slate-500">
          A modern toolkit for building polished products from the first
          component to the final deployment.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {skills.map((skill, index) => (
          <div
            className="group flex min-h-24 items-center justify-between rounded-xl border border-white/[0.08] bg-white/[0.025] px-5 transition hover:border-teal-300/30 hover:bg-teal-300/[0.04]"
            key={skill}
          >
            <span className="font-medium text-slate-200">{skill}</span>
            <span className="text-xs text-slate-600 transition group-hover:text-teal-300">
              0{index + 1}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
