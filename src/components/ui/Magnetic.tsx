"use client";

import { useEffect, useRef } from "react";

interface Props {
  readonly children: React.ReactNode;
  /** How far the element may drift toward the cursor, in px. */
  readonly strength?: number;
  readonly className?: string;
}

/**
 * Pulls its child slightly toward the cursor on hover.
 * Writes transforms directly in a rAF — no React state — so a 120 Hz
 * pointer can't trigger a render per event.
 */
export default function Magnetic({ children, strength = 8, className }: Props) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const fine = window.matchMedia("(hover: hover) and (pointer: fine)");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!fine.matches || reduce.matches) return;

    let frame = 0;
    let tx = 0;
    let ty = 0;

    const apply = () => {
      frame = 0;
      el.style.transform = `translate3d(${tx}px, ${ty}px, 0)`;
    };

    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(apply);
    };

    const onMove = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      // Offset from centre, normalised to [-1, 1] and scaled.
      tx = ((e.clientX - (r.left + r.width / 2)) / (r.width / 2)) * strength;
      ty = ((e.clientY - (r.top + r.height / 2)) / (r.height / 2)) * strength;
      schedule();
    };

    const onLeave = () => {
      tx = 0;
      ty = 0;
      schedule();
    };

    el.addEventListener("pointermove", onMove);
    el.addEventListener("pointerleave", onLeave);

    return () => {
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerleave", onLeave);
      cancelAnimationFrame(frame);
      el.style.transform = "";
    };
  }, [strength]);

  return (
    <span
      ref={ref}
      className={className}
      style={{ display: "inline-flex", transition: "transform 0.35s var(--ease-out-quint)" }}
    >
      {children}
    </span>
  );
}
