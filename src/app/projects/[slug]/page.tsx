import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ExternalLink, Calendar, Tag } from "lucide-react";
import type { Metadata } from "next";
import { resume } from "@/data/resume";

export function generateStaticParams() {
  return resume.projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params;
  const project = resume.projects.find((p) => p.slug === slug);
  if (!project) return { title: "Project not found" };
  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      images: project.images?.[0]?.src ? [{ url: project.images[0].src }] : undefined,
    },
  };
}

export default async function ProjectPage(
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const project = resume.projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main id="content" className="mx-auto max-w-6xl px-4 py-14 md:py-20">
      <div className="flex flex-col gap-6">

        {/* Back link */}
        <Link
          href="/projects"
          className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-slate-500 transition hover:text-accent-600 dark:text-slate-400 dark:hover:text-accent-400"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to projects
        </Link>

        {/* Hero card */}
        <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-7 dark:border-white/[0.07] dark:bg-ink-700 md:p-10">
          <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-accent-500 via-violet-500 to-cyan-400 opacity-70" />

          <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
            <div className="flex-1">
              <span className="section-label">
                <Tag className="h-3 w-3" />
                {project.category}
              </span>
              <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white md:text-5xl">
                {project.title}
              </h1>
              <p className="mt-4 max-w-prose text-sm leading-relaxed text-slate-600 dark:text-slate-300 md:text-base">
                {project.description}
              </p>
            </div>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-semibold text-slate-600 dark:border-white/[0.07] dark:bg-white/[0.04] dark:text-slate-400 shrink-0">
              <Calendar className="h-3 w-3" />
              {project.range.start} — {project.range.end}
            </span>
          </div>

          {/* Tech stack */}
          <div className="mt-6 flex flex-wrap gap-2">
            {project.stack.map((t) => (
              <span
                key={t}
                className="badge-hover rounded-lg border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs font-medium text-slate-700 dark:border-white/[0.07] dark:bg-white/[0.04] dark:text-slate-300"
              >
                {t}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="mt-7 flex flex-wrap gap-3">
            {project.links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm"
              >
                <ExternalLink className="h-4 w-4" />
                {l.label}
              </a>
            ))}
          </div>
        </div>

        {/* Image + bullets */}
        {project.images?.length ? (
          <section className="grid gap-5 md:grid-cols-12">
            <div className="md:col-span-8">
              <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 dark:border-white/[0.07] dark:bg-ink-600">
                <Image
                  src={project.images[0].src}
                  alt={project.images[0].alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 720px"
                  priority
                />
              </div>
            </div>
            <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-7 dark:border-white/[0.07] dark:bg-ink-700 md:col-span-4">
              <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-violet-500 to-accent-500 opacity-60" />
              <h2 className="text-lg font-extrabold text-slate-900 dark:text-white">What I built</h2>
              <ul className="mt-5 space-y-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                {project.bullets.map((b) => (
                  <li key={b} className="flex gap-3">
                    <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-accent-400" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        ) : (
          <section className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-7 dark:border-white/[0.07] dark:bg-ink-700 md:p-10">
            <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-violet-500 to-accent-500 opacity-60" />
            <h2 className="text-lg font-extrabold text-slate-900 dark:text-white">What I built</h2>
            <ul className="mt-5 space-y-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
              {project.bullets.map((b) => (
                <li key={b} className="flex gap-3">
                  <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-accent-400" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </section>
        )}
      </div>
    </main>
  );
}
