"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Animates the numeric part of a label like "210+", "98.4%" or "4".
 * Prefix and suffix are preserved verbatim, so the markup stays honest
 * to whatever the data says.
 */
// [\s\S] rather than the /s flag — the tsconfig target predates dotAll.
const PARTS = /^(\D*?)([\d,]*\.?\d+)([\s\S]*)$/;

function easeOutExpo(t: number) {
  return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
}

interface Props {
  readonly value: string;
  readonly duration?: number;
  readonly className?: string;
  readonly style?: React.CSSProperties;
}

export default function CountUp({ value, duration = 1400, className, style }: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const match = PARTS.exec(value);

  const prefix = match?.[1] ?? "";
  const raw = match?.[2] ?? "";
  const suffix = match?.[3] ?? "";
  const target = raw ? Number(raw.replace(/,/g, "")) : NaN;
  const decimals = raw.includes(".") ? raw.split(".")[1].length : 0;
  const animatable = Number.isFinite(target);

  // Start at the final value so the pre-animation paint (and any
  // no-JS / reduced-motion visitor) still reads correctly.
  const [display, setDisplay] = useState(() => (animatable ? raw : value));

  useEffect(() => {
    const el = ref.current;
    if (!el || !animatable) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;
    let started = false;

    const format = (n: number) =>
      n.toLocaleString("en-US", {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      });

    const run = () => {
      const start = performance.now();
      const tick = (now: number) => {
        const t = Math.min((now - start) / duration, 1);
        setDisplay(format(target * easeOutExpo(t)));
        if (t < 1) frame = requestAnimationFrame(tick);
      };
      frame = requestAnimationFrame(tick);
    };

    const io = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting || started) return;
        started = true;
        io.disconnect();
        setDisplay(format(0));
        run();
      },
      { threshold: 0.4 }
    );

    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [target, decimals, duration, animatable]);

  if (!animatable) {
    return (
      <span ref={ref} className={className} style={style}>
        {value}
      </span>
    );
  }

  return (
    <span ref={ref} className={className} style={style}>
      {/* Screen readers get the settled value, not every intermediate frame. */}
      <span className="sr-only">{value}</span>
      <span aria-hidden="true" className="tabular-nums">
        {prefix}
        {display}
        {suffix}
      </span>
    </span>
  );
}
