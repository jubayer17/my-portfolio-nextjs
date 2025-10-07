"use client";

import { projectsData } from "../data";
import ProjectCard from "./ui/ProjectCard";

export default function ProjectsSection() {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            <i className="fas fa-folder-open text-blue-600 mr-3"></i>
            Featured Projects
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A showcase of my recent work and technical expertise
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
            />
          ))}
        </div>
      </div>
    </section>
  );
}
