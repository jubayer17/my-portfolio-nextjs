"use client";

import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";
import { LazyMotion, domAnimation, m } from "framer-motion";

import { resume } from "@/data/resume";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function CtaBanner() {
  return (
    <LazyMotion features={domAnimation} strict>
      <section className="pb-16 pt-4 sm:pb-24" data-gsap="reveal">
        <m.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.34, ease: EASE }}
          className="noise relative overflow-hidden border px-6 py-10 sm:px-10 sm:py-14"
          style={{ background: "var(--surface-2)", borderColor: "var(--accent-line)" }}
        >
          <div
            className="orb -right-16 -top-24 h-56 w-56 opacity-25"
            style={{ background: "var(--accent)" }}
            aria-hidden="true"
          />
          <div
            className="orb -bottom-24 left-10 h-44 w-44 opacity-20"
            style={{ background: "var(--cyan)", animationDelay: "4s" }}
            aria-hidden="true"
          />

          <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-lg">
              <h2
                className="font-outfit text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl"
                style={{ color: "var(--fg)" }}
              >
                Start a Meaningful Build
              </h2>
              <p className="mt-3 text-sm leading-relaxed" style={{ color: "var(--fg-3)" }}>
                Open to full-time roles, freelance projects, and collaboration.
                I&rsquo;d love to hear what you&rsquo;re building.
              </p>
              <a
                href={`mailto:${resume.person.email}`}
                className="link-underline mt-4 inline-flex items-center gap-2 break-anywhere font-mono text-xs"
                style={{ color: "var(--fg-2)" }}
              >
                <Mail className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                {resume.person.email}
              </a>
              <p className="mt-1 font-mono text-xs" style={{ color: "var(--fg-4)" }}>
                {resume.person.location}
              </p>
            </div>

            <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
              {/* Was `bg-white text-slate-900`, which vanished against the
                  light-theme surface. Now driven by the invert tokens. */}
              <Link href="/contact" className="btn btn-invert group">
                Get in touch
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
              </Link>
              <Link href="/projects" className="btn btn-ghost">
                See projects
              </Link>
            </div>
          </div>
        </m.div>
      </section>
    </LazyMotion>
  );
}
