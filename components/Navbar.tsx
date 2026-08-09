'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Github, Mail, Menu, Moon, Sun, X } from 'lucide-react';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' }
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const activeDark = stored === 'dark' || (!stored && prefersDark);
    setDarkMode(activeDark);
    document.documentElement.classList.toggle('dark', activeDark);
  }, []);

  const toggleTheme = () => {
    const nextMode = !darkMode;
    setDarkMode(nextMode);
    document.documentElement.classList.toggle('dark', nextMode);
    window.localStorage.setItem('theme', nextMode ? 'dark' : 'light');
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/70 bg-white/95 backdrop-blur dark:border-slate-800/70 dark:bg-slate-950/95">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="#home" className="text-lg font-semibold text-slate-900 dark:text-white">
          Tapaswini Pradhan
        </Link>
        <div className="hidden items-center gap-8 md:flex">
          <nav className="flex gap-6 text-sm text-slate-600 dark:text-slate-300">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="transition hover:text-slate-900 dark:hover:text-white">
                {item.label}
              </a>
            ))}
          </nav>
          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle dark mode"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:border-slate-300 hover:text-slate-900 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100"
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>
        <div className="flex items-center gap-3 md:hidden">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle dark mode"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:border-slate-300 hover:text-slate-900 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100"
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle mobile menu"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:border-slate-300 hover:text-slate-900 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
      {menuOpen ? (
        <div className="border-t border-slate-200/70 bg-white/95 px-4 pb-6 pt-4 shadow-sm dark:border-slate-800/70 dark:bg-slate-950/95 md:hidden">
          <nav className="flex flex-col gap-4 text-base text-slate-700 dark:text-slate-200">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
                {item.label}
              </a>
            ))}
          </nav>
          <div className="mt-4 flex items-center gap-4 text-slate-700 dark:text-slate-200">
            <Link href="https://github.com/Tapaswini-dev" target="_blank" rel="noreferrer" aria-label="GitHub profile">
              <Github size={18} />
            </Link>
            <a href="mailto:pradhan.tapaswini127@gmail.com" aria-label="Email">
              <Mail size={18} />
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
