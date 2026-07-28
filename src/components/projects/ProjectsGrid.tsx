"use client";

import { AnimatePresence, LazyMotion, domAnimation, m, useReducedMotion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useMemo, useState } from "react";
import { ExternalLink, ArrowRight } from "lucide-react";

import { PROJECT_DETAILS_ENABLED, type ProjectItem } from "@/data/resume";
import TechBadge from "@/components/ui/TechBadge";
import StatusBadge from "@/components/ui/StatusBadge";
import { useSpotlight } from "@/components/ui/useSpotlight";

const EASE = [0.22, 1, 0.36, 1] as const;

const COVER_CLASS = "relative block overflow-hidden border-b";
const COVER_STYLE = { borderColor: "var(--border)", background: "var(--surface-2)" };

/**
 * The cover points at the case study when those pages exist, otherwise at the
 * live site — and becomes an inert wrapper when there's neither, so we never
 * render an anchor that goes nowhere.
 */
function CoverFrame({
  slug,
  live,
  children,
}: Readonly<{ slug: string; live?: string; children: React.ReactNode }>) {
  if (PROJECT_DETAILS_ENABLED) {
    return (
      <Link
        href={`/projects/${slug}`}
        className={COVER_CLASS}
        style={COVER_STYLE}
        tabIndex={-1}
        aria-hidden="true"
      >
        {children}
      </Link>
    );
  }

  if (live) {
    return (
      <a
        href={live}
        target="_blank"
        rel="noopener noreferrer"
        className={COVER_CLASS}
        style={COVER_STYLE}
        tabIndex={-1}
        aria-hidden="true"
      >
        {children}
      </a>
    );
  }

  return (
    <div className={COVER_CLASS} style={COVER_STYLE}>
      {children}
    </div>
  );
}

/** Same resolution for the heading, including the stretched card overlay. */
function CardTitleLink({
  slug,
  live,
  children,
}: Readonly<{ slug: string; live?: string; children: React.ReactNode }>) {
  const className =
    "transition-colors duration-200 hover:text-[var(--accent-text)] focus-visible:text-[var(--accent-text)]";
  // Stretches the link over the whole card without swallowing the
  // action buttons below (which are z-raised).
  const overlay = <span className="absolute inset-0 z-0" aria-hidden="true" />;

  if (PROJECT_DETAILS_ENABLED) {
    return (
      <Link href={`/projects/${slug}`} className={className}>
        {overlay}
        {children}
      </Link>
    );
  }

  if (live) {
    return (
      <a href={live} target="_blank" rel="noopener noreferrer" className={className}>
        {overlay}
        {children}
      </a>
    );
  }

  return <>{children}</>;
}

export default function ProjectsGrid({ projects }: { projects: readonly ProjectItem[] }) {
  const reduceMotion = useReducedMotion();
  const gridRef = useSpotlight<HTMLDivElement>();

  const categories = useMemo(
    () => ["All", ...Array.from(new Set(projects.map((p) => p.category)))],
    [projects]
  );

  const [active, setActive] = useState<string>("All");

  const filtered = useMemo(
    () => (active === "All" ? projects : projects.filter((p) => p.category === active)),
    [active, projects]
  );

  return (
    <LazyMotion features={domAnimation} strict>
      <section aria-label="Projects" className="space-y-7">

        {/* ── Filter pills ── */}
        <div
          className="scroll-x -mx-1 flex items-center gap-2 px-1 pb-1"
          role="group"
          aria-label="Filter projects by category"
        >
          {categories.map((c) => {
            const selected = c === active;
            return (
              <button
                key={c}
                type="button"
                onClick={() => setActive(c)}
                aria-pressed={selected}
                className="relative shrink-0 whitespace-nowrap px-3.5 py-2 text-sm font-semibold transition-colors duration-200"
                style={{ color: selected ? "var(--accent-text)" : "var(--fg-3)" }}
              >
                <span className="relative z-10">{c}</span>
                {selected && (
                  <m.span
                    layoutId="filter-bg"
                    className="absolute inset-0"
                    style={{
                      background: "var(--accent-soft)",
                      border: "1px solid var(--accent-line)",
                    }}
                    transition={
                      reduceMotion ? { duration: 0 } : { duration: 0.24, ease: EASE }
                    }
                  />
                )}
              </button>
            );
          })}
          <span className="ml-auto shrink-0 pl-3 font-mono text-xs" style={{ color: "var(--fg-4)" }}>
            {filtered.length}/{projects.length}
          </span>
        </div>

        {/* ── Grid ── */}
        <m.div ref={gridRef} layout className="grid gap-5 md:grid-cols-2">
          <AnimatePresence mode="popLayout" initial={false}>
            {filtered.map((p) => {
              const live = p.links.find((l) => l.label === "Live");
              const cover = p.images?.[0];

              return (
                <m.article
                  key={p.slug}
                  layout
                  initial={reduceMotion ? false : { opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={reduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.97 }}
                  transition={{ duration: 0.26, ease: EASE }}
                  className="card spotlight group relative flex h-full flex-col"
                >
                  {/* Cover — object-cover anchored to the top. Several captures
                      are full-page and taller than they are wide; contain would
                      shrink those to a thin sliver inside the 16:9 frame. */}
                  <CoverFrame slug={p.slug} live={live?.href}>
                    <div className="relative aspect-[16/9]">
                      {cover ? (
                        <Image
                          src={cover.src}
                          alt=""
                          fill
                          sizes="(max-width: 768px) 100vw, 560px"
                          className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                        />
                      ) : (
                        <div className="dot-grid flex h-full w-full items-center justify-center">
                          <span
                            className="font-outfit px-4 text-center text-xl font-bold tracking-tight"
                            style={{ color: "var(--fg-3)" }}
                          >
                            {p.title}
                          </span>
                        </div>
                      )}
                    </div>
                  </CoverFrame>

                  <div className="flex flex-1 flex-col gap-3.5 p-5 sm:p-6">
                    {/* Meta */}
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span
                        className="border px-2 py-0.5 font-mono text-[10px] font-bold uppercase tracking-wider"
                        style={{
                          color: "var(--fg-4)",
                          background: "var(--surface-2)",
                          borderColor: "var(--border)",
                        }}
                      >
                        {p.category}
                      </span>
                    </div>

                    {/* Title */}
                    <div>
                      <h2
                        className="font-outfit text-lg font-bold tracking-tight md:text-xl"
                        style={{ color: "var(--fg)" }}
                      >
                        <CardTitleLink slug={p.slug} live={live?.href}>
                          {p.title}
                        </CardTitleLink>
                      </h2>
                      <p className="mt-0.5 text-xs font-medium" style={{ color: "var(--fg-4)" }}>
                        {p.tagline}
                      </p>
                    </div>

                    {p.status && <StatusBadge status={p.status} />}

                    <p className="text-sm leading-relaxed" style={{ color: "var(--fg-3)" }}>
                      {p.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5">
                      {p.stack.slice(0, 7).map((t) => (
                        <TechBadge key={t} name={t} />
                      ))}
                      {p.stack.length > 7 && (
                        <span className="tag">+{p.stack.length - 7}</span>
                      )}
                    </div>

                    {/* Actions */}
                    <div className="relative z-10 mt-auto flex flex-wrap items-center gap-2.5 pt-1.5">
                      {PROJECT_DETAILS_ENABLED && (
                        <Link
                          href={`/projects/${p.slug}`}
                          className="btn btn-primary group/btn px-4 py-2 text-xs"
                        >
                          Case study
                          <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover/btn:translate-x-0.5" />
                        </Link>
                      )}
                      {live && (
                        <a
                          href={live.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          // With case studies off this is the card's primary action.
                          className={`btn group/btn px-4 py-2 text-xs ${
                            PROJECT_DETAILS_ENABLED ? "btn-ghost" : "btn-primary"
                          }`}
                        >
                          <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                          Live site
                        </a>
                      )}
                    </div>
                  </div>
                </m.article>
              );
            })}
          </AnimatePresence>
        </m.div>
      </section>
    </LazyMotion>
  );
}
