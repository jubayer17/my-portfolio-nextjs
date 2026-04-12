"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function CustomCursor() {
  const dotRef  = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const ready   = useRef(false);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const dot  = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    ready.current = true;
    gsap.set([dot, ring], { xPercent: -50, yPercent: -50, autoAlpha: 0 });

    let visible = false;

    const moveDot = gsap.quickTo(dot, "x", { duration: 0.08, ease: "none" });
    const moveY   = gsap.quickTo(dot, "y", { duration: 0.08, ease: "none" });

    // Ring lags behind the dot with spring-like follow
    const ringX  = gsap.quickTo(ring, "x", { duration: 0.22, ease: "power2.out" });
    const ringY  = gsap.quickTo(ring, "y", { duration: 0.22, ease: "power2.out" });

    const onMove = (e: MouseEvent) => {
      moveDot(e.clientX);
      moveY(e.clientY);
      ringX(e.clientX);
      ringY(e.clientY);

      if (!visible) {
        visible = true;
        gsap.to([dot, ring], { autoAlpha: 1, duration: 0.2 });
      }
    };

    const onOver = (e: MouseEvent) => {
      const hovering = !!(e.target as Element).closest(
        "a, button, input, textarea, select, [data-hover]"
      );
      if (hovering) {
        gsap.to(dot,  { scale: 1.6, duration: 0.15 });
        gsap.to(ring, { scale: 1.5, opacity: 0.6, duration: 0.2 });
      } else {
        gsap.to(dot,  { scale: 1, duration: 0.15 });
        gsap.to(ring, { scale: 1, opacity: 0.32, duration: 0.2 });
      }
    };

    const onDown = () => gsap.to(dot, { scale: 0.7, duration: 0.1 });
    const onUp   = () => gsap.to(dot, { scale: 1,   duration: 0.1 });
    const onOut  = () => {
      visible = false;
      gsap.to([dot, ring], { autoAlpha: 0, duration: 0.15 });
    };

    document.addEventListener("mousemove",  onMove,  { passive: true });
    document.addEventListener("mouseover",  onOver);
    document.addEventListener("mousedown",  onDown);
    document.addEventListener("mouseup",    onUp);
    document.addEventListener("mouseleave", onOut);

    return () => {
      document.removeEventListener("mousemove",  onMove);
      document.removeEventListener("mouseover",  onOver);
      document.removeEventListener("mousedown",  onDown);
      document.removeEventListener("mouseup",    onUp);
      document.removeEventListener("mouseleave", onOut);
    };
  }, []);

  return (
    <>
      {/* Dot */}
      <div
        ref={dotRef}
        className="pointer-events-none fixed left-0 top-0 z-[99999] h-[6px] w-[6px] rounded-full"
        style={{ background: "var(--cursor-color)" }}
      />
      {/* Ring */}
      <div
        ref={ringRef}
        className="pointer-events-none fixed left-0 top-0 z-[99998] h-[28px] w-[28px] rounded-full"
        style={{ border: "1.5px solid var(--cursor-color)", opacity: 0.32 }}
      />
    </>
  );
}
