"use client";

import dynamic from "next/dynamic";
import { useState, useEffect, useRef } from "react";
import gsap from "gsap";

const DARK: React.CSSProperties = { background: "#0c0e1d" };

// Loading fallback while the chunk downloads — must match DARK so no flash
const IntroScreen = dynamic(() => import("@/components/ui/IntroScreen"), {
  ssr: false,
  loading: () => <div className="fixed inset-0 z-[9999]" style={DARK} />,
});

type State = "cover" | "intro" | "done";

export default function IntroManager() {
  const [state, setState] = useState<State>("cover");
  const coverRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const seen = sessionStorage.getItem("intro_seen");
    if (!seen) {
      setState("intro");
    } else {
      // Returning visitor — fade the cover out, then remove it
      if (coverRef.current) {
        gsap.to(coverRef.current, {
          autoAlpha: 0,
          duration: 0.22,
          ease: "power1.out",
          onComplete: () => setState("done"),
        });
      } else {
        setState("done");
      }
    }
  }, []);

  // Nothing to render once intro is finished
  if (state === "done") return null;

  // Always keep a dark cover in the DOM until the intro is fully loaded.
  // The cover (z-[9998]) sits below IntroScreen (z-[9999]) so there is
  // never a transparent frame between the two.
  return (
    <>
      {/* Persistent dark backdrop — prevents any flash while JS loads */}
      <div
        ref={coverRef}
        className="fixed inset-0 z-[9998]"
        style={DARK}
        aria-hidden="true"
      />

      {/* Intro screen — rendered on top once the chunk is ready */}
      {state === "intro" && (
        <IntroScreen
          onComplete={() => {
            sessionStorage.setItem("intro_seen", "1");
            setState("done");
          }}
        />
      )}
    </>
  );
}
