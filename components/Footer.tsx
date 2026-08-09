import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white/95 py-10 text-slate-700 dark:border-slate-800 dark:bg-slate-950/95 dark:text-slate-300">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 sm:px-6 lg:px-8 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="text-sm font-semibold text-slate-900 dark:text-white">© 2026 Tapaswini Pradhan</p>
          <p className="text-sm text-slate-600 dark:text-slate-400">Frontend Engineer</p>
        </div>
        <div className="flex flex-wrap items-center gap-4 text-sm">
          <Link href="https://github.com/Tapaswini-dev" target="_blank" rel="noreferrer" className="hover:text-slate-900 dark:hover:text-white">
            GitHub
          </Link>
          <a href="mailto:pradhan.tapaswini127@gmail.com" className="hover:text-slate-900 dark:hover:text-white">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
