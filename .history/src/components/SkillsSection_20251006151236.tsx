"use client";

import { skillsData } from "../data";
import SkillCategory from "./ui/SkillCategory";
import AnimationWrapper from "./ui/AnimationWrapper";

export default function SkillsSection() {
  return (
    <section id="skills" className="skills">
      <div className="container">
        <AnimationWrapper animationClass="animate-on-scroll-scale">
          <h2 className="section-title">
            <i className="fas fa-tools"></i>
            Skills & Technologies
          </h2>
        </AnimationWrapper>
        <div className="skills-grid">
          {skillsData.map((category, index) => (
            <AnimationWrapper
              key={index}
              animationClass={category.animationClass}
            >
              <SkillCategory
                title={category.title}
                icon={category.icon}
                skills={category.skills}
                animationClass=""
              />
            </AnimationWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
