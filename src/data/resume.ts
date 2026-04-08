export type DateRange = {
    start: string;
    end: string;
};

export type LinkItem = {
    label: string;
    href: string;
};

export type ExperienceItem = {
    company: string;
    role: string;
    location: string;
    range: DateRange;
    highlights: string[];
};

export type ProjectItem = {
    slug: string;
    title: string;
    range: DateRange;
    description: string;
    bullets: string[];
    stack: string[];
    links: LinkItem[];
    images?: { src: string; alt: string }[];
    category: "Product" | "Platform" | "Education" | "Competitive Programming";
};

export const resume = {
    person: {
        name: "Jubayer Ahmed",
        role: "Full-Stack Software Engineer",
        location: "Dhaka, Bangladesh",
        email: "jubayer17@cse.pstu.ac.bd",
        phone: "+8801785-720927",
        links: [
            { label: "GitHub", href: "https://github.com/jubayer17" },
            { label: "LinkedIn", href: "https://www.linkedin.com/in/jubayer16" },
            { label: "Codeforces", href: "https://codeforces.com/profile/GalvaaaTroN" },
            { label: "LeetCode", href: "https://leetcode.com/u/Jubayer17" },
        ] satisfies LinkItem[],
    },
    summary: [
        "Results-driven software engineer with full-stack experience across modern web platforms.",
        "Experienced with Next.js/React on the frontend and Node.js/NestJS on the backend, building REST APIs and scalable architectures.",
        "Comfortable with cloud deployments, CI/CD workflows, and performance-focused delivery.",
    ],
    education: {
        school: "Patuakhali Science and Technology University",
        degree: "B.Sc. in Computer Science",
        range: { start: "Jan 2020", end: "Oct 2025" },
        details: ["CGPA: 3.12/4.00"],
        coursework: [
            "Data Structures",
            "Software Engineering",
            "Operating Systems",
            "Algorithms",
            "Artificial Intelligence",
            "System Design",
            "Network Routing and Switching",
            "Cryptography",
        ],
    },
    skills: {
        languages: ["JavaScript (ES6+)", "TypeScript", "C", "C++", "Python"],
        frontend: ["React", "Next.js", "Redux Toolkit", "HTML5", "CSS3", "Tailwind CSS"],
        backend: ["Node.js", "NestJS", "Express.js", "REST APIs", "GraphQL", "SSR", "Auth (JWT, Clerk)"],
        databases: ["PostgreSQL", "MongoDB", "MySQL", "Firebase (Firestore, Auth)"],
        devops: ["Docker", "Kubernetes", "AWS (EC2, S3)", "GitHub Actions (CI/CD)", "Vercel", "Postman"],
    },
    experience: [
        {
            company: "Geeksorf",
            role: "Junior Software Engineer",
            location: "Mirpur, Dhaka",
            range: { start: "Feb 2025", end: "Present" },
            highlights: [
                "Designed and delivered 30+ production APIs using NestJS, Prisma/TypeORM, and PostgreSQL with scalable architecture patterns.",
                "Built internal tooling and admin experiences with Next.js and GraphQL to streamline operations and reduce manual overhead.",
                "Improved platform features with authentication, authorization, role-based access control, and performance optimizations.",
                "Contributed to end-to-end backend architecture for a restaurant management system (orders, inventory, API structure).",
            ],
        },
    ] satisfies ExperienceItem[],
    projects: [
        {
            slug: "cf-ladder",
            title: "CF Ladder",
            range: { start: "Aug 2025", end: "Present" },
            category: "Competitive Programming",
            description:
                "Codeforces practice and performance tracker with problem exploration by rating/tag and a stats dashboard for progress insights.",
            bullets: [
                "Built a responsive UX to browse and filter problems by topic, tags, and rating.",
                "Integrated dashboards to visualize submissions and performance trends over time.",
                "Implemented backend services for uploads and data handling using Express.js and MongoDB.",
            ],
            stack: ["Next.js", "Tailwind CSS", "Express.js", "MongoDB", "Axios", "Multer"],
            links: [
                { label: "Live", href: "https://cf-ladder-pro.vercel.app" },
                { label: "GitHub", href: "https://github.com/jubayer17/cf-ladder" },
            ],
            images: [{ src: "/assets/ladderSS.png", alt: "CF Ladder dashboard screenshot" }],
        },
        {
            slug: "edulecta",
            title: "Edulecta",
            range: { start: "Feb 2025", end: "Jun 2025" },
            category: "Education",
            description:
                "Comprehensive MERN eLearning platform with authentication, personalized courses, and learner progress tracking.",
            bullets: [
                "Built a scalable MERN platform with user authentication and dashboard capabilities.",
                "Delivered interactive learning flows and progress tracking with a maintainable architecture.",
            ],
            stack: ["MongoDB", "Express.js", "React", "Node.js"],
            links: [
                { label: "Live", href: "https://client-sigma-rust.vercel.app" },
                { label: "GitHub", href: "https://github.com/jubayer17/Edulecta" },
            ],
            images: [{ src: "/assets/edulectaSS.png", alt: "Edulecta platform screenshot" }],
        },
        {
            slug: "tech-nest",
            title: "Tech-Nest",
            range: { start: "Oct 2024", end: "Jan 2025" },
            category: "Platform",
            description:
                "Full-stack tech gadget site with dynamic product listings and user reviews, tuned for performance and cross-browser reliability.",
            bullets: [
                "Developed a responsive storefront with modern UI patterns and robust routing.",
                "Improved engagement with performance optimization and cross-browser refinements.",
            ],
            stack: ["Next.js", "React", "Tailwind CSS", "Clerk", "Inngest"],
            links: [
                { label: "Live", href: "https://quick-cart-ax1j.vercel.app" },
                { label: "GitHub", href: "https://github.com/jubayer17" },
            ],
            images: [{ src: "/assets/technestSS.png", alt: "Tech-Nest screenshot" }],
        },
    ] satisfies ProjectItem[],
    achievements: [
        {
            title: "ICPC Dhaka Regional 2025",
            detail: "Represented team at ICPC Dhaka Regional; solved multiple problems and strengthened teamwork under pressure.",
        },
        {
            title: "DUET IUPC 2025",
            detail: "Secured an honorable position, demonstrating teamwork, logic, and fast problem-solving.",
        },
        {
            title: "Meta Hacker Cup 2025",
            detail: "Solved two challenging problems in Meta’s global competition, showcasing analytical thinking and algorithmic skills.",
        },
        {
            title: "Codeforces",
            detail: "Solved 500+ problems across diverse difficulty levels. Profile: GalvaaaTroN.",
        },
        {
            title: "LeetCode",
            detail: "Solved 150+ problems focused on data structures and patterns. Profile: Jubayer17.",
        },
        {
            title: "PSTU IT Carnival 2025",
            detail: "Achieved 3rd place by solving four challenging problems, demonstrating problem-solving and analytical skills.",
        },
    ],
} as const;

