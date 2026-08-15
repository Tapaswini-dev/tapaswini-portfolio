import Link from 'next/link';

const skillPills = [
  'HTML5',
  'CSS3',
  'Flexbox',
  'CSS Grid',
  'Responsive Design',
  'Media Queries',
  'JavaScript',
  'Semantic HTML',
  'Accessibility',
  'Animations',
  'Bootstrap',
  'Cross-browser UX'
];

const projects = [
  {
    title: 'SaaS Landing Page',
    summary: 'Modern product marketing layout built around clarity, conversion, and responsive storytelling.',
    type: 'saas',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'Flexbox', 'Grid'],
    liveUrl: '/demosites/saas.html',
    sourceUrl: 'https://github.com/Tapaswini-dev/tapaswini-portfolio',
    accent: 'from-violet-500 via-indigo-500 to-sky-500'
  },
  {
    title: 'E-commerce Product Landing Page',
    summary: 'Clean storefront-inspired composition with product emphasis, CTA flows, and mobile-first layout logic.',
    type: 'ecommerce',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'Grid', 'Responsive UI'],
    liveUrl: '/demosites/ecommerce.html',
    sourceUrl: 'https://github.com/Tapaswini-dev/tapaswini-portfolio',
    accent: 'from-orange-500 via-rose-500 to-pink-500'
  },
  {
    title: 'Real Estate Landing Page',
    summary: 'Property-focused design using layered sections, trust-building content, and responsive cards.',
    type: 'realestate',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'Flexbox', 'Media Queries'],
    liveUrl: '/demosites/real-estate.html',
    sourceUrl: 'https://github.com/Tapaswini-dev/tapaswini-portfolio',
    accent: 'from-emerald-500 via-teal-500 to-cyan-500'
  }
];

function PreviewCard({ type, accent }: { type: string; accent: string }) {
  const base = 'overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 p-3 shadow-inner dark:border-slate-700 dark:bg-slate-900';

  if (type === 'saas') {
    return (
      <div className={base}>
        <div className={`mb-3 h-7 rounded-xl bg-gradient-to-r ${accent}`} />
        <div className="grid gap-2 sm:grid-cols-3">
          {[1, 2, 3].map((n) => (
            <div key={n} className="h-16 rounded-xl bg-white dark:bg-slate-800" />
          ))}
        </div>
        <div className="mt-3 grid gap-2 sm:grid-cols-[1.4fr_0.6fr]">
          <div className="rounded-xl bg-white p-3 dark:bg-slate-800">
            <div className="mb-2 h-2 w-20 rounded bg-slate-200 dark:bg-slate-700" />
            <div className="space-y-2">
              <div className="h-2 rounded bg-slate-200 dark:bg-slate-700" />
              <div className="h-2 w-5/6 rounded bg-slate-200 dark:bg-slate-700" />
            </div>
          </div>
          <div className="rounded-xl bg-white p-3 dark:bg-slate-800">
            <div className="mx-auto mt-2 h-12 w-12 rounded-full border-4 border-slate-200 border-t-indigo-500 dark:border-slate-700 dark:border-t-indigo-400" />
          </div>
        </div>
      </div>
    );
  }

  if (type === 'ecommerce') {
    return (
      <div className={base}>
        <div className="grid gap-2 sm:grid-cols-[1fr_0.9fr]">
          <div className="space-y-2">
            <div className={`h-20 rounded-xl bg-gradient-to-r ${accent}`} />
            <div className="grid grid-cols-2 gap-2">
              <div className="h-12 rounded-lg bg-white dark:bg-slate-800" />
              <div className="h-12 rounded-lg bg-white dark:bg-slate-800" />
            </div>
          </div>
          <div className="space-y-2">
            <div className="h-8 rounded-lg bg-white dark:bg-slate-800" />
            <div className="h-8 rounded-lg bg-white dark:bg-slate-800" />
            <div className="h-8 rounded-lg bg-white dark:bg-slate-800" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={base}>
      <div className={`mb-3 h-20 rounded-xl bg-gradient-to-r ${accent}`} />
      <div className="grid gap-2 sm:grid-cols-2">
        <div className="rounded-xl bg-white p-3 dark:bg-slate-800">
          <div className="mb-2 h-2 w-16 rounded bg-slate-200 dark:bg-slate-700" />
          <div className="space-y-2">
            <div className="h-2 rounded bg-slate-200 dark:bg-slate-700" />
            <div className="h-2 w-3/4 rounded bg-slate-200 dark:bg-slate-700" />
          </div>
        </div>
        <div className="rounded-xl bg-white p-3 dark:bg-slate-800">
          <div className="h-16 rounded-lg bg-slate-200 dark:bg-slate-700" />
        </div>
      </div>
    </div>
  );
}

export default function DemositesPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      <section className="mx-auto max-w-7xl px-4 pb-16 pt-20 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-soft dark:border-slate-800 dark:bg-slate-900 sm:p-8 lg:p-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-indigo-600 dark:text-indigo-300">HTML / CSS / JavaScript</p>
              <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl lg:text-5xl">
                Frontend landing page concepts built without React.
              </h1>
              <p className="mt-4 text-base leading-7 text-slate-600 dark:text-slate-300">
                These demos focus on clean structure, responsive layouts, visual hierarchy, and interactive front-end behavior using semantic HTML, CSS3, Flexbox, Grid, media queries, and JavaScript.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/"
                className="inline-flex items-center justify-center rounded-2xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-800 transition hover:border-slate-300 hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100 dark:hover:bg-slate-800"
              >
                Back to portfolio
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {skillPills.map((skill) => (
            <div
              key={skill}
              className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-center text-sm font-medium text-slate-700 shadow-sm dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200"
            >
              {skill}
            </div>
          ))}
        </div>

        <section className="mt-14">
          <div className="mb-6">
            <p className="text-sm uppercase tracking-[0.28em] text-indigo-600 dark:text-indigo-300">Demo collection</p>
            <h2 className="mt-2 text-2xl font-bold text-slate-900 dark:text-white">Three landing page styles for recruiter-focused UI evaluation</h2>
          </div>

          <div className="grid gap-6 xl:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.title}
                className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-soft transition hover:-translate-y-0.5 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900"
              >
                <div className="p-5 sm:p-6">
                  <PreviewCard type={project.type} accent={project.accent} />

                  <div className="mt-5">
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{project.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">{project.summary}</p>
                  </div>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tech.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 flex flex-wrap gap-3">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center rounded-2xl bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-700"
                    >
                      Live Demo
                    </a>
                    <a
                      href={project.sourceUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center rounded-2xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-800 transition hover:border-slate-300 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100 dark:hover:bg-slate-800"
                    >
                      Source Code
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}
