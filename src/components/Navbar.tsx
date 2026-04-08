"use client";

import { Dialog } from "@headlessui/react";
import { Download, Menu, Moon, Sun, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { resume } from "@/data/resume";
import { useTheme } from "@/components/providers/ThemeProvider";

type NavItem = { label: string; href: string };

export default function Navbar() {
  const pathname   = usePathname();
  const { darkMode, toggleDarkMode } = useTheme();
  const [open, setOpen]       = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = useMemo<NavItem[]>(
    () => [
      { label: "Home",     href: "/"         },
      { label: "Work",     href: "/work"     },
      { label: "Projects", href: "/projects" },
      { label: "Contact",  href: "/contact"  },
    ],
    []
  );

  return (
    <>
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-accent-500 focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-white"
      >
        Skip to content
      </a>

      <header
        ref={headerRef}
        className={[
          "sticky top-0 z-50 transition-all duration-300",
          scrolled
            ? "border-b border-slate-200/60 bg-white/85 backdrop-blur-2xl shadow-sm dark:border-white/[0.06] dark:bg-ink-800/85"
            : "border-b border-transparent bg-transparent",
        ].join(" ")}
      >
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">

          {/* Logo */}
          <Link href="/" className="group flex items-center gap-2.5">
            <span className="relative inline-flex h-8 w-8 items-center justify-center rounded-xl overflow-hidden">
              <span className="absolute inset-0 bg-gradient-to-br from-accent-500 to-violet-500 opacity-90" />
              <span className="relative text-[11px] font-bold text-white tracking-tight">JA</span>
            </span>
            <span className="text-sm font-semibold text-slate-900 dark:text-white tracking-tight">
              {resume.person.name}
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center md:flex" aria-label="Primary">
            {navItems.map((item) => {
              const active =
                item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={[
                    "relative px-4 py-5 text-sm font-medium transition-colors duration-200",
                    active
                      ? "text-slate-900 dark:text-white"
                      : "text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-100",
                  ].join(" ")}
                  aria-current={active ? "page" : undefined}
                >
                  {item.label}
                  {active && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-x-4 bottom-0 h-[2px] rounded-full"
                      style={{
                        background: "linear-gradient(90deg, #6366f1, #8b5cf6, #22d3ee)",
                      }}
                      transition={{ type: "spring", stiffness: 420, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <a
              href="/assets/Resume_of_Jubayer_Ahmed.pdf"
              className="hidden items-center gap-1.5 rounded-lg border border-slate-200 px-3 py-1.5 text-xs font-semibold text-slate-700 transition hover:border-accent-300 hover:bg-accent-50 hover:text-accent-600 dark:border-white/[0.08] dark:text-slate-300 dark:hover:border-accent-500/25 dark:hover:bg-accent-500/10 dark:hover:text-accent-400 md:inline-flex"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Download className="h-3.5 w-3.5" />
              Resume
            </a>

            <button
              type="button"
              onClick={toggleDarkMode}
              className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 text-slate-600 transition hover:border-accent-300 hover:bg-accent-50 hover:text-accent-600 dark:border-white/[0.08] dark:text-slate-400 dark:hover:border-accent-500/25 dark:hover:bg-accent-500/10 dark:hover:text-accent-400"
              aria-label={darkMode ? "Switch to light" : "Switch to dark"}
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={darkMode ? "sun" : "moon"}
                  initial={{ rotate: -45, opacity: 0, scale: 0.8 }}
                  animate={{ rotate: 0,   opacity: 1, scale: 1   }}
                  exit={{   rotate: 45,   opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.2 }}
                  className="flex items-center"
                >
                  {darkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
                </motion.span>
              </AnimatePresence>
            </button>

            <button
              type="button"
              onClick={() => setOpen(true)}
              className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 text-slate-600 transition hover:border-accent-300 hover:bg-accent-50 dark:border-white/[0.08] dark:text-slate-400 dark:hover:border-accent-500/25 dark:hover:bg-accent-500/10 md:hidden"
              aria-label="Open menu"
            >
              <Menu className="h-4 w-4" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <Dialog open={open} onClose={setOpen} className="relative z-[60] md:hidden">
        <AnimatePresence>
          {open && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/50 backdrop-blur-sm"
                aria-hidden="true"
              />
              <div className="fixed inset-0 flex items-start justify-end p-3 pt-14">
                <motion.div
                  initial={{ opacity: 0, y: -10, scale: 0.96 }}
                  animate={{ opacity: 1,  y: 0,   scale: 1    }}
                  exit={{   opacity: 0,   y: -10,  scale: 0.96 }}
                  transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Dialog.Panel className="w-64 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl dark:border-white/[0.08] dark:bg-ink-700">
                    <div className="flex items-center justify-between border-b border-slate-100 px-4 py-3 dark:border-white/[0.06]">
                      <Dialog.Title className="text-sm font-semibold text-slate-900 dark:text-white">
                        Navigation
                      </Dialog.Title>
                      <button
                        onClick={() => setOpen(false)}
                        className="flex h-7 w-7 items-center justify-center rounded-lg text-slate-500 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-white/5"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    </div>

                    <div className="p-2">
                      {navItems.map((item) => {
                        const active =
                          item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
                        return (
                          <Link
                            key={item.href}
                            href={item.href}
                            onClick={() => setOpen(false)}
                            className={[
                              "flex items-center gap-2 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors",
                              active
                                ? "bg-accent-50 text-accent-600 dark:bg-accent-500/10 dark:text-accent-400"
                                : "text-slate-600 hover:bg-slate-50 dark:text-slate-400 dark:hover:bg-white/5",
                            ].join(" ")}
                          >
                            {active && (
                              <span className="h-1.5 w-1.5 rounded-full bg-accent-500" />
                            )}
                            {item.label}
                          </Link>
                        );
                      })}
                      <div className="mt-2 border-t border-slate-100 pt-2 dark:border-white/[0.06]">
                        <a
                          href="/assets/Resume_of_Jubayer_Ahmed.pdf"
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={() => setOpen(false)}
                          className="flex items-center gap-2 rounded-xl px-3 py-2.5 text-sm font-medium text-slate-600 hover:bg-slate-50 dark:text-slate-400 dark:hover:bg-white/5"
                        >
                          <Download className="h-4 w-4" />
                          Download Resume
                        </a>
                      </div>
                    </div>
                  </Dialog.Panel>
                </motion.div>
              </div>
            </>
          )}
        </AnimatePresence>
      </Dialog>
    </>
  );
}
