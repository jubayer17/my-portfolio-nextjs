"use client";

import React, {
  createContext, useCallback, useContext, useMemo, useSyncExternalStore,
} from "react";

interface ThemeContextType {
  darkMode: boolean;
  mounted: boolean;
  toggleDarkMode: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

/**
 * The <html> class list is the source of truth — the blocking script in
 * <head> sets it before first paint, so React reads it rather than
 * recomputing (which is what caused the light-theme flash).
 */
const listeners = new Set<() => void>();

function emit() {
  listeners.forEach((fn) => fn());
}

function subscribe(onChange: () => void) {
  listeners.add(onChange);

  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["class"],
  });

  // Follow the OS only while the visitor has made no explicit choice.
  const mq = window.matchMedia("(prefers-color-scheme: dark)");
  const onSystemChange = (e: MediaQueryListEvent) => {
    if (localStorage.getItem("theme")) return;
    applyTheme(e.matches);
  };
  mq.addEventListener("change", onSystemChange);

  return () => {
    listeners.delete(onChange);
    observer.disconnect();
    mq.removeEventListener("change", onSystemChange);
  };
}

const getSnapshot = () => document.documentElement.classList.contains("dark");
// The server can't know the visitor's theme; light is the document default.
const getServerSnapshot = () => false;

function applyTheme(dark: boolean) {
  const el = document.documentElement;
  el.classList.toggle("dark", dark);
  el.dataset.theme = dark ? "dark" : "light";
  emit();
}

export const ThemeProvider: React.FC<Readonly<{ children: React.ReactNode }>> = ({ children }) => {
  const darkMode = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const mounted = useSyncExternalStore(
    subscribe,
    () => true,
    () => false
  );

  const toggleDarkMode = useCallback(() => {
    const next = !document.documentElement.classList.contains("dark");
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {
      /* private mode — the theme just won't persist */
    }
    applyTheme(next);
  }, []);

  const value = useMemo(
    () => ({ darkMode, mounted, toggleDarkMode }),
    [darkMode, mounted, toggleDarkMode]
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};
