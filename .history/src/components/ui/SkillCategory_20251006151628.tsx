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
  console.log(`SkillCategory ${title} rendering with skills:`, skills);
  
  return (
    <div className={`skill-category ${animationClass} hover-lift magnetic-card`}>
      <div className="skill-header">
        <i className={icon}></i>
        <h3>{title}</h3>
      </div>
      <div className="skill-items">
        {skills && Array.isArray(skills) ? (
          skills.map((skill, index) => {
            console.log(`Rendering skill:`, skill);
            return (
              <SkillItem
                key={`${title}-${skill.name}-${index}`}
                name={skill.name}
                icon={skill.icon}
                className={skill.class}
              />
            );
          })
        ) : (
          <div style={{
            padding: '1rem',
            backgroundColor: 'red',
            color: 'white',
            borderRadius: '8px',
            margin: '0.5rem'
          }}>
            No skills data for {title}! Skills: {JSON.stringify(skills)}
          </div>
        )}
      </div>
    </div>
  );
}
