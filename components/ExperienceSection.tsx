export default function ExperienceSection() {
  return (
    <section id="experience" className="mt-16 scroll-mt-24">
      <div className="rounded-3xl border border-slate-200 bg-white/90 p-8 shadow-soft dark:border-slate-800 dark:bg-slate-900/95 sm:p-12">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-indigo-600 dark:text-indigo-300">Professional Experience</p>
            <h2 className="section-title mt-3 text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">Experience</h2>
          </div>
        </div>
        <div className="mt-6 rounded-3xl bg-slate-50 p-6 text-slate-700 dark:bg-slate-950/80 dark:text-slate-300">
          <p className="text-base leading-7">
            A strong foundation in frontend and full stack engineering across analytics, dashboard systems, and enterprise web applications. The timeline below highlights roles where I delivered scalable UI development, state management, and performance-focused experiences for business-critical applications.
          </p>
        </div>

        <div className="mt-10 space-y-8">
          <article className="rounded-3xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-950/80">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-lg font-semibold text-slate-900 dark:text-white">Software Developer</p>
                <p className="text-sm text-slate-600 dark:text-slate-400">Clavis Technologies Pvt. Ltd. | Noida</p>
              </div>
              <p className="text-sm text-slate-500 dark:text-slate-400">Jul 2025 – Apr 2026</p>
            </div>
            <p className="mt-4 text-slate-600 dark:text-slate-300">
              Worked on AI-driven and analytics-based web applications, focusing on scalable frontend architecture and high-performance dashboards.
            </p>
          </article>

          <article className="rounded-3xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-950/80">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-lg font-semibold text-slate-900 dark:text-white">Frontend Developer</p>
                <p className="text-sm text-slate-600 dark:text-slate-400">Intrics Solutions Pvt. Ltd. | Noida</p>
              </div>
              <p className="text-sm text-slate-500 dark:text-slate-400">Dec 2023 – May 2025</p>
            </div>
            <p className="mt-4 text-slate-600 dark:text-slate-300">
              Worked on analytics-driven web applications and dashboard systems, focusing on scalable UI development, state management, and data visualization.
            </p>
          </article>

          <article className="rounded-3xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-950/80">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-lg font-semibold text-slate-900 dark:text-white">Full Stack Developer</p>
                <p className="text-sm text-slate-600 dark:text-slate-400">Tpool Technologies Pvt. Ltd. | BBSR</p>
              </div>
              <p className="text-sm text-slate-500 dark:text-slate-400">Oct 2020 – Jun 2021</p>
            </div>
            <p className="mt-4 text-slate-600 dark:text-slate-300">
              Worked on internal enterprise applications focused on logistics operations, contributing to both frontend development and backend integration.
            </p>
          </article>

          <article className="rounded-3xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-950/80">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-lg font-semibold text-slate-900 dark:text-white">Software Developer</p>
                <p className="text-sm text-slate-600 dark:text-slate-400">Cybercon Digital Media Network (P) LTD. | BBSR</p>
              </div>
              <p className="text-sm text-slate-500 dark:text-slate-400">Oct 2016 – Jul 2019</p>
            </div>
            <p className="mt-4 text-slate-600 dark:text-slate-300">
              Started career working on web application development across multiple domains, gaining strong foundational experience in frontend development, backend integration, and full project lifecycle.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
