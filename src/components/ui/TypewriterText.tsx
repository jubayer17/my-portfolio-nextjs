"use client";

import { useEffect, useState } from "react";

interface TypewriterTextProps {
  readonly texts: string[];
  readonly className?: string;
  readonly speed?: number;
  readonly deleteSpeed?: number;
  readonly pauseDuration?: number;
}

export default function TypewriterText({
  texts,
  className = "",
  speed = 62,
  deleteSpeed = 28,
  pauseDuration = 1900,
}: TypewriterTextProps) {
  const [index, setIndex] = useState(0);
  const [display, setDisplay] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [active, setActive] = useState(true);

  // Pause the loop while the tab is hidden so it isn't burning timers.
  useEffect(() => {
    const onChange = () => setActive(document.visibilityState === "visible");
    document.addEventListener("visibilitychange", onChange);
    return () => document.removeEventListener("visibilitychange", onChange);
  }, []);

  useEffect(() => {
    if (!active || texts.length === 0) return;

    const current = texts[index % texts.length];
    const atEnd = display.length >= current.length;
    const atStart = display.length === 0;

    let delay: number;
    if (deleting) delay = atStart ? 0 : deleteSpeed;
    else delay = atEnd ? pauseDuration : speed;

    // Every transition happens inside the timer callback. Advancing state
    // straight from the effect body caused a synchronous cascading render
    // on each character.
    const timer = setTimeout(() => {
      if (deleting) {
        if (atStart) {
          setIndex((prev) => (prev + 1) % texts.length);
          setDeleting(false);
        } else {
          setDisplay(current.slice(0, display.length - 1));
        }
      } else if (atEnd) {
        setDeleting(true);
      } else {
        setDisplay(current.slice(0, display.length + 1));
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [display, deleting, index, texts, speed, deleteSpeed, pauseDuration, active]);

  return (
    <span className={className}>
      <span className="sr-only">{texts.join(". ")}</span>
      <span aria-hidden="true">{display}</span>
      <span
        aria-hidden="true"
        className="cursor-blink ml-[2px] inline-block h-[0.85em] w-[2px] translate-y-[1px] align-middle"
        style={{ background: "var(--accent)" }}
      />
    </span>
  );
}
