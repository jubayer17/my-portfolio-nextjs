"use client";

import { useLayoutEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";

export default function MotionLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const element = ref.current;
    if (!element) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      gsap.set(element, { clearProps: "all", autoAlpha: 1 });
      return;
    }

    // Snappy page-entry — fast enough to feel instant, subtle enough to feel smooth
    const ctx = gsap.context(() => {
      gsap.fromTo(
        element,
        { autoAlpha: 0, y: 14, filter: "blur(3px)" },
        {
          autoAlpha: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 0.28,
          ease: "power2.out",
          overwrite: "auto",
          clearProps: "filter,transform",
        }
      );
    }, element);

    return () => ctx.revert();
  }, [pathname]);

  return <div ref={ref} id="page-content">{children}</div>;
}
