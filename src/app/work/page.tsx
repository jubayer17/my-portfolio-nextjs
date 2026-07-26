import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight, Briefcase, MapPin, Calendar, GraduationCap, Award, BookOpen,
} from "lucide-react";
import { resume } from "@/data/resume";
import AnimatedSection from "@/components/ui/AnimatedSection";
import TechBadge from "@/components/ui/TechBadge";

export const metadata = {
  title: "Work",
  description:
    "Engineering roles, production impact, academic background, and certifications for Jubayer Ahmed.",
};

export default function WorkPage() {
  const totalHighlights = resume.experience.reduce(
    (count, item) => count + item.highlights.length,
    0
  );

  return (
    <main id="content" className="shell py-12 md:py-16">

      {/* ── Header ── */}
      <AnimatedSection>
        <div
          className="relative overflow-hidden border p-6 md:p-8"
          style={{ borderColor: "var(--border)", background: "var(--surface)" }}
        >
          <div
            className="orb -right-16 -top-20 h-44 w-44 opacity-30"
            style={{ background: "var(--accent)" }}
            aria-hidden="true"
          />
          <div
            className="orb -bottom-24 left-1/3 h-40 w-40 opacity-25"
            style={{ background: "var(--cyan)", animationDelay: "5s" }}
            aria-hidden="true"
          />

          <div className="relative flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <span className="chip">
                <Briefcase className="h-3 w-3" aria-hidden="true" />
                Career
              </span>
              <h1
                className="font-outfit mt-4 text-[clamp(2rem,6vw,3rem)] font-bold leading-tight tracking-tight"
                style={{ color: "var(--fg)" }}
              >
                Work &amp; Education
              </h1>
              <p
                className="mt-3 max-w-2xl text-sm leading-relaxed md:text-base"
                style={{ color: "var(--fg-3)" }}
              >
                My engineering journey, production impact, and academic foundation.
                I currently work as a {resume.experience[0].role} at {resume.experience[0].company}.
              </p>
            </div>

            <Link href="/projects" className="btn btn-ghost group shrink-0 self-start lg:self-auto">
              See projects
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
            </Link>
          </div>

          <div className="relative mt-7 grid grid-cols-2 gap-3 lg:grid-cols-4">
            {[
              { label: "Current Company", value: resume.experience[0].company, accent: true },
              { label: "Roles Held", value: String(resume.experience.length) },
              { label: "Key Contributions", value: `${totalHighlights}` },
              { label: "Degree", value: resume.education.grade },
            ].map((stat) => (
              <div
                key={stat.label}
                className="border p-3"
                style={{ borderColor: "var(--border)", background: "var(--surface-2)" }}
              >
                <p
                  className="text-[10px] font-bold uppercase tracking-[0.12em]"
                  style={{ color: "var(--fg-4)" }}
                >
                  {stat.label}
                </p>
                <p
                  className="mt-1 text-sm font-bold"
                  style={{ color: stat.accent ? "var(--accent-text)" : "var(--fg)" }}
                >
                  {stat.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* ── Experience timeline ── */}
      <section className="mt-14" aria-labelledby="experience-heading">
        <div className="mb-7 flex items-center gap-3">
          <span
            className="flex h-7 w-7 items-center justify-center"
            style={{ background: "var(--accent-soft)", color: "var(--accent-text)" }}
            aria-hidden="true"
          >
            <Briefcase className="h-3.5 w-3.5" />
          </span>
          <h2
            id="experience-heading"
            className="text-[11px] font-bold uppercase tracking-[0.14em]"
            style={{ color: "var(--fg-4)" }}
          >
            Professional Experience
          </h2>
        </div>

        <div className="relative">
          <div
            className="timeline-track absolute left-[13px] top-6 w-px sm:left-[17px]"
            style={{ height: "calc(100% - 40px)" }}
            aria-hidden="true"
          />

          <ol className="space-y-5">
            {resume.experience.map((job, idx) => (
              <li key={`${job.company}-${job.role}`}>
                <AnimatedSection delay={idx * 0.08} direction="left">
                  <div className="relative pl-9 sm:pl-12">
                    <span
                      className="absolute left-[13px] top-6 flex h-5 w-5 -translate-x-1/2 items-center justify-center sm:left-[17px]"
                      aria-hidden="true"
                    >
                      <span
                        className="absolute inline-flex h-full w-full animate-ping-slow rounded-full"
                        style={{ background: "var(--accent)" }}
                      />
                      <span
                        className="relative h-3 w-3 rounded-full border-2"
                        style={{
                          background: "var(--accent)",
                          borderColor: "var(--bg)",
                          boxShadow: "0 0 10px var(--accent-glow)",
                        }}
                      />
                    </span>

                    <article
                      className="card accent-bar p-5 sm:p-6 md:p-7"
                      style={{ borderLeft: "2px solid var(--accent)" }}
                    >
                      <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                        <div className="flex items-start gap-3.5">
                          {/* Always render the badge slot — a company without a
                              logo falls back to a monogram so every role title
                              lines up on the same left edge. */}
                          <span
                            className="flex h-10 w-10 shrink-0 items-center justify-center border"
                            style={{
                              borderColor: "var(--border)",
                              background: "var(--surface-2)",
                            }}
                            aria-hidden="true"
                          >
                            {job.logo ? (
                              <Image
                                src={job.logo}
                                alt=""
                                width={24}
                                height={24}
                                className="h-6 w-6 object-contain"
                              />
                            ) : (
                              <span
                                className="font-outfit text-xs font-bold"
                                style={{ color: "var(--fg-3)" }}
                              >
                                {job.company
                                  .replace(/[^A-Za-z ]/g, "")
                                  .split(" ")
                                  .filter(Boolean)
                                  .slice(0, 2)
                                  .map((w) => w[0])
                                  .join("")
                                  .toUpperCase()}
                              </span>
                            )}
                          </span>
                          <div className="min-w-0">
                            <h3
                              className="font-outfit text-lg font-bold tracking-tight sm:text-xl"
                              style={{ color: "var(--fg)" }}
                            >
                              {job.role}
                            </h3>
                            <div className="mt-1.5 flex flex-wrap items-center gap-x-3 gap-y-1.5 text-sm">
                              {job.companyUrl ? (
                                <a
                                  href={job.companyUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center border px-2 py-0.5 text-xs font-bold uppercase tracking-[0.08em] transition-colors duration-200 hover:border-[var(--accent)]"
                                  style={{
                                    color: "var(--accent-text)",
                                    borderColor: "var(--accent-line)",
                                    background: "var(--accent-soft)",
                                  }}
                                >
                                  {job.company}
                                </a>
                              ) : (
                                <span
                                  className="inline-flex items-center border px-2 py-0.5 text-xs font-bold uppercase tracking-[0.08em]"
                                  style={{
                                    color: "var(--accent-text)",
                                    borderColor: "var(--accent-line)",
                                    background: "var(--accent-soft)",
                                  }}
                                >
                                  {job.company}
                                </span>
                              )}
                              <span
                                className="inline-flex items-center gap-1 text-xs"
                                style={{ color: "var(--fg-3)" }}
                              >
                                <MapPin className="h-3 w-3" aria-hidden="true" />
                                {job.location}
                              </span>
                            </div>
                          </div>
                        </div>

                        <span
                          className="inline-flex h-fit shrink-0 items-center gap-1.5 border px-2.5 py-1 font-mono text-xs font-semibold"
                          style={{
                            color: "var(--fg-3)",
                            background: "var(--surface-2)",
                            borderColor: "var(--border)",
                          }}
                        >
                          <Calendar className="h-3 w-3" aria-hidden="true" />
                          {job.range.start} — {job.range.end}
                        </span>
                      </div>

                      <p
                        className="mt-4 border-l-2 pl-3 text-sm leading-relaxed"
                        style={{ borderColor: "var(--cyan)", color: "var(--fg-2)" }}
                      >
                        {job.summary}
                      </p>

                      <ul className="mt-5 space-y-2.5">
                        {job.highlights.map((h) => (
                          <li
                            key={h}
                            className="flex gap-3 text-sm leading-relaxed"
                            style={{ color: "var(--fg-2)" }}
                          >
                            <span
                              className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full"
                              style={{ background: "var(--accent)" }}
                              aria-hidden="true"
                            />
                            <span className="min-w-0">{h}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="mt-5 flex flex-wrap gap-2">
                        {job.stack.map((t) => (
                          <TechBadge key={t} name={t} />
                        ))}
                      </div>
                    </article>
                  </div>
                </AnimatedSection>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── Education ── */}
      <section className="mt-14" aria-labelledby="education-heading">
        <div className="mb-7 flex items-center gap-3">
          <span
            className="flex h-7 w-7 items-center justify-center"
            style={{ background: "var(--cyan-soft)", color: "var(--cyan)" }}
            aria-hidden="true"
          >
            <GraduationCap className="h-3.5 w-3.5" />
          </span>
          <h2
            id="education-heading"
            className="text-[11px] font-bold uppercase tracking-[0.14em]"
            style={{ color: "var(--fg-4)" }}
          >
            Education
          </h2>
        </div>

        <AnimatedSection>
          <article
            className="card p-5 sm:p-6 md:p-7"
            style={{ borderLeft: "2px solid var(--cyan)" }}
          >
            <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
              <div className="min-w-0">
                <h3
                  className="font-outfit text-lg font-bold tracking-tight sm:text-xl"
                  style={{ color: "var(--fg)" }}
                >
                  {resume.education.school}
                </h3>
                <p className="mt-1 text-sm font-semibold" style={{ color: "var(--fg-2)" }}>
                  {resume.education.degree}
                </p>
              </div>
              <div className="flex shrink-0 flex-wrap items-center gap-2">
                <span
                  className="inline-flex items-center gap-1.5 border px-2.5 py-1 font-mono text-xs font-semibold"
                  style={{
                    color: "var(--fg-3)",
                    background: "var(--surface-2)",
                    borderColor: "var(--border)",
                  }}
                >
                  <Calendar className="h-3 w-3" aria-hidden="true" />
                  {resume.education.range.start} — {resume.education.range.end}
                </span>
                <span
                  className="inline-flex items-center border px-2.5 py-1 font-mono text-xs font-bold"
                  style={{
                    color: "var(--cyan)",
                    background: "var(--cyan-soft)",
                    borderColor: "var(--cyan)",
                  }}
                >
                  {resume.education.grade}
                </span>
              </div>
            </div>

            <div className="mt-6">
              <p
                className="mb-3 flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.14em]"
                style={{ color: "var(--fg-4)" }}
              >
                <BookOpen className="h-3 w-3" aria-hidden="true" />
                Relevant Coursework
              </p>
              <div className="flex flex-wrap gap-2">
                {resume.education.coursework.map((c) => (
                  <span key={c} className="tag">
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </article>
        </AnimatedSection>
      </section>

      {/* ── Certifications ── */}
      <section className="mt-14" aria-labelledby="certifications-heading">
        <div className="mb-7 flex items-center gap-3">
          <span
            className="flex h-7 w-7 items-center justify-center"
            style={{ background: "var(--accent-soft)", color: "var(--accent-text)" }}
            aria-hidden="true"
          >
            <Award className="h-3.5 w-3.5" />
          </span>
          <h2
            id="certifications-heading"
            className="text-[11px] font-bold uppercase tracking-[0.14em]"
            style={{ color: "var(--fg-4)" }}
          >
            Certifications &amp; Training
          </h2>
        </div>

        <AnimatedSection>
          <ul className="grid gap-3 sm:grid-cols-2">
            {resume.certifications.map((c) => (
              <li key={c.title} className="card card-shimmer flex items-start gap-3 p-4">
                <span
                  className="flex h-8 w-8 shrink-0 items-center justify-center border"
                  style={{
                    color: "var(--accent-text)",
                    background: "var(--accent-soft)",
                    borderColor: "var(--accent-line)",
                  }}
                  aria-hidden="true"
                >
                  <Award className="h-3.5 w-3.5" />
                </span>
                <div className="min-w-0">
                  <p className="text-sm font-bold leading-snug" style={{ color: "var(--fg)" }}>
                    {c.title}
                  </p>
                  <p className="mt-0.5 text-xs" style={{ color: "var(--fg-4)" }}>
                    {c.issuer}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </AnimatedSection>
      </section>

      {/* ── Focus areas ── */}
      <section className="mt-14" aria-labelledby="focus-heading">
        <h2
          id="focus-heading"
          className="mb-4 text-[11px] font-bold uppercase tracking-[0.14em]"
          style={{ color: "var(--fg-4)" }}
        >
          Domain Focus
        </h2>
        <AnimatedSection>
          <div className="flex flex-wrap gap-2">
            {resume.industryKeywords.map((k) => (
              <span key={k} className="tag">
                {k}
              </span>
            ))}
          </div>
        </AnimatedSection>
      </section>

    </main>
  );
}
