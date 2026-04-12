"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface Props {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right" | "scale" | "fade";
  once?: boolean;
}

const V = {
  up: { hidden: { opacity: 0, y: 32 }, visible: { opacity: 1, y: 0 } },
  left: { hidden: { opacity: 0, x: -32 }, visible: { opacity: 1, x: 0 } },
  right: { hidden: { opacity: 0, x: 32 }, visible: { opacity: 1, x: 0 } },
  scale: { hidden: { opacity: 0, scale: 0.93 }, visible: { opacity: 1, scale: 1 } },
  fade: { hidden: { opacity: 0 }, visible: { opacity: 1 } },
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

    const fromVars = V[direction].hidden;
    const toVars = V[direction].visible;

    const context = gsap.context(() => {
      gsap.fromTo(
        element,
        {
          autoAlpha: fromVars.opacity,
          x: ("x" in fromVars ? fromVars.x : 0) ?? 0,
          y: ("y" in fromVars ? fromVars.y : 0) ?? 0,
          scale: ("scale" in fromVars ? fromVars.scale : 1) ?? 1,
        },
        {
          autoAlpha: toVars.opacity,
          x: ("x" in toVars ? toVars.x : 0) ?? 0,
          y: ("y" in toVars ? toVars.y : 0) ?? 0,
          scale: ("scale" in toVars ? toVars.scale : 1) ?? 1,
          duration: 0.7,
          delay,
          ease: "power3.out",
          overwrite: "auto",
          scrollTrigger: {
            trigger: element,
            start: "top 86%",
            once,
          },
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
