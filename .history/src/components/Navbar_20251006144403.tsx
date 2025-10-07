"use client";

import Image from "next/image";
import { useState } from "react";

interface NavbarProps {
  activeSection: string;
  scrollProgress: number;
  darkMode: boolean;
  onNavigate: (sectionId: string) => void;
  onToggleDarkMode: () => void;
}

const navigationItems = [
  { id: "home", icon: "fas fa-home", label: "Home" },
  { id: "about", icon: "fas fa-user", label: "About" },
  { id: "skills", icon: "fas fa-tools", label: "Skills" },
  { id: "projects", icon: "fas fa-folder-open", label: "Projects" },
  { id: "contact", icon: "fas fa-envelope", label: "Contact" },
];

export default function Navbar({
  activeSection,
  scrollProgress,
  darkMode,
  onNavigate,
  onToggleDarkMode,
}: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavigation = (sectionId: string) => {
    onNavigate(sectionId);
    setMobileMenuOpen(false);
  };

  return (
    <nav
      className={`navbar ${scrollProgress > 5 ? "scrolled" : ""}`}
      id="navbar"
    >
      <div className="nav-container">
        <div className="nav-logo">
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavigation("home");
            }}
            className="hover-scale magnetic"
          >
            <Image
              className="img-icon"
              src="/assets/pc-icon.png"
              alt="Logo"
              width={50}
              height={50}
            />
          </a>
        </div>

        <ul
          className={`nav-menu ${mobileMenuOpen ? "active" : ""}`}
          id="nav-menu"
        >
          {navigationItems.map((item) => (
            <li key={item.id} className="nav-item">
              <a
                href={`#${item.id}`}
                className={`nav-link hover-lift ${
                  activeSection === item.id ? "active" : ""
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavigation(item.id);
                }}
              >
                <i className={item.icon}></i>
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div
          className={`nav-toggle hover-scale ${
            mobileMenuOpen ? "active" : ""
          }`}
          id="mobile-menu"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>

        <button
          className="theme-toggle hover-scale magnetic"
          id="theme-toggle"
          aria-label="Toggle dark mode"
          onClick={onToggleDarkMode}
        >
          <i className={`fas fa-${darkMode ? "sun" : "moon"}`}></i>
        </button>
      </div>
    </nav>
  );
}
