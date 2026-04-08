import Link from "next/link";
import { resume } from "@/data/resume";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-slate-200/60 bg-white dark:border-white/[0.05] dark:bg-ink-800">
      {/* Gradient top edge */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent-500/40 to-transparent" />

      <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <div className="grid gap-10 md:grid-cols-12 md:items-start">

          {/* Brand */}
          <div className="space-y-4 md:col-span-5">
            <div className="flex items-center gap-2.5">
              <span className="relative inline-flex h-8 w-8 items-center justify-center rounded-xl overflow-hidden">
                <span className="absolute inset-0 bg-gradient-to-br from-accent-500 to-violet-500" />
                <span className="relative text-[11px] font-bold text-white">JA</span>
              </span>
              <p className="text-sm font-semibold text-slate-900 dark:text-white">
                {resume.person.name}
              </p>
            </div>

            <p className="max-w-xs text-sm leading-relaxed text-slate-500 dark:text-slate-400">
              Full-stack engineer focused on clean architecture, reliable delivery, and
              performance-first user experiences.
            </p>

            <a
              href={`mailto:${resume.person.email}`}
              className="link-hover inline-block text-sm text-slate-500 transition-colors hover:text-accent-600 dark:text-slate-400 dark:hover:text-accent-400"
            >
              {resume.person.email}
            </a>
          </div>

          {/* Nav cols */}
          <div className="grid grid-cols-2 gap-6 md:col-span-7">
            <div className="space-y-4">
              <p className="text-[11px] font-semibold uppercase tracking-widest text-slate-400 dark:text-slate-500">
                Pages
              </p>
              <div className="flex flex-col gap-2.5 text-sm">
                {[
                  { label: "Home",     href: "/"         },
                  { label: "Work",     href: "/work"     },
                  { label: "Projects", href: "/projects" },
                  { label: "Contact",  href: "/contact"  },
                ].map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    className="link-hover w-fit text-slate-500 transition-colors hover:text-accent-600 dark:text-slate-400 dark:hover:text-accent-400"
                  >
                    {l.label}
                  </Link>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-[11px] font-semibold uppercase tracking-widest text-slate-400 dark:text-slate-500">
                Profiles
              </p>
              <div className="flex flex-col gap-2.5 text-sm">
                {resume.person.links.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-hover w-fit text-slate-500 transition-colors hover:text-accent-600 dark:text-slate-400 dark:hover:text-accent-400"
                  >
                    {l.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col gap-2 border-t border-slate-200/60 pt-6 text-xs text-slate-400 dark:border-white/[0.05] dark:text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} {resume.person.name}. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            Built with{" "}
            <span className="font-semibold text-slate-600 dark:text-slate-400">Next.js</span>
            &amp;
            <span className="font-semibold text-slate-600 dark:text-slate-400">TypeScript</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
