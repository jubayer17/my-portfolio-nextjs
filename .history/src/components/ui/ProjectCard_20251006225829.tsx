"use client";

import Image from "next/image";
import TechTag from "./TechTag";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  icon: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  inDevelopment?: boolean;
  animationClass?: string;
}

export default function ProjectCard({
  title,
  description,
  image,
  imageAlt,
  icon,
  technologies,
  liveUrl,
  githubUrl,
  inDevelopment,
}: ProjectCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-200 dark:border-gray-700">
      {/* Image Section */}
      <div className="relative h-48 bg-gray-100 dark:bg-gray-700">
        {image ? (
          <Image
            src={image}
            alt={imageAlt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <div className="h-full flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600">
            <i className={`${icon} text-4xl text-white`}></i>
          </div>
        )}
        
        {/* Status Badge */}
        {inDevelopment && (
          <div className="absolute top-3 right-3 bg-orange-500 text-white px-2 py-1 rounded-md text-xs font-medium">
            In Progress
          </div>
        )}
        
        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center opacity-0 hover:opacity-100">
          <div className="flex space-x-3">
            {liveUrl && (
              <a
                href={liveUrl === "#" ? undefined : liveUrl}
                className={`p-3 rounded-full transition-transform hover:scale-110 ${
                  liveUrl === "#"
                    ? "bg-gray-500 cursor-not-allowed"
                    : "bg-blue-600 hover:bg-blue-700"
                }`}
                target={liveUrl === "#" ? undefined : "_blank"}
                rel={liveUrl === "#" ? undefined : "noopener noreferrer"}
                onClick={liveUrl === "#" ? (e) => e.preventDefault() : undefined}
              >
                <i className="fas fa-external-link-alt text-white"></i>
              </a>
            )}
            {githubUrl && githubUrl !== "#" && (
              <a
                href={githubUrl}
                className="p-3 bg-gray-800 hover:bg-gray-900 rounded-full transition-transform hover:scale-110"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github text-white"></i>
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6">
        {/* Title */}
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 flex items-center">
          <i className={`${icon} text-blue-600 mr-2 text-lg`}></i>
          {title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">
          {description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.slice(0, 3).map((tech, index) => (
            <TechTag key={index} technology={tech} />
          ))}
          {technologies.length > 3 && (
            <span className="text-xs text-gray-500 dark:text-gray-400 px-2 py-1">
              +{technologies.length - 3}
            </span>
          )}
        </div>

        {/* Action Button */}
        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg text-sm font-medium transition-colors duration-200 flex items-center justify-center space-x-2">
          <span>View Details</span>
          <i className="fas fa-arrow-right"></i>
        </button>
      </div>
    </div>
  );
}
