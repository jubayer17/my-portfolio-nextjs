import Link from "next/link";
import { Mail, MapPin } from "lucide-react";

import { resume } from "@/data/resume";
import SocialLinks from "@/components/ui/SocialLinks";

const PAGES = [
  { label: "Home", href: "/" },
  { label: "Work", href: "/work" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="relative mt-auto border-t"
      style={{ borderColor: "var(--border)", background: "var(--bg-subtle)" }}
    >
      <div
        className="absolute inset-x-0 top-0 h-px"
        style={{ background: "var(--accent)", opacity: 0.3 }}
        aria-hidden="true"
      />

      <div className="shell py-12 md:py-14">
        <div className="grid gap-10 md:grid-cols-12">

          {/* ── Brand ── */}
          <div className="space-y-4 md:col-span-5">
            <div className="flex items-center gap-2.5">
              <span
                className="inline-flex h-8 w-8 shrink-0 items-center justify-center text-[11px] font-bold text-white"
                style={{ background: "var(--accent)" }}
                aria-hidden="true"
              >
                JA
              </span>
              <div className="min-w-0">
                <p className="font-outfit text-sm font-bold" style={{ color: "var(--fg)" }}>
                  {resume.person.name}
                </p>
                <p className="text-xs" style={{ color: "var(--fg-4)" }}>
                  {resume.person.role}
                </p>
              </div>
            </div>

            <p className="max-w-xs text-sm leading-relaxed" style={{ color: "var(--fg-3)" }}>
              Full-stack engineer focused on clean architecture, reliable delivery,
              and performance-first user experiences.
            </p>

            <div className="space-y-2">
              <a
                href={`mailto:${resume.person.email}`}
                className="link-underline inline-flex items-center gap-2 break-anywhere text-sm font-medium"
                style={{ color: "var(--fg-3)" }}
              >
                <Mail className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                {resume.person.email}
              </a>
              <p
                className="flex items-center gap-2 text-sm"
                style={{ color: "var(--fg-4)" }}
              >
                <MapPin className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                {resume.person.location}
              </p>
            </div>
          </div>

          {/* ── Links ── */}
          <div className="grid grid-cols-2 gap-6 sm:gap-8 md:col-span-4">
            <div className="space-y-4">
              <p
                className="text-[10px] font-bold uppercase tracking-[0.14em]"
                style={{ color: "var(--fg-4)" }}
              >
                Pages
              </p>
              <div className="flex flex-col gap-2.5">
                {PAGES.map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    className="link-underline w-fit text-sm transition-colors duration-200 hover:text-[var(--fg-2)]"
                    style={{ color: "var(--fg-3)" }}
                  >
                    {l.label}
                  </Link>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <p
                className="text-[10px] font-bold uppercase tracking-[0.14em]"
                style={{ color: "var(--fg-4)" }}
              >
                Profiles
              </p>
              <div className="flex flex-col gap-2.5">
                {resume.person.links.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-underline w-fit text-sm transition-colors duration-200 hover:text-[var(--fg-2)]"
                    style={{ color: "var(--fg-3)" }}
                  >
                    {l.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* ── Social ── */}
          <div className="space-y-4 md:col-span-3">
            <p
              className="text-[10px] font-bold uppercase tracking-[0.14em]"
              style={{ color: "var(--fg-4)" }}
            >
              Elsewhere
            </p>
            <SocialLinks className="flex flex-wrap items-center gap-2.5" />
            <a
              href={resume.person.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost w-full px-4 py-2 text-xs sm:w-auto"
            >
              Download Resume
            </a>
          </div>
        </div>

        <div
          className="mt-10 flex flex-col items-center gap-2 border-t pt-6 text-center text-xs sm:flex-row sm:justify-between sm:text-left"
          style={{ borderColor: "var(--border)", color: "var(--fg-4)" }}
        >
          <p>© {year} {resume.person.name}. All rights reserved.</p>
          <p className="font-mono">Built with Next.js &amp; Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
}
