"use client";

import { useEffect, useRef } from "react";

interface AnimationWrapperProps {
  children: React.ReactNode;
  animationClass?: string;
  threshold?: number;
  rootMargin?: string;
}

export default function AnimationWrapper({
  children,
  animationClass = "",
  threshold = 0.1,
  rootMargin = "0px 0px -50px 0px",
}: AnimationWrapperProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, [threshold, rootMargin]);

  return (
    <div ref={ref} className={animationClass}>
      {children}
    </div>
  );
}
