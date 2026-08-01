"use client";

import { useCallback, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";

gsap.registerPlugin(ScrambleTextPlugin);

const GLYPHS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ#%&/<>*";

/**
 * Churns an element's text through random glyphs and settles it back into
 * place, left to right — a decode, played on demand.
 *
 * The tween writes straight to the DOM node, so the element must render
 * `text` as its only child and never change it. Every project title and
 * tagline here is a constant, so React leaves those text nodes alone.
 */
export function useScramble<T extends HTMLElement = HTMLSpanElement>(
  text: string,
  enabled = true
) {
  const ref = useRef<T>(null);
  const tween = useRef<gsap.core.Tween | null>(null);

  // A decode left running past unmount would write to a detached node.
  useEffect(() => {
    const current = tween;
    return () => {
      current.current?.kill();
    };
  }, []);

  const play = useCallback(() => {
    const el = ref.current;
    if (!el || !enabled) return;

    tween.current?.kill();
    tween.current = gsap.to(el, {
      // Long titles shouldn't take proportionally longer to read.
      duration: Math.min(0.3 + text.length * 0.02, 0.7),
      ease: "none",
      scrambleText: { text, chars: GLYPHS, speed: 0.75, revealDelay: 0.05 },
    });
  }, [text, enabled]);

  /** Snap back to the real text — the pointer left mid-decode. */
  const reset = useCallback(() => {
    tween.current?.kill();
    if (ref.current) ref.current.textContent = text;
  }, [text]);

  return { ref, play, reset };
}
