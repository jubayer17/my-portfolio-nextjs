import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ExternalLink, Calendar, Tag } from "lucide-react";
import type { Metadata } from "next";
import { resume } from "@/data/resume";
import TechBadge from "@/components/ui/TechBadge";

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
  if (!project) notFound();

  return (
    <main id="content" className="mx-auto max-w-6xl px-4 py-14 md:px-6 md:py-20" data-gsap="stagger">
      <div className="flex flex-col gap-6" data-gsap-child>

        {/* Back */}
        <Link
          href="/projects"
          className="inline-flex w-fit items-center gap-2 text-sm font-semibold transition-opacity hover:opacity-70"
          style={{ color: "var(--fg-3)" }}
        >
          <ArrowLeft className="h-4 w-4" />
          Back to projects
        </Link>

        {/* Hero card */}
        <div
          className="card accent-bar p-7 md:p-10"
          data-gsap-child
        >
          <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
            <div className="flex-1">
              <span className="chip">
                <Tag className="h-3 w-3" />
                {project.category}
              </span>
              <h1
                className="font-outfit mt-4 text-3xl font-black tracking-tight md:text-5xl"
                style={{ color: "var(--fg)" }}
              >
                {project.title}
              </h1>
              <p className="mt-4 max-w-prose text-sm leading-relaxed md:text-base" style={{ color: "var(--fg-3)" }}>
                {project.description}
              </p>
            </div>
            <span
              className="inline-flex shrink-0 items-center gap-1.5 self-start rounded-full border px-3 py-1.5 text-xs font-semibold"
              style={{
                color: "var(--fg-3)",
                background: "var(--surface-2)",
                borderColor: "var(--border)",
              }}
            >
              <Calendar className="h-3 w-3" />
              {project.range.start} — {project.range.end}
            </span>
          </div>

          {/* Tech stack */}
          <div className="mt-6 flex flex-wrap gap-2">
            {project.stack.map((t) => (
              <TechBadge key={t} name={t} size="md" />
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
                className="btn btn-ghost"
              >
                <ExternalLink className="h-4 w-4" />
                {l.label}
              </a>
            ))}
          </div>
        </div>

        {/* Image + bullets */}
        {project.images?.length ? (
          <section className="grid gap-5 md:grid-cols-12" data-gsap="reveal" data-gsap-child>
            <div className="md:col-span-8">
              <div
                className="relative aspect-video overflow-hidden rounded-2xl border"
                style={{ borderColor: "var(--border)", background: "var(--surface-2)" }}
              >
                <Image
                  src={project.images[0].src}
                  alt={project.images[0].alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 720px"
                  priority
                />
              </div>
            </div>
            <div className="card p-6 md:col-span-4">
              <h2
                className="font-outfit text-lg font-extrabold"
                style={{ color: "var(--fg)" }}
              >
                What I built
              </h2>
              <ul className="mt-5 space-y-3">
                {project.bullets.map((b) => (
                  <li key={b} className="flex gap-3 text-sm leading-relaxed" style={{ color: "var(--fg-2)" }}>
                    <span
                      className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full"
                      style={{ background: "var(--accent)" }}
                    />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </section>
        ) : (
          <div className="card p-7 md:p-10" data-gsap="reveal" data-gsap-child>
            <h2 className="font-outfit text-lg font-extrabold" style={{ color: "var(--fg)" }}>
              What I built
            </h2>
            <ul className="mt-5 space-y-3">
              {project.bullets.map((b) => (
                <li key={b} className="flex gap-3 text-sm leading-relaxed" style={{ color: "var(--fg-2)" }}>
                  <span
                    className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full"
                    style={{ background: "var(--accent)" }}
                  />
                  {b}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </main>
  );
}
