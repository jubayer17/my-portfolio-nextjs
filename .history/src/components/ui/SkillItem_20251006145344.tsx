"use client";

interface SkillItemProps {
  name: string;
  icon: string;
  className: string;
}

export default function SkillItem({ name, icon, className }: SkillItemProps) {
  return (
    <span className={`skill-item ${className} stagger-child hover-scale`}>
      <i className={icon} style={{ marginRight: '8px' }}></i>
      <span>{name}</span>
    </span>
  );
}
