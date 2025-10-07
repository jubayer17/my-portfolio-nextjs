"use client";

import { skillsData } from "../data";
import SkillCategory from "./ui/SkillCategory";

export default function SkillsSection() {
  return (
    <section id="skills" className="skills animate-on-scroll">
      <div className="container">
        <h2 className="section-title animate-on-scroll-scale">
          <i className="fas fa-tools"></i>
          Skills & Technologies
        </h2>
        <div className="skills-grid">
          {skillsData.map((category, index) => (
            <SkillCategory
              key={index}
              title={category.title}
              icon={category.icon}
              skills={category.skills}
              animationClass={category.animationClass}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
