import Link from 'next/link';

export default function HeroSection() {
  return (
    <section id="home" className="pt-20 sm:pt-24">
      <div className="flex flex-col gap-8 rounded-3xl border border-slate-200 bg-white/90 p-8 shadow-soft dark:border-slate-800 dark:bg-slate-900/95 sm:p-12">
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.3em] text-indigo-600 dark:text-indigo-300">Frontend Engineer</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 dark:text-white sm:text-5xl">
            Tapaswini Pradhan
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
            Frontend Engineer with 6.5 years of IT experience, specializing in React.js, Angular, Next.js and TypeScript.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-[minmax(0,1fr)_auto]">
                  <div className="grid gap-3 sm:grid-cols-1">
                      <a
                          href="#projects"
                          className="inline-flex w-fit items-center justify-center rounded-2xl bg-indigo-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-indigo-500"
                      >
                          View Projects
                      </a>
                  </div>
          <div className="grid gap-3 sm:grid-cols-3">
            <Link
              href="https://github.com/Tapaswini-dev"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 transition hover:border-slate-300 hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-200 dark:hover:bg-slate-900"
            >
              GitHub
            </Link>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-2xl border border-indigo-600 bg-indigo-50 px-4 py-3 text-sm font-medium text-indigo-700 transition hover:bg-indigo-100 dark:border-indigo-400 dark:bg-indigo-500/10 dark:text-indigo-200 dark:hover:bg-indigo-500/20"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
