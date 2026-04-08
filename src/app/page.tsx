"use client";

import Link from "next/link";
import { ArrowRight, Download, ExternalLink, Zap, Code2, Server, Database, Cloud, Trophy, Briefcase } from "lucide-react";
import { motion, type Variants } from "framer-motion";
import SocialLinks from "@/components/ui/SocialLinks";
import TypewriterText from "@/components/ui/TypewriterText";
import { resume } from "@/data/resume";

/* ─── Animation presets ─────────────────────────────── */
const fadeUp: Variants = {
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0,  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};
const stagger: Variants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.1 } },
};

/* ─── Data ──────────────────────────────────────────── */
const skillRows = [
  { label: "Languages", icon: Code2,    items: resume.skills.languages },
  { label: "Frontend",  icon: Zap,      items: resume.skills.frontend  },
  { label: "Backend",   icon: Server,   items: resume.skills.backend   },
  { label: "Databases", icon: Database, items: resume.skills.databases },
  { label: "DevOps",    icon: Cloud,    items: resume.skills.devops    },
] as const;

export default function HomePage() {
  const featured = resume.projects.slice(0, 3);

  return (
    <main id="content" className="mx-auto max-w-6xl px-4 overflow-hidden">

      {/* ══════════════════════════════════════
          HERO
      ══════════════════════════════════════ */}
      <section className="relative py-20 md:py-28 lg:py-32">
        {/* Background glow orbs */}
        <div className="pointer-events-none absolute -top-32 left-1/2 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-accent-500/5 blur-[100px]" />
        <div className="pointer-events-none absolute top-0 left-0 h-64 w-64 rounded-full bg-violet-500/5 blur-[80px]" />
        <div className="pointer-events-none absolute top-10 right-0 h-48 w-48 rounded-full bg-cyan-400/5 blur-[60px]" />

        <div className="relative grid items-start gap-12 md:grid-cols-12 md:gap-8 lg:gap-12">

          {/* Left — text content */}
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="md:col-span-7"
          >
            {/* Status pill */}
            <motion.div variants={fadeUp}>
              <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200/50 bg-emerald-50 px-3 py-1.5 text-xs font-semibold text-emerald-700 dark:border-emerald-500/20 dark:bg-emerald-500/8 dark:text-emerald-400">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                </span>
                Available for new opportunities
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              variants={fadeUp}
              className="mt-6 text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl"
            >
              <span className="gradient-text">{resume.person.name}</span>
            </motion.h1>

            {/* Typewriter role */}
            <motion.div variants={fadeUp} className="mt-4">
              <p className="font-mono text-lg font-medium text-slate-500 dark:text-slate-400 md:text-xl">
                <span className="text-accent-500 dark:text-accent-400">{">"}</span>{" "}
                <TypewriterText
                  texts={[
                    "Full-Stack Engineer",
                    "Backend Architect",
                    "Next.js Developer",
                    "API Designer",
                    "Problem Solver",
                  ]}
                />
              </p>
            </motion.div>

            {/* Bio */}
            <motion.p
              variants={fadeUp}
              className="mt-5 max-w-[520px] text-base leading-7 text-slate-600 dark:text-slate-400"
            >
              I build scalable backend systems and polished interfaces — shipping production
              features with clean architecture, reliable data models, and smooth user experiences.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={fadeUp} className="mt-8 flex flex-wrap items-center gap-3">
              <Link href="/projects" className="btn-primary group">
                View projects
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <a
                href="/assets/Resume_of_Jubayer_Ahmed.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
              >
                Download resume
                <Download className="h-4 w-4" />
              </a>
            </motion.div>

            {/* Social links */}
            <motion.div variants={fadeUp} className="mt-8">
              <SocialLinks className="flex flex-wrap items-center gap-2.5" />
            </motion.div>
          </motion.div>

          {/* Right — info card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="md:col-span-5 space-y-3"
          >
            {/* Experience card */}
            <div className="card-hover glow-border shimmer-hover rounded-2xl border border-slate-200 bg-white p-5 dark:border-white/[0.07] dark:bg-ink-700">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-widest text-slate-400 dark:text-slate-500">
                    <Briefcase className="h-3 w-3" />
                    Currently at
                  </p>
                  <p className="mt-1.5 text-base font-bold text-slate-900 dark:text-white">
                    {resume.experience[0]?.company}
                  </p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    {resume.experience[0]?.role}
                  </p>
                </div>
                <span className="mt-0.5 inline-flex shrink-0 items-center gap-1.5 rounded-full border border-emerald-200/60 bg-emerald-50 px-2.5 py-1 text-[11px] font-semibold text-emerald-700 dark:border-emerald-500/20 dark:bg-emerald-500/8 dark:text-emerald-400">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-current" />
                  Active
                </span>
              </div>

              <div className="my-4 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent dark:via-white/[0.06]" />

              <ul className="space-y-2.5">
                {resume.experience[0]?.highlights.slice(0, 2).map((h) => (
                  <li key={h} className="flex gap-2.5 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                    <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-accent-400" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/work"
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-accent-600 transition hover:text-accent-500 dark:text-accent-400 dark:hover:text-accent-300"
              >
                View full experience
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-3">
              {[
                { value: "500+", label: "CF Solves",  sub: "Codeforces" },
                { value: "150+", label: "LC Solves",  sub: "LeetCode"   },
                { value: "30+",  label: "APIs Built", sub: "Production"  },
              ].map((s) => (
                <div
                  key={s.label}
                  className="card-hover rounded-2xl border border-slate-200 bg-white p-4 text-center dark:border-white/[0.07] dark:bg-ink-700"
                >
                  <p className="gradient-text-accent text-xl font-extrabold">{s.value}</p>
                  <p className="mt-0.5 text-[11px] font-semibold text-slate-600 dark:text-slate-400">{s.label}</p>
                  <p className="mt-0.5 text-[10px] text-slate-400 dark:text-slate-600">{s.sub}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent dark:via-white/[0.06]" />

      {/* ══════════════════════════════════════
          SKILLS
      ══════════════════════════════════════ */}
      <section className="py-16 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex items-end justify-between">
            <div>
              <span className="section-label">Expertise</span>
              <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-900 dark:text-white md:text-3xl">
                Skills &amp; Technologies
              </h2>
              <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
                Strong fundamentals across the full stack — comfortable moving between
                frontend delivery and backend architecture.
              </p>
            </div>
            <Link
              href="/work"
              className="shrink-0 text-sm font-semibold text-slate-500 underline underline-offset-4 hover:text-accent-600 dark:text-slate-400 dark:hover:text-accent-400"
            >
              View experience
            </Link>
          </div>

          <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200 bg-white dark:border-white/[0.07] dark:bg-ink-700">
            {skillRows.map(({ label, icon: Icon, items }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
                className={[
                  "flex gap-4 px-5 py-4 sm:gap-8",
                  i < skillRows.length - 1 ? "border-b border-slate-100 dark:border-white/[0.05]" : "",
                ].join(" ")}
              >
                <div className="flex w-28 shrink-0 items-center gap-2 pt-0.5">
                  <Icon className="h-3.5 w-3.5 shrink-0 text-accent-500" />
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                    {label}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {items.map((s) => (
                    <span
                      key={s}
                      className="badge-hover rounded-lg border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs font-medium text-slate-700 dark:border-white/[0.07] dark:bg-white/[0.03] dark:text-slate-300"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent dark:via-white/[0.06]" />

      {/* ══════════════════════════════════════
          FEATURED PROJECTS
      ══════════════════════════════════════ */}
      <section className="py-16 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-end justify-between"
        >
          <div>
            <span className="section-label">Work</span>
            <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-900 dark:text-white md:text-3xl">
              Featured Projects
            </h2>
            <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
              A selection of recent builds — focused on clean UX and maintainable architecture.
            </p>
          </div>
          <Link
            href="/projects"
            className="shrink-0 text-sm font-semibold text-slate-500 underline underline-offset-4 hover:text-accent-600 dark:text-slate-400 dark:hover:text-accent-400"
          >
            View all
          </Link>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          className="mt-8 grid gap-4 md:grid-cols-3"
        >
          {featured.map((p) => (
            <motion.div key={p.slug} variants={fadeUp}>
              <Link
                href={`/projects/${p.slug}`}
                className="group card-hover glow-border shimmer-hover flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-5 dark:border-white/[0.07] dark:bg-ink-700"
              >
                {/* Top */}
                <div className="flex items-start justify-between gap-2">
                  <span className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-widest text-slate-500 dark:border-white/[0.07] dark:bg-white/[0.04] dark:text-slate-400">
                    {p.category}
                  </span>
                  <ExternalLink className="h-3.5 w-3.5 shrink-0 text-slate-300 opacity-0 transition-opacity group-hover:opacity-100 dark:text-slate-600" />
                </div>

                <h3 className="mt-3 text-base font-bold text-slate-900 transition-colors group-hover:text-accent-600 dark:text-white dark:group-hover:text-accent-400">
                  {p.title}
                </h3>
                <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                  {p.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {p.stack.slice(0, 4).map((t) => (
                    <span
                      key={t}
                      className="rounded-md border border-slate-200 bg-slate-50 px-2 py-0.5 text-[11px] font-medium text-slate-600 dark:border-white/[0.06] dark:bg-white/[0.03] dark:text-slate-400"
                    >
                      {t}
                    </span>
                  ))}
                  {p.stack.length > 4 && (
                    <span className="rounded-md border border-slate-200 bg-slate-50 px-2 py-0.5 text-[11px] text-slate-400 dark:border-white/[0.06] dark:bg-white/[0.03] dark:text-slate-500">
                      +{p.stack.length - 4} more
                    </span>
                  )}
                </div>

                <div className="mt-auto flex items-center gap-1.5 pt-5 text-sm font-semibold text-slate-400 transition-colors group-hover:text-accent-600 dark:text-slate-500 dark:group-hover:text-accent-400">
                  Read case study
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent dark:via-white/[0.06]" />

      {/* ══════════════════════════════════════
          ACHIEVEMENTS
      ══════════════════════════════════════ */}
      <section className="py-16 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex items-end justify-between">
            <div>
              <span className="section-label">
                <Trophy className="h-3 w-3" />
                Milestones
              </span>
              <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-900 dark:text-white md:text-3xl">
                Highlights &amp; Achievements
              </h2>
              <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
                Competitive programming, open-source, and academic milestones.
              </p>
            </div>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
            className="mt-8 grid gap-3 sm:grid-cols-2"
          >
            {resume.achievements.map((a, idx) => (
              <motion.div
                key={a.title}
                variants={fadeUp}
                className="card-hover glow-border group flex gap-4 rounded-2xl border border-slate-200 bg-white p-5 dark:border-white/[0.07] dark:bg-ink-700"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-gradient-to-br from-slate-50 to-slate-100 text-xs font-bold text-slate-500 dark:border-white/[0.07] dark:from-white/[0.04] dark:to-white/[0.02] dark:text-slate-400">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <div>
                  <p className="font-bold text-slate-900 dark:text-white group-hover:text-accent-600 dark:group-hover:text-accent-400 transition-colors">
                    {a.title}
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                    {a.detail}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* ══════════════════════════════════════
          CTA BANNER
      ══════════════════════════════════════ */}
      <section className="mb-20 mt-4">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-3xl border border-accent-500/20 bg-gradient-to-br from-ink-600 to-ink-800 px-8 py-12 md:px-12 md:py-16"
        >
          {/* Decorative glow */}
          <div className="pointer-events-none absolute -top-20 right-0 h-64 w-64 rounded-full bg-accent-500/10 blur-[80px]" />
          <div className="pointer-events-none absolute -bottom-20 left-0 h-64 w-64 rounded-full bg-violet-500/8 blur-[80px]" />
          {/* Dot grid */}
          <div className="pointer-events-none absolute inset-0 dot-grid opacity-30" />

          <div className="relative flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div className="max-w-md">
              <h2 className="text-2xl font-extrabold tracking-tight text-white md:text-3xl">
                Let&rsquo;s work together
              </h2>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                Open to full-time roles, freelance, and collaboration.
                I&rsquo;d love to hear what you&rsquo;re building.
              </p>
              <p className="mt-2 font-mono text-xs text-slate-400">
                {resume.person.email} · {resume.person.location}
              </p>
            </div>

            <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-bold text-slate-900 shadow-lg shadow-black/20 transition hover:-translate-y-0.5 hover:bg-slate-100 hover:shadow-xl"
              >
                Get in touch
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/projects"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 px-6 py-3 text-sm font-bold text-white transition hover:border-white/30 hover:bg-white/8"
              >
                See projects
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
