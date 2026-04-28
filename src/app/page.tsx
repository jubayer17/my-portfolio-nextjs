"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import {
  ArrowRight, Download, ExternalLink,
  Braces, Monitor, Server, Database, GitBranch, Package,
  Trophy, Terminal,
} from "lucide-react";
import { LazyMotion, domAnimation, m, AnimatePresence, useReducedMotion, type Variants } from "framer-motion";

import SocialLinks from "@/components/ui/SocialLinks";
import TypewriterText from "@/components/ui/TypewriterText";
import TechBadge from "@/components/ui/TechBadge";
import { resume } from "@/data/resume";

/* variants */
const up: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1, y: 0,
    transition: { duration: 0.32, ease: [0.22, 1, 0.36, 1] },
  },
};
const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};

/* static data */
const SKILLS = [
  { label: "Languages", icon: Braces, items: resume.skills.languages },
  { label: "Frontend", icon: Monitor, items: resume.skills.frontend },
  { label: "Backend", icon: Server, items: resume.skills.backend },
  { label: "Databases", icon: Database, items: resume.skills.databases },
  { label: "DevOps", icon: GitBranch, items: resume.skills.devops },
  { label: "Tools & Others", icon: Package, items: resume.skills.tools },
] as const;

const SKILL_SUMMARIES: Record<(typeof SKILLS)[number]["label"], string> = {
  Languages: "Typed, modern languages for scalable systems",
  Frontend: "Accessible interfaces with performance-first rendering",
  Backend: "Robust APIs, auth, and service architecture",
  Databases: "Efficient schemas, indexing, and query optimization",
  DevOps: "CI/CD, containers, and cloud deployment workflows",
  "Tools & Others": "ORMs, query clients, validation, animation, and DX tooling",
};

const ROLE_KPIS = [
  { value: "40+", label: "Production APIs", sub: "Designed & Maintained", borderColor: "#3b82f6" },
  { value: "98.4%", label: "Service Reliability", sub: "Measured Uptime", borderColor: "#f59e0b" },
  { value: "37%", label: "Latency Reduction", sub: "Query + Caching Work", borderColor: "#f59e0b" },
  { value: "14+", label: "Core Features", sub: "Shipped End-to-End", borderColor: "#ef4444" },
];

// One tone per card — Languages, Frontend, Backend, Databases, DevOps, Tools & Others
const SKILL_CARD_TONES = [
  { accent: "#a78bfa", soft: "rgba(167,139,250,0.12)", glow: "rgba(167,139,250,0.2)" },  // Languages  — violet
  { accent: "#38bdf8", soft: "rgba(56,189,248,0.12)", glow: "rgba(56,189,248,0.2)" },  // Frontend   — sky blue
  { accent: "#f97316", soft: "rgba(249,115,22,0.12)", glow: "rgba(249,115,22,0.2)" },  // Backend    — orange
  { accent: "#60a5fa", soft: "rgba(96,165,250,0.12)", glow: "rgba(96,165,250,0.2)" },  // Databases  — blue
  { accent: "#f43f5e", soft: "rgba(244,63,94,0.12)", glow: "rgba(244,63,94,0.2)" },  // DevOps     — rose
  { accent: "#fbbf24", soft: "rgba(251,191,36,0.12)", glow: "rgba(251,191,36,0.2)" },  // Tools      — amber
] as const;

export default function HomePage() {
  const reduceMotion = useReducedMotion();
  const featured = resume.projects.slice(0, 10);
  const currentExperience = resume.experience[0];

  const [hoveredSlug, setHoveredSlug] = useState<string | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const hoveredProject = featured.find((p) => p.slug === hoveredSlug);
  const fallbackImages: Record<string, { src: string; alt: string }> = {
    restrocore: {
      src: "/assets/restroCore-SS.png",
      alt: "RestroCore platform screenshot",
    },
    "job-board": {
      src: "/assets/Job-Board-SS.png",
      alt: "Job Board platform screenshot",
    },
  };
  const hoveredProjectImage = hoveredProject
    ? hoveredProject.images?.[0] ?? fallbackImages[hoveredProject.slug]
    : undefined;

  const updateHoverPosition = (clientX: number, clientY: number) => {
    const padding = 24;
    const popupWidth = Math.min(520, window.innerWidth * 0.48);
    const popupHeight = Math.min(820, window.innerHeight * 0.86);
    const nextX = Math.min(clientX + padding, window.innerWidth - popupWidth - padding);
    const nextY = Math.min(Math.max(clientY - 140, padding), window.innerHeight - popupHeight - padding);

    setMousePos({
      x: Math.max(nextX, padding),
      y: Math.max(nextY, padding),
    });
  };

  return (
    <LazyMotion features={domAnimation}>
      <main id="content" className="mx-auto max-w-6xl px-6 md:px-6">

        {/* HERO */}
        <section className="relative py-8 md:py-10 lg:py-12" data-gsap="reveal" data-gsap-y="30">
          <div
            className="relative border"
            style={{ borderColor: "var(--border)", background: "var(--surface)" }}
          >
            <div className="grid md:grid-cols-2 md:[grid-auto-rows:1fr]">
              {/* Left Panel - Hero Content */}
              <m.div
                variants={stagger}
                initial="hidden"
                animate="visible"
                className="flex h-full min-h-0 flex-col border-b p-5 sm:min-h-[500px] sm:p-6 md:min-h-[540px] md:border-b-0 md:border-r md:p-8 lg:min-h-[560px] lg:p-10"
                style={{ borderColor: "var(--border)" }}
              >
                <m.span
                  variants={up}
                  className="font-mono text-[10px] font-bold uppercase tracking-[0.2em]"
                  style={{ color: "var(--accent)" }}
                >
                  SOFTWARE ENGINEER
                </m.span>

                <m.h1
                  variants={up}
                  className="font-outfit mt-6 text-3xl font-black leading-[1.1] tracking-tight sm:text-5xl lg:text-[4.5rem]"
                  style={{ color: "var(--fg)" }}
                >
                  {resume.person.name}
                </m.h1>

                <m.p
                  variants={up}
                  className="mt-4 text-lg font-semibold tracking-tight"
                  style={{ color: "var(--fg-2)" }}
                >
                  Architect of reliable, scalable systems
                </m.p>

                <m.div variants={up} className="mt-6 flex items-start gap-3">
                  <Terminal className="h-5 w-5 shrink-0 pt-0.5" style={{ color: "var(--accent)" }} />
                  <div className="font-mono text-sm sm:text-base" style={{ color: "var(--fg-2)" }}>
                    <TypewriterText
                      texts={[
                        "Backend-first full stack engineer",
                        "API architect & systems designer",
                        "TypeScript, Next.js, Node.js",
                      ]}
                    />
                  </div>
                </m.div>

                <m.p
                  variants={up}
                  className="mt-6 max-w-md text-base leading-relaxed"
                  style={{ color: "var(--fg-2)" }}
                >
                  I build production software with clean architecture, strong data models,
                  and polished interfaces that scale.
                </m.p>

                <m.div variants={up} className="mt-8">
                  <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.12em]" style={{ color: "var(--fg-4)" }}>
                    Core Stack
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {resume.skills.backend.slice(0, 2).map((s) => (
                      <TechBadge key={s} name={s} size="md" />
                    ))}
                    {resume.skills.frontend.slice(0, 2).map((s) => (
                      <TechBadge key={s} name={s} size="md" />
                    ))}
                    {resume.skills.databases.slice(0, 2).map((s) => (
                      <TechBadge key={s} name={s} size="md" />
                    ))}
                  </div>
                </m.div>

                <m.div variants={up} className="mt-8">
                  <div className="flex flex-wrap items-center gap-3">
                    <Link href="/projects" className="btn btn-primary group">
                      View Projects
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    </Link>
                    <a
                      href="https://drive.google.com/file/d/1IwcrAIXTK7EbeSUiHwsI9-0d48OfVd_k/view?usp=sharing"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-ghost"
                    >
                      <Download className="h-4 w-4" />
                      Download Resume
                    </a>
                  </div>
                  <div className="mt-6">
                    <SocialLinks className="flex flex-wrap items-center gap-2.5" />
                  </div>
                </m.div>
              </m.div>

              {/* Right Panel - Current Role Spotlight */}
              <m.div
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.12, duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                className="flex h-full min-h-0 flex-col overflow-hidden sm:min-h-[500px] md:min-h-[540px] lg:min-h-[560px]"
              >
                {/*
                Coding/terminal visual intentionally disabled for now.
                Keeping this panel focused on current role impact.
              */}
                <div
                  className="relative flex min-h-0 flex-1 flex-col border-l"
                  style={{
                    borderColor: "var(--border)",
                    background: "var(--surface)",
                  }}
                >
                  <div
                    className="relative border-b px-5 py-5 md:px-6"
                    style={{
                      borderColor: "var(--border)",
                      background: "var(--surface)",
                    }}
                  >
                    <div className="mb-3 inline-flex items-center gap-2 border px-2.5 py-1" style={{ borderColor: "var(--border)", background: "var(--surface-2)", color: "var(--fg-3)" }}>
                      <m.span
                        className="h-2 w-2"
                        style={{ background: "var(--success)" }}
                        animate={reduceMotion ? undefined : { scale: [1, 1.35, 1], opacity: [0.6, 1, 0.6] }}
                        transition={reduceMotion ? undefined : { duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                      />
                      <span className="text-[10px] font-bold uppercase tracking-[0.12em]">Active Role</span>
                    </div>
                    <p className="text-[11px] font-bold uppercase tracking-[0.16em]" style={{ color: "var(--accent)" }}>
                      Current Position
                    </p>
                    <h3 className="mt-2 font-outfit text-2xl font-black leading-tight" style={{ color: "var(--fg)" }}>
                      {currentExperience?.role}
                    </h3>
                    <p className="mt-2 text-sm font-semibold" style={{ color: "var(--fg-2)" }}>
                      <a
                        href="https://www.linkedin.com/company/geekssort/posts/?feedView=all"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline-offset-2 transition-all hover:underline"
                        style={{ color: "var(--fg-2)" }}
                      >
                        GeekSSort
                      </a>
                    </p>
                    <p className="mt-1 text-xs" style={{ color: "var(--fg-3)" }}>
                      {currentExperience?.range.start} - {currentExperience?.range.end} - {currentExperience?.location}
                    </p>
                    <p className="mt-3 border-l-2 pl-3 text-xs leading-relaxed" style={{ borderColor: "var(--accent)", color: "var(--fg-2)" }}>
                      Driving backend architecture, API reliability, and delivery velocity across core products.
                    </p>
                  </div>

                  <div className="relative grid grid-cols-2 gap-2 border-b p-4 sm:gap-3 sm:p-5" style={{ borderColor: "var(--border)" }}>
                    {ROLE_KPIS.map((kpi, index) => (
                      <m.div
                        key={kpi.label}
                        className="group border border-t-2 px-3 py-3 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md sm:px-4"
                        style={{
                          borderColor: "var(--border)",
                          borderTopColor: kpi.borderColor,
                          background: "var(--surface)",
                        }}
                        animate={reduceMotion ? undefined : { y: [0, -2, 0] }}
                        transition={reduceMotion ? undefined : { duration: 3.2, repeat: Infinity, ease: "easeInOut", delay: index * 0.18 }}
                        whileHover={{ y: -3, transition: { duration: 0.2 } }}
                      >
                        <p className="font-outfit text-2xl font-black leading-none sm:text-3xl" style={{ color: kpi.borderColor }}>
                          {kpi.value}
                        </p>
                        <p className="mt-2 text-[11px] font-bold uppercase tracking-[0.08em]" style={{ color: "var(--fg-2)" }}>
                          {kpi.label}
                        </p>
                        <p className="mt-1 text-[11px]" style={{ color: "var(--fg-3)" }}>
                          {kpi.sub}
                        </p>
                      </m.div>
                    ))}
                  </div>

                  <div className="relative min-h-0 flex-1 overflow-y-auto px-4 py-4 sm:px-5 sm:py-5">
                    <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.14em]" style={{ color: "var(--accent)" }}>
                      Key Responsibilities
                    </p>
                    <div className="space-y-2.5">
                      {currentExperience?.highlights.slice(0, 3).map((item, index) => (
                        <m.div
                          key={item}
                          className="group border-l-2 px-3 py-2.5 text-sm leading-relaxed transition-all duration-300 hover:translate-x-0.5"
                          style={{
                            borderLeftColor: index % 2 === 0 ? "var(--accent)" : "var(--cyan)",
                            borderTopColor: "var(--border)",
                            borderBottomColor: "var(--border)",
                            background: "var(--surface)",
                            color: "var(--fg-2)",
                          }}
                          whileHover={{ x: 3, transition: { duration: 0.2 } }}
                        >
                          {item}
                        </m.div>
                      ))}
                    </div>
                  </div>

                  <div
                    className="border-t px-4 py-4 sm:px-5"
                    style={{ borderColor: "var(--border)", background: "var(--surface)" }}
                  >
                    <Link href="/work" className="btn btn-primary inline-flex w-full items-center justify-center gap-2 sm:w-auto">
                      Entire Journey
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </m.div>
            </div>
          </div>
        </section>

        {/* Divider */}
        <div
          className="h-px"
          style={{
            background: "var(--border-2)",
          }}
        />

        {/* 01 - SKILLS */}
        <section className="relative overflow-hidden py-16 md:py-24" data-gsap="reveal">
          <span className="section-num" data-gsap="parallax" data-gsap-speed="10">01</span>

          <m.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-end justify-between">
              <div>
                <span className="chip">Capability Map</span>
                <h2 className="font-outfit mt-3 text-2xl font-extrabold tracking-tight md:text-3xl" style={{ color: "var(--fg)" }}>
                  Stack Spectrum
                </h2>
                <p className="mt-2 text-sm" style={{ color: "var(--fg-3)" }}>
                  Comfortable across the full stack - from API design to UI delivery.
                </p>
              </div>
              <Link
                href="/work"
                className="link-underline shrink-0 text-sm font-semibold"
                style={{ color: "var(--fg-3)" }}
              >
                Experience -&gt;
              </Link>
            </div>

            <div
              className="noise mt-9 border p-4 md:p-6"
              style={{
                borderColor: "var(--border)",
                background: "var(--surface)",
              }}
            >
              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {SKILLS.map(({ label, icon: Icon, items }, i) => {
                  const tone = SKILL_CARD_TONES[i % SKILL_CARD_TONES.length];

                  return (
                    <m.article
                      key={label}
                      initial={{ opacity: 0, y: 22 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.28, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
                      className="group card relative flex min-h-[260px] flex-col overflow-hidden border p-6 md:p-7"
                      style={{ borderColor: "var(--border)", background: "var(--surface)" }}
                    >
                      <span
                        className="absolute inset-x-0 top-0 h-[3px]"
                        style={{ background: tone.accent }}
                        aria-hidden="true"
                      />

                      <div className="relative flex items-start justify-between gap-3">
                        <div
                          className="flex h-11 w-11 items-center justify-center border"
                          style={{
                            borderColor: tone.accent,
                            background: tone.soft,
                            color: tone.accent,
                          }}
                        >
                          <Icon className="h-5 w-5" />
                        </div>
                        <span
                          className="border px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.1em]"
                          style={{
                            color: "var(--fg-3)",
                            borderColor: "var(--border)",
                            background: "var(--surface-2)",
                          }}
                        >
                          {items.length} tools
                        </span>
                      </div>

                      <h3
                        className="font-outfit mt-4 text-xl font-extrabold tracking-tight"
                        style={{ color: "var(--fg)" }}
                      >
                        {label}
                      </h3>

                      <p className="mt-1 text-[10px] uppercase tracking-[0.12em]" style={{ color: "var(--fg-4)" }}>
                        {SKILL_SUMMARIES[label]}
                      </p>

                      <div className="mt-5 flex flex-wrap gap-2.5">
                        {items.map((s) => (
                          <TechBadge key={s} name={s} size="md" />
                        ))}
                      </div>
                    </m.article>
                  );
                })}
              </div>
            </div>
          </m.div>
        </section>

        <div
          className="h-px"
          style={{ background: "var(--border-2)" }}
        />

        {/* 02 - FEATURED PROJECTS */}
        <section
          className="relative overflow-hidden py-16 md:py-24"
          data-gsap="reveal"
        >
          <span className="section-num" data-gsap="parallax" data-gsap-speed="12">02</span>

          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <m.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-2xl"
            >
              <span className="chip">Project Index</span>
              <h2 className="font-outfit mt-3 text-2xl font-extrabold tracking-tight md:text-3xl" style={{ color: "var(--fg)" }}>
                Build Gallery
              </h2>
              <p className="mt-2 max-w-xl text-sm leading-relaxed" style={{ color: "var(--fg-3)" }}>
                A tighter view of the work, with a floating preview that follows your cursor.
              </p>
            </m.div>

            <Link
              href="/projects"
              className="link-underline shrink-0 text-sm font-semibold"
              style={{ color: "var(--fg-3)" }}
            >
              All projects -&gt;
            </Link>
          </div>

          <m.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={{ visible: { transition: { staggerChildren: 0.06 } } }}
            className="mt-8 overflow-hidden border"
            style={{ borderColor: "var(--border)", background: "var(--surface)" }}
          >
            {featured.map((p, idx) => {
              const liveLink = p.links.find((link) => link.label === "Live");
              const isHovered = hoveredProject?.slug === p.slug;
              const isFrontendOnly = p.slug === "restrocore";

              return (
                <m.div key={p.slug} variants={up}>
                  <div
                    className="group relative cursor-pointer"
                    onPointerEnter={(e) => {
                      setHoveredSlug(p.slug);
                      updateHoverPosition(e.clientX, e.clientY);
                    }}
                    onPointerMove={(e) => updateHoverPosition(e.clientX, e.clientY)}
                    onPointerLeave={() => setHoveredSlug(null)}
                    onMouseEnter={(e) => {
                      setHoveredSlug(p.slug);
                      updateHoverPosition(e.clientX, e.clientY);
                    }}
                    onMouseMove={(e) => updateHoverPosition(e.clientX, e.clientY)}
                    onMouseLeave={() => setHoveredSlug(null)}
                    onClick={() => liveLink && window.open(liveLink.href, '_blank')}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        if (liveLink) window.open(liveLink.href, '_blank');
                      }
                    }}
                  >
                    <article
                      className="relative flex flex-col gap-0 border-l-2 px-4 py-4 transition-all duration-250 sm:py-5 md:grid md:grid-cols-[72px_1fr_auto] md:items-center md:gap-4 md:px-6"
                      style={{
                        borderBottom: idx < featured.length - 1 ? "1px solid var(--border)" : undefined,
                        borderLeftColor: isFrontendOnly
                          ? "#f59e0b"
                          : isHovered ? "var(--accent)" : "transparent",
                        background: isFrontendOnly && !isHovered
                          ? "rgba(245,158,11,0.03)"
                          : isHovered ? "var(--surface-2)" : "var(--surface)",
                        boxShadow: isFrontendOnly ? "inset 1px 0 0 0 #f59e0b" : undefined,
                      }}
                    >
                      {/* Index — desktop only */}
                      <div className="hidden font-mono text-xs font-bold uppercase tracking-[0.14em] md:block" style={{ color: isHovered ? "var(--accent)" : isFrontendOnly ? "#f59e0b" : "var(--fg-4)" }}>
                        {String(idx + 1).padStart(2, "0")}
                      </div>

                      {/* Content */}
                      <div className="min-w-0">
                        {/* Title + meta */}
                        <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1">
                          <h3
                            className="font-outfit line-clamp-1 text-base font-extrabold tracking-tight transition-colors sm:text-lg"
                            style={{ color: isHovered ? "var(--accent-text)" : "var(--fg)" }}
                          >
                            {p.title}
                          </h3>
                          <span className="text-[10px] font-bold uppercase tracking-[0.12em]" style={{ color: "var(--fg-4)" }}>
                            {p.category}
                          </span>
                          <span className="text-[10px] font-medium" style={{ color: "var(--fg-4)" }}>
                            {p.range.start} – {p.range.end}
                          </span>
                        </div>

                        {/* Frontend-only badge — own row so it never crowds title */}
                        {isFrontendOnly && (
                          <div className="mt-1.5">
                            <span
                              className="inline-flex items-center gap-1 border px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider"
                              style={{ color: "#f59e0b", borderColor: "rgba(245,158,11,0.35)", background: "rgba(245,158,11,0.08)" }}
                            >
                              <m.span
                                className="inline-block h-1.5 w-1.5 rounded-full"
                                style={{ background: "#f59e0b" }}
                                animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                                transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                              />
                              Frontend only · Backend ongoing
                            </span>
                          </div>
                        )}

                        {/* Description */}
                        <p className="mt-1.5 line-clamp-2 text-sm" style={{ color: "var(--fg-3)" }}>
                          {p.description}
                        </p>

                        {/* Stack — 3 on mobile, 5 on desktop */}
                        <div className="mt-2.5 flex flex-wrap gap-1.5">
                          {p.stack.slice(0, 3).map((t) => (
                            <TechBadge key={t} name={t} />
                          ))}
                          {p.stack.slice(3, 5).map((t) => (
                            <span key={t} className="hidden sm:inline-flex"><TechBadge name={t} /></span>
                          ))}
                          {p.stack.length > 3 && (
                            <span className="tag sm:hidden">+{p.stack.length - 3}</span>
                          )}
                          {p.stack.length > 5 && (
                            <span className="tag hidden sm:inline-flex">+{p.stack.length - 5}</span>
                          )}
                        </div>

                        {/* Actions — mobile only, inline at bottom */}
                        <div className="mt-3 flex items-center gap-2 md:hidden">
                          {liveLink && (
                            <a
                              href={liveLink.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 border px-2.5 py-1.5 text-xs font-semibold transition-colors hover:text-[var(--accent-text)]"
                              style={{ borderColor: "var(--border)", background: "var(--surface)" }}
                              onClick={(e) => e.stopPropagation()}
                            >
                              Live
                              <ExternalLink className="h-3 w-3" />
                            </a>
                          )}
                          <span
                            className="ml-auto flex items-center gap-1 text-xs font-medium"
                            style={{ color: "var(--fg-4)" }}
                          >
                            View case study
                            <ArrowRight className="h-3.5 w-3.5" />
                          </span>
                        </div>
                      </div>

                      {/* Actions column — desktop only */}
                      <div className="hidden shrink-0 flex-wrap items-center gap-2 text-xs md:flex" style={{ color: "var(--fg-3)" }}>
                        {liveLink && (
                          <a
                            href={liveLink.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 border px-2.5 py-1.5 font-semibold transition-colors hover:text-[var(--accent-text)]"
                            style={{ borderColor: "var(--border)", background: "var(--surface)" }}
                            onClick={(e) => e.stopPropagation()}
                          >
                            Live
                            <ExternalLink className="h-3 w-3" />
                          </a>
                        )}
                        <ArrowRight className="h-4 w-4" style={{ color: isHovered ? "var(--accent-text)" : "var(--fg-4)" }} />
                      </div>
                    </article>
                  </div>
                </m.div>
              );
            })}
          </m.div>
        </section>

        <div
          className="h-px"
          style={{ background: "var(--border-2)" }}
        />

        {/* 03 - ACHIEVEMENTS */}
        <section className="relative overflow-hidden py-16 md:py-24" data-gsap="reveal">
          <span className="section-num" data-gsap="parallax" data-gsap-speed="14">03</span>

          <m.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="chip">
              <Trophy className="h-3 w-3" />
              Proof Points
            </span>
            <h2 className="font-outfit mt-3 text-2xl font-extrabold tracking-tight md:text-3xl" style={{ color: "var(--fg)" }}>
              Wins &amp; Benchmarks
            </h2>
            <p className="mt-2 text-sm" style={{ color: "var(--fg-3)" }}>
              Competitive programming, academic, and open-source wins.
            </p>
          </m.div>

          <m.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
            className="mt-8 grid gap-3 sm:grid-cols-2"
          >
            {resume.achievements.map((a, idx) => (
              <m.div key={a.title} variants={up}>
                <div className="card card-shimmer group flex gap-4 p-5">
                  <span
                    className="font-mono flex h-8 w-8 shrink-0 items-center justify-center rounded-xl border text-xs font-black"
                    style={{
                      color: "var(--accent-text)",
                      background: "var(--accent-soft)",
                      borderColor: "rgba(124,58,237,0.2)",
                    }}
                  >
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <p
                      className="font-outfit font-bold tracking-tight transition-colors"
                      style={{ color: "var(--fg)" }}
                    >
                      {a.title}
                    </p>
                    <p className="mt-1 text-sm leading-relaxed" style={{ color: "var(--fg-3)" }}>
                      {a.detail}
                    </p>
                  </div>
                </div>
              </m.div>
            ))}
          </m.div>
        </section>

        {/* CTA BANNER */}
        <section className="mb-20 mt-4" data-gsap="reveal">
          <m.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="noise relative overflow-hidden rounded-3xl px-5 py-10 sm:px-8 sm:py-14 md:px-14 md:py-16"
            style={{
              background: "var(--surface-2)",
              border: "1px solid rgba(124,58,237,0.15)",
            }}
          >
            {/* Orbs inside banner */}
            <div
              className="orb h-64 w-64 -top-20 -right-10 opacity-25"
              style={{ background: "var(--accent)" }}
            />
            <div
              className="orb h-48 w-48 -bottom-10 left-10 opacity-15"
              style={{ background: "var(--cyan)", animationDelay: "4s" }}
            />
            <div className="dot-grid pointer-events-none absolute inset-0 opacity-20" />

            <div className="relative flex flex-col gap-10 md:flex-row md:items-center md:justify-between">
              <div className="max-w-lg">
                <h2 className="font-outfit text-2xl font-black tracking-tight md:text-3xl lg:text-4xl" style={{ color: "var(--fg)" }}>
                  Start a Meaningful Build
                </h2>
                <p className="mt-3 text-sm leading-relaxed" style={{ color: "var(--fg-3)" }}>
                  Open to full-time roles, freelance projects, and collaboration.
                  I&rsquo;d love to hear what you&rsquo;re building.
                </p>
                <p className="mt-2 font-mono text-xs" style={{ color: "var(--fg-4)" }}>
                  {resume.person.email} - {resume.person.location}
                </p>
              </div>
              <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="btn inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-bold text-slate-900 shadow-lg transition hover:-translate-y-0.5 hover:bg-white/90"
                >
                  Get in touch
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/projects"
                  className="btn inline-flex items-center justify-center gap-2 rounded-xl border px-6 py-3 text-sm font-bold transition hover:bg-[var(--accent-soft)]"
                  style={{ borderColor: "var(--border)", color: "var(--fg-2)" }}
                >
                  See projects
                </Link>
              </div>
            </div>
          </m.div>
        </section>
      </main>
      <AnimatePresence>
        {hoveredProject && (
          <m.div
            key={hoveredProject.slug}
            className="pointer-events-none fixed left-0 top-0 z-[9999]"
            style={{ width: "min(480px, 46vw)", willChange: "transform" }}
            initial={{ opacity: 0, scale: 0.94, x: mousePos.x, y: mousePos.y }}
            animate={{
              opacity: 1,
              scale: 1,
              x: mousePos.x,
              y: mousePos.y,
            }}
            exit={{ opacity: 0, scale: 0.94 }}
            transition={{
              opacity: { duration: 0.1, ease: [0.22, 1, 0.36, 1] },
              scale: { duration: 0.14, ease: [0.22, 1, 0.36, 1] },
              x: { type: "spring", stiffness: 380, damping: 36, mass: 0.55 },
              y: { type: "spring", stiffness: 380, damping: 36, mass: 0.55 },
            }}
          >
            {/* Card */}
            <div
              className="relative overflow-hidden"
              style={{
                background: "var(--surface)",
                maxHeight: "86vh",
                boxShadow: "0 0 0 1px rgba(124,58,237,0.3), 0 0 0 2px rgba(124,58,237,0.08), 0 32px 80px rgba(0,0,0,0.75), 0 0 70px rgba(124,58,237,0.18)",
              }}
            >
              {/* Accent bar */}
              <div
                className="absolute inset-x-0 top-0 z-10 h-[2px]"
                style={{ background: "linear-gradient(90deg, var(--accent) 0%, var(--cyan) 60%, transparent 100%)" }}
              />

              {hoveredProjectImage ? (
                <div className="relative overflow-hidden">
                  <Image
                    src={hoveredProjectImage.src}
                    alt={hoveredProjectImage.alt}
                    width={800}
                    height={500}
                    className="block w-full h-auto object-contain"
                    style={{ filter: "brightness(1.06) contrast(1.05) saturate(1.03)" }}
                  />
                  {/* Soft readability gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/38 via-black/4 to-transparent" />

                  {/* Bottom info strip */}
                  <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 px-4 pb-4 pt-8">
                    <div>
                      <p className="font-mono text-[9px] font-bold uppercase tracking-[0.2em] text-white/50">
                        {hoveredProject.category}
                      </p>
                      <h3 className="font-outfit mt-0.5 text-lg font-black leading-tight text-white">
                        {hoveredProject.title}
                      </h3>
                    </div>
                    <span
                      className="shrink-0 border px-2 py-0.5 font-mono text-[9px] font-bold uppercase tracking-widest text-white/60"
                      style={{ borderColor: "rgba(255,255,255,0.15)", background: "rgba(255,255,255,0.05)" }}
                    >
                      {hoveredProject.range.end}
                    </span>
                  </div>
                </div>
              ) : (
                <div
                  className="relative flex aspect-[4/3] items-center justify-center overflow-hidden"
                  style={{ background: "linear-gradient(145deg, rgba(124,58,237,0.15), var(--surface))" }}
                >
                  <div className="dot-grid pointer-events-none absolute inset-0 opacity-30" />
                  <div className="relative text-center">
                    <p className="font-mono text-[9px] font-bold uppercase tracking-[0.2em]" style={{ color: "var(--accent)" }}>
                      {hoveredProject.category}
                    </p>
                    <p className="font-outfit mt-2 text-2xl font-black" style={{ color: "var(--fg)" }}>
                      {hoveredProject.title}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </m.div>
        )}
      </AnimatePresence>
    </LazyMotion>
  );
}


