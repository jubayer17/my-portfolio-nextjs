"use client";

import { Project } from "@/data/projects";

interface ProjectFeaturesProps {
  project: Project;
}

export default function ProjectFeatures({ project }: ProjectFeaturesProps) {
  return (
    <div className="project-features space-y-8">
      {/* Features Section */}
      {project.features && project.features.length > 0 && (
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg border border-gray-200 dark:border-gray-700">
          <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 flex items-center gap-3">
            <i className="fas fa-star text-yellow-500"></i>
            Key Features
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {project.features.map((feature, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors duration-300"
              >
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0 mt-1">
                  {index + 1}
                </div>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {feature}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Challenges Section */}
      {project.challenges && project.challenges.length > 0 && (
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg border border-gray-200 dark:border-gray-700">
          <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 flex items-center gap-3">
            <i className="fas fa-mountain text-red-500"></i>
            Challenges & Solutions
          </h3>

          <div className="space-y-4">
            {project.challenges.map((challenge, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-4 bg-red-50 dark:bg-red-900/20 rounded-lg border-l-4 border-red-500"
              >
                <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white flex-shrink-0 mt-1">
                  <i className="fas fa-exclamation text-sm"></i>
                </div>
                <div>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    {challenge}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Learnings Section */}
      {project.learnings && project.learnings.length > 0 && (
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg border border-gray-200 dark:border-gray-700">
          <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 flex items-center gap-3">
            <i className="fas fa-lightbulb text-green-500"></i>
            Key Learnings
          </h3>

          <div className="space-y-4">
            {project.learnings.map((learning, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border-l-4 border-green-500"
              >
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white flex-shrink-0 mt-1">
                  <i className="fas fa-check text-sm"></i>
                </div>
                <div>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    {learning}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Project Overview */}
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg border border-gray-200 dark:border-gray-700">
        <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 flex items-center gap-3">
          <i className="fas fa-file-alt text-blue-500"></i>
          Project Overview
        </h3>

        <div className="prose dark:prose-invert max-w-none">
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
            {project.detailedDescription || project.description}
          </p>

          {project.detailedDescription &&
            project.detailedDescription !== project.description && (
              <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border-l-4 border-blue-500">
                <h4 className="font-semibold text-gray-800 dark:text-white mb-2">
                  Project Summary
                </h4>
                <p className="text-gray-600 dark:text-gray-400">
                  {project.description}
                </p>
              </div>
            )}
        </div>
      </div>

      {/* Technologies Used */}
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg border border-gray-200 dark:border-gray-700">
        <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 flex items-center gap-3">
          <i className="fas fa-code text-purple-500"></i>
          Technologies Used
        </h3>

        <div className="flex flex-wrap gap-3">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="px-4 py-2 bg-gradient-to-r from-purple-500 to-blue-600 text-white rounded-full font-semibold text-sm hover:scale-105 transition-transform duration-300 cursor-default"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
