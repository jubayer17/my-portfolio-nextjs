"use client";

import { projectsData } from "../data";
import ProjectCard from "./ui/ProjectCard";

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 dark:text-white mb-4
                      transition-all duration-300 hover:scale-105">
          <i className="fas fa-folder-open text-blue-500 mr-4"></i>
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mt-16 px-4">
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
