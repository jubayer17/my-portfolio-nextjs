"use client";

import { motion } from "framer-motion";

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right" | "scale" | "fade";
  once?: boolean;
}

const variants = {
  up:    { hidden: { opacity: 0, y: 28 },     visible: { opacity: 1, y: 0 } },
  left:  { hidden: { opacity: 0, x: -28 },    visible: { opacity: 1, x: 0 } },
  right: { hidden: { opacity: 0, x: 28 },     visible: { opacity: 1, x: 0 } },
  scale: { hidden: { opacity: 0, scale: 0.94 }, visible: { opacity: 1, scale: 1 } },
  fade:  { hidden: { opacity: 0 },             visible: { opacity: 1 } },
};

export default function AnimatedSection({
  children,
  className = "",
  delay = 0,
  direction = "up",
  once = true,
}: AnimatedSectionProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-60px" }}
      variants={variants[direction]}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
