import Link from "next/link";
import { resume } from "@/data/resume";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="relative border-t"
      style={{ borderColor: "var(--border)", background: "var(--bg-subtle)" }}
    >
      {/* Solid top edge */}
      <div
        className="absolute inset-x-0 top-0 h-px"
        style={{
          background: "var(--accent)",
          opacity: 0.25,
        }}
      />

      <div className="mx-auto max-w-6xl px-6 py-12 md:px-6 md:py-16">
        <div className="grid gap-10 md:grid-cols-12 md:items-start">

          {/* Brand */}
          <div className="space-y-4 md:col-span-5">
            <div className="flex items-center gap-2.5">
              <span
                className="inline-flex h-8 w-8 items-center justify-center rounded-xl text-[11px] font-black text-white"
                style={{ background: "var(--accent)" }}
              >
                JA
              </span>
              <p className="font-outfit text-sm font-bold" style={{ color: "var(--fg)" }}>
                {resume.person.name}
              </p>
            </div>
            <p className="max-w-xs text-sm leading-relaxed" style={{ color: "var(--fg-3)" }}>
              Full-stack engineer focused on clean architecture, reliable delivery,
              and performance-first user experiences.
            </p>
            <a
              href={`mailto:${resume.person.email}`}
              className="link-underline inline-block text-sm font-medium"
              style={{ color: "var(--fg-3)" }}
            >
              {resume.person.email}
            </a>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 gap-6 sm:gap-8 md:col-span-7">
            {[
              {
                title: "Pages",
                links: [
                  { label: "Home", href: "/" },
                  { label: "Work", href: "/work" },
                  { label: "Projects", href: "/projects" },
                  { label: "Contact", href: "/contact" },
                ],
                isExternal: false,
              },
              {
                title: "Profiles",
                links: resume.person.links,
                isExternal: true,
              },
            ].map((col) => (
              <div key={col.title} className="space-y-4">
                <p
                  className="text-[10px] font-bold uppercase tracking-[0.12em]"
                  style={{ color: "var(--fg-4)" }}
                >
                  {col.title}
                </p>
                <div className="flex flex-col gap-2.5">
                  {col.links.map((l) =>
                    col.isExternal ? (
                      <a
                        key={l.href}
                        href={l.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link-underline w-fit text-sm transition-colors"
                        style={{ color: "var(--fg-3)" }}
                      >
                        {l.label}
                      </a>
                    ) : (
                      <Link
                        key={l.href}
                        href={l.href}
                        className="link-underline w-fit text-sm transition-colors"
                        style={{ color: "var(--fg-3)" }}
                      >
                        {l.label}
                      </Link>
                    )
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="mt-10 border-t pt-6 text-center text-xs"
          style={{ borderColor: "var(--border)", color: "var(--fg-4)" }}
        >
          <p>© {year} {resume.person.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
