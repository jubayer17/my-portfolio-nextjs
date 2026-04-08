"use client";

import { useEffect, useState } from "react";

interface TypewriterTextProps {
  texts: string[];
  className?: string;
  speed?: number;
  deleteSpeed?: number;
  pauseDuration?: number;
}

export default function TypewriterText({
  texts,
  className = "",
  speed = 75,
  deleteSpeed = 38,
  pauseDuration = 2200,
}: TypewriterTextProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [phase, setPhase] = useState<"typing" | "pausing" | "deleting">("typing");

  useEffect(() => {
    const current = texts[currentIndex];

    if (phase === "typing") {
      if (displayText.length < current.length) {
        const t = setTimeout(
          () => setDisplayText(current.slice(0, displayText.length + 1)),
          speed
        );
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setPhase("pausing"), pauseDuration);
        return () => clearTimeout(t);
      }
    }

    if (phase === "pausing") {
      const t = setTimeout(() => setPhase("deleting"), 80);
      return () => clearTimeout(t);
    }

    if (phase === "deleting") {
      if (displayText.length > 0) {
        const t = setTimeout(
          () => setDisplayText(displayText.slice(0, -1)),
          deleteSpeed
        );
        return () => clearTimeout(t);
      } else {
        setCurrentIndex((prev) => (prev + 1) % texts.length);
        setPhase("typing");
      }
    }
  }, [displayText, phase, currentIndex, texts, speed, deleteSpeed, pauseDuration]);

  return (
    <span className={className}>
      {displayText}
      <span
        className="cursor-blink ml-[2px] inline-block h-[0.85em] w-[2px] translate-y-[1px] rounded-sm bg-current align-middle"
        aria-hidden="true"
      />
    </span>
  );
}
