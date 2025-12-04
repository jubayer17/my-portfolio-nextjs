"use client";

import { useState } from "react";
import { projectsData } from "../data";
import ProjectCard from "./ui/ProjectCard";

export default function ProjectsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardsPerView = 3;
  const maxIndex = Math.max(0, projectsData.length - cardsPerView);

  const goToPrevious = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  return (
    <section id="projects" className="projects animate-on-scroll">
      <div className="container">
        <h2 className="section-title animate-on-scroll-scale">
          <i className="fas fa-folder-open"></i>
          Featured Projects
        </h2>

        <div className="projects-carousel-wrapper">
          {/* Left Navigation Button */}
          <button
            onClick={goToPrevious}
            disabled={currentIndex === 0}
            className="carousel-nav carousel-nav-left"
            aria-label="Previous projects"
          >
            <i className="fas fa-chevron-left"></i>
          </button>

          {/* Projects Carousel */}
          <div className="projects-carousel-container">
            <div
              className="projects-carousel"
              style={{
                transform: `translateX(-${currentIndex * (100 / cardsPerView)}%)`,
              }}
            >
              {projectsData.map((project, index) => (
                <div key={index} className="project-card-wrapper">
                  <ProjectCard
                    title={project.title}
                    description={project.description}
                    image={project.image}
                    imageAlt={project.imageAlt}
                    icon={project.icon}
                    technologies={project.technologies}
                    liveUrl={project.liveUrl}
                    githubUrl={project.githubUrl}
                    inDevelopment={project.inDevelopment}
                    animationClass={project.animationClass}
                    slug={project.slug}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Right Navigation Button */}
          <button
            onClick={goToNext}
            disabled={currentIndex >= maxIndex}
            className="carousel-nav carousel-nav-right"
            aria-label="Next projects"
          >
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>

        {/* Carousel Indicators */}
        <div className="carousel-indicators">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`carousel-indicator ${currentIndex === index ? "active" : ""
                }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
