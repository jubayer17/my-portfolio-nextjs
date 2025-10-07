"use client";

interface SkillItemProps {
  name: string;
  icon: string;
  className: string;
}

export default function SkillItem({ name, icon, className }: SkillItemProps) {
  return (
    <div className={`skill-item ${className}`}>
      <i className={icon}></i>
      <span>{name}</span>
    </div>
  );
}
