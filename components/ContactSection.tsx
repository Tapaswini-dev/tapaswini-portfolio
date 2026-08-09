export default function ContactSection() {
  return (
    <section id="contact" className="mt-16 scroll-mt-24">
      <div className="rounded-3xl border border-slate-200 bg-white/90 p-8 shadow-soft dark:border-slate-800 dark:bg-slate-900/95 sm:p-12">
        <div className="grid gap-10 lg:grid-cols-[350px_minmax(0,1fr)]">
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-950/80">
            <p className="text-sm uppercase tracking-[0.3em] text-indigo-600 dark:text-indigo-300">Contact</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">Get in touch</h2>
            <div className="mt-6 space-y-4 text-slate-600 dark:text-slate-300">
              <div>
                <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">Name</p>
                <p>Tapaswini Pradhan</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">Email</p>
                <p>
                  <a href="mailto:pradhan.tapaswini127@gmail.com" className="text-indigo-600 hover:underline dark:text-indigo-300">
                    pradhan.tapaswini127@gmail.com
                  </a>
                </p>
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">GitHub</p>
                <p>
                  <a href="https://github.com/Tapaswini-dev" target="_blank" rel="noreferrer" className="text-indigo-600 hover:underline dark:text-indigo-300">
                    github.com/Tapaswini-dev
                  </a>
                </p>
              </div>
              
            </div>
          </div>
          <form className="rounded-3xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-950/80">
            <div className="flex flex-col gap-5">
              <div>
                <label htmlFor="name" className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Your full name"
                  className="mt-3 w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-900 shadow-sm outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:focus:border-indigo-400 dark:focus:ring-indigo-500/20"
                />
              </div>
              <div>
                <label htmlFor="email" className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="Enter Your email address"
                  className="mt-3 w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-900 shadow-sm outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:focus:border-indigo-400 dark:focus:ring-indigo-500/20"
                />
              </div>
              <div>
                <label htmlFor="message" className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="I'd like to learn more about your opportunity..."
                  className="mt-3 w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-900 shadow-sm outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:focus:border-indigo-400 dark:focus:ring-indigo-500/20"
                />
              </div>
            <button
                type="button"
                className="inline-flex w-fit items-center justify-center rounded-2xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-indigo-500"
            >
                Submit
            </button>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Note: This form is a placeholder. Configure a backend or email service to handle submissions.
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
