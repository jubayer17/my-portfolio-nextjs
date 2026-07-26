import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

interface Props {
  eyebrow: string;
  eyebrowIcon?: ReactNode;
  title: string;
  description?: string;
  action?: { label: string; href: string };
}

export default function SectionHeader({
  eyebrow,
  eyebrowIcon,
  title,
  description,
  action,
}: Props) {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
      <div className="max-w-2xl">
        <span className="chip">
          {eyebrowIcon}
          {eyebrow}
        </span>
        <h2
          className="font-outfit mt-3 text-2xl font-extrabold tracking-tight sm:text-3xl"
          style={{ color: "var(--fg)" }}
        >
          {title}
        </h2>
        {description && (
          <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--fg-3)" }}>
            {description}
          </p>
        )}
      </div>

      {action && (
        <Link
          href={action.href}
          className="link-underline group inline-flex shrink-0 items-center gap-1.5 text-sm font-semibold"
          style={{ color: "var(--fg-3)" }}
        >
          {action.label}
          <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
        </Link>
      )}
    </div>
  );
}
