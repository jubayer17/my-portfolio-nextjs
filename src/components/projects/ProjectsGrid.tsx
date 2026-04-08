"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { useMemo, useState } from "react";
import { ExternalLink, ArrowRight, Calendar } from "lucide-react";
import type { ProjectItem } from "@/data/resume";

export default function ProjectsGrid({ projects }: { projects: readonly ProjectItem[] }) {
  const reduceMotion = useReducedMotion();

  const categories = useMemo(() => {
    const unique = Array.from(new Set(projects.map((p) => p.category)));
    return ["All", ...unique] as const;
  }, [projects]);

  const [active, setActive] = useState<(typeof categories)[number]>("All");

  const filtered = useMemo(
    () => (active === "All" ? projects : projects.filter((p) => p.category === active)),
    [active, projects]
  );

  return (
    <section aria-label="Projects list" className="space-y-8">
      {/* Filter pills */}
      <div className="flex flex-wrap items-center gap-2">
        {categories.map((c) => {
          const selected = c === active;
          return (
            <button
              key={c}
              type="button"
              onClick={() => setActive(c)}
              className={[
                "relative inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-semibold transition-colors duration-200",
                selected
                  ? "text-slate-900 dark:text-white"
                  : "text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-100",
              ].join(" ")}
              aria-pressed={selected}
            >
              <span className="relative z-10">{c}</span>
              {selected && (
                <motion.span
                  layoutId="projects-filter"
                  className="absolute inset-0 rounded-full border border-accent-200 bg-accent-50 dark:border-accent-500/20 dark:bg-accent-500/10"
                  transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                />
              )}
            </button>
          );
        })}
      </div>

      {/* Grid */}
      <motion.div
        layout
        className="grid gap-5 md:grid-cols-2"
        transition={reduceMotion ? { duration: 0 } : { duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      >
        <AnimatePresence mode="popLayout" initial={false}>
          {filtered.map((p) => (
            <motion.div
              key={p.slug}
              layout
              initial={reduceMotion ? false : { opacity: 0, y: 18 }}
              animate={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
              exit={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 18 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            >
              <article className="group card-hover glow-border shimmer-hover relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 dark:border-white/[0.07] dark:bg-ink-700 md:p-7">
                {/* Subtle gradient hover overlay */}
                <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-accent-500/0 to-accent-500/0 transition-all duration-500 group-hover:from-accent-500/[0.02] group-hover:to-violet-500/[0.03]" />

                <div className="relative flex flex-1 flex-col gap-4">
                  {/* Meta row */}
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <span className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest text-slate-500 dark:border-white/[0.07] dark:bg-white/[0.04] dark:text-slate-400">
                      {p.category}
                    </span>
                    <span className="flex items-center gap-1 text-xs font-medium text-slate-400 dark:text-slate-500">
                      <Calendar className="h-3 w-3" />
                      {p.range.start} — {p.range.end}
                    </span>
                  </div>

                  {/* Title + description */}
                  <div>
                    <h3 className="text-lg font-extrabold text-slate-900 transition-colors group-hover:text-accent-600 dark:text-white dark:group-hover:text-accent-400 md:text-xl">
                      {p.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                      {p.description}
                    </p>
                  </div>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-1.5">
                    {p.stack.slice(0, 8).map((t) => (
                      <span
                        key={t}
                        className="tech-badge rounded-lg border border-slate-200 bg-slate-50 px-2.5 py-1 text-[11px] font-medium text-slate-600 dark:border-white/[0.07] dark:bg-white/[0.04] dark:text-slate-400"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* CTA row */}
                  <div className="mt-auto flex flex-wrap items-center gap-2.5 pt-2">
                    <Link
                      href={`/projects/${p.slug}`}
                      className="btn-primary group/btn py-2 text-xs"
                    >
                      Case study
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover/btn:translate-x-0.5" />
                    </Link>
                    {p.links.slice(0, 2).map((l) => (
                      <a
                        key={l.href}
                        href={l.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-ghost py-2 text-xs"
                      >
                        <ExternalLink className="h-3.5 w-3.5" />
                        {l.label}
                      </a>
                    ))}
                  </div>
                </div>
              </article>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
