import { Mail } from "lucide-react";
import { SiGithub, SiCodeforces, SiLeetcode } from "react-icons/si";
import { FaLinkedin, FaWhatsapp } from "react-icons/fa6";
import type { IconType } from "react-icons";
import type { LucideIcon } from "lucide-react";

import { resume } from "@/data/resume";

interface Props {
  className?: string;
}

type SocialItem = {
  label: string;
  href: string;
  icon: IconType | LucideIcon;
  /** Brand hue used for the hover ring. GitHub's near-white is replaced with
   *  a token so the affordance stays visible in light mode. */
  hue: string;
};

const profile = (label: string) =>
  resume.person.links.find((l) => l.label === label)?.href;

export default function SocialLinks({
  className = "flex flex-wrap items-center gap-3",
}: Props) {
  const items: SocialItem[] = [
    { label: "LinkedIn", href: profile("LinkedIn") ?? "", icon: FaLinkedin, hue: "#0a66c2" },
    { label: "GitHub", href: profile("GitHub") ?? "", icon: SiGithub, hue: "var(--fg-2)" },
    { label: "Email", href: `mailto:${resume.person.email}`, icon: Mail, hue: "#e11d48" },
    { label: "WhatsApp", href: resume.person.whatsapp, icon: FaWhatsapp, hue: "#16a34a" },
    { label: "Codeforces", href: profile("Codeforces") ?? "", icon: SiCodeforces, hue: "#1f8acb" },
    { label: "LeetCode", href: profile("LeetCode") ?? "", icon: SiLeetcode, hue: "#e08900" },
  ].filter((i) => Boolean(i.href));

  return (
    <div className={className}>
      {items.map(({ label, href, icon: Icon, hue }) => {
        const isMail = href.startsWith("mailto:");
        return (
          <a
            key={label}
            href={href}
            aria-label={label}
            title={label}
            target={isMail ? undefined : "_blank"}
            rel={isMail ? undefined : "noopener noreferrer"}
            className="group relative inline-flex h-10 w-10 items-center justify-center border transition-all duration-200 hover:-translate-y-0.5"
            style={{
              background: "var(--surface)",
              borderColor: "var(--border)",
              color: "var(--fg-3)",
            }}
          >
            <Icon
              className="relative z-10 h-4 w-4 transition-colors duration-200"
              aria-hidden="true"
            />
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-200 group-hover:opacity-100"
              style={{
                border: `1px solid ${hue}`,
                background: "var(--surface-2)",
                boxShadow: "var(--shadow-sm)",
              }}
            />
          </a>
        );
      })}
    </div>
  );
}
