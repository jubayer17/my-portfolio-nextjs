"use client";

import { Code, Github, Laptop, Linkedin, Mail } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { resume } from "@/data/resume";

interface SocialLinksProps {
  className?: string;
}

export default function SocialLinks({
  className = "flex flex-wrap items-center gap-3",
}: SocialLinksProps) {
  const items = [
    { label: "LinkedIn",   href: resume.person.links.find((l) => l.label === "LinkedIn")?.href,   icon: Linkedin },
    { label: "GitHub",     href: resume.person.links.find((l) => l.label === "GitHub")?.href,     icon: Github   },
    { label: "Email",      href: `mailto:${resume.person.email}`,                                  icon: Mail     },
    { label: "Codeforces", href: resume.person.links.find((l) => l.label === "Codeforces")?.href, icon: Code     },
    { label: "LeetCode",   href: resume.person.links.find((l) => l.label === "LeetCode")?.href,   icon: Laptop   },
  ].filter((i): i is { label: string; href: string; icon: LucideIcon } => Boolean(i.href));

  // Per-platform glow + color
  const styleMap: Record<string, { hover: string; glow: string }> = {
    LinkedIn:   { hover: "hover:border-blue-400/40  hover:bg-blue-50   hover:text-blue-600   dark:hover:border-blue-500/25 dark:hover:bg-blue-500/10  dark:hover:text-blue-400",   glow: "hover:shadow-[0_0_14px_rgba(59,130,246,0.25)]"  },
    GitHub:     { hover: "hover:border-slate-400/40 hover:bg-slate-50  hover:text-slate-800  dark:hover:border-slate-300/20 dark:hover:bg-white/8     dark:hover:text-slate-200",  glow: "hover:shadow-[0_0_14px_rgba(148,163,184,0.2)]"  },
    Email:      { hover: "hover:border-rose-400/40  hover:bg-rose-50   hover:text-rose-600   dark:hover:border-rose-500/25  dark:hover:bg-rose-500/10  dark:hover:text-rose-400",   glow: "hover:shadow-[0_0_14px_rgba(244,63,94,0.25)]"   },
    Codeforces: { hover: "hover:border-cyan-400/40  hover:bg-cyan-50   hover:text-cyan-700   dark:hover:border-cyan-500/25  dark:hover:bg-cyan-500/10  dark:hover:text-cyan-400",   glow: "hover:shadow-[0_0_14px_rgba(34,211,238,0.25)]"  },
    LeetCode:   { hover: "hover:border-orange-400/40 hover:bg-orange-50 hover:text-orange-600 dark:hover:border-orange-500/25 dark:hover:bg-orange-500/10 dark:hover:text-orange-400", glow: "hover:shadow-[0_0_14px_rgba(249,115,22,0.25)]" },
  };

  return (
    <div className={className}>
      {items.map((link) => {
        const s = styleMap[link.label] ?? { hover: "", glow: "" };
        return (
          <a
            key={link.label}
            href={link.href}
            className={[
              "inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-500 shadow-sm transition-all duration-200 hover:-translate-y-0.5",
              "dark:border-white/[0.08] dark:bg-white/[0.04] dark:text-slate-400",
              s.hover,
              s.glow,
            ].join(" ")}
            aria-label={link.label}
            title={link.label}
            target={link.href.startsWith("mailto:") ? undefined : "_blank"}
            rel={link.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
          >
            <link.icon className="h-4 w-4" />
          </a>
        );
      })}
    </div>
  );
}
