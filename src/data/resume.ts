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
        backend: ["Node.js", "NestJS", "Express.js", "REST APIs", "GraphQL", "Prisma", "TypeORM", "Auth (JWT, Clerk)"],
        databases: ["PostgreSQL", "MongoDB", "MySQL", "Firebase (Firestore, Auth)"],
        devops: ["Docker", "Kubernetes", "AWS (EC2, S3)", "GitHub Actions (CI/CD)"],
        tools: ["Git", "Vercel", "Postman", "Apollo Client", "TanStack Query", "Zod", "Framer Motion", "Figma", "Prettier"],
    },
    experience: [
        {
            company: "GeekSSort",
            role: "Junior Software Engineer",
            location: "Mirpur, Dhaka",
            range: { start: "Feb 2025", end: "Present" },
            highlights: [
                "Designed and delivered 40+ production APIs using NestJS, Prisma/TypeORM, and PostgreSQL with scalable architecture patterns.",
                "Built internal tooling and admin experiences with Next.js and GraphQL to streamline operations and reduce manual overhead.",
                "Improved platform features with authentication, authorization, role-based access control, and performance optimizations.",
                "Contributed to end-to-end backend architecture for a restaurant management system (orders, inventory, API structure).",
            ],
        },
        {
            company: "GeekSSort",
            role: "Software Engineer Intern",
            location: "Mirpur, Dhaka",
            range: { start: "Nov 2025", end: "Jan 2026" },
            highlights: [
                "Learned and applied NestJS architecture to build scalable backend systems using GraphQL and Prisma.",
                "Designed scalable API architecture following production-level backend patterns and clean architecture principles.",
                "Implemented Redis caching strategies to improve system performance and API response times.",
                "Gained hands-on experience with production-grade system design, backend scalability, and modular service architecture.",
                "Collaborated in team environments and gained practical experience with Shopify, Headless Shopify, and Framer for client-facing business platforms.",
            ],
        },
    ] satisfies ExperienceItem[],
    projects: [
        {
            slug: "restrocore",
            title: "RestroCore",
            range: { start: "2025", end: "Present" },
            category: "Product",
            description:
                "All-in-one restaurant platform — POS, KDS, reservations, delivery tracking, inventory, and analytics dashboard. Frontend live; backend in progress.",
            bullets: [
                "Built a comprehensive restaurant ops platform covering POS, KDS, table reservations, and delivery tracking in a unified interface.",
                "Designed an analytics dashboard with Recharts and Chart.js to surface real-time business insights across orders and inventory.",
                "Architected a scalable frontend with Zustand for state, TanStack Query for server sync, and React Hook Form + Zod for validation.",
            ],
            stack: [
                "React",
                "TypeScript",
                "Vite",
                "Tailwind CSS",
                "Zustand",
                "TanStack Query",
                "shadcn/ui",
                "React Router",
                "Recharts",
                "Chart.js",
                "Framer Motion",
                "Zod",
                "React Hook Form",
                "Radix UI",
            ],
            links: [
                { label: "Live", href: "https://restro-core-frontend.vercel.app/" },
            ],
            images: [{ src: "/assets/restroCore-SS.png", alt: "RestroCore platform screenshot" }],
        },
        {
            slug: "job-board",
            title: "Job Board",
            range: { start: "2025", end: "2025" },
            category: "Platform",
            description:
                "Full-stack job marketplace — candidates browse and apply, employers post listings and manage applicants via a role-based dashboard.",
            bullets: [
                "Built a dual-role platform supporting both candidate job browsing/applications and employer job posting with applicant management.",
                "Implemented GraphQL API with NestJS and Prisma ORM for flexible, type-safe data querying across the marketplace.",
                "Integrated NextAuth for secure authentication and React Hook Form + Zod for robust, validated form workflows.",
            ],
            stack: [
                "Next.js",
                "NestJS",
                "TypeScript",
                "Apollo Client",
                "NextAuth",
                "PostgreSQL",
                "GraphQL",
                "Prisma ORM",
                "Tailwind CSS",
                "React Hook Form",
                "shadcn/ui",
                "Zod",
                "React",
            ],
            links: [
                { label: "Live", href: "https://job-board-client-six.vercel.app/" },
            ],
            images: [{ src: "/assets/Job-Board-SS.png", alt: "Job Board platform screenshot" }],
        },
        {
            slug: "geek-estates",
            title: "Geek Estates",
            range: { start: "2026", end: "Present" },
            category: "Platform",
            description:
                "Real estate platform for browsing and exploring property listings, with inquiry management backed by a full-stack workflow.",
            bullets: [
                "Built a polished property discovery experience with reusable UI patterns and animated interactions.",
                "Structured the app for listing search, detail views, and future lead or inquiry flows.",
                "Designed the stack for scalable content, media handling, and authenticated backend workflows.",
            ],
            stack: [
                "NestJS",
                "PostgreSQL",
                "Prisma",
                "Cloudinary",
                "Next.js",
                "TypeScript",
                "GraphQL",
                "JWT auth",
                "Apollo Client",
                "Tailwind CSS v4",
                "Framer Motion",
                "GSAP",
                "shadcn/ui",
                "Multer",
                "Embla Carousel",
                "React",
            ],
            links: [],
        },
        {
            slug: "cf-ladder",
            title: "CF Ladder",
            range: { start: "Aug 2025", end: "Present" },
            category: "Competitive Programming",
            description:
                "Codeforces practice tracker with problem filtering by rating and tag, plus a stats dashboard for monitoring progress over time.",
            bullets: [
                "Built a responsive UX to browse and filter problems by topic, tags, and rating.",
                "Integrated dashboards to visualize submissions and performance trends over time.",
                "Implemented backend services for uploads and data handling using Express.js and MongoDB.",
            ],
            stack: ["Next.js", "Express.js", "MongoDB", "Tailwind CSS", "Axios", "Multer"],
            links: [
                { label: "Live", href: "https://cf-ladder-pro.vercel.app" },
            ],
            images: [{ src: "/assets/ladderSS.png", alt: "CF Ladder dashboard screenshot" }],
        },
        {
            slug: "edulecta",
            title: "Edulecta",
            range: { start: "Feb 2025", end: "Jun 2025" },
            category: "Education",
            description:
                "MERN eLearning platform with user authentication, personalized course access, and learner progress tracking.",
            bullets: [
                "Built a scalable MERN platform with user authentication and dashboard capabilities.",
                "Delivered interactive learning flows and progress tracking with a maintainable architecture.",
            ],
            stack: ["React", "Node.js", "Express.js", "MongoDB"],
            links: [
                { label: "Live", href: "https://client-sigma-rust.vercel.app" },
            ],
            images: [{ src: "/assets/edulectaSS.png", alt: "Edulecta platform screenshot" }],
        },
        {
            slug: "tech-nest",
            title: "Tech-Nest",
            range: { start: "Oct 2024", end: "Jan 2025" },
            category: "Platform",
            description:
                "Tech gadget storefront with dynamic product listings, user reviews, and a focus on performance and cross-browser reliability.",
            bullets: [
                "Developed a responsive storefront with modern UI patterns and robust routing.",
                "Improved engagement with performance optimization and cross-browser refinements.",
            ],
            stack: ["Next.js", "TypeScript", "Tailwind CSS", "Clerk", "Inngest", "React"],
            links: [
                { label: "Live", href: "https://quick-cart-ax1j.vercel.app" },
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

