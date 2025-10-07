"use client";

import { projectsData } from "../data";
import ProjectCard from "./ui/ProjectCard";

export default function ProjectsSection() {
  return (
    <section id="projects" className="projects animate-on-scroll">
      <div className="container">
        <h2 className="section-title animate-on-scroll-scale">
          <i className="fas fa-folder-open"></i>
          Featured Projects
        </h2>
        <div className="projects-grid">
          {projectsData.map((project, index) => (
            <ProjectCard
              key={index}
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
          ))}
        </div>
      </div>
    </section>
  );
}
