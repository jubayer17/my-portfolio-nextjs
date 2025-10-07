export interface Skill {
  name: string;
  icon: string;
  class: string;
}

export interface SkillCategory {
  title: string;
  icon: string;
  animationClass: string;
  skills: Skill[];
}

export const skillsData: SkillCategory[] = [
  {
    title: "Frontend",
    icon: "fas fa-paint-brush",
    animationClass: "animate-on-scroll-left",
    skills: [
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
    ],
  },
  {
    title: "Backend",
    icon: "fas fa-server",
    animationClass: "animate-on-scroll",
    skills: [
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
        icon: "fas fa-screwdriver-wrench",
        class: "inngest",
      },
      { name: "REST APIs", icon: "fas fa-plug", class: "restapi" },
      {
        name: "GraphQL",
        icon: "fas fa-project-diagram",
        class: "graphql",
      },
    ],
  },
  {
    title: "Tools & Others",
    icon: "fas fa-wrench",
    animationClass: "animate-on-scroll-right",
    skills: [
      { name: "Git", icon: "fab fa-git-alt", class: "git" },
      { name: "Docker", icon: "fab fa-docker", class: "docker" },
      { name: "AWS", icon: "fab fa-aws", class: "aws" },
      {
        name: "Vercel",
        icon: "fas fa-server",
        class: "vercel",
      },
      { name: "Figma", icon: "fab fa-figma", class: "figma" },
      { name: "VS Code", icon: "fas fa-code", class: "vscode" },
      {
        name: "Postman",
        icon: "fas fa-paper-plane",
        class: "postman",
      },
    ],
  },
];
