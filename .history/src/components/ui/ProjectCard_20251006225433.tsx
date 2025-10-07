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
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col h-full">
      {/* Project Image */}
      <div className="relative h-48 overflow-hidden group">
        {image ? (
          <Image
            src={image}
            alt={imageAlt}
            width={400}
            height={192}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
            <i className={`${icon} text-4xl text-white`}></i>
          </div>
        )}
        
        {/* Project Links Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="flex space-x-3">
            {liveUrl && (
              <a
                href={liveUrl === "#" ? undefined : liveUrl}
                className={`p-3 rounded-full transition-all duration-200 ${
                  liveUrl === "#"
                    ? "bg-gray-600 cursor-not-allowed opacity-50"
                    : "bg-blue-500 hover:bg-blue-600 hover:scale-110"
                }`}
                aria-label="View live demo"
                target={liveUrl === "#" ? undefined : "_blank"}
                rel={liveUrl === "#" ? undefined : "noopener noreferrer"}
                onClick={liveUrl === "#" ? (e) => e.preventDefault() : undefined}
              >
                <i className="fas fa-external-link-alt text-white text-sm"></i>
              </a>
            )}
            {githubUrl && githubUrl !== "#" && (
              <a
                href={githubUrl}
                className="p-3 bg-gray-800 hover:bg-gray-900 rounded-full transition-all duration-200 hover:scale-110"
                aria-label="View GitHub"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github text-white text-sm"></i>
              </a>
            )}
          </div>
        </div>
        
        {/* Status Badge */}
        {inDevelopment && (
          <div className="absolute top-3 right-3 bg-orange-500 text-white px-2 py-1 rounded-full text-xs font-medium">
            <i className="fas fa-tools mr-1"></i>
            In Development
          </div>
        )}
      </div>

      {/* Project Content */}
      <div className="p-6 flex-1 flex flex-col">
        {/* Title */}
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 flex items-center">
          <i className={`${icon} text-blue-500 mr-2`}></i>
          {title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow leading-relaxed">
          {description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.slice(0, 4).map((tech, index) => (
            <TechTag key={index} technology={tech} />
          ))}
          {technologies.length > 4 && (
            <span className="text-xs text-gray-500 dark:text-gray-400 self-center">
              +{technologies.length - 4} more
            </span>
          )}
        </div>

        {/* View Details Button */}
        <button className="w-full py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md font-medium transition-colors duration-200 flex items-center justify-center space-x-2">
          <span>View Details</span>
          <i className="fas fa-arrow-right text-sm"></i>
        </button>
      </div>
    </div>
  );
}
