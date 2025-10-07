"use client";

interface TechTagProps {
  technology: string;
}

export default function TechTag({ technology }: TechTagProps) {
  return <span className="tech-tag">{technology}</span>;
}
