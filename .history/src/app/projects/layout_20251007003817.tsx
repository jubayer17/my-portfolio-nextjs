"use client";

import React from 'react';
import { ThemeProvider, useTheme } from '@/components/providers/ThemeProvider';
import { Navbar } from '@/components';

interface ProjectLayoutContentProps {
  children: React.ReactNode;
}

function ProjectLayoutContent({ children }: ProjectLayoutContentProps) {
  const { darkMode, toggleDarkMode } = useTheme();

  const handleNavigate = (sectionId: string) => {
    // Navigate to main page with section
    window.location.href = `/#${sectionId}`;
  };

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 transition-colors duration-300">
      <Navbar
        activeSection=""
        scrollProgress={0}
        darkMode={darkMode}
        onNavigate={handleNavigate}
        onToggleDarkMode={toggleDarkMode}
      />
      <div className="pt-20">
        {children}
      </div>
    </div>
  );
}

interface ProjectLayoutProps {
  children: React.ReactNode;
}

export default function ProjectLayout({ children }: ProjectLayoutProps) {
  return (
    <ThemeProvider>
      <ProjectLayoutContent>{children}</ProjectLayoutContent>
    </ThemeProvider>
  );
}