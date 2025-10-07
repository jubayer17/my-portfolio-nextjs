"use client";

import { Project } from "@/data/projects";
import Link from "next/link";

interface ProjectActionsProps {
  project: Project;
}

export default function ProjectActions({ project }: ProjectActionsProps) {
  return (
    <div className="project-actions space-y-6">
      {/* Quick Actions */}
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg border border-gray-200 dark:border-gray-700">
        <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4 flex items-center gap-2">
          <i className="fas fa-rocket text-blue-600"></i>
          Quick Actions
        </h3>

        <div className="space-y-3">
          {project.liveUrl && project.liveUrl !== "#" ? (
            <Link
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 w-full p-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg group"
            >
              <i className="fas fa-external-link-alt group-hover:rotate-12 transition-transform"></i>
              <span className="font-semibold">Live Demo</span>
            </Link>
          ) : (
            <div className="flex items-center gap-3 w-full p-4 bg-gray-400 text-white rounded-lg opacity-60 cursor-not-allowed">
              <i className="fas fa-clock"></i>
              <span className="font-semibold">Coming Soon</span>
            </div>
          )}

          {project.githubUrl && (
            <Link
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 w-full p-4 bg-gray-800 hover:bg-gray-900 dark:bg-gray-700 dark:hover:bg-gray-600 text-white rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg group"
            >
              <i className="fab fa-github group-hover:rotate-12 transition-transform"></i>
              <span className="font-semibold">View Code</span>
            </Link>
          )}
        </div>
      </div>

      {/* Project Info */}
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg border border-gray-200 dark:border-gray-700">
        <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4 flex items-center gap-2">
          <i className="fas fa-info-circle text-green-600"></i>
          Project Info
        </h3>

        <div className="space-y-4">
          {project.timeline && (
            <div className="flex items-center justify-between">
              <span className="text-gray-600 dark:text-gray-400 flex items-center gap-2">
                <i className="fas fa-calendar-alt text-blue-500"></i>
                Timeline
              </span>
              <span className="font-semibold text-gray-800 dark:text-white">
                {project.timeline}
              </span>
            </div>
          )}

          {project.category && (
            <div className="flex items-center justify-between">
              <span className="text-gray-600 dark:text-gray-400 flex items-center gap-2">
                <i className="fas fa-tag text-purple-500"></i>
                Category
              </span>
              <span className="font-semibold text-gray-800 dark:text-white">
                {project.category}
              </span>
            </div>
          )}

          <div className="flex items-center justify-between">
            <span className="text-gray-600 dark:text-gray-400 flex items-center gap-2">
              <i className="fas fa-cog text-orange-500"></i>
              Status
            </span>
            <span
              className={`px-3 py-1 rounded-full text-sm font-semibold ${
                project.inDevelopment
                  ? "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
                  : "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
              }`}
            >
              {project.inDevelopment ? "In Development" : "Completed"}
            </span>
          </div>
        </div>
      </div>

      {/* Tech Stack */}
      {project.techStack && (
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg border border-gray-200 dark:border-gray-700">
          <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4 flex items-center gap-2">
            <i className="fas fa-layer-group text-indigo-600"></i>
            Tech Stack
          </h3>

          <div className="space-y-4">
            {project.techStack.frontend.length > 0 && (
              <div>
                <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-2 flex items-center gap-2">
                  <i className="fas fa-laptop-code text-blue-500 text-sm"></i>
                  Frontend
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.frontend.map((tech, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-md text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {project.techStack.backend.length > 0 && (
              <div>
                <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-2 flex items-center gap-2">
                  <i className="fas fa-server text-green-500 text-sm"></i>
                  Backend
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.backend.map((tech, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-md text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {project.techStack.database.length > 0 && (
              <div>
                <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-2 flex items-center gap-2">
                  <i className="fas fa-database text-purple-500 text-sm"></i>
                  Database
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.database.map((tech, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-md text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {project.techStack.tools.length > 0 && (
              <div>
                <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-2 flex items-center gap-2">
                  <i className="fas fa-tools text-orange-500 text-sm"></i>
                  Tools
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.tools.map((tech, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 rounded-md text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
