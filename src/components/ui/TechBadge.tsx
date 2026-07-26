import {
  SiJavascript, SiTypescript, SiPython, SiCplusplus,
  SiReact, SiNextdotjs, SiRedux, SiHtml5, SiCss, SiTailwindcss,
  SiNodedotjs, SiNestjs, SiExpress, SiGraphql, SiDjango, SiSocketdotio,
  SiPostgresql, SiMongodb, SiMysql, SiFirebase, SiRedis, SiCelery,
  SiDocker, SiKubernetes, SiVercel, SiPostman, SiGithubactions,
  SiAxios, SiShopify, SiNpm, SiYarn, SiWebpack, SiGithub,
  SiGit, SiPrisma, SiTypeorm, SiApollographql, SiReactquery,
  SiFramer, SiVite, SiEslint, SiPrettier, SiZod,
  SiChartdotjs, SiCloudinary, SiReacthookform,
  SiJsonwebtokens, SiOpenai, SiLangchain,
} from "react-icons/si";
import { FaAws } from "react-icons/fa6";
import type { IconType } from "react-icons";

interface BadgeMeta {
  icon: IconType;
  /** Brand colour. Kept for the icon only — see `readable` below. */
  color: string;
  bg: string;
  /**
   * Some brand colours (near-white, near-black, pale yellow) fail contrast
   * against one of the two themes. Those badges use the normal foreground
   * token for text and reserve the brand colour for the glyph.
   */
  neutralText?: boolean;
}

const MAP: Record<string, BadgeMeta> = {
  // ── Languages ──
  "JavaScript (ES6+)": { icon: SiJavascript, color: "#e8b800", bg: "rgba(247,223,30,0.12)", neutralText: true },
  "JavaScript": { icon: SiJavascript, color: "#e8b800", bg: "rgba(247,223,30,0.12)", neutralText: true },
  "TypeScript": { icon: SiTypescript, color: "#3178C6", bg: "rgba(49,120,198,0.12)" },
  "Python": { icon: SiPython, color: "#3776AB", bg: "rgba(55,118,171,0.12)" },
  "C++": { icon: SiCplusplus, color: "#00599C", bg: "rgba(0,89,156,0.12)" },
  "C": { icon: SiCplusplus, color: "#7f93a8", bg: "rgba(168,185,204,0.12)", neutralText: true },

  // ── Frontend ──
  "React": { icon: SiReact, color: "#2aa8cc", bg: "rgba(97,218,251,0.12)" },
  "React.js": { icon: SiReact, color: "#2aa8cc", bg: "rgba(97,218,251,0.12)" },
  "Next.js": { icon: SiNextdotjs, color: "var(--fg)", bg: "var(--surface-2)", neutralText: true },
  "Redux": { icon: SiRedux, color: "#764ABC", bg: "rgba(118,74,188,0.12)" },
  "Redux Toolkit": { icon: SiRedux, color: "#764ABC", bg: "rgba(118,74,188,0.12)" },
  "HTML5": { icon: SiHtml5, color: "#E34F26", bg: "rgba(227,79,38,0.12)" },
  "CSS3": { icon: SiCss, color: "#1572B6", bg: "rgba(21,114,182,0.12)" },
  "Tailwind CSS": { icon: SiTailwindcss, color: "#0891b2", bg: "rgba(6,182,212,0.12)" },
  "Tailwind CSS v4": { icon: SiTailwindcss, color: "#0891b2", bg: "rgba(6,182,212,0.12)" },
  "Framer Motion": { icon: SiFramer, color: "#0055FF", bg: "rgba(0,85,255,0.12)" },
  "Framer": { icon: SiFramer, color: "#0055FF", bg: "rgba(0,85,255,0.12)" },
  "React Hook Form": { icon: SiReacthookform, color: "#EC5990", bg: "rgba(236,89,144,0.12)" },

  // ── Backend ──
  "Node.js": { icon: SiNodedotjs, color: "#2f8a2f", bg: "rgba(51,153,51,0.12)" },
  "NestJS": { icon: SiNestjs, color: "#E0234E", bg: "rgba(224,35,78,0.12)" },
  "Express.js": { icon: SiExpress, color: "var(--fg)", bg: "var(--surface-2)", neutralText: true },
  "GraphQL": { icon: SiGraphql, color: "#E10098", bg: "rgba(225,0,152,0.12)" },
  "Django": { icon: SiDjango, color: "#0C4B33", bg: "rgba(12,75,51,0.12)", neutralText: true },
  "Django REST Framework": { icon: SiDjango, color: "#0C4B33", bg: "rgba(12,75,51,0.12)", neutralText: true },
  "WebSockets": { icon: SiSocketdotio, color: "var(--fg)", bg: "var(--surface-2)", neutralText: true },
  "JWT auth": { icon: SiJsonwebtokens, color: "#b039e0", bg: "rgba(214,58,255,0.12)" },
  "JWT Authentication": { icon: SiJsonwebtokens, color: "#b039e0", bg: "rgba(214,58,255,0.12)" },

  // ── AI & ML ──
  "OpenAI API": { icon: SiOpenai, color: "var(--fg)", bg: "var(--surface-2)", neutralText: true },
  "LangChain": { icon: SiLangchain, color: "var(--fg)", bg: "var(--surface-2)", neutralText: true },

  // ── Databases ──
  "PostgreSQL": { icon: SiPostgresql, color: "#4169E1", bg: "rgba(65,105,225,0.12)" },
  "MongoDB": { icon: SiMongodb, color: "#3f8f40", bg: "rgba(71,162,72,0.12)" },
  "MySQL": { icon: SiMysql, color: "#4479A1", bg: "rgba(68,121,161,0.12)" },
  "Redis": { icon: SiRedis, color: "#DC382D", bg: "rgba(220,56,45,0.12)" },
  "Celery": { icon: SiCelery, color: "#3f8f40", bg: "rgba(55,180,74,0.12)" },
  "Firebase": { icon: SiFirebase, color: "#c99000", bg: "rgba(255,202,40,0.14)", neutralText: true },
  "Prisma": { icon: SiPrisma, color: "#5A67D8", bg: "rgba(90,103,216,0.12)" },
  "Prisma ORM": { icon: SiPrisma, color: "#5A67D8", bg: "rgba(90,103,216,0.12)" },
  "TypeORM": { icon: SiTypeorm, color: "#E83524", bg: "rgba(232,53,36,0.12)" },

  // ── DevOps & Cloud ──
  "Docker": { icon: SiDocker, color: "#2496ED", bg: "rgba(36,150,237,0.12)" },
  "Kubernetes": { icon: SiKubernetes, color: "#326CE5", bg: "rgba(50,108,229,0.12)" },
  "AWS (EC2, S3)": { icon: FaAws, color: "#d97706", bg: "rgba(255,153,0,0.12)" },
  "CI/CD (GitHub Actions)": { icon: SiGithubactions, color: "#2088FF", bg: "rgba(32,136,255,0.12)" },
  "Vercel": { icon: SiVercel, color: "var(--fg)", bg: "var(--surface-2)", neutralText: true },

  // ── Tools & Platforms ──
  "Git": { icon: SiGit, color: "#F05032", bg: "rgba(240,80,50,0.12)" },
  "GitHub": { icon: SiGithub, color: "var(--fg)", bg: "var(--surface-2)", neutralText: true },
  "Postman": { icon: SiPostman, color: "#e05a24", bg: "rgba(255,108,55,0.12)" },
  "npm": { icon: SiNpm, color: "#CB3837", bg: "rgba(203,56,55,0.12)" },
  "yarn": { icon: SiYarn, color: "#2C8EBB", bg: "rgba(44,142,187,0.12)" },
  "Webpack": { icon: SiWebpack, color: "#2f7bb5", bg: "rgba(143,196,232,0.14)" },
  "ESLint": { icon: SiEslint, color: "#4B32C3", bg: "rgba(75,50,195,0.12)" },
  "Prettier": { icon: SiPrettier, color: "#c78a1a", bg: "rgba(247,185,62,0.14)", neutralText: true },
  "Vite": { icon: SiVite, color: "#646CFF", bg: "rgba(100,108,255,0.12)" },
  "Apollo Client": { icon: SiApollographql, color: "#5c4ba8", bg: "rgba(49,28,135,0.12)" },
  "TanStack Query": { icon: SiReactquery, color: "#e0334a", bg: "rgba(255,65,84,0.12)" },
  "Zod": { icon: SiZod, color: "#3E67B1", bg: "rgba(62,103,177,0.12)" },
  "Chart.js": { icon: SiChartdotjs, color: "#e0405f", bg: "rgba(255,99,132,0.12)" },
  "Cloudinary": { icon: SiCloudinary, color: "#3448C5", bg: "rgba(52,72,197,0.12)" },
  "Axios": { icon: SiAxios, color: "#5A29E4", bg: "rgba(90,41,228,0.12)" },
  "Shopify": { icon: SiShopify, color: "#5b8a2f", bg: "rgba(122,179,72,0.14)" },
};

interface Props {
  name: string;
  size?: "sm" | "md";
}

export default function TechBadge({ name, size = "sm" }: Props) {
  const meta = MAP[name];
  const fontSize = size === "md" ? "0.8rem" : "0.72rem";

  // Unmapped entries (RBAC, RAG, Zustand, Multer…) render as plain tags.
  if (!meta) {
    return (
      <span className="tag" style={{ fontSize }}>
        {name}
      </span>
    );
  }

  const { icon: Icon, color, bg, neutralText } = meta;
  const glyph = size === "md" ? "0.95em" : "0.85em";

  return (
    <span
      className="inline-flex max-w-full items-center gap-1.5 border px-2 py-1 font-medium transition-transform duration-150 hover:-translate-y-px"
      style={{
        color: neutralText ? "var(--fg-2)" : color,
        background: bg,
        borderColor: "var(--border)",
        fontSize,
      }}
    >
      <Icon
        aria-hidden="true"
        style={{ color, width: glyph, height: glyph, flexShrink: 0 }}
      />
      <span className="truncate">{name}</span>
    </span>
  );
}
