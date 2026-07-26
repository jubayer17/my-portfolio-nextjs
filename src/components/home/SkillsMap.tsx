"use client";

import {
  Braces, Monitor, Server, Sparkles, Database, GitBranch, Package,
  type LucideIcon,
} from "lucide-react";
import { LazyMotion, domAnimation, m } from "framer-motion";

import SectionHeader from "@/components/ui/SectionHeader";
import TechBadge from "@/components/ui/TechBadge";
import { resume } from "@/data/resume";

const EASE = [0.22, 1, 0.36, 1] as const;

/** Icon + accent per skill group, keyed by the data module's stable `key`. */
const TONE: Record<string, { icon: LucideIcon; accent: string; soft: string }> = {
  languages: { icon: Braces, accent: "#a78bfa", soft: "rgba(167,139,250,0.12)" },
  frontend: { icon: Monitor, accent: "#38bdf8", soft: "rgba(56,189,248,0.12)" },
  backend: { icon: Server, accent: "#f97316", soft: "rgba(249,115,22,0.12)" },
  ai: { icon: Sparkles, accent: "#22d3ee", soft: "rgba(34,211,238,0.12)" },
  databases: { icon: Database, accent: "#60a5fa", soft: "rgba(96,165,250,0.12)" },
  devops: { icon: GitBranch, accent: "#f43f5e", soft: "rgba(244,63,94,0.12)" },
  tools: { icon: Package, accent: "#fbbf24", soft: "rgba(251,191,36,0.12)" },
};

const FALLBACK = { icon: Package, accent: "var(--accent)", soft: "var(--accent-soft)" };

export default function SkillsMap() {
  return (
    <LazyMotion features={domAnimation} strict>
      <section className="relative overflow-hidden py-14 sm:py-20" data-gsap="reveal">
        <span className="section-num" data-gsap="parallax" data-gsap-speed="10">
          01
        </span>

        <SectionHeader
          eyebrow="Capability Map"
          title="Stack Spectrum"
          description="Comfortable across the full stack — from API design and data modelling to UI delivery and AI integration."
          action={{ label: "Experience", href: "/work" }}
        />

        <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {resume.skills.map((group, i) => {
            const tone = TONE[group.key] ?? FALLBACK;
            const Icon = tone.icon;

            return (
              <m.article
                key={group.key}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.3, delay: Math.min(i, 5) * 0.04, ease: EASE }}
                className="card group relative flex flex-col p-5 sm:p-6"
              >
                <span
                  className="absolute inset-x-0 top-0 h-[3px]"
                  style={{ background: tone.accent }}
                  aria-hidden="true"
                />

                <div className="flex items-start justify-between gap-3">
                  <span
                    className="flex h-10 w-10 shrink-0 items-center justify-center border"
                    style={{
                      borderColor: tone.accent,
                      background: tone.soft,
                      color: tone.accent,
                    }}
                  >
                    <Icon className="h-4.5 w-4.5" aria-hidden="true" />
                  </span>
                  <span
                    className="shrink-0 border px-2 py-0.5 font-mono text-[10px] font-bold uppercase tracking-[0.1em]"
                    style={{
                      color: "var(--fg-4)",
                      borderColor: "var(--border)",
                      background: "var(--surface-2)",
                    }}
                  >
                    {group.items.length}
                  </span>
                </div>

                <h3
                  className="font-outfit mt-4 text-lg font-bold tracking-tight"
                  style={{ color: "var(--fg)" }}
                >
                  {group.label}
                </h3>
                <p className="mt-1 text-xs leading-relaxed" style={{ color: "var(--fg-4)" }}>
                  {group.blurb}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((s) => (
                    <TechBadge key={s} name={s} />
                  ))}
                </div>
              </m.article>
            );
          })}
        </div>
      </section>
    </LazyMotion>
  );
}
