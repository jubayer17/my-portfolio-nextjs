"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, UserRound } from "lucide-react";
import { LazyMotion, domAnimation, m, type Variants } from "framer-motion";

import RevealText from "@/components/ui/RevealText";
import Magnetic from "@/components/ui/Magnetic";
import { resume } from "@/data/resume";

const EASE = [0.22, 1, 0.36, 1] as const;

const fade: Variants = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: EASE } },
};

export default function About() {
  const { about } = resume;

  return (
    <LazyMotion features={domAnimation} strict>
      <section className="relative overflow-hidden py-14 sm:py-20" data-gsap="reveal">
        <span className="section-num" data-gsap="parallax" data-gsap-speed="8">
          01
        </span>

        <div className="grid gap-8 lg:grid-cols-12 lg:gap-10">

          {/* ── Portrait ── */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.45, ease: EASE }}
            className="lg:col-span-5"
          >
            <div
              className="portrait border"
              style={{ borderColor: "var(--border)", background: "var(--surface-2)" }}
            >
              <div className="relative aspect-[4/5]">
                <Image
                  src={about.portrait.src}
                  alt={about.portrait.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 460px"
                  className="object-cover object-top"
                  priority={false}
                />
              </div>

              {/* Corner ticks — a small frame detail that reads as intentional */}
              <span
                className="pointer-events-none absolute left-3 top-3 h-5 w-5 border-l-2 border-t-2"
                style={{ borderColor: "var(--accent)" }}
                aria-hidden="true"
              />
              <span
                className="pointer-events-none absolute bottom-3 right-3 h-5 w-5 border-b-2 border-r-2"
                style={{ borderColor: "var(--cyan)" }}
                aria-hidden="true"
              />

              <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 p-4">
                <p
                  className="font-outfit text-lg font-bold tracking-tight"
                  style={{ color: "var(--fg)" }}
                >
                  {resume.person.name}
                </p>
                <p className="font-mono text-[11px]" style={{ color: "var(--fg-3)" }}>
                  {resume.person.role} · {resume.person.location}
                </p>
              </div>
            </div>
          </m.div>

          {/* ── Story ── */}
          <div className="lg:col-span-7">
            <span className="chip">
              <UserRound className="h-3 w-3" aria-hidden="true" />
              About
            </span>

            <RevealText
              as="h2"
              text={about.heading}
              className="font-outfit mt-3 text-2xl font-bold tracking-tight sm:text-3xl"
              style={{ color: "var(--fg)" }}
            />

            <m.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={{ visible: { transition: { staggerChildren: 0.08, delayChildren: 0.15 } } }}
              className="mt-5 space-y-4"
            >
              {about.paragraphs.map((p) => (
                <m.p
                  key={p}
                  variants={fade}
                  className="max-w-2xl text-sm leading-relaxed sm:text-base"
                  style={{ color: "var(--fg-3)" }}
                >
                  {p}
                </m.p>
              ))}
            </m.div>

            <m.dl
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              variants={{ visible: { transition: { staggerChildren: 0.06 } } }}
              className="mt-7 grid gap-px sm:grid-cols-2"
              style={{ background: "var(--border)" }}
            >
              {about.facts.map((f) => (
                <m.div
                  key={f.label}
                  variants={fade}
                  className="p-4"
                  style={{ background: "var(--surface)" }}
                >
                  <dt
                    className="text-[10px] font-bold uppercase tracking-[0.14em]"
                    style={{ color: "var(--fg-4)" }}
                  >
                    {f.label}
                  </dt>
                  <dd className="mt-1 text-sm font-semibold" style={{ color: "var(--fg-2)" }}>
                    {f.value}
                  </dd>
                </m.div>
              ))}
            </m.dl>

            <div className="mt-7">
              <Magnetic>
                <Link href="/work" className="btn btn-ghost group">
                  My journey
                  <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                </Link>
              </Magnetic>
            </div>
          </div>
        </div>
      </section>
    </LazyMotion>
  );
}
