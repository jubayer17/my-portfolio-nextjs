"use client";

import ProjectCard from "./ui/ProjectCard";

const projectsData = [
  {
    title: "Tech-Nest",
    description:
      "Tech Nest is a full-featured tech-focused eCommerce platform built with Next.js, offering seamless browsing, secure payments via Stripe and COD, and robust admin management.",
    image: "/assets/technestSS.png",
    imageAlt: "Tech-Nest Dashboard",
    icon: "fas fa-shopping-cart",
    technologies: ["Next.js", "React", "MongoDB", "Stripe"],
    liveUrl: "https://quick-cart-ax1j.vercel.app/",
    githubUrl: "https://github.com/jubayer17",
    animationClass: "animate-on-scroll-left",
  },
  {
    title: "Edulecta",
    description:
      "Edulecta is an innovative eLearning platform developed with the MERN stack, designed to provide seamless online education with interactive courses and real-time progress tracking.",
    image: "/assets/edulectaSS.png",
    imageAlt: "Edulecta Screenshot",
    icon: "fas fa-tasks",
    technologies: ["React", "Node.js", "MongoDB", "Clerk"],
    liveUrl: "https://client-sigma-rust.vercel.app/",
    githubUrl: "https://github.com/jubayer17/Edulecta",
    animationClass: "animate-on-scroll",
  },
  {
    title: "Weather Forecast Application",
    description:
      "A responsive weather forecast app that displays current weather and forecasts for multiple cities with beautiful data visualizations.",
    image: "",
    imageAlt: "Weather Forecast App",
    icon: "fas fa-cloud-sun",
    technologies: ["JavaScript", "Chart.js", "Weather API"],
    liveUrl: "#",
    githubUrl: "#",
    animationClass: "",
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="projects animate-on-scroll">
      <div className="container">
        <h2 className="section-title animate-on-scroll-scale">
          <i className="fas fa-folder-open"></i>
          Featured Projects
        </h2>
        <div className="projects-grid">
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
              animationClass={project.animationClass}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
