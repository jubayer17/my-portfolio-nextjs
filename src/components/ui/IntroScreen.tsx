"use client";

import { useEffect, useRef, useCallback } from "react";
import gsap from "gsap";

const WORDS = [
  { text: "\u09b8\u09cd\u09ac\u09be\u0997\u09a4\u09ae", dir: "ltr" },
  { text: "\u3088\u3046\u3053\u305d",                    dir: "ltr" },
  { text: "Bienvenue",                                    dir: "ltr" },
  { text: "\u6b22\u8fce",                                dir: "ltr" },
  { text: "Bienvenido",                                   dir: "ltr" },
  { text: "Willkommen",                                   dir: "ltr" },
  { text: "\ud658\uc601\ud569\ub2c8\ub2e4",              dir: "ltr" },
  { text: "\u0623\u0647\u0644\u0627\u064b",              dir: "rtl" },
  { text: "Bem-vindo",                                    dir: "ltr" },
  { text: "Welcome",                                      dir: "ltr" },
] as const;

const TOTAL   = WORDS.length;
const HOLD_MS = 78;
const IN_DUR  = 0.05;
const OUT_DUR = 0.038;

export default function IntroScreen({ onComplete }: { onComplete: () => void }) {
  const overlayRef  = useRef<HTMLDivElement>(null);
  const wordRef     = useRef<HTMLSpanElement>(null);
  const topLineRef  = useRef<HTMLDivElement>(null);
  const botLineRef  = useRef<HTMLDivElement>(null);
  const ringRef     = useRef<HTMLDivElement>(null);
  const orb1Ref     = useRef<HTMLDivElement>(null);
  const orb2Ref     = useRef<HTMLDivElement>(null);
  const orb3Ref     = useRef<HTMLDivElement>(null);
  const skipRef     = useRef<HTMLButtonElement>(null);
  const barRef      = useRef<HTMLDivElement>(null);
  const counterRef  = useRef<HTMLSpanElement>(null);
  const timersRef   = useRef<number[]>([]);
  const exitCalled  = useRef(false);

  const addTimer    = (id: number) => { timersRef.current.push(id); };
  const clearTimers = () => {
    timersRef.current.forEach((id) => window.clearTimeout(id));
    timersRef.current = [];
  };

  const runExit = useCallback(() => {
    if (exitCalled.current) return;
    exitCalled.current = true;
    clearTimers();

    // Stop ambient orb loops
    gsap.killTweensOf([orb1Ref.current, orb2Ref.current, orb3Ref.current, ringRef.current]);

    const tl = gsap.timeline();

    // Fade out all overlay content
    tl.to(
      [wordRef.current, topLineRef.current, botLineRef.current,
       counterRef.current, skipRef.current, ringRef.current],
      { autoAlpha: 0, duration: 0.22, ease: "power2.in", stagger: 0.012 }
    );

    // ── Iris close: dark overlay shrinks to a dot at center ──
    // This reveals the page content through the shrinking circle
    tl.to(
      overlayRef.current,
      {
        clipPath: "circle(0% at 50% 50%)",
        duration: 0.72,
        ease: "power3.inOut",
        onStart() {
          // Set page elements up for their entrance animations
          const header = document.querySelector("header") as HTMLElement | null;
          const pageContent = document.getElementById("page-content");

          if (header) {
            gsap.set(header, { visibility: "visible", y: -60, autoAlpha: 0 });
            gsap.to(header, { y: 0, autoAlpha: 1, duration: 0.6, delay: 0.28, ease: "power3.out" });
          }
          if (pageContent) {
            gsap.set(pageContent, { visibility: "visible", y: 55, autoAlpha: 0, filter: "blur(6px)" });
            gsap.to(pageContent, {
              y: 0, autoAlpha: 1, filter: "blur(0px)",
              duration: 0.72, delay: 0.34, ease: "power3.out",
              onComplete,
            });
          }
        },
      },
      "-=0.08"
    );
  }, [onComplete]);

  const showWord = useCallback((idx: number) => {
    if (exitCalled.current) return;

    const { text, dir } = WORDS[idx];
    const isLast = idx === TOTAL - 1;

    if (wordRef.current) {
      wordRef.current.textContent = text;
      (wordRef.current as HTMLElement).dir = dir;
      wordRef.current.style.color = isLast ? "#ddd6fe" : "#ffffff";
    }

    // Intensify ring glow on last word
    if (isLast && ringRef.current) {
      gsap.to(ringRef.current, {
        borderColor: "rgba(167,139,250,0.28)",
        boxShadow: "0 0 40px rgba(139,92,246,0.15), inset 0 0 40px rgba(139,92,246,0.08)",
        duration: 0.4,
        ease: "power2.out",
      });
    }

    if (counterRef.current) {
      counterRef.current.textContent =
        `${String(idx + 1).padStart(2, "0")} / ${String(TOTAL).padStart(2, "0")}`;
    }

    if (barRef.current) {
      barRef.current.style.width = `${((idx + 1) / TOTAL) * 100}%`;
    }

    const tl = gsap.timeline();

    // Word slams up from below via clip-path
    tl.fromTo(
      wordRef.current,
      { clipPath: "inset(110% 0% 0% 0%)" },
      { clipPath: "inset(0% 0% 0% 0%)", duration: IN_DUR, ease: "power3.out" }
    );

    if (isLast) {
      tl.call(() => { addTimer(window.setTimeout(runExit, 520)); });
    } else {
      tl.to(wordRef.current, {
        clipPath: "inset(0% 0% 110% 0%)",
        duration: OUT_DUR,
        ease: "power3.in",
        delay: HOLD_MS / 1000,
      });
      tl.call(() => showWord(idx + 1));
    }
  }, [runExit]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      onComplete();
      return;
    }

    // Hide page until intro completes
    const header = document.querySelector("header") as HTMLElement | null;
    const pageContent = document.getElementById("page-content");
    if (header) header.style.visibility = "hidden";
    if (pageContent) {
      gsap.killTweensOf(pageContent);
      pageContent.style.visibility = "hidden";
      pageContent.style.opacity = "0";
    }

    // ── Initial GSAP states ──
    gsap.set(overlayRef.current,  { clipPath: "circle(120% at 50% 50%)" });
    gsap.set(wordRef.current,     { clipPath: "inset(110% 0% 0% 0%)", autoAlpha: 1 });
    gsap.set(skipRef.current,     { autoAlpha: 0 });
    gsap.set(topLineRef.current,  { scaleX: 0, transformOrigin: "left center", autoAlpha: 1 });
    gsap.set(botLineRef.current,  { scaleX: 0, transformOrigin: "right center", autoAlpha: 1 });
    gsap.set(counterRef.current,  { autoAlpha: 0 });
    gsap.set(ringRef.current,     { autoAlpha: 0, scale: 0.88 });

    // ── Orb ambient animations (repeat forever) ──
    gsap.to(orb1Ref.current, {
      x: 60, y: -40, scale: 1.18,
      duration: 7, ease: "sine.inOut", repeat: -1, yoyo: true,
    });
    gsap.to(orb2Ref.current, {
      x: -50, y: 35, scale: 1.12,
      duration: 9, ease: "sine.inOut", repeat: -1, yoyo: true, delay: 1.5,
    });
    gsap.to(orb3Ref.current, {
      x: 30, y: 50, scale: 0.9,
      duration: 11, ease: "sine.inOut", repeat: -1, yoyo: true, delay: 3,
    });

    // ── Rotate the thin ring slowly ──
    gsap.to(ringRef.current, {
      rotation: 360, duration: 22, ease: "none", repeat: -1, transformOrigin: "50% 50%",
    });

    const t = window.setTimeout(() => {
      // Lines slide in from opposite edges
      gsap.to(topLineRef.current, { scaleX: 1, duration: 0.6, ease: "power3.out" });
      gsap.to(botLineRef.current, { scaleX: 1, duration: 0.6, ease: "power3.out", delay: 0.07 });

      // Ring fades in and scales to normal
      gsap.to(ringRef.current, { autoAlpha: 1, scale: 1, duration: 0.8, ease: "power2.out", delay: 0.1 });

      // Counter appears
      gsap.to(counterRef.current, { autoAlpha: 1, duration: 0.4, delay: 0.25 });

      // Start word cycling
      showWord(0);

      // Skip button fades in after a beat
      gsap.to(skipRef.current, { autoAlpha: 1, duration: 0.4, delay: 0.9 });
    }, 100);

    addTimer(t);
    return () => { clearTimers(); };
  }, [showWord, onComplete]);

  return (
    <>
      {/* Keyframes for scan line */}
      <style>{`
        @keyframes scan {
          0%   { transform: translateY(-100%); opacity: 0; }
          10%  { opacity: 1; }
          90%  { opacity: 1; }
          100% { transform: translateY(100vh); opacity: 0; }
        }
      `}</style>

      <div
        id="intro-overlay"
        ref={overlayRef}
        className="fixed inset-0 z-[9999] overflow-hidden"
        style={{ background: "#05080f", clipPath: "circle(120% at 50% 50%)" }}
        aria-hidden="true"
      >
        {/* ── Animated ambient orbs ── */}
        <div
          ref={orb1Ref}
          className="pointer-events-none absolute"
          style={{
            top: "-10%", left: "-8%",
            width: "55vw", height: "55vw",
            maxWidth: "560px", maxHeight: "560px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(109,40,217,0.22) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
        <div
          ref={orb2Ref}
          className="pointer-events-none absolute"
          style={{
            bottom: "-8%", right: "-6%",
            width: "45vw", height: "45vw",
            maxWidth: "460px", maxHeight: "460px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(6,182,212,0.18) 0%, transparent 70%)",
            filter: "blur(55px)",
          }}
        />
        <div
          ref={orb3Ref}
          className="pointer-events-none absolute"
          style={{
            top: "30%", left: "55%",
            width: "30vw", height: "30vw",
            maxWidth: "320px", maxHeight: "320px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(79,70,229,0.12) 0%, transparent 70%)",
            filter: "blur(70px)",
          }}
        />

        {/* ── Film-grain noise ── */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            zIndex: 2,
            opacity: 0.045,
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.78' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
            backgroundSize: "190px 190px",
          }}
        />

        {/* ── Edge vignette ── */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            zIndex: 2,
            background: "radial-gradient(ellipse 80% 80% at 50% 50%, transparent 35%, rgba(3,4,10,0.75) 100%)",
          }}
        />

        {/* ── Slow scan line ── */}
        <div
          className="pointer-events-none absolute left-0 right-0"
          style={{
            zIndex: 3,
            height: "1px",
            background: "linear-gradient(90deg, transparent, rgba(139,92,246,0.12), rgba(34,211,238,0.08), transparent)",
            animation: "scan 8s ease-in-out infinite",
          }}
        />

        {/* ── Monogram — top left ── */}
        <div
          className="absolute left-7 top-6 select-none font-mono text-[9px] uppercase tracking-[0.38em]"
          style={{ zIndex: 10, color: "rgba(255,255,255,0.07)" }}
        >
          JA · 2026
        </div>

        {/* ── Rotating thin ring behind the word ── */}
        <div
          ref={ringRef}
          className="pointer-events-none absolute"
          style={{
            zIndex: 5,
            top: "50%", left: "50%",
            width: "clamp(260px, 38vw, 420px)",
            height: "clamp(260px, 38vw, 420px)",
            marginTop: "calc(clamp(260px, 38vw, 420px) / -2)",
            marginLeft: "calc(clamp(260px, 38vw, 420px) / -2)",
            borderRadius: "50%",
            border: "1px solid rgba(139,92,246,0.1)",
            boxShadow: "0 0 20px rgba(139,92,246,0.05), inset 0 0 20px rgba(139,92,246,0.03)",
          }}
        />

        {/* ── Centre stage ── */}
        <div
          className="absolute inset-0 flex flex-col items-center justify-center"
          style={{ zIndex: 10 }}
        >
          {/* Top accent line — slides in from left */}
          <div
            ref={topLineRef}
            style={{
              width: "clamp(80px, 14vw, 160px)",
              height: "1px",
              marginBottom: "28px",
              background: "linear-gradient(90deg, rgba(139,92,246,0.9) 0%, rgba(34,211,238,0.6) 60%, transparent 100%)",
            }}
          />

          {/* The word */}
          <div style={{ overflow: "hidden", lineHeight: 1 }}>
            <span
              ref={wordRef}
              className="block select-none text-center font-outfit font-black will-change-transform"
              style={{
                fontSize: "clamp(2.8rem, 9vw, 7rem)",
                letterSpacing: "-0.025em",
                lineHeight: 1,
              }}
            />
          </div>

          {/* Bottom accent line — slides in from right */}
          <div
            ref={botLineRef}
            style={{
              width: "clamp(80px, 14vw, 160px)",
              height: "1px",
              marginTop: "28px",
              background: "linear-gradient(270deg, rgba(139,92,246,0.9) 0%, rgba(34,211,238,0.6) 60%, transparent 100%)",
            }}
          />
        </div>

        {/* ── Counter — bottom left ── */}
        <div className="absolute bottom-8 left-8" style={{ zIndex: 10 }}>
          <span
            ref={counterRef}
            className="font-mono tabular-nums text-[10px] tracking-[0.3em]"
            style={{ color: "rgba(255,255,255,0.13)" }}
          />
        </div>

        {/* ── Progress bar — bottom edge ── */}
        <div
          className="absolute bottom-0 left-0 right-0"
          style={{ zIndex: 10, height: "1px", background: "rgba(255,255,255,0.05)" }}
        >
          <div
            ref={barRef}
            style={{
              height: "100%",
              width: "0%",
              background: "linear-gradient(90deg, #7c3aed, #22d3ee)",
              boxShadow: "0 0 8px rgba(139,92,246,0.8)",
              transition: `width ${(IN_DUR + HOLD_MS / 1000 + OUT_DUR) * 0.5}s linear`,
            }}
          />
        </div>

        {/* ── Skip — bottom right ── */}
        <button
          ref={skipRef}
          onClick={runExit}
          className="absolute bottom-6 right-8 cursor-pointer font-mono text-[10px] uppercase tracking-[0.32em] transition-opacity hover:opacity-60"
          style={{ zIndex: 20, color: "rgba(255,255,255,0.11)" }}
        >
          skip →
        </button>
      </div>
    </>
  );
}
