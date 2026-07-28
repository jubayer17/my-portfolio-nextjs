"use client";

import Link from "next/link";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowRight, ExternalLink } from "lucide-react";
import {
  LazyMotion, domAnimation, m, AnimatePresence,
  useMotionValue, useSpring, useReducedMotion, type Variants,
} from "framer-motion";

import SectionHeader from "@/components/ui/SectionHeader";
import TechBadge from "@/components/ui/TechBadge";
import StatusBadge from "@/components/ui/StatusBadge";
import { resume, PROJECT_DETAILS_ENABLED } from "@/data/resume";

const EASE = [0.22, 1, 0.36, 1] as const;

/**
 * Wraps a project row in whichever destination is actually available:
 * the case study, else the live site, else nothing clickable at all.
 */
function RowShell({
  slug,
  live,
  className,
  style,
  children,
}: Readonly<{
  slug: string;
  live?: string;
  className: string;
  style: React.CSSProperties;
  children: React.ReactNode;
}>) {
  if (PROJECT_DETAILS_ENABLED) {
    return (
      <Link href={`/projects/${slug}`} className={className} style={style}>
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
        className={className}
        style={style}
      >
        {children}
      </a>
    );
  }

  return (
    <div className={className} style={style}>
      {children}
    </div>
  );
}

const row: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.28, ease: EASE } },
};

// Upper bounds only — the panel sizes itself to the capture's aspect ratio, so
// a full-page shot is height-limited and a viewport shot is width-limited.
// Either way the whole screenshot stays visible.
const PREVIEW_MAX_W = 460;
// Budget for the panel as a whole. The caption strip below the image is part
// of that budget — leaving it out let a tall preview run off the viewport.
const PREVIEW_MAX_VH = 72;
const CAPTION_H = 62;
const PAD = 20;

export default function FeaturedProjects() {
  const reduceMotion = useReducedMotion();
  const projects = resume.projects;

  // The floating preview is a pointer affordance — it has no place on touch,
  // where `pointerenter` fires on tap and leaves the card stuck on screen.
  const [canHover, setCanHover] = useState(false);
  const [hoveredSlug, setHoveredSlug] = useState<string | null>(null);

  useEffect(() => {
    const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
    const sync = () => setCanHover(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  // Motion values, not state: the pointer moves at 120 Hz and re-rendering
  // the whole list on each event was dropping frames.
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 420, damping: 40, mass: 0.5 });
  const sy = useSpring(y, { stiffness: 420, damping: 40, mass: 0.5 });

  const panelRef = useRef<HTMLDivElement>(null);
  const lastPointer = useRef({ x: 0, y: 0 });

  const track = useCallback(
    (clientX: number, clientY: number) => {
      lastPointer.current = { x: clientX, y: clientY };

      // Measure the panel rather than assuming a size — its height depends on
      // the hovered project's aspect ratio.
      const el = panelRef.current;
      const w = el?.offsetWidth || PREVIEW_MAX_W;
      const h = el?.offsetHeight || window.innerHeight * PREVIEW_MAX_VH;

      const maxX = window.innerWidth - w - PAD;
      const maxY = window.innerHeight - h - PAD;
      x.set(Math.min(Math.max(clientX + PAD, PAD), Math.max(maxX, PAD)));
      y.set(Math.min(Math.max(clientY - h / 2, PAD), Math.max(maxY, PAD)));
    },
    [x, y]
  );

  const hovered = projects.find((p) => p.slug === hoveredSlug);
  const preview = hovered?.images?.[0];

  // The panel doesn't exist yet on the pointerenter that reveals it, so the
  // first track() runs against fallback numbers. Re-clamp once it's measurable,
  // otherwise a tall preview can hang off the bottom of the viewport.
  useEffect(() => {
    if (!hovered) return;
    const id = requestAnimationFrame(() =>
      track(lastPointer.current.x, lastPointer.current.y)
    );
    return () => cancelAnimationFrame(id);
  }, [hovered, track]);

  return (
    <LazyMotion features={domAnimation} strict>
      <section className="relative overflow-hidden py-14 sm:py-20" data-gsap="reveal">
        <span className="section-num" data-gsap="parallax" data-gsap-speed="12">
          03
        </span>

        <SectionHeader
          eyebrow="Project Index"
          title="Build Gallery"
          description="Enterprise platforms, marketplaces, and developer tools — the work behind the résumé."
          action={{ label: "All projects", href: "/projects" }}
        />

        <m.ul
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{ visible: { transition: { staggerChildren: 0.05 } } }}
          className="mt-8 overflow-hidden border"
          style={{ borderColor: "var(--border)", background: "var(--surface)" }}
        >
          {projects.map((p, idx) => {
            const live = p.links.find((l) => l.label === "Live");
            const isHovered = hoveredSlug === p.slug;
            const last = idx === projects.length - 1;

            return (
              <m.li
                key={p.slug}
                variants={row}
                className="relative"
                style={{ borderBottom: last ? undefined : "1px solid var(--border)" }}
                onPointerEnter={(e) => {
                  if (!canHover || e.pointerType !== "mouse") return;
                  setHoveredSlug(p.slug);
                  track(e.clientX, e.clientY);
                }}
                onPointerMove={(e) => {
                  if (!canHover || e.pointerType !== "mouse") return;
                  track(e.clientX, e.clientY);
                }}
                onPointerLeave={() => setHoveredSlug(null)}
              >
                {/* One primary target for the whole row — the case study while
                    those pages exist, the live site otherwise. The separate
                    Live button sits outside it so both stay reachable. */}
                <RowShell
                  slug={p.slug}
                  live={live?.href}
                  className="block transition-colors duration-200 md:grid md:grid-cols-[56px_1fr_auto] md:items-center md:gap-4"
                  style={{
                    background: isHovered ? "var(--surface-2)" : "transparent",
                    boxShadow: isHovered ? "inset 2px 0 0 0 var(--accent)" : undefined,
                  }}
                >
                  <div className="px-5 py-5 md:contents">
                    <span
                      className="hidden self-center px-5 font-mono text-xs font-bold tracking-[0.14em] md:block"
                      style={{ color: isHovered ? "var(--accent-text)" : "var(--fg-4)" }}
                    >
                      {String(idx + 1).padStart(2, "0")}
                    </span>

                    <div className="min-w-0 md:py-5">
                      <div className="flex flex-wrap items-baseline gap-x-2.5 gap-y-1">
                        <h3
                          className="font-outfit text-base font-bold tracking-tight transition-colors duration-200 sm:text-lg"
                          style={{ color: isHovered ? "var(--accent-text)" : "var(--fg)" }}
                        >
                          {p.title}
                        </h3>
                        <span
                          className="font-mono text-[10px] font-bold uppercase tracking-[0.12em]"
                          style={{ color: "var(--fg-4)" }}
                        >
                          {p.category}
                        </span>
                      </div>

                      {p.status && (
                        <div className="mt-2">
                          <StatusBadge status={p.status} />
                        </div>
                      )}

                      <p
                        className="mt-2 line-clamp-2 text-sm leading-relaxed"
                        style={{ color: "var(--fg-3)" }}
                      >
                        {p.description}
                      </p>

                      <div className="mt-3 flex flex-wrap gap-1.5">
                        {p.stack.slice(0, 3).map((t) => (
                          <TechBadge key={t} name={t} />
                        ))}
                        {p.stack.slice(3, 5).map((t) => (
                          <span key={t} className="hidden sm:inline-flex">
                            <TechBadge name={t} />
                          </span>
                        ))}
                        {p.stack.length > 3 && (
                          <span className="tag sm:hidden">+{p.stack.length - 3}</span>
                        )}
                        {p.stack.length > 5 && (
                          <span className="tag hidden sm:inline-flex">+{p.stack.length - 5}</span>
                        )}
                      </div>

                      {PROJECT_DETAILS_ENABLED ? (
                        <span
                          className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold md:hidden"
                          style={{ color: "var(--fg-4)" }}
                        >
                          View case study
                          <ArrowRight className="h-3.5 w-3.5" />
                        </span>
                      ) : (
                        live && (
                          <span
                            className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold"
                            style={{ color: isHovered ? "var(--accent-text)" : "var(--fg-4)" }}
                          >
                            Visit live site
                            <ExternalLink className="h-3 w-3" aria-hidden="true" />
                          </span>
                        )
                      )}
                    </div>

                    <span className="hidden shrink-0 items-center px-5 md:flex">
                      {(PROJECT_DETAILS_ENABLED || live) && (
                        <ArrowRight
                          className="h-4 w-4 transition-transform duration-200"
                          style={{
                            color: isHovered ? "var(--accent-text)" : "var(--fg-4)",
                            transform: isHovered ? "translateX(3px)" : undefined,
                          }}
                          aria-hidden="true"
                        />
                      )}
                    </span>
                  </div>
                </RowShell>

                {/* Only a separate target when the row itself points elsewhere;
                    with case studies off the whole row already opens the live
                    site, so a second link to the same URL would be noise. */}
                {live && PROJECT_DETAILS_ENABLED && (
                  <a
                    href={live.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute bottom-5 right-5 inline-flex items-center gap-1 border px-2.5 py-1.5 text-xs font-semibold transition-colors duration-200 hover:border-[var(--accent-line)] hover:text-[var(--accent-text)] md:bottom-auto md:right-14 md:top-1/2 md:-translate-y-1/2"
                    style={{
                      borderColor: "var(--border)",
                      background: "var(--surface)",
                      color: "var(--fg-2)",
                    }}
                  >
                    Live
                    <ExternalLink className="h-3 w-3" aria-hidden="true" />
                  </a>
                )}
              </m.li>
            );
          })}
        </m.ul>
      </section>

      {/* ── Cursor-following preview (fine pointers only) ── */}
      {canHover && !reduceMotion && (
        <AnimatePresence>
          {hovered && (
            <m.div
              key={hovered.slug}
              ref={panelRef}
              className="pointer-events-none fixed left-0 top-0 z-[60] hidden lg:block"
              style={{
                x: sx,
                y: sy,
                // Panel width follows the capture's aspect ratio: wide shots hit
                // the 460px cap, tall full-page shots are limited by the height
                // left over once the caption strip is subtracted.
                width: preview
                  ? `min(${PREVIEW_MAX_W}px, calc((${PREVIEW_MAX_VH}vh - ${CAPTION_H}px) * ${(
                      preview.width / preview.height
                    ).toFixed(4)}))`
                  : `${PREVIEW_MAX_W}px`,
              }}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.14, ease: EASE }}
              aria-hidden="true"
            >
              <div
                className="relative overflow-hidden border"
                style={{
                  background: "var(--surface)",
                  borderColor: "var(--accent-line)",
                  boxShadow: "var(--shadow-lg)",
                }}
              >
                <span
                  className="absolute inset-x-0 top-0 z-10 h-[2px]"
                  style={{
                    background:
                      "linear-gradient(90deg, var(--accent), var(--cyan) 60%, transparent)",
                  }}
                />

                {preview ? (
                  // The panel is already sized to the aspect ratio, so the
                  // image just fills it — the whole capture, uncropped.
                  <Image
                    src={preview.src}
                    alt=""
                    width={preview.width}
                    height={preview.height}
                    className="block h-auto w-full"
                    sizes={`${PREVIEW_MAX_W}px`}
                  />
                ) : (
                  <div
                    className="dot-grid flex aspect-[16/10] w-full items-center justify-center"
                    style={{ background: "var(--surface-2)" }}
                  >
                    <p
                      className="font-outfit text-2xl font-bold"
                      style={{ color: "var(--fg-2)" }}
                    >
                      {hovered.title}
                    </p>
                  </div>
                )}

                <div
                  className="flex items-center justify-between gap-3 border-t px-4 py-3"
                  style={{ borderColor: "var(--border)", background: "var(--surface)" }}
                >
                  <div className="min-w-0">
                    <p
                      className="font-mono text-[9px] font-bold uppercase tracking-[0.2em]"
                      style={{ color: "var(--fg-4)" }}
                    >
                      {hovered.category}
                    </p>
                    <p
                      className="font-outfit truncate text-sm font-bold"
                      style={{ color: "var(--fg)" }}
                    >
                      {hovered.tagline}
                    </p>
                  </div>
                  <span
                    className="shrink-0 border px-2 py-0.5 font-mono text-[9px] font-bold uppercase tracking-widest"
                    style={{ borderColor: "var(--border)", color: "var(--fg-4)" }}
                  >
                    {hovered.category}
                  </span>
                </div>
              </div>
            </m.div>
          )}
        </AnimatePresence>
      )}
    </LazyMotion>
  );
}
