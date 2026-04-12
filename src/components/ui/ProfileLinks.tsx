"use client";

interface Link { label: string; href: string }

export default function ProfileLinks({ links }: { links: Link[] }) {
  return (
    <div className="mt-5 space-y-2">
      {links.map((l) => (
        <a
          key={l.href}
          href={l.href}
          target="_blank"
          rel="noopener noreferrer"
          className="profile-link flex items-center justify-between rounded-xl border px-4 py-3 text-sm font-medium transition-all"
          style={{
            background: "var(--surface-2)",
            borderColor: "var(--border)",
            color: "var(--fg-2)",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = "rgba(124,58,237,0.3)";
            e.currentTarget.style.background = "var(--accent-soft)";
            e.currentTarget.style.color = "var(--accent-text)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = "var(--border)";
            e.currentTarget.style.background = "var(--surface-2)";
            e.currentTarget.style.color = "var(--fg-2)";
          }}
        >
          <span className="font-bold">{l.label}</span>
          <span
            className="max-w-[150px] truncate font-mono text-xs"
            style={{ color: "var(--fg-4)" }}
          >
            {l.href.replace("https://", "")}
          </span>
        </a>
      ))}
    </div>
  );
}
