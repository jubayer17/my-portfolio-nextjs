"use client";

interface ScrollProgressIndicatorProps {
  scrollProgress: number;
}

export default function ScrollProgressIndicator({
  scrollProgress,
}: ScrollProgressIndicatorProps) {
  return (
    <div className="scroll-indicator">
      <div
        className="scroll-progress"
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  );
}
