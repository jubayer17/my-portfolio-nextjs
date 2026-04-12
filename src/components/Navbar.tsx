"use client";

import { Dialog } from "@headlessui/react";
import { Download, Menu, Moon, Sun, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { resume } from "@/data/resume";
import { useTheme } from "@/components/providers/ThemeProvider";

const NAV = [
  { label: "Home", href: "/" },
  { label: "Work", href: "/work" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const { darkMode, toggleDarkMode } = useTheme();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", fn, { passive: true });
    fn();
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <>
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:rounded-lg focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
        style={{ background: "var(--accent)" }}
      >
        Skip to content
      </a>

      <header
        className={[
          "sticky top-0 z-50 transition-all duration-300",
          scrolled
            ? "border-b backdrop-blur-2xl"
            : "border-b border-transparent bg-transparent",
        ].join(" ")}
        style={
          scrolled
            ? {
              borderColor: "var(--border)",
              backgroundColor: "color-mix(in srgb, var(--bg) 80%, transparent)",
            }
            : {}
        }
      >
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 md:px-6">

          {/* ── Logo ── */}
          <Link href="/" className="group flex items-center gap-2.5">
            <span
              className="relative inline-flex h-8 w-8 items-center justify-center rounded-xl text-[11px] font-black text-white overflow-hidden"
              style={{
                background: "var(--accent)",
              }}
            >
              JA
            </span>
            <span
              className="font-outfit text-sm font-bold tracking-tight"
              style={{ color: "var(--fg)" }}
            >
              {resume.person.name}
            </span>
          </Link>

          {/* ── Desktop nav ── */}
          <nav className="hidden items-center md:flex" aria-label="Primary">
            {NAV.map((item) => {
              const active =
                item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className="relative px-4 py-5 text-sm font-medium transition-colors duration-200"
                  style={{ color: active ? "var(--fg)" : "var(--fg-3)" }}
                  onMouseEnter={(e) =>
                    !active && ((e.currentTarget.style.color = "var(--fg-2)"))
                  }
                  onMouseLeave={(e) =>
                    !active && ((e.currentTarget.style.color = "var(--fg-3)"))
                  }
                >
                  {item.label}
                  {active && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-x-4 bottom-0 h-[2px] rounded-full"
                      style={{
                        background: "var(--accent)",
                      }}
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* ── Actions ── */}
          <div className="flex items-center gap-2">
            <a
              href="https://drive.google.com/file/d/1s0EK09EbHgSxA3riuC0QMWzyA32wNedC/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost hidden h-8 px-3 text-xs md:inline-flex"
            >
              <Download className="h-3.5 w-3.5" />
              Resume
            </a>

            <button
              type="button"
              onClick={toggleDarkMode}
              aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
              className="btn btn-ghost h-8 w-8 px-0 rounded-lg"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={darkMode ? "sun" : "moon"}
                  initial={{ rotate: -45, opacity: 0, scale: 0.7 }}
                  animate={{ rotate: 0, opacity: 1, scale: 1 }}
                  exit={{ rotate: 45, opacity: 0, scale: 0.7 }}
                  transition={{ duration: 0.2 }}
                  className="flex items-center"
                >
                  {darkMode
                    ? <Sun className="h-4 w-4" />
                    : <Moon className="h-4 w-4" />}
                </motion.span>
              </AnimatePresence>
            </button>

            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Open navigation menu"
              className="btn btn-ghost h-8 w-8 px-0 rounded-lg md:hidden"
            >
              <Menu className="h-4 w-4" />
            </button>
          </div>
        </div>
      </header>

      {/* ── Mobile drawer ── */}
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
              <div className="fixed inset-0 flex items-start justify-end p-4 pt-[68px]">
                <motion.div
                  initial={{ opacity: 0, scale: 0.96, y: -8 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96, y: -8 }}
                  transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Dialog.Panel
                    className="w-[min(240px,85vw)] overflow-hidden rounded-2xl shadow-xl"
                    style={{
                      background: "var(--surface)",
                      border: "1px solid var(--border)",
                    }}
                  >
                    <div
                      className="flex items-center justify-between border-b px-4 py-3"
                      style={{ borderColor: "var(--border)" }}
                    >
                      <Dialog.Title
                        className="text-sm font-semibold"
                        style={{ color: "var(--fg)" }}
                      >
                        Navigation
                      </Dialog.Title>
                      <button
                        onClick={() => setOpen(false)}
                        className="flex h-7 w-7 items-center justify-center rounded-lg transition hover:opacity-70"
                        style={{ color: "var(--fg-3)" }}
                      >
                        <X className="h-4 w-4" />
                      </button>
                    </div>

                    <div className="p-2">
                      {NAV.map((item) => {
                        const active =
                          item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
                        return (
                          <Link
                            key={item.href}
                            href={item.href}
                            onClick={() => setOpen(false)}
                            className="flex items-center gap-2.5 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors"
                            style={{
                              color: active ? "var(--accent-text)" : "var(--fg-2)",
                              background: active ? "var(--accent-soft)" : "transparent",
                            }}
                          >
                            {active && (
                              <span
                                className="h-1.5 w-1.5 rounded-full"
                                style={{ background: "var(--accent)" }}
                              />
                            )}
                            {item.label}
                          </Link>
                        );
                      })}
                      <div
                        className="mt-2 border-t pt-2"
                        style={{ borderColor: "var(--border)" }}
                      >
                        <a
                          href="https://drive.google.com/file/d/1s0EK09EbHgSxA3riuC0QMWzyA32wNedC/view?usp=sharing"
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={() => setOpen(false)}
                          className="flex items-center gap-2 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors"
                          style={{ color: "var(--fg-2)" }}
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
