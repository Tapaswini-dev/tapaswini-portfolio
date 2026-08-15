import Link from 'next/link';

const projects = [
  {
    title: 'Events Management Application',
    description:
      'A React and TypeScript dashboard for event planning, attendee tracking, and streamlined reservation workflows with API-based content management.',
    technologies: ['React.js', 'TypeScript', 'REST API'],
    github: 'https://github.com/Tapaswini-dev/events',
    demo: '/events',
    features: ['Event listing', 'Search and filters', 'Attendee management', 'Responsive dashboard']
  },
  {
    title: 'Analytics Dashboard',
    description:
      'A portfolio/demo analytics interface built with React, TypeScript, and charting tools to present complex business data in a clean executive layout.',
    technologies: ['React.js', 'TypeScript', 'Recharts', 'Tailwind CSS'],
    github: 'https://github.com/Tapaswini-dev',
    demo: '/events',
    features: ['Visual charts', 'Executive metrics', 'Responsive layout', 'Data storytelling']
  },
  {
    title: 'E-commerce Application',
    description:
      'A modern product discovery interface built with Next.js and TypeScript, designed for browsing, filtering, and conversion-focused storefront experiences.',
    technologies: ['Next.js', 'TypeScript', 'REST API', 'Tailwind CSS'],
    github: 'https://github.com/Tapaswini-dev',
    demo: '/events',
    features: ['Product listing', 'Search', 'Filters', 'Modern storefront UI']
  }
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="mt-16 scroll-mt-24">
      <div className="rounded-3xl border border-slate-200 bg-white/90 p-8 shadow-soft dark:border-slate-800 dark:bg-slate-900/95 sm:p-12">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-indigo-600 dark:text-indigo-300">Selected work</p>
            <h2 className="section-title mt-3 text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">Projects</h2>
          </div>
        </div>

        <div className="mt-10 grid gap-6 xl:grid-cols-2">
          {projects.map((project) => (
            <article key={project.title} className="card overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-lg dark:border-slate-800 dark:bg-slate-950/90">
              <div className="flex flex-col gap-3">
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{project.title}</h3>
                <p className="text-slate-600 dark:text-slate-300">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-sm text-slate-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200">
                      {tech}
                    </span>
                  ))}
                </div>
                <ul className="mt-4 space-y-2 text-slate-600 dark:text-slate-300">
                  {project.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <span className="mt-1 h-2.5 w-2.5 rounded-full bg-indigo-600 dark:bg-indigo-400" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Link
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-2xl bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-700"
                  >
                    GitHub
                  </Link>
                  <Link
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-2xl border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-900 transition hover:border-slate-300 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100 dark:hover:bg-slate-900"
                  >
                    Live Demo
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
