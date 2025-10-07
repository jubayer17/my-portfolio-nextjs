"use client";

import React from 'react';
import { ThemeProvider } from '@/components/providers/ThemeProvider';
import { Navbar } from '@/components';

interface ProjectLayoutProps {
  children: React.ReactNode;
}

export default function ProjectLayout({ children }: ProjectLayoutProps) {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-slate-900 transition-colors duration-300">
        <Navbar
          activeSection=""
          scrollProgress={0}
          darkMode={false}
          onNavigate={() => {}}
          onToggleDarkMode={() => {}}
          isProjectPage={true}
        />
        {children}
      </div>
    </ThemeProvider>
  );
}