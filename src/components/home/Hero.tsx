"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Download, Terminal } from "lucide-react";
import { LazyMotion, domAnimation, m, useReducedMotion, type Variants } from "framer-motion";

import SocialLinks from "@/components/ui/SocialLinks";
import TypewriterText from "@/components/ui/TypewriterText";
import TechBadge from "@/components/ui/TechBadge";
import CountUp from "@/components/ui/CountUp";
import Magnetic from "@/components/ui/Magnetic";
import RevealText from "@/components/ui/RevealText";
import { useSpotlight } from "@/components/ui/useSpotlight";
import { resume } from "@/data/resume";

const EASE = [0.22, 1, 0.36, 1] as const;

const up: Variants = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.32, ease: EASE } },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.05, delayChildren: 0.04 } },
};

// Backend → frontend → data → infra, so the row reads as a full stack.
const CORE_STACK = [
  "NestJS",
  "Django",
  "Next.js",
  "TypeScript",
  "PostgreSQL",
  "Redis",
  "Docker",
  "Kubernetes",
  "AWS (EC2, S3)",
];

export default function Hero() {
  const reduceMotion = useReducedMotion();
  const metricsRef = useSpotlight<HTMLDivElement>();
  const role = resume.experience[0];

  return (
    <LazyMotion features={domAnimation} strict>
      <section className="py-6 sm:py-8 lg:py-10" data-gsap="reveal" data-gsap-y="24">
        <div
          className="grid overflow-hidden border lg:grid-cols-2 lg:[grid-auto-rows:1fr]"
          style={{ borderColor: "var(--border)", background: "var(--surface)" }}
        >
          {/* ── Left: identity ── */}
          <m.div
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="flex flex-col border-b p-6 sm:p-8 lg:border-b-0 lg:border-r lg:p-10"
            style={{ borderColor: "var(--border)" }}
          >
            <m.span
              variants={up}
              className="font-mono text-[10px] font-bold uppercase tracking-[0.22em]"
              style={{ color: "var(--accent-text)" }}
            >
              {resume.person.role}
            </m.span>

            {/* Sized off vw so the full name always sits on a single line,
                down to the narrowest phone. */}
            <m.div variants={up}>
              <RevealText
                as="h1"
                text={resume.person.name}
                immediate
                delay={0.15}
                stagger={0.08}
                className="font-outfit mt-4 whitespace-nowrap text-[clamp(1.85rem,6.4vw,3.75rem)] font-bold leading-[1.08] tracking-tight"
                style={{ color: "var(--fg)" }}
              />
            </m.div>

            <m.p
              variants={up}
              className="mt-3 text-base font-semibold tracking-tight sm:text-lg"
              style={{ color: "var(--fg-2)" }}
            >
              Architect of reliable, scalable systems
            </m.p>

            <m.div variants={up} className="mt-5 flex items-start gap-3">
              <Terminal
                className="mt-0.5 h-4 w-4 shrink-0 sm:h-5 sm:w-5"
                style={{ color: "var(--accent)" }}
                aria-hidden="true"
              />
              <div
                className="min-w-0 font-mono text-sm sm:text-base"
                style={{ color: "var(--fg-2)" }}
              >
                <TypewriterText
                  texts={[
                    "Backend-first full-stack engineer",
                    "NestJS · Django · PostgreSQL",
                    "LLM, RAG & semantic search systems",
                  ]}
                />
              </div>
            </m.div>

            <m.p
              variants={up}
              className="mt-5 max-w-md text-sm leading-relaxed sm:text-base"
              style={{ color: "var(--fg-3)" }}
            >
              I build production software with clean architecture, strong data models,
              and polished interfaces that scale.
            </m.p>

            <m.div variants={up} className="mt-7">
              <p
                className="mb-3 text-[10px] font-bold uppercase tracking-[0.14em]"
                style={{ color: "var(--fg-4)" }}
              >
                Core Stack
              </p>
              <div className="flex flex-wrap gap-2">
                {CORE_STACK.map((s) => (
                  <TechBadge key={s} name={s} size="md" />
                ))}
              </div>
            </m.div>

            <m.div variants={up} className="mt-auto pt-8">
              <div className="flex flex-col gap-2.5 sm:flex-row sm:flex-wrap sm:items-center">
                <Magnetic strength={10}>
                  <Link href="/projects" className="btn btn-primary group">
                    View Projects
                    <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                  </Link>
                </Magnetic>
                <Magnetic strength={10}>
                  <a
                    href={resume.person.resumeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-ghost"
                  >
                    <Download className="h-4 w-4" />
                    Download Resume
                  </a>
                </Magnetic>
              </div>
              <div className="mt-6">
                <SocialLinks className="flex flex-wrap items-center gap-2.5" />
              </div>
            </m.div>
          </m.div>

          {/* ── Right: current role spotlight ── */}
          <m.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.34, ease: EASE }}
            className="flex flex-col"
            style={{ background: "var(--surface)" }}
          >
            {/* Role header */}
            <div
              className="border-b p-6 sm:p-7"
              style={{ borderColor: "var(--border)", background: "var(--surface-2)" }}
            >
              <div className="flex flex-wrap items-center gap-3">
                <span
                  className="inline-flex items-center gap-2 border px-2.5 py-1"
                  style={{
                    borderColor: "var(--border)",
                    background: "var(--surface)",
                    color: "var(--fg-3)",
                  }}
                >
                  <m.span
                    className="h-1.5 w-1.5 rounded-full"
                    style={{ background: "var(--success)" }}
                    animate={reduceMotion ? undefined : { opacity: [0.45, 1, 0.45] }}
                    transition={
                      reduceMotion
                        ? undefined
                        : { duration: 2, repeat: Infinity, ease: "easeInOut" }
                    }
                  />
                  <span className="text-[10px] font-bold uppercase tracking-[0.14em]">
                    Active Role
                  </span>
                </span>
              </div>

              <div className="mt-4 flex items-start gap-3.5">
                {role.logo && (
                  <span
                    className="flex h-11 w-11 shrink-0 items-center justify-center border"
                    style={{ borderColor: "var(--border)", background: "var(--surface)" }}
                  >
                    <Image
                      src={role.logo}
                      alt=""
                      width={28}
                      height={28}
                      className="h-7 w-7 object-contain"
                    />
                  </span>
                )}
                <div className="min-w-0">
                  <h2
                    className="font-outfit text-xl font-bold leading-tight tracking-tight sm:text-2xl"
                    style={{ color: "var(--fg)" }}
                  >
                    {role.role}
                  </h2>
                  <p className="mt-1 text-sm font-semibold">
                    <a
                      href={role.companyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-underline"
                      style={{ color: "var(--accent-text)" }}
                    >
                      {role.company}
                    </a>
                    <span style={{ color: "var(--fg-4)" }}> · {role.location}</span>
                  </p>
                  <p className="mt-0.5 font-mono text-xs" style={{ color: "var(--fg-4)" }}>
                    {role.range.start} — {role.range.end}
                  </p>
                </div>
              </div>

              <p
                className="mt-4 border-l-2 pl-3 text-xs leading-relaxed sm:text-sm"
                style={{ borderColor: "var(--accent)", color: "var(--fg-2)" }}
              >
                {role.summary}
              </p>
            </div>

            {/* Metrics — all four traceable to the CV */}
            <div
              ref={metricsRef}
              className="grid grid-cols-2 gap-px border-b"
              style={{ borderColor: "var(--border)", background: "var(--border)" }}
            >
              {resume.metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="spotlight group p-4 transition-colors duration-200 sm:p-5"
                  style={{ background: "var(--surface)" }}
                >
                  <CountUp
                    value={metric.value}
                    className="font-outfit block text-2xl font-bold leading-none tracking-tight sm:text-3xl"
                    style={{ color: metric.tone }}
                  />
                  <p
                    className="mt-2 text-[11px] font-bold uppercase tracking-[0.08em]"
                    style={{ color: "var(--fg-2)" }}
                  >
                    {metric.label}
                  </p>
                  <p className="mt-0.5 text-[11px] leading-snug" style={{ color: "var(--fg-4)" }}>
                    {metric.sub}
                  </p>
                </div>
              ))}
            </div>

            {/* Responsibilities */}
            <div className="flex-1 p-6 sm:p-7">
              <p
                className="mb-3 text-[10px] font-bold uppercase tracking-[0.16em]"
                style={{ color: "var(--accent-text)" }}
              >
                What I&rsquo;m building
              </p>
              <ul className="space-y-2.5">
                {(role.spotlight ?? role.highlights).slice(0, 3).map((item, i) => (
                  <li
                    key={item}
                    className="border-l-2 pl-3 text-xs font-medium leading-snug transition-transform duration-200 hover:translate-x-0.5 sm:text-sm"
                    style={{
                      borderLeftColor: i % 2 === 0 ? "var(--accent)" : "var(--cyan)",
                      color: "var(--fg-2)",
                    }}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div
              className="border-t p-5 sm:p-6"
              style={{ borderColor: "var(--border)" }}
            >
              <Link
                href="/work"
                className="btn btn-ghost group w-full justify-center sm:w-auto"
              >
                Entire Journey
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
              </Link>
            </div>
          </m.div>
        </div>
      </section>
    </LazyMotion>
  );
}
