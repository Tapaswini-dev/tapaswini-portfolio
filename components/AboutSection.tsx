export default function AboutSection() {
  return (
    <section id="about" className="mt-16 scroll-mt-24">
      <div className="rounded-3xl border border-slate-200 bg-white/90 p-8 shadow-soft dark:border-slate-800 dark:bg-slate-900/95 sm:p-12">
        <h2 className="section-title text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">About</h2>
        <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600 dark:text-slate-300">
          I am a Frontend Engineer with 6.5 years of overall IT experience and over 4 years building user-centric web applications. My focus is on React.js, Angular, Next.js and TypeScript, delivering scalable solutions with reusable components and clean architecture.
        </p>
        <p className="mt-4 max-w-3xl text-base leading-8 text-slate-600 dark:text-slate-300">
          I enjoy translating product requirements into polished interfaces, integrating REST APIs, managing application state, and optimizing performance for responsive experiences across desktop and mobile devices.
        </p>
      </div>
    </section>
  );
}
