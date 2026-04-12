import {
  SiJavascript, SiTypescript, SiPython, SiCplusplus,
  SiReact, SiNextdotjs, SiRedux, SiHtml5, SiCss, SiTailwindcss,
  SiNodedotjs, SiNestjs, SiExpress, SiGraphql,
  SiPostgresql, SiMongodb, SiMysql, SiFirebase,
  SiDocker, SiKubernetes, SiVercel, SiPostman, SiGithubactions,
  SiAxios, SiClerk,
  SiGit, SiPrisma, SiTypeorm, SiApollographql, SiReactquery,
  SiFramer, SiVite, SiFigma, SiEslint, SiPrettier, SiZod,
  SiReactrouter, SiChartdotjs, SiCloudinary, SiRadixui,
  SiJsonwebtokens,
} from "react-icons/si";
import { FaAws } from "react-icons/fa6";
import type { IconType } from "react-icons";

interface BadgeMeta {
  icon: IconType;
  color: string;
  bg: string;
}

const MAP: Record<string, BadgeMeta> = {
  // Languages
  "JavaScript (ES6+)": { icon: SiJavascript,     color: "#F7DF1E", bg: "rgba(247,223,30,0.10)" },
  "TypeScript":        { icon: SiTypescript,      color: "#3178C6", bg: "rgba(49,120,198,0.12)" },
  "Python":            { icon: SiPython,          color: "#3776AB", bg: "rgba(55,118,171,0.12)" },
  "C++":               { icon: SiCplusplus,       color: "#00599C", bg: "rgba(0,89,156,0.12)"   },
  "C":                 { icon: SiCplusplus,       color: "#A8B9CC", bg: "rgba(168,185,204,0.10)"},

  // Frontend
  "React":             { icon: SiReact,           color: "#61DAFB", bg: "rgba(97,218,251,0.10)" },
  "Next.js":           { icon: SiNextdotjs,       color: "var(--fg)", bg: "var(--surface-2)"   },
  "Redux Toolkit":     { icon: SiRedux,           color: "#764ABC", bg: "rgba(118,74,188,0.12)" },
  "HTML5":             { icon: SiHtml5,           color: "#E34F26", bg: "rgba(227,79,38,0.10)"  },
  "CSS3":              { icon: SiCss,             color: "#1572B6", bg: "rgba(21,114,182,0.10)" },
  "Tailwind CSS":      { icon: SiTailwindcss,     color: "#06B6D4", bg: "rgba(6,182,212,0.10)"  },
  "Tailwind CSS v4":   { icon: SiTailwindcss,     color: "#06B6D4", bg: "rgba(6,182,212,0.10)"  },
  "Framer Motion":     { icon: SiFramer,          color: "#0055FF", bg: "rgba(0,85,255,0.10)"   },
  "React Router":      { icon: SiReactrouter,     color: "#CA4245", bg: "rgba(202,66,69,0.10)"  },
  "Radix UI":          { icon: SiRadixui,         color: "var(--fg)", bg: "var(--surface-2)"   },

  // Backend
  "Node.js":           { icon: SiNodedotjs,       color: "#339933", bg: "rgba(51,153,51,0.10)"  },
  "NestJS":            { icon: SiNestjs,          color: "#E0234E", bg: "rgba(224,35,78,0.10)"  },
  "Express.js":        { icon: SiExpress,         color: "var(--fg)", bg: "var(--surface-2)"   },
  "GraphQL":           { icon: SiGraphql,         color: "#E10098", bg: "rgba(225,0,152,0.10)"  },

  // Databases
  "PostgreSQL":        { icon: SiPostgresql,      color: "#4169E1", bg: "rgba(65,105,225,0.10)" },
  "MongoDB":           { icon: SiMongodb,         color: "#47A248", bg: "rgba(71,162,72,0.10)"  },
  "MySQL":             { icon: SiMysql,           color: "#4479A1", bg: "rgba(68,121,161,0.10)" },
  "Firebase (Firestore, Auth)": { icon: SiFirebase, color: "#FFCA28", bg: "rgba(255,202,40,0.10)" },

  // DevOps
  "Docker":            { icon: SiDocker,          color: "#2496ED", bg: "rgba(36,150,237,0.10)" },
  "Kubernetes":        { icon: SiKubernetes,      color: "#326CE5", bg: "rgba(50,108,229,0.10)" },
  "AWS (EC2, S3)":     { icon: FaAws,             color: "#FF9900", bg: "rgba(255,153,0,0.10)"  },
  "Vercel":            { icon: SiVercel,          color: "var(--fg)", bg: "var(--surface-2)"   },
  "Postman":           { icon: SiPostman,         color: "#FF6C37", bg: "rgba(255,108,55,0.10)" },
  "GitHub Actions (CI/CD)": { icon: SiGithubactions, color: "#2088FF", bg: "rgba(32,136,255,0.10)" },

  // Tools & Others
  "Git":               { icon: SiGit,             color: "#F05032", bg: "rgba(240,80,50,0.10)"  },
  "Prisma ORM":        { icon: SiPrisma,          color: "#5A67D8", bg: "rgba(90,103,216,0.10)" },
  "Prisma":            { icon: SiPrisma,          color: "#5A67D8", bg: "rgba(90,103,216,0.10)" },
  "TypeORM":           { icon: SiTypeorm,         color: "#E83524", bg: "rgba(232,53,36,0.10)"  },
  "Apollo Client":     { icon: SiApollographql,   color: "#311C87", bg: "rgba(49,28,135,0.12)"  },
  "TanStack Query":    { icon: SiReactquery,      color: "#FF4154", bg: "rgba(255,65,84,0.10)"  },
  "Zod":               { icon: SiZod,             color: "#3E67B1", bg: "rgba(62,103,177,0.10)" },
  "Framer":            { icon: SiFramer,          color: "#0055FF", bg: "rgba(0,85,255,0.10)"   },
  "Vite":              { icon: SiVite,            color: "#646CFF", bg: "rgba(100,108,255,0.10)"},
  "Figma":             { icon: SiFigma,           color: "#F24E1E", bg: "rgba(242,78,30,0.10)"  },
  "ESLint":            { icon: SiEslint,          color: "#4B32C3", bg: "rgba(75,50,195,0.10)"  },
  "Prettier":          { icon: SiPrettier,        color: "#F7B93E", bg: "rgba(247,185,62,0.10)" },
  "Chart.js":          { icon: SiChartdotjs,      color: "#FF6384", bg: "rgba(255,99,132,0.10)" },
  "Cloudinary":        { icon: SiCloudinary,      color: "#3448C5", bg: "rgba(52,72,197,0.10)"  },
  "JWT auth":          { icon: SiJsonwebtokens,   color: "#D63AFF", bg: "rgba(214,58,255,0.10)" },

  // Misc already in use
  "Axios":             { icon: SiAxios,           color: "#5A29E4", bg: "rgba(90,41,228,0.10)"  },
  "Clerk":             { icon: SiClerk,           color: "#6C47FF", bg: "rgba(108,71,255,0.10)" },
};

interface Props {
  name: string;
  size?: "sm" | "md";
}

export default function TechBadge({ name, size = "sm" }: Props) {
  const meta = MAP[name];

  if (!meta) {
    // Fallback: plain text tag
    return (
      <span
        className="tag"
        style={{ fontSize: size === "md" ? "0.75rem" : undefined }}
      >
        {name}
      </span>
    );
  }

  const { icon: Icon, color, bg } = meta;

  return (
    <span
      className="inline-flex items-center gap-1.5 border px-2 py-1 text-[0.72rem] font-medium transition-all duration-150 hover:scale-105"
      style={{
        color,
        background: bg,
        borderColor: "var(--border)",
        fontSize: size === "md" ? "0.8rem" : "0.72rem",
        borderRadius: 0,
      }}
    >
      <Icon
        style={{
          color,
          width: size === "md" ? "0.95em" : "0.85em",
          height: size === "md" ? "0.95em" : "0.85em",
          flexShrink: 0,
        }}
      />
      {name}
    </span>
  );
}
