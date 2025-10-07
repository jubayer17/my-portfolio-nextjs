"use client";

import { Skill } from "../../data";
import SkillItem from "./SkillItem";

interface SkillCategoryProps {
  title: string;
  icon: string;
  skills: Skill[];
  animationClass: string;
}

export default function SkillCategory({
  title,
  icon,
  skills,
  animationClass,
}: SkillCategoryProps) {
  return (
    <div
      className={`skill-category ${animationClass} hover-lift magnetic-card`}
    >
      <div className="skill-header">
        <i className={icon}></i>
        <h3>{title}</h3>
      </div>
      <div className="skill-items">
        {skills.map((skill, index) => (
          <SkillItem
            key={`${title}-${skill.name}-${index}`}
            name={skill.name}
            icon={skill.icon}
            className={skill.class}
          />
        ))}
      </div>
    </div>
  );
}
