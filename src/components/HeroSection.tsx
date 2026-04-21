"use client";

import { heroContent, heroButtons } from "../data";
import TechBackgroundAnimation from "./ui/TechBackgroundAnimation";
import SocialLinks from "./ui/SocialLinks";

interface HeroSectionProps {
  onNavigate: (sectionId: string) => void;
}

export default function HeroSection({ onNavigate }: HeroSectionProps) {
  return (
    <section id="home" className="hero">
      <div className="parallax-bg"></div>

      <TechBackgroundAnimation />

      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title animate-text">
            Hi, I&apos;m <span className="highlight">{heroContent.name}</span>{" "}
            👋
          </h1>
          <h2 className="hero-subtitle">
            <i className="fab fa-react"></i>
            <span className="typing-animation">{heroContent.title}</span>
          </h2>
          <p className="hero-description animate-text">
            {heroContent.description} <br />
            {heroContent.achievements.map((achievement, index) => (
              <span key={index}>
                {achievement}
                {index < heroContent.achievements.length - 1 && <br />}
              </span>
            ))}
          </p>
          <div className="hero-badge availability-badge pulse-icon hover-glow">
            <i
              className="fas fa-circle"
              style={{
                color: "#10b981",
                fontSize: "0.7rem",
                marginRight: "10px",
              }}
            ></i>
            {heroContent.availability}
          </div>
          <div className="hero-buttons">
            <a
              href={`#${heroButtons.primary.target}`}
              className="btn btn-primary hover-lift magnetic"
              onClick={(e) => {
                e.preventDefault();
                onNavigate(heroButtons.primary.target!);
              }}
            >
              <i className={heroButtons.primary.icon}></i>
              {heroButtons.primary.text}
            </a>
            <a
              href={heroButtons.secondary.href}
              className="btn btn-secondary hover-lift magnetic"
              id="download-resume"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className={heroButtons.secondary.icon}></i>
              {heroButtons.secondary.text}
            </a>
          </div>
          <SocialLinks />
          <div className="scroll-cue my-10">
            <span>{heroContent.scrollCue}</span>
            <div className="scroll-arrow">
              <i className="fas fa-chevron-down"></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
