import Link from "next/link";
import { FolderSearch } from "lucide-react";

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
          <FolderSearch className="h-5 w-5" />
        </span>

        <h1
          className="font-outfit text-2xl font-bold tracking-tight md:text-3xl"
          style={{ color: "var(--fg)" }}
        >
          Project not found
        </h1>
        <p className="mt-3 text-sm leading-relaxed md:text-base" style={{ color: "var(--fg-3)" }}>
          The project you&rsquo;re looking for doesn&rsquo;t exist or has been moved.
        </p>

        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link href="/projects" className="btn btn-primary">
            Back to projects
          </Link>
          <Link href="/" className="btn btn-ghost">
            Home
          </Link>
        </div>
      </div>
    </main>
  );
}
