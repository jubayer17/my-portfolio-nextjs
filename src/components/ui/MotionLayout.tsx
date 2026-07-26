"use client";

import { useLayoutEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";

export default function MotionLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const pathname = usePathname();
  const ref = useRef<HTMLDivElement>(null);
  const first = useRef(true);

  useLayoutEffect(() => {
    const element = ref.current;
    if (!element) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      gsap.set(element, { clearProps: "all", autoAlpha: 1 });
      return;
    }

    // The intro curtain owns the first paint — animating here too would
    // double-fade the page and fight IntroScreen's own tween.
    if (first.current) {
      first.current = false;
      if (document.getElementById("intro-overlay")) return;
    }

    // Transform + opacity only. The previous version animated `filter: blur()`,
    // which forces a full-page repaint every frame on a large DOM.
    const ctx = gsap.context(() => {
      gsap.fromTo(
        element,
        { autoAlpha: 0, y: 10 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.26,
          ease: "power2.out",
          overwrite: "auto",
          clearProps: "transform",
        }
      );
    }, element);

    return () => ctx.revert();
  }, [pathname]);

  return (
    <div ref={ref} id="page-content">
      {children}
    </div>
  );
}
