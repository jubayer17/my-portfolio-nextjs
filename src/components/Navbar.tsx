"use client";

import { Download, Menu, Moon, Sun, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, LazyMotion, domAnimation, m } from "framer-motion";

import { resume } from "@/data/resume";
import { useTheme } from "@/components/providers/ThemeProvider";

const NAV = [
  { label: "Home", href: "/" },
  { label: "Work", href: "/work" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

const EASE = [0.22, 1, 0.36, 1] as const;

export default function Navbar() {
  const pathname = usePathname();
  const { darkMode, mounted, toggleDarkMode } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);

  // Menu state is derived from the route it was opened on, so navigating
  // closes it for free — no route-change effect calling setState.
  const [openedOn, setOpenedOn] = useState<string | null>(null);
  const open = openedOn === pathname;
  const setOpen = (next: boolean) => setOpenedOn(next ? pathname : null);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", fn, { passive: true });
    fn();
    return () => window.removeEventListener("scroll", fn);
  }, []);

  // Close on outside click or Escape
  useEffect(() => {
    if (!open) return;

    const onPointerDown = (e: PointerEvent) => {
      if (panelRef.current && !panelRef.current.contains(e.target as Node)) setOpenedOn(null);
    };
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenedOn(null);
    };

    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <LazyMotion features={domAnimation} strict>
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
        style={{ background: "var(--accent)" }}
      >
        Skip to content
      </a>

      <header
        className="sticky top-0 z-50 transition-all duration-300"
        style={{
          borderBottom: `1px solid ${scrolled ? "var(--border)" : "transparent"}`,
          backgroundColor: scrolled
            ? "color-mix(in srgb, var(--bg) 82%, transparent)"
            : "transparent",
          backdropFilter: scrolled ? "blur(16px)" : undefined,
          WebkitBackdropFilter: scrolled ? "blur(16px)" : undefined,
        }}
      >
        <div className="shell flex h-16 items-center justify-between">

          {/* ── Logo ── */}
          <Link href="/" className="group flex min-w-0 items-center gap-2.5">
            <span
              className="inline-flex h-8 w-8 shrink-0 items-center justify-center text-[11px] font-bold text-white transition-transform duration-200 group-hover:scale-105"
              style={{ background: "var(--accent)" }}
              aria-hidden="true"
            >
              JA
            </span>
            <span
              className="font-outfit truncate text-sm font-bold tracking-tight"
              style={{ color: "var(--fg)" }}
            >
              {resume.person.name}
            </span>
          </Link>

          {/* ── Desktop nav ── */}
          <nav className="hidden items-center md:flex" aria-label="Primary">
            {NAV.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className="relative px-4 py-5 text-sm font-medium transition-colors duration-200 hover:text-[var(--fg)]"
                  style={{ color: active ? "var(--fg)" : "var(--fg-3)" }}
                >
                  {item.label}
                  {active && (
                    <m.span
                      layoutId="nav-underline"
                      className="absolute inset-x-3 bottom-0 h-[2px]"
                      style={{ background: "var(--accent)" }}
                      transition={{ type: "spring", stiffness: 480, damping: 34 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* ── Actions ── */}
          <div className="flex items-center gap-2">
            <a
              href={resume.person.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost hidden h-8 px-3 text-xs md:inline-flex"
            >
              <Download className="h-3.5 w-3.5" aria-hidden="true" />
              Resume
            </a>

            <button
              type="button"
              onClick={toggleDarkMode}
              aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
              className="btn btn-ghost h-8 w-8 px-0"
            >
              {/* Render nothing until mounted so SSR markup can't mismatch */}
              {mounted && (
                <AnimatePresence mode="wait" initial={false}>
                  <m.span
                    key={darkMode ? "sun" : "moon"}
                    initial={{ rotate: -40, opacity: 0, scale: 0.75 }}
                    animate={{ rotate: 0, opacity: 1, scale: 1 }}
                    exit={{ rotate: 40, opacity: 0, scale: 0.75 }}
                    transition={{ duration: 0.18, ease: EASE }}
                    className="flex items-center"
                  >
                    {darkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
                  </m.span>
                </AnimatePresence>
              )}
            </button>

            {/* ── Mobile menu ── */}
            <div ref={panelRef} className="relative md:hidden">
              <button
                type="button"
                onClick={() => setOpen(!open)}
                aria-label={open ? "Close navigation menu" : "Open navigation menu"}
                aria-expanded={open}
                className="btn btn-ghost h-8 w-8 px-0"
              >
                <AnimatePresence mode="wait" initial={false}>
                  <m.span
                    key={open ? "x" : "menu"}
                    initial={{ rotate: -40, opacity: 0, scale: 0.75 }}
                    animate={{ rotate: 0, opacity: 1, scale: 1 }}
                    exit={{ rotate: 40, opacity: 0, scale: 0.75 }}
                    transition={{ duration: 0.16, ease: EASE }}
                    className="flex items-center"
                  >
                    {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
                  </m.span>
                </AnimatePresence>
              </button>

              <AnimatePresence>
                {open && (
                  <m.div
                    initial={{ opacity: 0, y: -8, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -8, scale: 0.97 }}
                    transition={{ duration: 0.16, ease: EASE }}
                    className="absolute right-0 top-[calc(100%+10px)] w-56 origin-top-right overflow-hidden"
                    style={{
                      background: "var(--surface)",
                      border: "1px solid var(--border)",
                      boxShadow: "var(--shadow-lg)",
                    }}
                  >
                    <nav className="p-1.5" aria-label="Mobile">
                      {NAV.map((item) => {
                        const active = isActive(item.href);
                        return (
                          <Link
                            key={item.href}
                            href={item.href}
                            aria-current={active ? "page" : undefined}
                            className="flex items-center gap-2.5 px-3 py-2.5 text-sm font-medium transition-colors duration-150"
                            style={{
                              color: active ? "var(--accent-text)" : "var(--fg-2)",
                              background: active ? "var(--accent-soft)" : "transparent",
                            }}
                          >
                            <span
                              className="h-1.5 w-1.5 shrink-0 rounded-full transition-opacity duration-150"
                              style={{
                                background: "var(--accent)",
                                opacity: active ? 1 : 0,
                              }}
                              aria-hidden="true"
                            />
                            {item.label}
                          </Link>
                        );
                      })}
                    </nav>

                    <div className="border-t p-1.5" style={{ borderColor: "var(--border)" }}>
                      <a
                        href={resume.person.resumeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2.5 px-3 py-2.5 text-sm font-medium transition-colors duration-150"
                        style={{ color: "var(--fg-2)" }}
                      >
                        <Download className="h-4 w-4" aria-hidden="true" />
                        Download Resume
                      </a>
                    </div>
                  </m.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </header>
    </LazyMotion>
  );
}
