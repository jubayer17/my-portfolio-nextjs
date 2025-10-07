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
            { name: "JavaScript", icon: "fab fa-js-square", class: "javascript" },
            { name: "TypeScript", icon: "fab fa-js-square", class: "typescript" },
            { name: "HTML5", icon: "fab fa-html5", class: "html" },
            { name: "CSS3", icon: "fab fa-css3-alt", class: "css" },
            { name: "Tailwind", icon: "fas fa-wind", class: "tailwind" },
            { name: "Bootstrap", icon: "fab fa-bootstrap", class: "bootstrap" },
        ],
    },
    {
        title: "Backend",
        icon: "fas fa-server",
        animationClass: "animate-on-scroll",
        skills: [
            { name: "Node.js", icon: "fab fa-node-js", class: "nodejs" },
            { name: "Express.js", icon: "fas fa-rocket", class: "express" },
            { name: "MongoDB", icon: "fas fa-leaf", class: "mongodb" },
            { name: "Mongoose", icon: "fas fa-database", class: "mongoose" },
            { name: "REST API", icon: "fas fa-plug", class: "restapi" },
            { name: "GraphQL", icon: "fas fa-project-diagram", class: "graphql" },
            { name: "JWT", icon: "fas fa-key", class: "jwt" },
            { name: "Socket.io", icon: "fas fa-bolt", class: "socketio" },
        ],
    },
    {
        title: "Tools & Others",
        icon: "fas fa-wrench",
        animationClass: "animate-on-scroll-right",
        skills: [
            { name: "Git", icon: "fab fa-git-alt", class: "git" },
            { name: "GitHub", icon: "fab fa-github", class: "github" },
            { name: "Docker", icon: "fab fa-docker", class: "docker" },
            { name: "AWS", icon: "fab fa-aws", class: "aws" },
            { name: "Vercel", icon: "fas fa-cloud", class: "vercel" },
            { name: "VS Code", icon: "fas fa-code", class: "vscode" },
            { name: "Figma", icon: "fab fa-figma", class: "figma" },
            { name: "Postman", icon: "fas fa-paper-plane", class: "postman" },
        ],
    },
];
