"use client";

import { useLayoutEffect } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function GsapEffects() {
  const pathname = usePathname();

  useLayoutEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const root = document.querySelector<HTMLElement>("main#content");
    if (!root) return;

    if (reduceMotion) {
      gsap.set("[data-gsap]", { clearProps: "all", autoAlpha: 1 });
      return;
    }

    const ctx = gsap.context(() => {
      // ── Scroll-reveal (data-gsap="reveal") ──────────────────────────────
      // Key rule: never pre-hide elements that are already in the viewport.
      // fromTo immediately sets the "from" state, which would blank out
      // above-the-fold content before ScrollTrigger gets a chance to fire.
      gsap.utils.toArray<HTMLElement>("[data-gsap='reveal']", root).forEach((el) => {
        const y = Number(el.dataset.gsapY ?? 28);
        const inView = el.getBoundingClientRect().top < window.innerHeight * 0.92;

        if (inView) {
          // Already visible — animate gently from current position, no pre-hide
          gsap.from(el, { y: y * 0.4, autoAlpha: 0, duration: 0.45, ease: "power3.out", overwrite: "auto" });
        } else {
          // Below the fold — safe to pre-hide and reveal on scroll
          gsap.fromTo(
            el,
            { autoAlpha: 0, y },
            {
              autoAlpha: 1, y: 0,
              duration: 0.5,
              ease: "power3.out",
              overwrite: "auto",
              scrollTrigger: { trigger: el, start: "top 90%", once: true },
            }
          );
        }
      });

      // ── Stagger children (data-gsap="stagger") ──────────────────────────
      gsap.utils.toArray<HTMLElement>("[data-gsap='stagger']", root).forEach((container) => {
        const children = Array.from(container.children) as HTMLElement[];
        if (!children.length) return;

        const inView = container.getBoundingClientRect().top < window.innerHeight * 0.92;

        if (inView) {
          gsap.from(children, { autoAlpha: 0, y: 18, duration: 0.4, ease: "power3.out", stagger: 0.055, overwrite: "auto" });
        } else {
          gsap.fromTo(
            children,
            { autoAlpha: 0, y: 22 },
            {
              autoAlpha: 1, y: 0,
              duration: 0.45,
              ease: "power3.out",
              stagger: 0.055,
              overwrite: "auto",
              scrollTrigger: { trigger: container, start: "top 90%", once: true },
            }
          );
        }
      });

      // ── Parallax numbers (data-gsap="parallax") ─────────────────────────
      gsap.utils.toArray<HTMLElement>("[data-gsap='parallax']", root).forEach((el) => {
        const speed = Number(el.dataset.gsapSpeed ?? 10);
        gsap.to(el, {
          yPercent: speed,
          ease: "none",
          scrollTrigger: {
            trigger: el.closest("section") ?? el,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.5,
          },
        });
      });

      ScrollTrigger.refresh();
    }, document.body);

    return () => { ctx.revert(); };
  }, [pathname]);

  return null;
}
