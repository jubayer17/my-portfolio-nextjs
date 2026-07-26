import { ArrowUpRight } from "lucide-react";

interface Link {
  label: string;
  href: string;
}

export default function ProfileLinks({ links }: { links: readonly Link[] }) {
  return (
    <ul className="mt-5 space-y-2">
      {links.map((l) => (
        <li key={l.href}>
          <a
            href={l.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between gap-3 border px-3.5 py-2.5 text-sm font-medium transition-colors duration-200 hover:border-[var(--accent-line)] hover:bg-[var(--accent-soft)] hover:text-[var(--accent-text)]"
            style={{
              background: "var(--surface-2)",
              borderColor: "var(--border)",
              color: "var(--fg-2)",
            }}
          >
            <span className="shrink-0 font-bold">{l.label}</span>
            <span className="flex min-w-0 items-center gap-1.5">
              <span
                className="truncate font-mono text-xs"
                style={{ color: "var(--fg-4)" }}
              >
                {l.href.replace(/^https?:\/\/(www\.)?/, "")}
              </span>
              <ArrowUpRight
                className="h-3.5 w-3.5 shrink-0 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </span>
          </a>
        </li>
      ))}
    </ul>
  );
}
