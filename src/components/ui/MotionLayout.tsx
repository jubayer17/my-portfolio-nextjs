"use client";

import { useLayoutEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";

/** Horizontal bands the wipe is cut into. */
const BANDS = 6;

/** Route → the label that rides the wipe. */
function routeLabel(pathname: string) {
  const segment = pathname.split("/").filter(Boolean)[0];
  return segment ? segment.replace(/-/g, " ") : "home";
}

export default function MotionLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const pathname = usePathname();
  const ref = useRef<HTMLDivElement>(null);
  const wipeRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);
  const bandRefs = useRef<(HTMLDivElement | null)[]>([]);
  const first = useRef(true);

  useLayoutEffect(() => {
    const element = ref.current;
    if (!element) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      gsap.set(element, { clearProps: "all", autoAlpha: 1 });
      gsap.set(wipeRef.current, { autoAlpha: 0 });
      return;
    }

    if (first.current) {
      first.current = false;

      // The intro curtain owns the first paint — animating here too would
      // double-fade the page and fight IntroScreen's own tween.
      if (document.getElementById("intro-overlay")) return;

      // First paint with no intro: a plain rise. The wipe is a transition
      // *between* routes, and on a cold load there's nothing to transition from.
      const entry = gsap.context(() => {
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

      return () => entry.revert();
    }

    const bands = bandRefs.current.filter(Boolean) as HTMLDivElement[];

    // Transform + opacity only. The previous version animated `filter: blur()`,
    // which forces a full-page repaint every frame on a large DOM.
    const ctx = gsap.context(() => {
      // This effect runs after React commits the new route but *before* the
      // browser paints it, so covering here is invisible — the visitor's last
      // painted frame is still the old page. There's no click interception in
      // App Router, so the transition is enter-only by construction: the wipe
      // starts closed and peels off to reveal what's already underneath.
      gsap.set(wipeRef.current, { autoAlpha: 1 });
      gsap.set(bands, { xPercent: 0 });
      gsap.set(labelRef.current, { autoAlpha: 0, y: 12 });
      gsap.set(element, { autoAlpha: 0, y: 14 });

      const tl = gsap.timeline({
        onComplete: () => {
          gsap.set(wipeRef.current, { autoAlpha: 0 });
        },
      });

      tl.to(labelRef.current, { autoAlpha: 1, y: 0, duration: 0.16, ease: "power2.out" })
        .to(labelRef.current, { autoAlpha: 0, duration: 0.16, ease: "power2.in" }, 0.2)
        // Bands leave top-first, so the eye is led down the page it's uncovering.
        .to(
          bands,
          { xPercent: 106, duration: 0.6, ease: "expo.inOut", stagger: 0.045 },
          0.08
        )
        .to(
          element,
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.42,
            ease: "power3.out",
            overwrite: "auto",
            clearProps: "transform",
          },
          0.26
        );
    }, element);

    return () => ctx.revert();
  }, [pathname]);

  return (
    <>
      {/* ── Route wipe ──
          Above the navbar (z-50) and the scroll bar (z-60) so a change of
          route reads as the whole surface turning over, but under the intro
          curtain (z-9998) which outranks everything on first load. */}
      <div
        ref={wipeRef}
        className="pointer-events-none fixed inset-0 z-90 overflow-hidden opacity-0"
        aria-hidden="true"
      >
        {Array.from({ length: BANDS }, (_, i) => (
          <div
            key={i}
            ref={(el) => {
              bandRefs.current[i] = el;
            }}
            className="absolute left-0 w-full"
            style={{
              top: `${(i * 100) / BANDS}%`,
              // +1px absorbs sub-pixel rounding between adjacent bands.
              height: `calc(${100 / BANDS}% + 1px)`,
              background: "var(--bg)",
              // A leading edge rather than a flat wall — the accent hairline
              // is the only part of the wipe that's actually visible for long.
              boxShadow: "inset -1px 0 0 0 var(--accent-line)",
              willChange: "transform",
            }}
          />
        ))}

        <div className="absolute inset-0 flex items-center justify-center">
          <span
            ref={labelRef}
            className="font-mono text-[10px] font-bold uppercase tracking-[0.5em] opacity-0"
            style={{ color: "var(--fg-4)" }}
          >
            {routeLabel(pathname)}
          </span>
        </div>
      </div>

      <div ref={ref} id="page-content">
        {children}
      </div>
    </>
  );
}
