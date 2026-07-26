"use client";

import Link from "next/link";
import { AlertTriangle, RotateCcw } from "lucide-react";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main id="content" className="shell py-20">
      <div className="card accent-bar mx-auto max-w-2xl p-8 md:p-10">
        <span
          className="mb-5 inline-flex h-11 w-11 items-center justify-center border"
          style={{
            color: "var(--error)",
            borderColor: "var(--error)",
            background: "color-mix(in srgb, var(--error) 8%, transparent)",
          }}
          aria-hidden="true"
        >
          <AlertTriangle className="h-5 w-5" />
        </span>

        <h1
          className="font-outfit text-2xl font-bold tracking-tight md:text-3xl"
          style={{ color: "var(--fg)" }}
        >
          Something went wrong
        </h1>
        <p className="mt-3 text-sm leading-relaxed md:text-base" style={{ color: "var(--fg-3)" }}>
          Please try again. If this keeps happening, you can head back to the homepage.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
          <button type="button" onClick={reset} className="btn btn-primary">
            <RotateCcw className="h-4 w-4" aria-hidden="true" />
            Retry
          </button>
          <Link href="/" className="btn btn-ghost">
            Back home
          </Link>
        </div>

        {error.digest && (
          <p className="mt-8 font-mono text-xs" style={{ color: "var(--fg-4)" }}>
            Digest: {error.digest}
          </p>
        )}
      </div>
    </main>
  );
}
