"use client";

interface SkillItemProps {
  name: string;
  icon: string;
  className: string;
}

export default function SkillItem({ name, icon, className }: SkillItemProps) {
  // Debug logging to ensure data is being passed correctly
  console.log("SkillItem props:", { name, icon, className });
  
  return (
    <span 
      className={`skill-item ${className} stagger-child hover-scale`}
      style={{ 
        marginRight: "8px",
        marginBottom: "8px",
        backgroundColor: "var(--bg-secondary, #f3f4f6)",
        color: "var(--text-primary, #1f2937)",
        border: "1px solid var(--border-color, #e5e7eb)"
      }}
    >
      <i className={icon} style={{ marginRight: "8px" }}></i>
      <span>{name}</span>
    </span>
  );
}
