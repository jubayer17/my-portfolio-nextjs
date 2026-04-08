"use client";

import Link from "next/link";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main id="content" className="mx-auto max-w-6xl px-4 py-20">
      <div className="rounded-3xl border border-slate-200 bg-white p-10 shadow-sm shadow-slate-900/5 dark:border-slate-800 dark:bg-slate-950">
        <h1 className="text-2xl font-semibold tracking-tight text-slate-900 dark:text-white md:text-4xl">
          Something went wrong
        </h1>
        <p className="mt-3 text-sm text-slate-600 dark:text-slate-300 md:text-base">
          Please try again. If this keeps happening, you can return to the homepage.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
          <button
            type="button"
            onClick={reset}
            className="inline-flex items-center justify-center rounded-2xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-sm shadow-slate-900/20 transition hover:-translate-y-0.5 hover:bg-slate-800 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-200"
          >
            Retry
          </button>
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-2xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow-sm shadow-slate-900/5 transition hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md hover:shadow-slate-900/10 dark:border-slate-800 dark:bg-slate-950 dark:text-white dark:hover:border-slate-700"
          >
            Home
          </Link>
        </div>

        <p className="mt-10 text-xs text-slate-400 dark:text-slate-500">
          {error.digest ? `Digest: ${error.digest}` : null}
        </p>
      </div>
    </main>
  );
}

