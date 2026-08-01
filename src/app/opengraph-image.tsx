import { ImageResponse } from "next/og";
import { resume } from "@/data/resume";

/**
 * The share card, generated at build time.
 *
 * This replaces pointing `og:image` at the portrait: that file is 949×960 but
 * was declared as 1200×630, so every platform reserved a landscape slot and
 * then letterboxed a near-square photo into it. A card built to the real
 * dimensions also gets to say who this is, which a cropped headshot cannot.
 *
 * ImageResponse renders through Satori, which supports flexbox only — every
 * element with more than one child needs an explicit `display: flex`.
 */
export const alt = `${resume.person.name} — ${resume.person.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const BG = "#0c0e1d";
const ACCENT = "#8b5cf6";
const CYAN = "#22d3ee";

export default function OpengraphImage() {
  const stack = ["NestJS", "Django", "PostgreSQL", "Next.js", "Redis"];

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: BG,
          padding: "72px 80px",
          position: "relative",
        }}
      >
        {/* Accent rule along the top edge — the same violet→cyan the site uses. */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: 8,
            background: `linear-gradient(90deg, ${ACCENT}, ${CYAN} 60%, transparent)`,
          }}
        />

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: 20,
              letterSpacing: 8,
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.45)",
              fontWeight: 700,
            }}
          >
            {resume.person.location}
          </div>

          <div
            style={{
              display: "flex",
              marginTop: 20,
              fontSize: 92,
              fontWeight: 800,
              letterSpacing: -2,
              color: "#ffffff",
              lineHeight: 1.05,
            }}
          >
            {resume.person.name}
          </div>

          <div
            style={{
              display: "flex",
              marginTop: 14,
              fontSize: 40,
              fontWeight: 600,
              color: "#b9a5fd",
            }}
          >
            {resume.person.role}
          </div>

          <div
            style={{
              display: "flex",
              marginTop: 18,
              fontSize: 26,
              color: "rgba(255,255,255,0.62)",
            }}
          >
            {resume.person.tagline}
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          {stack.map((item) => (
            <div
              key={item}
              style={{
                display: "flex",
                padding: "10px 20px",
                border: "1px solid rgba(139,92,246,0.4)",
                background: "rgba(139,92,246,0.12)",
                color: "#d6ccff",
                fontSize: 24,
                fontWeight: 600,
              }}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    ),
    size
  );
}
