import Link from "next/link";
import { ArrowRight, BookOpen, Briefcase, GraduationCap, MapPin, Calendar } from "lucide-react";
import { resume } from "@/data/resume";
import AnimatedSection from "@/components/ui/AnimatedSection";

export const metadata = {
  title: "Work",
};

export default function WorkPage() {
  return (
    <main id="content" className="mx-auto max-w-6xl px-4 py-14 md:py-20">

      {/* ── Header ── */}
      <AnimatedSection>
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="section-label">
              <Briefcase className="h-3 w-3" />
              Experience
            </span>
            <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white md:text-5xl">
              Work &amp; Education
            </h1>
            <p className="mt-3 max-w-prose text-sm leading-relaxed text-slate-600 dark:text-slate-400 md:text-base">
              Focused on scalable backend systems, modern frontend delivery, and
              shipping production-ready features.
            </p>
          </div>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm font-bold text-slate-600 underline underline-offset-4 hover:text-accent-600 dark:text-slate-400 dark:hover:text-accent-400"
          >
            See projects <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </AnimatedSection>

      {/* ── Experience Timeline ── */}
      <section className="mt-14">
        <div className="mb-8 flex items-center gap-3">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-accent-50 dark:bg-accent-500/10">
            <Briefcase className="h-3.5 w-3.5 text-accent-500 dark:text-accent-400" />
          </div>
          <h2 className="text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">
            Professional Experience
          </h2>
        </div>

        <div className="relative">
          {/* Timeline vertical line */}
          <div
            className="timeline-line absolute left-[18px] top-6 w-px"
            style={{ height: "calc(100% - 24px)" }}
          />

          <div className="space-y-6">
            {resume.experience.map((job, idx) => (
              <AnimatedSection key={`${job.company}-${job.role}`} delay={idx * 0.1} direction="left">
                <div className="relative pl-14">
                  {/* Timeline dot */}
                  <span className="absolute left-3 top-7 flex h-6 w-6 -translate-x-1/2 items-center justify-center">
                    <span className="absolute inline-flex h-full w-full animate-ping-slow rounded-full bg-accent-400 opacity-25" />
                    <span className="relative h-3.5 w-3.5 rounded-full border-2 border-white bg-accent-500 shadow-glow-sm dark:border-ink-700 dark:bg-accent-400" />
                  </span>

                  <article className="card-hover glow-border shimmer-hover relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 dark:border-white/[0.07] dark:bg-ink-700 md:p-8">
                    {/* Accent top bar */}
                    <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-accent-500 via-violet-500 to-cyan-400 opacity-60" />

                    <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                      <div>
                        <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">
                          {job.role}
                        </h3>
                        <div className="mt-1.5 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm">
                          <span className="font-semibold text-accent-600 dark:text-accent-400">
                            {job.company}
                          </span>
                          <span className="flex items-center gap-1 text-slate-500 dark:text-slate-400">
                            <MapPin className="h-3 w-3" />
                            {job.location}
                          </span>
                        </div>
                      </div>
                      <span className="inline-flex h-fit shrink-0 items-center gap-1.5 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-600 dark:border-white/[0.07] dark:bg-white/[0.04] dark:text-slate-400">
                        <Calendar className="h-3 w-3" />
                        {job.range.start} — {job.range.end}
                      </span>
                    </div>

                    <ul className="mt-6 space-y-3">
                      {job.highlights.map((h) => (
                        <li key={h} className="flex gap-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                          <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-accent-400" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </article>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── Education ── */}
      <AnimatedSection className="mt-14" direction="up" delay={0.1}>
        <div className="mb-8 flex items-center gap-3">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-violet-50 dark:bg-violet-500/10">
            <GraduationCap className="h-3.5 w-3.5 text-violet-500 dark:text-violet-400" />
          </div>
          <h2 className="text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">
            Education
          </h2>
        </div>

        <article className="card-hover glow-border shimmer-hover relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 dark:border-white/[0.07] dark:bg-ink-700 md:p-8">
          {/* Accent top bar (violet) */}
          <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-violet-500 via-accent-500 to-cyan-400 opacity-60" />

          <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
            <div>
              <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">
                {resume.education.school}
              </h3>
              <p className="mt-1.5 text-sm font-medium text-slate-600 dark:text-slate-400">
                {resume.education.degree}
              </p>
            </div>
            <div className="flex flex-col items-start gap-2 md:items-end">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-600 dark:border-white/[0.07] dark:bg-white/[0.04] dark:text-slate-400">
                <Calendar className="h-3 w-3" />
                {resume.education.range.start} — {resume.education.range.end}
              </span>
              {resume.education.details.map((d) => (
                <span
                  key={d}
                  className="rounded-full border border-violet-200/60 bg-violet-50 px-3 py-1 text-xs font-bold text-violet-700 dark:border-violet-500/20 dark:bg-violet-500/8 dark:text-violet-400"
                >
                  {d}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-8">
            <div className="flex items-center gap-2">
              <BookOpen className="h-4 w-4 text-slate-400" />
              <p className="text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">
                Relevant Coursework
              </p>
            </div>
            <div className="mt-3 flex flex-wrap gap-2">
              {resume.education.coursework.map((c) => (
                <span
                  key={c}
                  className="badge-hover rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-700 dark:border-white/[0.07] dark:bg-white/[0.04] dark:text-slate-300"
                >
                  {c}
                </span>
              ))}
            </div>
          </div>
        </article>
      </AnimatedSection>

    </main>
  );
}
