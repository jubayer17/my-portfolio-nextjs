"use client";

import { LazyMotion, domAnimation, m, useScroll, useSpring, useReducedMotion } from "framer-motion";

/**
 * Slim reading-progress bar pinned above the header.
 * Driven by a spring off scrollYProgress, so it eases rather than
 * snapping frame-for-frame with the wheel.
 */
export default function ScrollProgress() {
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 260,
    damping: 34,
    restDelta: 0.001,
  });

  return (
    <LazyMotion features={domAnimation} strict>
      <m.div
        aria-hidden="true"
        className="pointer-events-none fixed inset-x-0 top-0 z-[60] h-[3px] origin-left"
        style={{
          scaleX: reduceMotion ? scrollYProgress : scaleX,
          background:
            "linear-gradient(90deg, var(--accent) 0%, var(--cyan) 55%, var(--accent) 100%)",
          boxShadow: "0 0 10px var(--accent-glow)",
        }}
      />
    </LazyMotion>
  );
}
