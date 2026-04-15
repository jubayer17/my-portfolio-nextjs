import Link from "next/link";

export default function NotFound() {
  return (
    <main id="content" className="mx-auto max-w-6xl px-6 py-20">
      <div className="rounded-3xl border border-slate-200 bg-white p-10 text-center shadow-sm shadow-slate-900/5 dark:border-slate-800 dark:bg-slate-950">
        <h1 className="text-2xl font-semibold tracking-tight text-slate-900 dark:text-white md:text-4xl">
          Page not found
        </h1>
        <p className="mt-3 text-sm text-slate-600 dark:text-slate-300 md:text-base">
          The page you’re looking for doesn’t exist.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row sm:items-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-2xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-sm shadow-slate-900/20 transition hover:-translate-y-0.5 hover:bg-slate-800 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-200"
          >
            Home
          </Link>
          <Link
            href="/projects"
            className="inline-flex items-center justify-center rounded-2xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow-sm shadow-slate-900/5 transition hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md hover:shadow-slate-900/10 dark:border-slate-800 dark:bg-slate-950 dark:text-white dark:hover:border-slate-700"
          >
            Projects
          </Link>
        </div>
      </div>
    </main>
  );
}

