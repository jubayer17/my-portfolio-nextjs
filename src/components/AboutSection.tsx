"use client";

import Image from "next/image";
import { statsData, highlightsData, aboutContent } from "../data";
import StatItem from "./ui/StatItem";
import HighlightItem from "./ui/HighlightItem";

export default function AboutSection() {
  return (
    <section id="about" className="about animate-on-scroll">
      <div className="container">
        <h2 className="section-title animate-on-scroll-scale">
          <i className="fas fa-user-circle"></i>
          <span className="section-title-text">About Me</span>
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
            <p className="fade-in-up stagger-1">{aboutContent.introduction}</p>
            <p className="fade-in-up stagger-2">
              {aboutContent.specialization}
            </p>
            <p className="fade-in-up stagger-3">{aboutContent.personal}</p>
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
