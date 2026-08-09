const skillGroups = [
  {
    title: 'Frontend',
    items: ['React.js', 'Angular', 'Next.js', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'SCSS']
  },
  {
    title: 'State Management',
    items: ['Redux', 'Redux Toolkit', 'NgRx', 'RxJS']
  },
  {
    title: 'UI',
    items: ['Tailwind CSS', 'Angular Material', 'PrimeNG']
  },
  {
    title: 'Testing',
    items: ['Jest', 'React Testing Library', 'Jasmine', 'Karma']
  },
  {
    title: 'APIs',
    items: ['REST APIs', 'GraphQL', 'WebSockets']
  },
  {
    title: 'Tools',
    items: ['Git', 'GitHub', 'Postman', 'Webpack', 'Azure DevOps']
  }
];

export default function SkillsSection() {
  return (
    <section id="skills" className="mt-16 scroll-mt-24">
      <div className="rounded-3xl border border-slate-200 bg-white/90 p-8 shadow-soft dark:border-slate-800 dark:bg-slate-900/95 sm:p-12">
        <h2 className="section-title text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">Skills</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {skillGroups.map((group) => (
            <div key={group.title} className="rounded-3xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-950/80">
              <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">{group.title}</h3>
              <div className="mt-4 flex flex-wrap gap-3">
                {group.items.map((item) => (
                  <span key={item} className="rounded-full border border-slate-200 bg-white px-3 py-1 text-sm text-slate-700 shadow-sm dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
