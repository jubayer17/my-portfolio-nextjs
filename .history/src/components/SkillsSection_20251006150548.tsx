"use client";

import { skillsData } from "../data";
import SkillCategory from "./ui/SkillCategory";

export default function SkillsSection() {
  // Debug logging to ensure data is being imported correctly
  console.log("SkillsSection - skillsData:", skillsData);
  console.log("SkillsSection - skillsData length:", skillsData?.length);
  
  return (
    <section id="skills" className="skills animate-on-scroll">
      <div className="container">
        <h2 className="section-title animate-on-scroll-scale">
          <i className="fas fa-tools"></i>
          Skills & Technologies
        </h2>
        <div className="skills-grid">
          {skillsData && skillsData.length > 0 ? (
            skillsData.map((category, index) => (
              <SkillCategory
                key={index}
                title={category.title}
                icon={category.icon}
                skills={category.skills}
                animationClass={category.animationClass}
              />
            ))
          ) : (
            <div style={{ padding: "2rem", color: "red", textAlign: "center" }}>
              No skills data available
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
