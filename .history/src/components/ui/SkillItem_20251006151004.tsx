"use client";

interface SkillItemProps {
  name: string;
  icon: string;
  className: string;
}

export default function SkillItem({ name, icon, className }: SkillItemProps) {
  // Debug logging to ensure data is being passed correctly
  console.log("SkillItem rendering:", { name, icon, className });
  
  if (!name) {
    console.warn("SkillItem: name is missing!");
    return (
      <span style={{ 
        padding: "4px 8px", 
        backgroundColor: "red", 
        color: "white", 
        borderRadius: "4px",
        fontSize: "12px"
      }}>
        Missing Name
      </span>
    );
  }
  
  return (
    <span 
      className={`skill-item ${className || ''} stagger-child hover-scale`}
      style={{ 
        display: "inline-flex",
        alignItems: "center",
        margin: "4px",
        padding: "8px 12px",
        backgroundColor: "#f3f4f6",
        color: "#1f2937",
        border: "2px solid #e5e7eb",
        borderRadius: "20px",
        fontSize: "14px",
        fontWeight: "600"
      }}
    >
      <i className={icon} style={{ marginRight: "8px", fontSize: "16px" }}></i>
      <span>{name}</span>
    </span>
  );
}
