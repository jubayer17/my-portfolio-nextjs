"use client";

import { skillsData } from "../data";
import SkillCategory from "./ui/SkillCategory";

export default function SkillsSection() {
  console.log('SkillsSection rendering with data:', skillsData);
  
  return (
    <section id="skills" className="skills animate-on-scroll">
      <div className="container">
        <h2 className="section-title animate-on-scroll-scale">
          <i className="fas fa-tools"></i>
          Skills & Technologies
        </h2>
        <div className="skills-grid">
          {skillsData && skillsData.length > 0 ? (
            skillsData.map((category, index) => {
              console.log(`Rendering category ${index}:`, category);
              return (
                <SkillCategory
                  key={index}
                  title={category.title}
                  icon={category.icon}
                  skills={category.skills}
                  animationClass={category.animationClass}
                />
              );
            })
          ) : (
            <div style={{padding: '2rem', color: 'red', backgroundColor: 'yellow'}}>
              No skills data found! Check console for details.
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
