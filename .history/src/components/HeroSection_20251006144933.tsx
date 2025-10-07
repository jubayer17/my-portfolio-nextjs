"use client";

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
            Hi, I&apos;m <span className="highlight">Jubayer Ahmed</span> 👋
          </h1>
          <h2 className="hero-subtitle">
            <i className="fab fa-react"></i>
            <span className="typing-animation">Full Stack Web Developer</span>
          </h2>
          <p className="hero-description animate-text">
            ⚙️ Expert in Next.js, React, Node.js & MongoDB — building scalable,
            high-performance web apps ✨ <br />
            🧠 100+ LeetCode solved 🦾
            <br />
            ⚔️ 500+ Codeforces challenges conquered 🔥
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
            Available for exciting projects
          </div>
          <div className="hero-buttons">
            <a
              href="#contact"
              className="btn btn-primary hover-lift magnetic"
              onClick={(e) => {
                e.preventDefault();
                onNavigate("contact");
              }}
            >
              <i className="fas fa-paper-plane"></i>
              Get In Touch
            </a>
            <a
              href="/assets/maincv.pdf"
              className="btn btn-secondary hover-lift magnetic"
              id="download-resume"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fas fa-download"></i>
              Download Resume
            </a>
          </div>
          <SocialLinks />
          <div className="scroll-cue my-10">
            <span>Scroll to explore</span>
            <div className="scroll-arrow">
              <i className="fas fa-chevron-down"></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
