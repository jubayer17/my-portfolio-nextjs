"use client";

import Image from "next/image";
import StatItem from "./ui/StatItem";
import HighlightItem from "./ui/HighlightItem";

const statsData = [
  { icon: "fas fa-code", label: "1+ Years" },
  { icon: "fas fa-project-diagram", label: "10+ Projects" },
  { icon: "fas fa-trophy", label: "500+ Problems" },
];

const highlightsData = [
  "MERN Stack Expert",
  "Next.js Specialist", 
  "Problem Solver",
];

export default function AboutSection() {
  return (
    <section id="about" className="about animate-on-scroll">
      <div className="container">
        <h2 className="section-title animate-on-scroll-scale">
          <i className="fas fa-user-circle"></i>
          About Me
        </h2>
        <div className="about-content animate-on-scroll">
          <div className="about-image animate-on-scroll-left">
            <Image
              src="/assets/me.jpg"
              alt="Jubayer Ahmed - Full Stack Developer"
              className="profile-img hover-tilt"
              width={280}
              height={280}
              loading="lazy"
            />
            <div className="about-stats">
              {statsData.map((stat, index) => (
                <StatItem key={index} icon={stat.icon} label={stat.label} />
              ))}
            </div>
          </div>
          <div className="about-text animate-on-scroll-right">
            <p className="fade-in-up stagger-1">
              👋 I&apos;m a passionate MERN stack developer with 1+ years of
              experience building dynamic, scalable web applications. My
              expertise lies in creating seamless full-stack solutions with
              React, Next.js, Node.js, and MongoDB.
            </p>
            <p className="fade-in-up stagger-2">
              🚀 I specialize in Next.js for server-side rendering, API
              routes, and performance optimization. From crafting responsive
              frontends to designing robust backend architectures, I deliver
              end-to-end solutions.
            </p>
            <p className="fade-in-up stagger-3">
              ⚡ When I&apos;m not coding, you&apos;ll find me exploring the
              latest in web development, contributing to open-source projects,
              or sharing knowledge with the developer community over a perfect
              cup of coffee.
            </p>
            <div className="about-highlights">
              {highlightsData.map((highlight, index) => (
                <HighlightItem key={index}>{highlight}</HighlightItem>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
