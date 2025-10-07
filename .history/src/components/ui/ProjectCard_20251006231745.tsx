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
    <div className="group relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 transform hover:-translate-y-2">
      {/* Project Image */}
      <div className="relative h-56 overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-700 dark:to-gray-600">
        {image ? (
          <Image
            src={image}
            alt={imageAlt}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <div className="h-full flex items-center justify-center bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500">
            <i className={`${icon} text-6xl text-white opacity-80`}></i>
          </div>
        )}
        
        {/* Overlay with Links */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-4 right-4 flex space-x-3">
            {liveUrl && (
              <a
                href={liveUrl === "#" ? undefined : liveUrl}
                className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 ${
                  liveUrl === "#"
                    ? "bg-gray-500/50 cursor-not-allowed"
                    : "bg-blue-600 hover:bg-blue-700 shadow-lg"
                }`}
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
                className="w-12 h-12 bg-gray-900 hover:bg-black rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 shadow-lg"
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
          <div className="absolute top-4 left-4 bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center space-x-1 shadow-lg">
            <i className="fas fa-hammer text-xs"></i>
            <span>In Development</span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Title with Icon */}
        <div className="flex items-center mb-3">
          <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mr-3">
            <i className={`${icon} text-blue-600 dark:text-blue-400 text-lg`}></i>
          </div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
            {title}
          </h3>
        </div>

        {/* Description */}
        <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-5 line-clamp-3">
          {description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-6">
          {technologies.slice(0, 4).map((tech, index) => (
            <TechTag key={index} technology={tech} />
          ))}
          {technologies.length > 4 && (
            <span className="text-xs text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">
              +{technologies.length - 4} more
            </span>
          )}
        </div>

        {/* View Details Button */}
        <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 px-6 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:scale-[1.02]">
          <span>View Details</span>
          <i className="fas fa-arrow-right text-sm group-hover:translate-x-1 transition-transform duration-300"></i>
        </button>
      </div>

      {/* Decorative Border */}
      <div className="absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none"></div>
    </div>
  );
}
