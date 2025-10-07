import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  ExternalLink,
  Github,
  Calendar,
  User,
  Clock,
} from "lucide-react";
import { projectsData, Project } from "@/data/projects";

export default async function ProjectPage({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  const { slug } = await params;
  const project = projectsData.find((p: Project) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="project-details">
      <div className="container">
        {/* Header Section */}
        <div className="project-header">
          <div className="project-header-content">
            <Link href="/#projects" className="back-link">
              <ArrowLeft className="w-5 h-5" />
              Back to Projects
            </Link>

            {project.inDevelopment && (
              <div className="project-status-badge">
                <Clock className="w-4 h-4" />
                In Development
              </div>
            )}
          </div>

          <div className="project-title-section">
            <h1 className="project-details-title">{project.title}</h1>
            <p className="project-details-description">
              {project.detailedDescription || project.description}
            </p>
          </div>
        </div>

        {/* Project Image Section */}
        <div className="project-image-container">
          <div className="project-image-wrapper">
            {project.images?.[0] || project.image ? (
              <Image
                src={project.images?.[0] || project.image}
                alt={project.title}
                fill
                className="project-main-image"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
              />
            ) : (
              <div className="project-image-placeholder">
                <span className="placeholder-icon">🚀</span>
              </div>
            )}
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="project-content-grid">
          {/* Main Content - Features & Details */}
          <div className="project-main-content">
            {/* Key Features */}
            <div className="project-section">
              <div className="section-header">
                <div className="section-icon features-icon">
                  <i className="fas fa-star"></i>
                </div>
                <h2 className="section-title">Key Features</h2>
              </div>

              <div className="features-list">
                {project.features?.map((feature, index) => (
                  <div key={index} className="feature-item">
                    <div className="feature-bullet"></div>
                    <p className="feature-text">{feature}</p>
                  </div>
                )) || (
                  <>
                    <div className="feature-item">
                      <div className="feature-bullet"></div>
                      <p className="feature-text">Modern and responsive user interface</p>
                    </div>
                    <div className="feature-item">
                      <div className="feature-bullet"></div>
                      <p className="feature-text">Built with latest technologies and best practices</p>
                    </div>
                    <div className="feature-item">
                      <div className="feature-bullet"></div>
                      <p className="feature-text">Optimized for performance and accessibility</p>
                    </div>
                    <div className="feature-item">
                      <div className="feature-bullet"></div>
                      <p className="feature-text">Clean and maintainable code architecture</p>
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* Project Information */}
            <div className="project-section">
              <div className="section-header">
                <div className="section-icon info-icon">
                  <i className="fas fa-info-circle"></i>
                </div>
                <h2 className="section-title">Project Details</h2>
              </div>

              <div className="project-info-grid">
                <div className="info-item">
                  <User className="w-6 h-6 info-item-icon" />
                  <div className="info-item-content">
                    <p className="info-label">Project Type</p>
                    <p className="info-value">Personal Project</p>
                  </div>
                </div>
                <div className="info-item">
                  <Calendar className="w-6 h-6 info-item-icon" />
                  <div className="info-item-content">
                    <p className="info-label">Timeline</p>
                    <p className="info-value">2024 - Present</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar - Actions & Tech Stack */}
          <div className="project-sidebar">
            {/* Quick Actions */}
            <div className="sidebar-section">
              <div className="section-header">
                <div className="section-icon actions-icon">
                  <i className="fas fa-bolt"></i>
                </div>
                <h3 className="sidebar-title">Quick Actions</h3>
              </div>

              <div className="actions-list">
                <a
                  href={project.liveUrl || "#"}
                  className={`action-btn ${
                    project.liveUrl && !project.inDevelopment
                      ? "action-btn-primary"
                      : "action-btn-disabled"
                  }`}
                  target={project.liveUrl ? "_blank" : undefined}
                  rel={project.liveUrl ? "noopener noreferrer" : undefined}
                >
                  <ExternalLink className="w-5 h-5" />
                  {project.inDevelopment ? "Coming Soon" : "Live Demo"}
                </a>

                <a
                  href={project.githubUrl || "#"}
                  className={`action-btn ${
                    project.githubUrl
                      ? "action-btn-secondary"
                      : "action-btn-disabled"
                  }`}
                  target={project.githubUrl ? "_blank" : undefined}
                  rel={project.githubUrl ? "noopener noreferrer" : undefined}
                >
                  <Github className="w-5 h-5" />
                  View Source
                </a>
              </div>
            </div>

            {/* Tech Stack */}
            <div className="sidebar-section">
              <h3 className="sidebar-title">Tech Stack</h3>
              <div className="tech-stack-list">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Project Status */}
            <div className="sidebar-section">
              <h3 className="sidebar-title">Status</h3>
              <div
                className={`status-indicator ${
                  project.inDevelopment ? "status-development" : "status-completed"
                }`}
              >
                {project.inDevelopment ? "🚧 In Development" : "✅ Completed"}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}