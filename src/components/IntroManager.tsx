"use client";

import dynamic from "next/dynamic";
import { useState, useEffect, useRef, useSyncExternalStore } from "react";
import gsap from "gsap";

const IntroScreen = dynamic(() => import("@/components/ui/IntroScreen"), {
  ssr: false,
  loading: () => <div className="fixed inset-0 z-9999" style={{ background: "#05080f" }} />,
});

/**
 * Whether the intro should play is a client-only fact read from the
 * environment, so it comes through useSyncExternalStore rather than a
 * setState-in-effect (which triggered a cascading render on every load).
 */
const noopSubscribe = () => () => {};

function getClientSnapshot() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return false;
  try {
    return sessionStorage.getItem("intro_seen") !== "1";
  } catch {
    // Private mode — never gate the site behind an intro we can't remember.
    return false;
  }
}

const getServerSnapshot = () => false;

export default function IntroManager() {
  const playIntro = useSyncExternalStore(noopSubscribe, getClientSnapshot, getServerSnapshot);
  const [dismissed, setDismissed] = useState(false);
  const coverRef = useRef<HTMLDivElement>(null);

  // Returning visitor: lift the plain cover straight away.
  useEffect(() => {
    if (playIntro || dismissed) return;

    const cover = coverRef.current;
    if (!cover) return;

    const tween = gsap.to(cover, {
      autoAlpha: 0,
      duration: 0.16,
      ease: "power1.out",
      onComplete: () => setDismissed(true),
    });

    return () => {
      tween.kill();
    };
  }, [playIntro, dismissed]);

  if (dismissed) return null;

  return (
    <>
      {/* Backdrop that prevents a flash while the intro chunk loads.
          Uses var(--bg) so light-theme visitors no longer get a black flash —
          the head script has already resolved the theme by this point. */}
      <div
        ref={coverRef}
        className="fixed inset-0 z-9998"
        style={{ background: "var(--bg)" }}
        aria-hidden="true"
      />

      {playIntro && (
        <IntroScreen
          onComplete={() => {
            try {
              sessionStorage.setItem("intro_seen", "1");
            } catch {
              /* ignore */
            }
            setDismissed(true);
          }}
        />
      )}
    </>
  );
}
