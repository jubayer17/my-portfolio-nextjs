import type { ProjectStatus } from "@/data/resume";

const TONE: Record<ProjectStatus["tone"], { fg: string; bg: string; line: string }> = {
  warn: { fg: "var(--warn)", bg: "var(--warn-soft)", line: "var(--warn-line)" },
  success: { fg: "var(--success)", bg: "var(--success-soft)", line: "var(--success)" },
  accent: { fg: "var(--accent-text)", bg: "var(--accent-soft)", line: "var(--accent-line)" },
};

/**
 * Replaces the `slug === "restrocore"` checks that were duplicated across the
 * home page, the grid, and the detail page — status now travels with the data.
 */
export default function StatusBadge({
  status,
  size = "sm",
}: {
  status: ProjectStatus;
  size?: "sm" | "md";
}) {
  const tone = TONE[status.tone];

  return (
    <span
      className="inline-flex items-center gap-1.5 border font-bold uppercase tracking-wider"
      style={{
        color: tone.fg,
        background: tone.bg,
        borderColor: tone.line,
        fontSize: size === "md" ? "0.7rem" : "0.625rem",
        padding: size === "md" ? "0.25rem 0.625rem" : "0.125rem 0.5rem",
      }}
    >
      <span
        className="inline-block h-1.5 w-1.5 shrink-0 rounded-full animate-glow-pulse"
        style={{ background: tone.fg }}
        aria-hidden="true"
      />
      {status.label}
      <span className="font-medium normal-case opacity-70">· {status.note}</span>
    </span>
  );
}
