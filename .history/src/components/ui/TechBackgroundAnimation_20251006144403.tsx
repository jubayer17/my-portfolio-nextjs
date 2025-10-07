"use client";

const codeParticleIcons = [
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
];

const floatingIcons = [
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
];

export default function TechBackgroundAnimation() {
  return (
    <div className="tech-bg-animation">
      {/* Floating Code Particles */}
      <div className="code-particles">
        {codeParticleIcons.map((icon, index) => (
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
        {floatingIcons.map((icon, index) => (
          <i
            key={index}
            className={`${icon} tech-icon tech-icon-${index + 1}`}
          ></i>
        ))}
      </div>
    </div>
  );
}
