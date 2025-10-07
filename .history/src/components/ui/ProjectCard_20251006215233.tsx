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
  animationClass = "",
}: ProjectCardProps) {
  return (
    <div className={`
      relative bg-white/5 backdrop-blur-xl border border-white/10 
      rounded-2xl overflow-hidden shadow-xl transition-all duration-300
      min-h-[480px] h-auto flex flex-col
      hover:-translate-y-3 hover:scale-[1.02] hover:shadow-2xl hover:border-blue-500/50
      ${animationClass}
    `}>
      <div className="relative overflow-hidden group">
        {image && (
          <Image 
            src={image} 
            alt={imageAlt} 
            width={400} 
            height={220}
            className="w-full h-[220px] object-cover transition-transform duration-300 group-hover:scale-105"
          />
        )}
        
        {/* Coming Soon Overlay for projects in development */}
        {inDevelopment && (
          <div className="absolute inset-0 bg-black/70 flex items-center justify-center 
                         opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="text-white text-xl font-semibold">Coming Soon</span>
          </div>
        )}
        
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent 
                       opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-4 right-4 flex gap-3">
            {liveUrl && (
              <a
                href={liveUrl === "#" ? undefined : liveUrl}
                className={`
                  w-12 h-12 rounded-full flex items-center justify-center text-white
                  transition-all duration-300 text-lg
                  ${liveUrl === "#" 
                    ? "bg-gray-500/40 opacity-40 cursor-not-allowed pointer-events-none" 
                    : "bg-blue-500 hover:bg-blue-600 hover:scale-110"
                  }
                `}
                aria-label="View live demo"
                target={liveUrl === "#" ? undefined : "_blank"}
                rel={liveUrl === "#" ? undefined : "noopener noreferrer"}
                onClick={liveUrl === "#" ? (e) => e.preventDefault() : undefined}
              >
                <i className="fas fa-external-link-alt"></i>
              </a>
            )}
            {githubUrl && githubUrl !== "#" && (
              <a
                href={githubUrl}
                className="w-12 h-12 rounded-full bg-blue-500 hover:bg-blue-600 
                          flex items-center justify-center text-white
                          transition-all duration-300 hover:scale-110 text-lg"
                aria-label="View GitHub"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github"></i>
              </a>
            )}
          </div>
        </div>
      </div>
      
      <div className="p-6 flex-1 flex flex-col min-h-0">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 
                      flex items-center gap-2">
          <i className={icon}></i>
          <span>{title}</span>
        </h3>
        
        <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed flex-grow">
          {description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {technologies.map((tech, index) => (
            <TechTag key={index} technology={tech} />
          ))}
        </div>
        
        <a 
          href="#" 
          className="w-full py-3 bg-blue-500 hover:bg-blue-600 text-white 
                    rounded-lg font-semibold transition-all duration-300
                    flex items-center justify-center gap-2 mt-auto
                    hover:-translate-y-0.5 hover:shadow-lg"
        >
          View Details <i className="fas fa-arrow-right"></i>
        </a>
      </div>
      
      {inDevelopment && (
        <div className="absolute top-4 right-4 bg-gradient-to-r from-red-500 to-orange-500 
                       text-white px-3 py-1 rounded-full text-xs font-semibold uppercase 
                       tracking-wide z-10 animate-pulse shadow-lg">
          🔧 ONGOING
        </div>
      )}
    </div>
  );
}
