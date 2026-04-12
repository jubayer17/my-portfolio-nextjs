"use client";

import { motion, useReducedMotion } from "framer-motion";

const nodes = [
  { top: "9%", left: "7%", size: 5, delay: 0.0, color: "blue" },
  { top: "16%", left: "73%", size: 7, delay: 0.3, color: "purple" },
  { top: "28%", left: "54%", size: 4, delay: 0.6, color: "cyan" },
  { top: "42%", left: "16%", size: 6, delay: 0.9, color: "blue" },
  { top: "54%", left: "83%", size: 5, delay: 1.2, color: "purple" },
  { top: "64%", left: "61%", size: 7, delay: 1.5, color: "blue" },
  { top: "75%", left: "11%", size: 5, delay: 1.8, color: "cyan" },
  { top: "84%", left: "77%", size: 6, delay: 2.1, color: "purple" },
  { top: "22%", left: "34%", size: 4, delay: 0.5, color: "cyan" },
  { top: "70%", left: "41%", size: 4, delay: 1.0, color: "blue" },
] as const;

const codeFragments = [
  { text: "const build = async () =>", top: "11%", left: "4%", delay: 0.5 },
  { text: "interface Engineer<T>", top: "37%", left: "65%", delay: 1.2 },
  { text: "O(n log n)", top: "60%", left: "3%", delay: 2.0 },
  { text: "git push origin main", top: "78%", left: "54%", delay: 0.8 },
  { text: "docker-compose up", top: "24%", left: "46%", delay: 1.6 },
  { text: "SELECT * FROM projects", top: "50%", left: "70%", delay: 2.5 },
];

const nodeStyles = {
  blue: { bg: "rgba(96,165,250,0.22)", glow: "rgba(96,165,250,0.5)" },
  purple: { bg: "rgba(167,139,250,0.22)", glow: "rgba(167,139,250,0.5)" },
  cyan: { bg: "rgba(34,211,238,0.22)", glow: "rgba(34,211,238,0.5)" },
};

export default function TechBackgroundAnimation() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-3xl">
      {/* Ambient glow blobs */}
      <div
        className="glow-blob absolute -left-28 -top-28 h-[480px] w-[480px] rounded-full"
        style={{ background: "rgba(96,165,250,0.06)" }}
      />
      <div
        className="glow-blob absolute -bottom-28 -right-28 h-[560px] w-[560px] rounded-full"
        style={{ background: "rgba(167,139,250,0.06)", animationDelay: "2s" }}
      />
      <div
        className="glow-blob absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{ background: "rgba(34,211,238,0.04)", animationDelay: "4s" }}
      />

      {/* Dot grid pattern */}
      <div className="dot-grid absolute inset-0 opacity-60" />

      {/* SVG connection lines */}
      <svg
        className="absolute inset-0 h-full w-full"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        {/* Web of connections between nodes */}
        <g stroke="var(--accent)" strokeOpacity="0.22" strokeWidth="0.4" fill="none">
          <line x1="7%" y1="9%" x2="34%" y2="22%" />
          <line x1="34%" y1="22%" x2="54%" y2="28%" />
          <line x1="54%" y1="28%" x2="73%" y2="16%" />
          <line x1="16%" y1="42%" x2="34%" y2="22%" />
          <line x1="16%" y1="42%" x2="11%" y2="75%" />
          <line x1="41%" y1="70%" x2="61%" y2="64%" />
          <line x1="61%" y1="64%" x2="83%" y2="54%" />
          <line x1="11%" y1="75%" x2="41%" y2="70%" />
          <line x1="77%" y1="84%" x2="83%" y2="54%" />
          <line x1="54%" y1="28%" x2="41%" y2="70%" />
        </g>
      </svg>

      {/* Animated floating nodes */}
      {nodes.map((node, idx) => {
        const style = nodeStyles[node.color];
        return (
          <motion.div
            key={idx}
            className="absolute rounded-full"
            style={{
              top: node.top,
              left: node.left,
              width: node.size * 2.5,
              height: node.size * 2.5,
              background: style.bg,
              boxShadow: `0 0 ${node.size * 2}px ${style.glow}`,
            }}
            animate={
              reduceMotion
                ? undefined
                : {
                  y: [0, -10, 0, 7, 0],
                  x: [0, 5, 0, -4, 0],
                  opacity: [0.5, 0.95, 0.6, 0.9, 0.5],
                }
            }
            transition={
              reduceMotion
                ? undefined
                : {
                  duration: 9 + idx * 1.3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: node.delay,
                }
            }
          />
        );
      })}

      {/* Floating code fragments */}
      {!reduceMotion &&
        codeFragments.map((frag, idx) => (
          <motion.span
            key={idx}
            className="absolute hidden font-mono text-[10px] text-slate-400/30 dark:text-slate-500/25 xl:block"
            style={{ top: frag.top, left: frag.left }}
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.65, 0.35, 0.65, 0], y: [0, -10, 0] }}
            transition={{
              duration: 9,
              repeat: Infinity,
              delay: frag.delay + 1.5,
              ease: "easeInOut",
            }}
            aria-hidden="true"
          >
            {frag.text}
          </motion.span>
        ))}
    </div>
  );
}
