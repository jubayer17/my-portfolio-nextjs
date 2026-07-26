"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface Props {
  readonly children: React.ReactNode;
  readonly className?: string;
  readonly delay?: number;
  readonly direction?: "up" | "left" | "right" | "scale" | "fade";
  readonly once?: boolean;
}

const FROM: Record<NonNullable<Props["direction"]>, gsap.TweenVars> = {
  up: { y: 24 },
  left: { x: -24 },
  right: { x: 24 },
  scale: { scale: 0.96 },
  fade: {},
};

export default function AnimatedSection({
  children,
  className = "",
  delay = 0,
  direction = "up",
  once = true,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const element = ref.current;
    if (!element) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      gsap.set(element, { clearProps: "all", autoAlpha: 1 });
      return;
    }

    const context = gsap.context(() => {
      gsap.fromTo(
        element,
        { autoAlpha: 0, ...FROM[direction] },
        {
          autoAlpha: 1,
          x: 0,
          y: 0,
          scale: 1,
          // Was 0.7s, which read as sluggish on a page of stacked sections.
          duration: 0.45,
          delay,
          ease: "power3.out",
          overwrite: "auto",
          clearProps: "transform",
          scrollTrigger: { trigger: element, start: "top 88%", once },
        }
      );
    }, element);

    return () => context.revert();
  }, [delay, direction, once]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
