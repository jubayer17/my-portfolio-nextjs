"use client";

import { useRef } from "react";
import {
  m,
  useMotionTemplate,
  useMotionValue,
  useSpring,
  useTransform,
  useReducedMotion,
} from "framer-motion";

const SPRING = { stiffness: 250, damping: 26, mass: 0.55 } as const;

type Props = Readonly<{
  children: React.ReactNode;
  className?: string;
  /** Peak lean in degrees, reached at the corners. */
  max?: number;
}>;

/**
 * Leans a card toward the pointer in 3D and drags a specular sheen across it.
 *
 * The tilt sits on this wrapper rather than on `.card` itself: that class
 * already animates its own hover lift, and one transform would simply
 * overwrite the other. Nested, the two compose — the card rises while the
 * frame around it turns.
 *
 * `.card` sets `overflow: hidden`, which forces `transform-style: flat` on
 * everything inside it, so there's no point handing children a translateZ.
 * Depth here comes from the turn plus the cover's own hover zoom.
 */
export default function TiltCard({ children, className = "", max = 7 }: Props) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);

  // Pointer position over the card, normalised to -0.5 … 0.5 from the centre.
  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const lit = useMotionValue(0);

  const rotateX = useSpring(useTransform(py, [-0.5, 0.5], [max, -max]), SPRING);
  const rotateY = useSpring(useTransform(px, [-0.5, 0.5], [-max, max]), SPRING);

  // The sheen tracks the pointer, so the highlight reads as a light source the
  // card turns under rather than a gradient sliding about on top of it.
  const glareX = useTransform(px, [-0.5, 0.5], ["16%", "84%"]);
  const glareY = useTransform(py, [-0.5, 0.5], ["16%", "84%"]);
  const glare = useMotionTemplate`radial-gradient(460px circle at ${glareX} ${glareY}, rgba(255,255,255,0.13), transparent 62%)`;
  const glareOpacity = useSpring(lit, SPRING);

  const settle = () => {
    px.set(0);
    py.set(0);
    lit.set(0);
  };

  if (reduce) return <div className={`relative ${className}`}>{children}</div>;

  return (
    <m.div
      ref={ref}
      className={`relative ${className}`}
      style={{
        rotateX,
        rotateY,
        transformPerspective: 1100,
        transformStyle: "preserve-3d",
      }}
      onPointerMove={(e) => {
        if (e.pointerType !== "mouse") return;
        const r = ref.current?.getBoundingClientRect();
        if (!r) return;
        px.set((e.clientX - r.left) / r.width - 0.5);
        py.set((e.clientY - r.top) / r.height - 0.5);
        lit.set(1);
      }}
      onPointerLeave={settle}
      // A pointer that leaves the window mid-card never fires pointerleave.
      onPointerCancel={settle}
    >
      {children}

      <m.span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-20 mix-blend-soft-light"
        style={{ opacity: glareOpacity, background: glare }}
      />
    </m.div>
  );
}
