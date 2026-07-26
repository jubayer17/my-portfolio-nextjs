import Link from "next/link";
import { Compass } from "lucide-react";

export default function NotFound() {
  return (
    <main id="content" className="shell py-20">
      <div className="card accent-bar mx-auto max-w-2xl p-8 text-center md:p-10">
        <span
          className="mb-5 inline-flex h-11 w-11 items-center justify-center border"
          style={{
            color: "var(--accent-text)",
            borderColor: "var(--accent-line)",
            background: "var(--accent-soft)",
          }}
          aria-hidden="true"
        >
          <Compass className="h-5 w-5" />
        </span>

        <p className="font-mono text-sm font-bold tracking-[0.2em]" style={{ color: "var(--fg-4)" }}>
          404
        </p>
        <h1
          className="font-outfit mt-2 text-2xl font-bold tracking-tight md:text-3xl"
          style={{ color: "var(--fg)" }}
        >
          Page not found
        </h1>
        <p className="mt-3 text-sm leading-relaxed md:text-base" style={{ color: "var(--fg-3)" }}>
          The page you&rsquo;re looking for doesn&rsquo;t exist or has moved.
        </p>

        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link href="/" className="btn btn-primary">
            Back home
          </Link>
          <Link href="/projects" className="btn btn-ghost">
            Browse projects
          </Link>
        </div>
      </div>
    </main>
  );
}
