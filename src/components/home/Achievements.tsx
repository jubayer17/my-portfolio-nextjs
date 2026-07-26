"use client";

import { Trophy, ExternalLink } from "lucide-react";
import { LazyMotion, domAnimation, m, type Variants } from "framer-motion";

import SectionHeader from "@/components/ui/SectionHeader";
import { resume } from "@/data/resume";

const EASE = [0.22, 1, 0.36, 1] as const;

const item: Variants = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: EASE } },
};

export default function Achievements() {
  return (
    <LazyMotion features={domAnimation} strict>
      <section className="relative overflow-hidden py-14 sm:py-20" data-gsap="reveal">
        <span className="section-num" data-gsap="parallax" data-gsap-speed="14">
          03
        </span>

        <SectionHeader
          eyebrow="Proof Points"
          eyebrowIcon={<Trophy className="h-3 w-3" aria-hidden="true" />}
          title="Wins & Benchmarks"
          description="Contest placements and a competitive programming record built over five years."
        />

        {/* ── Problem solving ── */}
        <m.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{ visible: { transition: { staggerChildren: 0.06 } } }}
          className="mt-8 grid gap-4 sm:grid-cols-3"
        >
          {resume.problemSolving.map((p) => (
            <m.a
              key={p.platform}
              variants={item}
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              className="card group flex flex-col p-5"
            >
              <div className="flex items-baseline justify-between gap-2">
                <span
                  className="font-outfit text-3xl font-bold tracking-tight"
                  style={{ color: "var(--accent-text)" }}
                >
                  {p.count}
                </span>
                <ExternalLink
                  className="h-3.5 w-3.5 shrink-0 opacity-0 transition-opacity duration-200 group-hover:opacity-100"
                  style={{ color: "var(--fg-4)" }}
                  aria-hidden="true"
                />
              </div>
              <p className="mt-1 text-sm font-bold" style={{ color: "var(--fg)" }}>
                {p.platform}
              </p>
              <p
                className="break-anywhere font-mono text-[11px]"
                style={{ color: "var(--fg-4)" }}
              >
                @{p.handle}
              </p>
              <p className="mt-3 text-xs leading-relaxed" style={{ color: "var(--fg-3)" }}>
                {p.detail}
              </p>
            </m.a>
          ))}
        </m.div>

        {/* ── Contest placements ── */}
        <m.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{ visible: { transition: { staggerChildren: 0.06 } } }}
          className="mt-4 grid gap-4 sm:grid-cols-2"
        >
          {resume.achievements.map((a, idx) => (
            <m.article key={a.title} variants={item} className="card card-shimmer flex gap-4 p-5">
              <span
                className="font-mono flex h-8 w-8 shrink-0 items-center justify-center border text-xs font-bold"
                style={{
                  color: "var(--accent-text)",
                  background: "var(--accent-soft)",
                  borderColor: "var(--accent-line)",
                }}
                aria-hidden="true"
              >
                {String(idx + 1).padStart(2, "0")}
              </span>
              <div className="min-w-0">
                <h3
                  className="font-outfit font-bold tracking-tight"
                  style={{ color: "var(--fg)" }}
                >
                  {a.title}
                </h3>
                <p className="mt-1 text-sm leading-relaxed" style={{ color: "var(--fg-3)" }}>
                  {a.detail}
                </p>
              </div>
            </m.article>
          ))}
        </m.div>
      </section>
    </LazyMotion>
  );
}
