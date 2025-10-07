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
    <div className={`project-card ${animationClass} hover-lift magnetic-card`}>
      <div className="project-image">
        {image ? (
          <Image src={image} alt={imageAlt} width={400} height={240} className="project-img" />
        ) : (
          <div className="project-placeholder">
            <i className={icon}></i>
          </div>
        )}
        <div className="project-overlay">
          <div className="project-links">
            {liveUrl && (
              <a
                href={liveUrl === "#" ? undefined : liveUrl}
                className={`project-link hover-scale ${
                  liveUrl === "#" ? "project-link-disabled" : ""
                }`}
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
                className="project-link hover-scale"
                aria-label="View GitHub"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github"></i>
              </a>
            )}
          </div>
        </div>
        {inDevelopment && <div className="project-status">🔧 ONGOING</div>}
      </div>
      <div className="project-content">
        <h3 className="project-title">
          <i className={icon}></i>
          <span>{title}</span>
        </h3>
        <p className="project-description">{description}</p>
        <div className="project-tech">
          {technologies.map((tech, index) => (
            <TechTag key={index} technology={tech} />
          ))}
        </div>
        <a href="#" className="view-details-btn">
          View Details <i className="fas fa-arrow-right"></i>
        </a>
      </div>
    </div>
  );
}
