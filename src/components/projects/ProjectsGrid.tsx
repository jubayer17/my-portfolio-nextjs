"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { useMemo, useState } from "react";
import { ExternalLink, ArrowRight, Calendar } from "lucide-react";
import type { ProjectItem } from "@/data/resume";
import TechBadge from "@/components/ui/TechBadge";

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
              className="relative rounded-full px-4 py-2 text-sm font-semibold transition-colors duration-200"
              style={{ color: selected ? "var(--fg)" : "var(--fg-3)" }}
              aria-pressed={selected}
            >
              <span className="relative z-10">{c}</span>
              {selected && (
                <motion.span
                  layoutId="filter-bg"
                  className="absolute inset-0 rounded-full"
                  style={{
                    background: "var(--surface)",
                    border: "1px solid var(--border)",
                    boxShadow: "var(--shadow-xs)",
                  }}
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
          {filtered.map((p) => {
            const isFrontendOnly = p.slug === "restrocore";
            return (
            <motion.div
              key={p.slug}
              layout
              initial={reduceMotion ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            >
              <article className="card card-shimmer group relative flex h-full flex-col p-6 md:p-7">

                {/* Frontend-only: green border ring overlay (bypasses .card CSS) */}
                {isFrontendOnly && (
                  <span
                    className="pointer-events-none absolute inset-0 z-10"
                    style={{ border: "1.5px solid rgba(245,158,11,0.55)" }}
                  />
                )}

                {/* Frontend-only: top accent bar */}
                {isFrontendOnly && (
                  <span
                    className="absolute inset-x-0 top-0 z-10 h-[2px]"
                    style={{ background: "linear-gradient(90deg, #f59e0b, rgba(245,158,11,0.15))" }}
                  />
                )}

                {/* Hover accent overlay */}
                <div
                  className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{ background: isFrontendOnly ? "rgba(245,158,11,0.05)" : "var(--accent-soft)" }}
                />

                <div className="relative flex flex-1 flex-col gap-4">
                  {/* Meta */}
                  <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
                    <div className="flex items-center gap-2">
                      <span
                        className="rounded-full border px-2.5 py-1 text-[10px] font-black uppercase tracking-wider"
                        style={{
                          color: "var(--fg-4)",
                          background: "var(--surface-2)",
                          borderColor: "var(--border)",
                        }}
                      >
                        {p.category}
                      </span>
                    </div>
                    <span
                      className="flex items-center gap-1 text-xs font-medium"
                      style={{ color: "var(--fg-4)" }}
                    >
                      <Calendar className="h-3 w-3" />
                      {p.range.start} — {p.range.end}
                    </span>
                  </div>

                  {/* Title + desc */}
                  <div>
                    <h3
                      className="font-outfit text-lg font-extrabold tracking-tight transition-colors md:text-xl"
                      style={{ color: "var(--fg)" }}
                    >
                      {p.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--fg-3)" }}>
                      {p.description}
                    </p>
                    {isFrontendOnly && (
                      <p
                        className="mt-1.5 flex items-center gap-1.5 text-xs font-semibold"
                        style={{ color: "#f59e0b" }}
                      >
                        <motion.span
                          className="inline-block h-1.5 w-1.5 rounded-full"
                          style={{ background: "#f59e0b" }}
                          animate={reduceMotion ? undefined : { scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                        />
                        Frontend live · Backend in progress
                      </p>
                    )}
                  </div>

                  {/* Tech */}
                  <div className="flex flex-wrap gap-1.5">
                    {p.stack.slice(0, 8).map((t) => (
                      <TechBadge key={t} name={t} />
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="mt-auto flex flex-wrap items-center gap-2.5 pt-2">
                    <Link
                      href={`/projects/${p.slug}`}
                      className="btn btn-primary group/btn py-2 text-xs"
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
                        className={l.label === "Live" ? "btn btn-ghost py-2.5 px-4 text-sm font-semibold" : "btn btn-ghost py-2 text-xs"}
                      >
                        <ExternalLink className={l.label === "Live" ? "h-4 w-4" : "h-3.5 w-3.5"} />
                        {l.label}
                      </a>
                    ))}
                  </div>
                </div>
              </article>
            </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
