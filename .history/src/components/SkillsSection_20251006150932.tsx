"use client";

// Import directly to test if this works
import { skillsData } from "../data/skills";
import SkillCategory from "./ui/SkillCategory";

// Test data to verify component rendering
const testSkillsData = [
  {
    title: "Frontend Test",
    icon: "fas fa-paint-brush",
    animationClass: "animate-on-scroll-left",
    skills: [
      { name: "React", icon: "fab fa-react", class: "react" },
      { name: "Next.js", icon: "fas fa-infinity", class: "nextjs" },
    ],
  },
];

export default function SkillsSection() {
  // Debug logging to ensure data is being imported correctly
  console.log("SkillsSection - skillsData:", skillsData);
  console.log("SkillsSection - skillsData length:", skillsData?.length);
  console.log("SkillsSection - testSkillsData:", testSkillsData);
  
  // Use test data first to see if component renders
  const dataToUse = skillsData && skillsData.length > 0 ? skillsData : testSkillsData;
  
  return (
    <section id="skills" className="skills animate-on-scroll">
      <div className="container">
        <h2 className="section-title animate-on-scroll-scale">
          <i className="fas fa-tools"></i>
          Skills & Technologies
        </h2>
        
        {/* Debug info */}
        <div style={{ 
          background: "#f0f0f0", 
          padding: "1rem", 
          margin: "1rem 0",
          borderRadius: "8px",
          fontSize: "12px"
        }}>
          <p>Debug Info:</p>
          <p>SkillsData Length: {skillsData?.length || 0}</p>
          <p>Using Test Data: {(!skillsData || skillsData.length === 0) ? "Yes" : "No"}</p>
          <p>Data to render: {dataToUse?.length || 0} categories</p>
        </div>
        
        <div className="skills-grid">
          {dataToUse && dataToUse.length > 0 ? (
            dataToUse.map((category, index) => {
              console.log("Rendering category:", category.title, "with skills:", category.skills?.length);
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
            <div style={{ padding: "2rem", color: "red", textAlign: "center" }}>
              No skills data available - Check console for debugging info
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
