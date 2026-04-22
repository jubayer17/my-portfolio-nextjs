import { Mail } from "lucide-react";
import { SiGithub, SiCodeforces, SiLeetcode } from "react-icons/si";
import { FaLinkedin, FaWhatsapp } from "react-icons/fa6";
import type { IconType } from "react-icons";
import type { LucideIcon } from "lucide-react";
import { resume } from "@/data/resume";

interface Props { className?: string }

type PlatformStyle = {
  dot: string;
  hover: string;
  glow: string;
};

const STYLE: Record<string, PlatformStyle> = {
  LinkedIn: { dot: "#0a66c2", hover: "rgba(10,102,194,0.1)", glow: "rgba(10,102,194,0.25)" },
  GitHub: { dot: "#e6edf3", hover: "rgba(230,237,243,0.08)", glow: "rgba(230,237,243,0.15)" },
  Email: { dot: "#f43f5e", hover: "rgba(244,63,94,0.1)", glow: "rgba(244,63,94,0.25)" },
  WhatsApp: { dot: "#25d366", hover: "rgba(37,211,102,0.1)", glow: "rgba(37,211,102,0.25)" },
  Codeforces: { dot: "#1f8acb", hover: "rgba(31,138,203,0.1)", glow: "rgba(31,138,203,0.25)" },
  LeetCode: { dot: "#ffa116", hover: "rgba(255,161,22,0.1)", glow: "rgba(255,161,22,0.25)" },
};

type SocialItem =
  | { label: string; href: string; icon: IconType; kind: "si" }
  | { label: string; href: string; icon: LucideIcon; kind: "lucide" };

export default function SocialLinks({ className = "flex flex-wrap items-center gap-3" }: Props) {
  const items: SocialItem[] = [
    { label: "LinkedIn",  href: resume.person.links.find((l) => l.label === "LinkedIn")?.href ?? "",   icon: FaLinkedin,  kind: "si" },
    { label: "GitHub",    href: resume.person.links.find((l) => l.label === "GitHub")?.href ?? "",     icon: SiGithub,    kind: "si" },
    { label: "Email",     href: `mailto:${resume.person.email}`,                                        icon: Mail,        kind: "lucide" },
    { label: "WhatsApp",  href: "https://wa.me/8801785720927",                                          icon: FaWhatsapp,  kind: "si" },
    { label: "Codeforces", href: resume.person.links.find((l) => l.label === "Codeforces")?.href ?? "", icon: SiCodeforces, kind: "si" },
    { label: "LeetCode",  href: resume.person.links.find((l) => l.label === "LeetCode")?.href ?? "",   icon: SiLeetcode,  kind: "si" },
  ].filter((i) => Boolean(i.href)) as SocialItem[];

  return (
    <div className={className}>
      {items.map((link) => {
        const s = STYLE[link.label] ?? { dot: "var(--fg-3)", hover: "var(--accent-soft)", glow: "transparent" };
        const Icon = link.icon;
        return (
          <a
            key={link.label}
            href={link.href}
            aria-label={link.label}
            title={link.label}
            target={link.href.startsWith("mailto:") ? undefined : "_blank"}
            rel={link.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
            className="group relative inline-flex h-10 w-10 items-center justify-center rounded-xl border transition-all duration-200 hover:-translate-y-0.5"
            style={{
              background: "var(--surface)",
              borderColor: "var(--border)",
              color: "var(--fg-3)",
            }}
          >
            <Icon className="h-4 w-4" />
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 rounded-xl opacity-0 transition-opacity duration-200 group-hover:opacity-100"
              style={{ boxShadow: `0 8px 24px ${s.glow}`, border: `1px solid ${s.dot}55`, background: s.hover }}
            />
          </a>
        );
      })}
    </div>
  );
}
