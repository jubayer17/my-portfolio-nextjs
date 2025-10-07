"use client";

import { codeParticleIcons, floatingIcons } from "../../data";

export default function TechBackgroundAnimation() {
  return (
    <div className="tech-bg-animation">
      {/* Floating Code Particles */}
      <div className="code-particles">
        {codeParticleIcons.map((icon, index) => (
          <i key={index} className={`${icon} code-particle`}></i>
        ))}
      </div>

      {/* Geometric Grid */}
      <div className="geometric-grid">
        <div className="grid-line grid-line-1"></div>
        <div className="grid-line grid-line-2"></div>
        <div className="grid-line grid-line-3"></div>
        <div className="grid-dot grid-dot-1"></div>
        <div className="grid-dot grid-dot-2"></div>
        <div className="grid-dot grid-dot-3"></div>
        <div className="grid-dot grid-dot-4"></div>
      </div>

      {/* Tech Icons */}
      <div className="floating-icons">
        {floatingIcons.map((icon, index) => (
          <i
            key={index}
            className={`${icon} tech-icon tech-icon-${index + 1}`}
          ></i>
        ))}
      </div>
    </div>
  );
}
