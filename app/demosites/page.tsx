import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Selected Web Design & Frontend Demos',
  description:
    'A collection of responsive web interfaces showcasing modern layouts, responsive design, and frontend implementation.'
};

const skillPills = [
  'HTML5',
  'CSS3',
  'JavaScript',
  'Flexbox',
  'Grid',
  'Responsive Design'
];

const projects = [
  {
    title: 'SaaS Landing Page',
    summary: 'Modern product marketing layout built around clarity, conversion, and responsive storytelling.',
    type: 'saas',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'Flexbox', 'Grid'],
    liveUrl: '/demosites/saas.html',
    sourceUrl: 'https://github.com/Tapaswini-dev/tapaswini-portfolio',
    accent: 'from-violet-500 via-indigo-500 to-sky-500',
    image: '/demosites/previews/saas-dashboard.webp',
    imageAlt: 'SaaS analytics dashboard preview on a laptop screen'
  },
  {
    title: 'E-commerce Product Landing Page',
    summary: 'Clean storefront-inspired composition with product emphasis, CTA flows, and mobile-first layout logic.',
    type: 'ecommerce',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'Grid', 'Responsive UI'],
    liveUrl: '/demosites/ecommerce.html',
    sourceUrl: 'https://github.com/Tapaswini-dev/tapaswini-portfolio',
    accent: 'from-orange-500 via-rose-500 to-pink-500',
    image: '/demosites/previews/ecommerce-headphones.webp',
    imageAlt: 'Premium wireless headphones product showcase on a vibrant background'
  },
  {
    title: 'Real Estate Landing Page',
    summary: 'Property-focused design using layered sections, trust-building content, and responsive cards.',
    type: 'realestate',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'Flexbox', 'Media Queries'],
    liveUrl: '/demosites/real-estate.html',
    sourceUrl: 'https://github.com/Tapaswini-dev/tapaswini-portfolio',
    accent: 'from-emerald-500 via-teal-500 to-cyan-500',
    image: '/demosites/previews/real-estate-luxury.webp',
    imageAlt: 'Modern luxury home with pool and contemporary architecture'
  }
];

export default function DemositesPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-96 bg-gradient-to-b from-indigo-100/60 via-slate-50 to-transparent dark:from-indigo-950/40 dark:via-slate-950 dark:to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 pb-16 pt-20 sm:px-6 lg:px-8">
        <header className="animate-in rounded-[2rem] border border-slate-200 bg-white/90 p-6 shadow-soft backdrop-blur-sm dark:border-slate-800 dark:bg-slate-900/90 sm:p-8 lg:p-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-indigo-600 dark:text-indigo-300">
               Selected Web Design & Frontend Demos
              </p>
              <h4 className="mt-3 text-1xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl lg:text-5xl">
                Building responsive, accessible web experiences with semantic HTML &amp; modern CSS
              </h4>
              <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600 dark:text-slate-300">
                I craft polished front-end interfaces using HTML5, CSS3, Flexbox, Grid, and JavaScript — with a focus on
                clean markup, responsive layouts, and recruiter-ready presentation.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/"
                className="inline-flex items-center justify-center rounded-2xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-800 transition hover:border-slate-300 hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100 dark:hover:bg-slate-800"
              >
                Back to portfolio
              </Link>
              <a
                href="https://github.com/Tapaswini-dev/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-700 dark:bg-indigo-600 dark:hover:bg-indigo-500"
              >
                <GitHubIcon />
                GitHub Profile
              </a>
            </div>
          </div>
        </header>

        <section aria-label="Technologies" className="mt-10 animate-in-delay-1">
          <div className="flex flex-wrap justify-center gap-3 sm:justify-start">
            {skillPills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:border-indigo-200 hover:shadow-md dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-indigo-500/50"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        <section aria-labelledby="projects-heading" className="mt-14 animate-in-delay-2">
          <div className="mb-8">
            <p className="text-sm uppercase tracking-[0.28em] text-indigo-600 dark:text-indigo-300">Featured work</p>
            <h2 id="projects-heading" className="mt-2 text-2xl font-bold text-slate-900 dark:text-white sm:text-3xl">
              Landing page demos for professional UI evaluation
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600 dark:text-slate-400">
              Three fully responsive concepts — each built with vanilla HTML, CSS, and JavaScript. Open a live demo or
              explore the source on GitHub.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.title}
                className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <div className={`absolute inset-x-0 top-0 z-10 h-1 bg-gradient-to-r ${project.accent}`} />
                  <Image
                    src={project.image}
                    alt={project.imageAlt}
                    width={1200}
                    height={750}
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="p-5 sm:p-6">
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{project.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">{project.summary}</p>

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
                      className="inline-flex items-center justify-center rounded-2xl bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-700 dark:bg-indigo-600 dark:hover:bg-indigo-500"
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
      </div>

      <footer className="relative border-t border-slate-200 bg-white/95 py-10 text-slate-700 dark:border-slate-800 dark:bg-slate-950/95 dark:text-slate-300">
  <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
    <div>
      <p className="text-sm font-semibold text-slate-900 dark:text-white">
        Selected Web Design & Frontend Demos
      </p>
      <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
        Responsive interfaces built with HTML, CSS & JavaScript
      </p>
    </div>

    <div className="flex flex-wrap items-center gap-4 text-sm">
      <a
        href="https://github.com/Tapaswini-dev/"
        target="_blank"
        rel="noreferrer"
        className="transition hover:text-slate-900 dark:hover:text-white"
      >
        GitHub
      </a>

      <a
        href="mailto:pradhan.tapaswini127@gmail.com"
        className="transition hover:text-slate-900 dark:hover:text-white"
      >
        Email
      </a>

      <a
        href="https://tapaswini-portfolio.vercel.app/"
        target="_blank"
        rel="noreferrer"
        className="transition hover:text-slate-900 dark:hover:text-white"
      >
        Portfolio
      </a>

      <a
        href="#projects-heading"
        className="transition hover:text-slate-900 dark:hover:text-white"
      >
        Projects
      </a>
    </div>
  </div>
</footer>
    </main>
  );
}

function GitHubIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 fill-current">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.435-1.305.795-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}
