"use client";

interface SkillItemProps {
  name: string;
  icon: string;
  className: string;
}

export default function SkillItem({ name, icon, className }: SkillItemProps) {
  console.log(`SkillItem rendering:`, { name, icon, className });
  
  return (
    <span 
      className={`skill-item ${className}`}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        padding: '0.75rem 1.25rem',
        margin: '0.5rem',
        backgroundColor: '#3b82f6',
        color: '#ffffff',
        border: '2px solid #1d4ed8',
        borderRadius: '25px',
        fontSize: '0.875rem',
        fontWeight: '600',
        minHeight: '2.5rem',
        gap: '0.5rem',
        whiteSpace: 'nowrap',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
      }}
    >
      <i className={icon} style={{ fontSize: '1rem' }}></i>
      <span>{name}</span>
    </span>
  );
}
