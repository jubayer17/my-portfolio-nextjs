"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import ClientScript from "../components/ClientScript";

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home");
  const [scrollProgress, setScrollProgress] = useState(0);
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Check for saved theme preference or default to system preference
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      setDarkMode(true);
      document.documentElement.setAttribute("data-theme", "dark");
    }

    // Scroll progress handler
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      setScrollProgress(scrollPercent);

      // Update active section
      const sections = ["home", "about", "skills", "projects", "contact"];
      const sectionElements = sections.map((id) => document.getElementById(id));

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const section = sectionElements[i];
        if (section && window.pageYOffset >= section.offsetTop - 150) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    // Intersection observer for animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    const animateElements = document.querySelectorAll(
      ".animate-on-scroll, .animate-on-scroll-left, .animate-on-scroll-right, .animate-on-scroll-scale"
    );
    animateElements.forEach((el) => observer.observe(el));

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem("theme", newMode ? "dark" : "light");
    document.documentElement.setAttribute(
      "data-theme",
      newMode ? "dark" : "light"
    );
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Scroll Progress Indicator */}
      <div className="scroll-indicator">
        <div
          className="scroll-progress"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Navigation */}
      <nav
        className={`navbar ${scrollProgress > 5 ? "scrolled" : ""}`}
        id="navbar"
      >
        <div className="nav-container">
          <div className="nav-logo">
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("home");
              }}
              className="hover-scale magnetic"
            >
              <Image
                className="img-icon"
                src="/assets/pc-icon.png"
                alt="Logo"
                width={50}
                height={50}
              />
            </a>
          </div>

          <ul
            className={`nav-menu ${mobileMenuOpen ? "active" : ""}`}
            id="nav-menu"
          >
            {[
              { id: "home", icon: "fas fa-home", label: "Home" },
              { id: "about", icon: "fas fa-user", label: "About" },
              { id: "skills", icon: "fas fa-tools", label: "Skills" },
              { id: "projects", icon: "fas fa-folder-open", label: "Projects" },
              { id: "contact", icon: "fas fa-envelope", label: "Contact" },
            ].map((item) => (
              <li key={item.id} className="nav-item">
                <a
                  href={`#${item.id}`}
                  className={`nav-link hover-lift ${
                    activeSection === item.id ? "active" : ""
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.id);
                  }}
                >
                  <i className={item.icon}></i>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div
            className={`nav-toggle hover-scale ${
              mobileMenuOpen ? "active" : ""
            }`}
            id="mobile-menu"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>

          <button
            className="theme-toggle hover-scale magnetic"
            id="theme-toggle"
            aria-label="Toggle dark mode"
            onClick={toggleDarkMode}
          >
            <i className={`fas fa-${darkMode ? "sun" : "moon"}`}></i>
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="parallax-bg"></div>

        {/* Tech Background Animation */}
        <div className="tech-bg-animation">
          {/* Floating Code Particles */}
          <div className="code-particles">
            {[
              "fab fa-react",
              "fab fa-js-square",
              "fab fa-node-js",
              "fab fa-html5",
              "fab fa-css3-alt",
              "fab fa-python",
              "fab fa-java",
              "fab fa-php",
              "fab fa-angular",
              "fab fa-vuejs",
              "fab fa-laravel",
              "fab fa-bootstrap",
              "fab fa-sass",
              "fab fa-less",
              "fab fa-git-alt",
              "fab fa-github",
              "fab fa-gitlab",
              "fab fa-docker",
              "fab fa-aws",
              "fab fa-google-cloud",
              "fab fa-microsoft",
            ].map((icon, index) => (
              <i key={index} className={`${icon} code-particle`}></i>
            ))}
          </div>

          {/* Geometric Grid */}
          <div className="geometric-grid">
            <div className="grid-line grid-line-1"></div>
            <div className="grid-line grid-line-2"></div>
            <div className="grid-line grid-line-3"></div>
            <div className="grid-dot grid-dot-1"></div>
            <div className="grid-dot grid-dot-2"></div>
            <div className="grid-dot grid-dot-3"></div>
            <div className="grid-dot grid-dot-4"></div>
          </div>

          {/* Tech Icons */}
          <div className="floating-icons">
            {[
              "fab fa-js-square",
              "fab fa-react",
              "fab fa-node-js",
              "fas fa-database",
              "fab fa-git-alt",
              "fab fa-npm",
              "fab fa-html5",
              "fab fa-css3-alt",
              "fab fa-python",
              "fab fa-docker",
              "fab fa-aws",
              "fab fa-github",
            ].map((icon, index) => (
              <i
                key={index}
                className={`${icon} tech-icon tech-icon-${index + 1}`}
              ></i>
            ))}
          </div>
        </div>

        <div className="hero-container">
          <div className="hero-content">
            <h1 className="hero-title animate-text">
              Hi, I&apos;m <span className="highlight">Jubayer Ahmed</span> 👋
            </h1>
            <h2 className="hero-subtitle">
              <i className="fab fa-react"></i>
              <span className="typing-animation">Full Stack Web Developer</span>
            </h2>
            <p className="hero-description animate-text">
              ⚙️ Expert in Next.js, React, Node.js & MongoDB — building
              scalable, high-performance web apps ✨ <br />
              🧠 100+ LeetCode solved 🦾
              <br />
              ⚔️ 500+ Codeforces challenges conquered 🔥
            </p>
            <div className="hero-badge availability-badge pulse-icon hover-glow">
              <i
                className="fas fa-circle"
                style={{
                  color: "#10b981",
                  fontSize: "0.7rem",
                  marginRight: "10px",
                }}
              ></i>
              Available for exciting projects
            </div>
            <div className="hero-buttons">
              <a
                href="#contact"
                className="btn btn-primary hover-lift magnetic"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("contact");
                }}
              >
                <i className="fas fa-paper-plane"></i>
                Get In Touch
              </a>
              <a
                href="/assets/maincv.pdf"
                className="btn btn-secondary hover-lift magnetic"
                id="download-resume"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fas fa-download"></i>
                Download Resume
              </a>
            </div>
            <div className="social-links">
              <a
                href="https://www.linkedin.com/in/jubayer-ahmed26/"
                className="social-link hover-scale magnetic"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin"></i>
              </a>
              <a
                href="https://github.com/jubayer17"
                className="social-link hover-scale magnetic"
                aria-label="GitHub"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github"></i>
              </a>
              <a
                href="mailto:jubayer17@cse.pstu.ac.bd"
                className="social-link hover-scale magnetic"
                aria-label="Email"
              >
                <i className="fas fa-envelope"></i>
              </a>
              <a
                href="https://codeforces.com/profile/jubayer17"
                className="social-link hover-scale magnetic"
                aria-label="Codeforces"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fas fa-code"></i>
              </a>
              <a
                href="https://leetcode.com/jubayer17"
                className="social-link hover-scale magnetic"
                aria-label="LeetCode"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fas fa-laptop-code"></i>
              </a>
            </div>
            <div className="scroll-cue my-10">
              <span>Scroll to explore</span>
              <div className="scroll-arrow">
                <i className="fas fa-chevron-down"></i>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about animate-on-scroll">
        <div className="container">
          <h2 className="section-title animate-on-scroll-scale">
            <i className="fas fa-user-circle"></i>
            About Me
          </h2>
          <div className="about-content animate-on-scroll">
            <div className="about-image animate-on-scroll-left">
              <Image
                src="/assets/me.jpg"
                alt="Jubayer Ahmed - Full Stack Developer"
                className="profile-img hover-tilt"
                width={280}
                height={280}
                loading="lazy"
              />
              <div className="about-stats">
                <div className="stat-item stagger-child hover-lift">
                  <i className="fas fa-code"></i>
                  1+ Years
                </div>
                <div className="stat-item stagger-child hover-lift">
                  <i className="fas fa-project-diagram"></i>
                  10+ Projects
                </div>
                <div className="stat-item stagger-child hover-lift">
                  <i className="fas fa-trophy"></i>
                  500+ Problems
                </div>
              </div>
            </div>
            <div className="about-text animate-on-scroll-right">
              <p className="fade-in-up stagger-1">
                👋 I&apos;m a passionate MERN stack developer with 1+ years of
                experience building dynamic, scalable web applications. My
                expertise lies in creating seamless full-stack solutions with
                React, Next.js, Node.js, and MongoDB.
              </p>
              <p className="fade-in-up stagger-2">
                🚀 I specialize in Next.js for server-side rendering, API
                routes, and performance optimization. From crafting responsive
                frontends to designing robust backend architectures, I deliver
                end-to-end solutions.
              </p>
              <p className="fade-in-up stagger-3">
                ⚡ When I&apos;m not coding, you&apos;ll find me exploring the
                latest in web development, contributing to open-source projects,
                or sharing knowledge with the developer community over a perfect
                cup of coffee.
              </p>
              <div className="about-highlights">
                <div className="highlight-item stagger-child">
                  <i className="fas fa-check"></i>
                  MERN Stack Expert
                </div>
                <div className="highlight-item stagger-child">
                  <i className="fas fa-check"></i>
                  Next.js Specialist
                </div>
                <div className="highlight-item stagger-child">
                  <i className="fas fa-check"></i>
                  Problem Solver
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills animate-on-scroll">
        <div className="container">
          <h2 className="section-title animate-on-scroll-scale">
            <i className="fas fa-tools"></i>
            Skills & Technologies
          </h2>
          <div className="skills-grid">
            <div className="skill-category animate-on-scroll-left hover-lift magnetic-card">
              <div className="skill-header">
                <i className="fas fa-paint-brush"></i>
                <h3>Frontend</h3>
              </div>
              <div className="skill-items">
                {[
                  { name: "React", icon: "fab fa-react", class: "react" },
                  { name: "Next.js", icon: "fas fa-infinity", class: "nextjs" },
                  {
                    name: "JavaScript ES6+",
                    icon: "fab fa-js-square",
                    class: "javascript",
                  },
                  {
                    name: "TypeScript",
                    icon: "fab fa-js-square",
                    class: "typescript",
                  },
                  { name: "HTML5 & CSS3", icon: "fab fa-html5", class: "html" },
                  {
                    name: "Tailwind CSS",
                    icon: "fab fa-sass",
                    class: "tailwind",
                  },
                ].map((skill, index) => (
                  <span
                    key={index}
                    className={`skill-item ${skill.class} stagger-child hover-scale`}
                  >
                    <i className={skill.icon}></i>
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>

            <div className="skill-category animate-on-scroll hover-lift magnetic-card">
              <div className="skill-header">
                <i className="fas fa-server"></i>
                <h3>Backend</h3>
              </div>
              <div className="skill-items">
                {[
                  { name: "Node.js", icon: "fab fa-node-js", class: "nodejs" },
                  { name: "Express.js", icon: "fas fa-code", class: "express" },
                  { name: "MongoDB", icon: "fas fa-leaf", class: "mongodb" },
                  {
                    name: "Mongoose ODM",
                    icon: "fas fa-database",
                    class: "mongoose",
                  },
                  {
                    name: "Inngest",
                    icon: "fa-solid fa-screwdriver-wrench",
                    class: "inngest",
                  },
                  { name: "REST APIs", icon: "fas fa-plug", class: "restapi" },
                  {
                    name: "GraphQL",
                    icon: "fas fa-project-diagram",
                    class: "graphql",
                  },
                ].map((skill, index) => (
                  <span
                    key={index}
                    className={`skill-item ${skill.class} stagger-child hover-scale`}
                  >
                    <i className={skill.icon}></i>
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>

            <div className="skill-category animate-on-scroll-right hover-lift magnetic-card">
              <div className="skill-header">
                <i className="fas fa-wrench"></i>
                <h3>Tools & Others</h3>
              </div>
              <div className="skill-items">
                {[
                  { name: "Git", icon: "fab fa-git-alt", class: "git" },
                  { name: "Docker", icon: "fab fa-docker", class: "docker" },
                  { name: "AWS", icon: "fab fa-aws", class: "aws" },
                  {
                    name: "Vercel",
                    icon: "fa-solid fa-server",
                    class: "vercel",
                  },
                  { name: "Figma", icon: "fab fa-figma", class: "figma" },
                  { name: "VS Code", icon: "fas fa-code", class: "vscode" },
                  {
                    name: "Postman",
                    icon: "fas fa-paper-plane",
                    class: "postman",
                  },
                ].map((skill, index) => (
                  <span
                    key={index}
                    className={`skill-item ${skill.class} stagger-child hover-scale`}
                  >
                    <i className={skill.icon}></i>
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects animate-on-scroll">
        <div className="container">
          <h2 className="section-title animate-on-scroll-scale">
            <i className="fas fa-folder-open"></i>
            Featured Projects
          </h2>
          <div className="projects-grid">
            <div className="project-card animate-on-scroll-left hover-lift magnetic-card">
              <div className="project-image">
                <Image
                  src="/assets/technestSS.png"
                  alt="Tech-Nest Dashboard"
                  width={400}
                  height={180}
                />
                <div className="project-overlay">
                  <div className="project-links">
                    <a
                      href="https://quick-cart-ax1j.vercel.app/"
                      className="project-link hover-scale"
                      aria-label="View live demo"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fas fa-external-link-alt"></i>
                    </a>
                    <a
                      href="https://github.com/jubayer17"
                      className="project-link hover-scale"
                      aria-label="View GitHub"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-github"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">
                  <i className="fas fa-shopping-cart"></i>
                  Tech-Nest
                </h3>
                <p className="project-description">
                  Tech Nest is a full-featured tech-focused eCommerce platform
                  built with Next.js, offering seamless browsing, secure
                  payments via Stripe and COD, and robust admin management.
                </p>
                <div className="project-tech">
                  <span className="tech-tag">Next.js</span>
                  <span className="tech-tag">React</span>
                  <span className="tech-tag">MongoDB</span>
                  <span className="tech-tag">Stripe</span>
                </div>
                <a href="#" className="view-details-btn">
                  View Details <i className="fas fa-arrow-right"></i>
                </a>
              </div>
            </div>

            <div className="project-card animate-on-scroll hover-lift magnetic-card">
              <div className="project-image">
                <Image
                  src="/assets/edulectaSS.png"
                  alt="Edulecta Screenshot"
                  width={400}
                  height={180}
                />
                <div className="project-overlay">
                  <div className="project-links">
                    <a
                      href="https://client-sigma-rust.vercel.app/"
                      className="project-link hover-scale"
                      aria-label="View live demo"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fas fa-external-link-alt"></i>
                    </a>
                    <a
                      href="https://github.com/jubayer17/Edulecta"
                      className="project-link hover-scale"
                      aria-label="View GitHub"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-github"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">
                  <i className="fas fa-tasks"></i>
                  Edulecta
                </h3>
                <p className="project-description">
                  Edulecta is an innovative eLearning platform developed with
                  the MERN stack, designed to provide seamless online education
                  with interactive courses and real-time progress tracking.
                </p>
                <div className="project-tech">
                  <span className="tech-tag">React</span>
                  <span className="tech-tag">Node.js</span>
                  <span className="tech-tag">MongoDB</span>
                  <span className="tech-tag">Clerk</span>
                </div>
                <a href="#" className="view-details-btn">
                  View Details <i className="fas fa-arrow-right"></i>
                </a>
              </div>
            </div>

            <div className="project-card">
              <div className="project-image">
                <div className="project-overlay">
                  <div className="project-links">
                    <a
                      href="#"
                      className="project-link"
                      aria-label="View live demo"
                    >
                      <i className="fas fa-external-link-alt"></i>
                    </a>
                    <a
                      href="#"
                      className="project-link"
                      aria-label="View GitHub"
                    >
                      <i className="fab fa-github"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">
                  <i className="fas fa-cloud-sun"></i>
                  Weather Forecast Application
                </h3>
                <p className="project-description">
                  A responsive weather forecast app that displays current
                  weather and forecasts for multiple cities with beautiful data
                  visualizations.
                </p>
                <div className="project-tech">
                  <span className="tech-tag">JavaScript</span>
                  <span className="tech-tag">Chart.js</span>
                  <span className="tech-tag">Weather API</span>
                </div>
                <a href="#" className="view-details-btn">
                  View Details <i className="fas fa-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <h2 className="section-title">
            <i className="fas fa-paper-plane"></i>
            Get In Touch
          </h2>
          <div className="contact-content">
            <div className="contact-info">
              <h3>
                <i className="fas fa-handshake"></i>
                Let&apos;s work together
              </h3>
              <p>
                I&apos;m always interested in new opportunities and exciting
                projects. Whether you have a question or just want to say hi,
                feel free to reach out! 💬
              </p>
              <div className="contact-details">
                <div className="contact-item">
                  <i className="fas fa-envelope"></i>
                  <div>
                    <strong>Email:</strong>
                    <a href="mailto:jubayer17@cse.pstu.ac.bd">
                      jubayer17@cse.pstu.ac.bd
                    </a>
                  </div>
                </div>
                <div className="contact-item">
                  <i className="fas fa-map-marker-alt"></i>
                  <div>
                    <strong>Location:</strong>
                    <span>Patuakhali, Barishal</span>
                  </div>
                </div>
                <div className="contact-item">
                  <i className="fas fa-phone"></i>
                  <div>
                    <strong>Phone:</strong>
                    <a href="tel:+8801785720927">+880-1785-720-927</a>
                  </div>
                </div>
              </div>
            </div>
            <form className="contact-form" id="contact-form">
              <div className="form-group">
                <label htmlFor="name">
                  <i className="fas fa-user"></i> Name
                </label>
                <input type="text" id="name" name="name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">
                  <i className="fas fa-envelope"></i> Email
                </label>
                <input type="email" id="email" name="email" required />
              </div>
              <div className="form-group">
                <label htmlFor="message">
                  <i className="fas fa-comment"></i> Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary btn-full">
                <i className="fas fa-paper-plane"></i> Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-info">
              <h3>
                <i className="fas fa-code"></i>
                Jubayer Ahmed
              </h3>
              <p>Building the future, one line of code at a time. ✨</p>
            </div>
            <div className="footer-social">
              <a
                href="https://www.linkedin.com/in/jubayer-ahmed26/"
                className="footer-social-link"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a
                href="https://github.com/jubayer17"
                className="footer-social-link"
                aria-label="GitHub"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github"></i>
              </a>
              <a
                href="mailto:jubayer17@cse.pstu.ac.bd"
                className="footer-social-link"
                aria-label="Email"
              >
                <i className="fas fa-envelope"></i>
              </a>
              <a
                href="https://twitter.com/yourname"
                className="footer-social-link"
                aria-label="Twitter"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-twitter"></i>
              </a>
            </div>
          </div>
          <div className="footer-bottom">
            <p>Jubayer Ahmed • © 2025 | All rights reserved</p>
          </div>
        </div>
      </footer>

      <ClientScript />
    </>
  );
}
