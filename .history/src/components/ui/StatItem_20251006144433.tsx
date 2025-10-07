"use client";

interface StatItemProps {
  icon: string;
  label: string;
}

export default function StatItem({ icon, label }: StatItemProps) {
  return (
    <div className="stat-item stagger-child hover-lift">
      <i className={icon}></i>
      {label}
    </div>
  );
}
