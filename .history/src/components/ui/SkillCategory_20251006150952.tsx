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
  // Debug logging to ensure data is being passed correctly
  console.log("SkillCategory props:", { title, icon, skills, animationClass });
  console.log("Skills array length:", skills?.length);
  console.log("Individual skills:", skills);
  
  return (
    <div
      className={`skill-category ${animationClass} hover-lift magnetic-card`}
      style={{ 
        border: "2px solid #ddd", 
        padding: "1rem", 
        borderRadius: "8px",
        minHeight: "200px"
      }}
    >
      <div className="skill-header">
        <i className={icon}></i>
        <h3>{title}</h3>
        {/* Debug info */}
        <small style={{ color: "#666" }}>({skills?.length || 0} skills)</small>
      </div>
      
      <div className="skill-items" style={{ marginTop: "1rem" }}>
        {skills && Array.isArray(skills) && skills.length > 0 ? (
          skills.map((skill, index) => {
            console.log(`Rendering skill ${index}:`, skill);
            return (
              <SkillItem
                key={`${title}-skill-${index}`}
                name={skill.name}
                icon={skill.icon}
                className={skill.class}
              />
            );
          })
        ) : (
          <div style={{ padding: "1rem", color: "red", backgroundColor: "#ffe6e6" }}>
            No skills data available for {title}
            <br />
            <small>Skills type: {typeof skills}, Array: {Array.isArray(skills) ? "Yes" : "No"}</small>
          </div>
        )}
      </div>
    </div>
  );
}
