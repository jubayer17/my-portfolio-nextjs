import Link from "next/link";
import { ArrowRight, Briefcase, MapPin, Calendar } from "lucide-react";
import { resume } from "@/data/resume";
import AnimatedSection from "@/components/ui/AnimatedSection";

export const metadata = { title: "Work" };

export default function WorkPage() {
  const totalHighlights = resume.experience.reduce((count, item) => count + item.highlights.length, 0);

  return (
    <main id="content" className="mx-auto max-w-6xl px-4 py-14 md:px-6 md:py-20">

      {/* ── Header ── */}
      <AnimatedSection>
        <div className="relative overflow-hidden border p-6 md:p-8" style={{ borderColor: "var(--border)", background: "var(--surface)" }}>
          <div className="pointer-events-none absolute -top-12 -right-12 h-44 w-44 rounded-full opacity-40" style={{ background: "var(--accent-soft)" }} />
          <div className="pointer-events-none absolute -bottom-16 left-1/3 h-40 w-40 rounded-full opacity-35" style={{ background: "var(--cyan-soft)" }} />

          <div className="relative flex flex-col gap-7 md:flex-row md:items-end md:justify-between">
            <div>
              <span className="chip">
                <Briefcase className="h-3 w-3" />
                Career
              </span>
              <h1
                className="font-outfit mt-4 text-4xl font-black tracking-tight md:text-5xl"
                style={{ color: "var(--fg)" }}
              >
                Work &amp; Education
              </h1>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed md:text-base" style={{ color: "var(--fg-3)" }}>
                A snapshot of my engineering journey, production impact, and academic foundation.
                I currently contribute as a Junior Software Engineer at GeekSSort.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              <Link
                href="/projects"
                className="btn btn-ghost inline-flex items-center gap-2"
              >
                See projects <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="relative mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
            <div className="border p-3" style={{ borderColor: "var(--border)", background: "var(--surface-2)" }}>
              <p className="text-[10px] font-black uppercase tracking-[0.12em]" style={{ color: "var(--fg-4)" }}>Current Company</p>
              <p className="mt-1 text-sm font-bold" style={{ color: "var(--accent-text)" }}>GeekSSort</p>
            </div>
            <div className="border p-3" style={{ borderColor: "var(--border)", background: "var(--surface-2)" }}>
              <p className="text-[10px] font-black uppercase tracking-[0.12em]" style={{ color: "var(--fg-4)" }}>Roles Listed</p>
              <p className="mt-1 text-sm font-bold" style={{ color: "var(--fg)" }}>{resume.experience.length}</p>
            </div>
            <div className="border p-3" style={{ borderColor: "var(--border)", background: "var(--surface-2)" }}>
              <p className="text-[10px] font-black uppercase tracking-[0.12em]" style={{ color: "var(--fg-4)" }}>Key Contributions</p>
              <p className="mt-1 text-sm font-bold" style={{ color: "var(--fg)" }}>{totalHighlights} highlights</p>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* ── Experience Timeline ── */}
      <section className="mt-14">
        <div className="mb-8 flex items-center gap-3">
          <span
            className="flex h-7 w-7 items-center justify-center rounded-lg"
            style={{ background: "var(--accent-soft)", color: "var(--accent-text)" }}
          >
            <Briefcase className="h-3.5 w-3.5" />
          </span>
          <p className="text-[10px] font-black uppercase tracking-[0.12em]" style={{ color: "var(--fg-4)" }}>
            Professional Experience
          </p>
        </div>

        <div className="relative">
          <div
            className="timeline-track absolute left-[18px] top-8 w-px"
            style={{ height: "calc(100% - 32px)" }}
          />

          <div className="space-y-6">
            {resume.experience.map((job, idx) => (
              <AnimatedSection key={`${job.company}-${job.role}`} delay={idx * 0.1} direction="left">
                <div className="relative pl-10 sm:pl-14">
                  {/* Dot */}
                  <span className="absolute left-3 top-8 flex h-6 w-6 -translate-x-1/2 items-center justify-center">
                    <span
                      className="absolute inline-flex h-full w-full animate-ping-slow rounded-full opacity-30"
                      style={{ background: "var(--accent)" }}
                    />
                    <span
                      className="relative h-3.5 w-3.5 rounded-full border-2"
                      style={{
                        background: "var(--accent)",
                        borderColor: "var(--bg)",
                        boxShadow: "0 0 12px var(--accent-glow)",
                      }}
                    />
                  </span>

                  <article className="card card-shimmer accent-bar border-l-2 p-4 sm:p-6 md:p-8" style={{ borderLeftColor: "var(--accent)" }}>
                    <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                      <div>
                        <h3
                          className="font-outfit text-xl font-extrabold tracking-tight"
                          style={{ color: "var(--fg)" }}
                        >
                          {job.role}
                        </h3>
                        <div className="mt-1.5 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm">
                          <span className="inline-flex items-center gap-1 border px-2 py-0.5 text-xs font-bold uppercase tracking-[0.08em]" style={{ color: "var(--accent-text)", borderColor: "var(--border)", background: "var(--accent-soft)" }}>
                            {job.company}
                          </span>
                          <span className="flex items-center gap-1" style={{ color: "var(--fg-3)" }}>
                            <MapPin className="h-3 w-3" />
                            {job.location}
                          </span>
                        </div>
                      </div>
                      <span
                        className="inline-flex h-fit shrink-0 items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-semibold"
                        style={{
                          color: "var(--fg-3)",
                          background: "var(--surface-2)",
                          borderColor: "var(--border)",
                        }}
                      >
                        <Calendar className="h-3 w-3" />
                        {job.range.start} — {job.range.end}
                      </span>
                    </div>

                    <ul className="mt-6 space-y-3">
                      {job.highlights.map((h) => (
                        <li
                          key={h}
                          className="flex gap-3 border-l-2 pl-3 text-sm leading-relaxed"
                          style={{ color: "var(--fg-2)" }}
                        >
                          <span
                            className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full"
                            style={{ background: "var(--accent)" }}
                          />
                          {h}
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

    </main>
  );
}
