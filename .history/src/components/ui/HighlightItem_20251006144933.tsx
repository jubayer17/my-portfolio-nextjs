"use client";

interface HighlightItemProps {
  children: React.ReactNode;
}

export default function HighlightItem({ children }: HighlightItemProps) {
  return (
    <div className="highlight-item stagger-child">
      <i className="fas fa-check"></i>
      {children}
    </div>
  );
}
