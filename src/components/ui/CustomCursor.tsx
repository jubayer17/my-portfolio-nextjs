"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

const INTERACTIVE = "a, button, input, textarea, select, summary, [role='button'], [data-hover]";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!fine.matches || reduce.matches) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    // Only hide the native cursor once we know ours is actually running —
    // otherwise a failed chunk leaves the page with no pointer at all.
    const root = document.documentElement;
    root.classList.add("custom-cursor");

    gsap.set([dot, ring], { xPercent: -50, yPercent: -50, autoAlpha: 0 });

    const moveX = gsap.quickTo(dot, "x", { duration: 0.06, ease: "none" });
    const moveY = gsap.quickTo(dot, "y", { duration: 0.06, ease: "none" });
    const ringX = gsap.quickTo(ring, "x", { duration: 0.2, ease: "power3.out" });
    const ringY = gsap.quickTo(ring, "y", { duration: 0.2, ease: "power3.out" });

    let visible = false;
    let hovering = false;

    const onMove = (e: MouseEvent) => {
      moveX(e.clientX);
      moveY(e.clientY);
      ringX(e.clientX);
      ringY(e.clientY);

      if (!visible) {
        visible = true;
        gsap.to(dot, { autoAlpha: 1, duration: 0.18, overwrite: "auto" });
        // The ring rests translucent, so its resting state *is* a partial
        // autoAlpha — mixing that with a CSS opacity made it flash opaque.
        gsap.to(ring, { autoAlpha: hovering ? 0.7 : 0.35, duration: 0.18, overwrite: "auto" });
      }
    };

    const onOver = (e: MouseEvent) => {
      const next = !!(e.target as Element | null)?.closest?.(INTERACTIVE);
      if (next === hovering) return; // only tween on state change, not every pixel
      hovering = next;

      gsap.to(dot, { scale: next ? 1.7 : 1, duration: 0.18, overwrite: "auto" });
      gsap.to(ring, {
        scale: next ? 1.5 : 1,
        autoAlpha: visible ? (next ? 0.7 : 0.35) : 0,
        duration: 0.22,
        overwrite: "auto",
      });
    };

    const onDown = () => gsap.to(dot, { scale: 0.7, duration: 0.1, overwrite: "auto" });
    const onUp = () =>
      gsap.to(dot, { scale: hovering ? 1.7 : 1, duration: 0.12, overwrite: "auto" });
    const onLeave = () => {
      visible = false;
      gsap.to([dot, ring], { autoAlpha: 0, duration: 0.14, overwrite: "auto" });
    };

    document.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseover", onOver, { passive: true });
    document.addEventListener("mousedown", onDown);
    document.addEventListener("mouseup", onUp);
    document.addEventListener("mouseleave", onLeave);

    return () => {
      root.classList.remove("custom-cursor");
      gsap.killTweensOf([dot, ring]);
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("mouseup", onUp);
      document.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-99999 h-1.5 w-1.5 rounded-full opacity-0"
        style={{ background: "var(--cursor-color)", willChange: "transform" }}
      />
      <div
        ref={ringRef}
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-99998 h-7 w-7 rounded-full opacity-0"
        style={{ border: "1.5px solid var(--cursor-color)", willChange: "transform" }}
      />
    </>
  );
}
