import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight, ExternalLink, Calendar, Tag, CheckCircle2, Layers } from "lucide-react";
import type { Metadata } from "next";

import { resume, projectBySlug, PROJECT_DETAILS_ENABLED } from "@/data/resume";
import TechBadge from "@/components/ui/TechBadge";
import StatusBadge from "@/components/ui/StatusBadge";

// Only the slugs returned below exist. Relying on notFound() alone let Next
// cache and re-serve the not-found body with a 200 (a soft 404); refusing
// unknown params rejects the request at the routing layer with a real 404.
export const dynamicParams = false;

// Case studies are switched off — no slugs are valid until
// PROJECT_DETAILS_ENABLED goes back to true.
export function generateStaticParams() {
  if (!PROJECT_DETAILS_ENABLED) return [];
  return resume.projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  if (!PROJECT_DETAILS_ENABLED) return { title: "Project not found" };

  const { slug } = await params;
  const project = projectBySlug(slug);
  if (!project) return { title: "Project not found" };

  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: `${project.title} — ${project.tagline}`,
      description: project.description,
      images: project.images?.[0]?.src ? [{ url: project.images[0].src }] : undefined,
    },
  };
}

export default async function ProjectPage(
  { params }: { params: Promise<{ slug: string }> }
) {
  if (!PROJECT_DETAILS_ENABLED) notFound();

  const { slug } = await params;
  const project = projectBySlug(slug);
  if (!project) notFound();

  const index = resume.projects.findIndex((p) => p.slug === slug);
  const next = resume.projects[(index + 1) % resume.projects.length];
  const cover = project.images?.[0];

  return (
    <main id="content" className="shell py-12 md:py-16" data-gsap="stagger">

      {/* ── Back ── */}
      <div data-gsap-child>
        <Link
          href="/projects"
          className="group inline-flex w-fit items-center gap-2 text-sm font-semibold transition-colors duration-200 hover:text-[var(--accent-text)]"
          style={{ color: "var(--fg-3)" }}
        >
          <ArrowLeft className="h-4 w-4 transition-transform duration-200 group-hover:-translate-x-0.5" />
          Back to projects
        </Link>
      </div>

      {/* ── Hero ── */}
      <header className="card accent-bar mt-6 p-6 sm:p-8 md:p-10" data-gsap-child>
        <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-center gap-2">
              <span className="chip">
                <Tag className="h-3 w-3" aria-hidden="true" />
                {project.category}
              </span>
              {project.status && <StatusBadge status={project.status} size="md" />}
            </div>

            <h1
              className="font-outfit mt-4 text-[clamp(2rem,6vw,3.25rem)] font-bold leading-[1.08] tracking-tight"
              style={{ color: "var(--fg)" }}
            >
              {project.title}
            </h1>
            <p
              className="mt-2 text-base font-semibold tracking-tight"
              style={{ color: "var(--accent-text)" }}
            >
              {project.tagline}
            </p>
            <p
              className="mt-4 max-w-prose text-sm leading-relaxed md:text-base"
              style={{ color: "var(--fg-3)" }}
            >
              {project.description}
            </p>
          </div>

          <span
            className="inline-flex shrink-0 items-center gap-1.5 self-start border px-3 py-1.5 font-mono text-xs font-semibold"
            style={{
              color: "var(--fg-3)",
              background: "var(--surface-2)",
              borderColor: "var(--border)",
            }}
          >
            <Calendar className="h-3 w-3" aria-hidden="true" />
            {project.range.start} — {project.range.end}
          </span>
        </div>

        {project.links.length > 0 && (
          <div className="mt-7 flex flex-wrap gap-3">
            {project.links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                <ExternalLink className="h-4 w-4" aria-hidden="true" />
                {l.label === "Live" ? "Visit live site" : l.label}
              </a>
            ))}
          </div>
        )}
      </header>

      {/* ── Screenshot ── */}
      {cover && (
        <figure
          className="mt-5 overflow-hidden border"
          style={{ borderColor: "var(--border)", background: "var(--surface-2)" }}
          data-gsap-child
        >
          <Image
            src={cover.src}
            alt={cover.alt}
            width={1600}
            height={1000}
            priority
            sizes="(max-width: 1152px) 100vw, 1152px"
            className="block h-auto w-full object-contain"
          />
        </figure>
      )}

      {/* ── What I built + Features ── */}
      <div className="mt-5 grid gap-5 lg:grid-cols-12" data-gsap-child>
        <section className="card p-6 sm:p-7 lg:col-span-7">
          <h2 className="font-outfit text-lg font-bold" style={{ color: "var(--fg)" }}>
            What I built
          </h2>
          <ul className="mt-5 space-y-3.5">
            {project.bullets.map((b) => (
              <li
                key={b}
                className="flex gap-3 text-sm leading-relaxed"
                style={{ color: "var(--fg-2)" }}
              >
                <span
                  className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full"
                  style={{ background: "var(--accent)" }}
                  aria-hidden="true"
                />
                <span className="min-w-0">{b}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="card p-6 sm:p-7 lg:col-span-5">
          <h2
            className="font-outfit flex items-center gap-2 text-lg font-bold"
            style={{ color: "var(--fg)" }}
          >
            <CheckCircle2 className="h-4 w-4" style={{ color: "var(--cyan)" }} aria-hidden="true" />
            Key features
          </h2>
          <ul className="mt-5 grid gap-2.5 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
            {project.features.map((f) => (
              <li
                key={f}
                className="flex items-start gap-2 text-xs leading-relaxed"
                style={{ color: "var(--fg-2)" }}
              >
                <CheckCircle2
                  className="mt-0.5 h-3.5 w-3.5 shrink-0"
                  style={{ color: "var(--cyan)" }}
                  aria-hidden="true"
                />
                <span className="min-w-0">{f}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>

      {/* ── Stack ── */}
      <section className="card mt-5 p-6 sm:p-7" data-gsap-child>
        <h2
          className="font-outfit flex items-center gap-2 text-lg font-bold"
          style={{ color: "var(--fg)" }}
        >
          <Layers className="h-4 w-4" style={{ color: "var(--accent)" }} aria-hidden="true" />
          Technology stack
        </h2>
        <div className="mt-5 flex flex-wrap gap-2">
          {project.stack.map((t) => (
            <TechBadge key={t} name={t} size="md" />
          ))}
        </div>
      </section>

      {/* ── Next project ── */}
      <nav className="mt-5" aria-label="Next project" data-gsap-child>
        <Link
          href={`/projects/${next.slug}`}
          className="card group flex items-center justify-between gap-4 p-6 sm:p-7"
        >
          <div className="min-w-0">
            <p
              className="text-[10px] font-bold uppercase tracking-[0.14em]"
              style={{ color: "var(--fg-4)" }}
            >
              Next project
            </p>
            <p
              className="font-outfit mt-1 truncate text-lg font-bold tracking-tight transition-colors duration-200 group-hover:text-[var(--accent-text)]"
              style={{ color: "var(--fg)" }}
            >
              {next.title}
            </p>
            <p className="truncate text-xs" style={{ color: "var(--fg-4)" }}>
              {next.tagline}
            </p>
          </div>
          <ArrowRight
            className="h-5 w-5 shrink-0 transition-transform duration-200 group-hover:translate-x-1"
            style={{ color: "var(--accent)" }}
            aria-hidden="true"
          />
        </Link>
      </nav>
    </main>
  );
}
