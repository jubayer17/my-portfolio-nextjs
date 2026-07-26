/**
 * Single source of truth for every page on the site.
 * Mirrors Resume_of_Jubayer_Ahmed.pdf — keep the two in step.
 */

/**
 * Per-project case-study pages are switched off for now.
 * Flip to `true` to bring /projects/[slug] back: the routes, the
 * "Case study" buttons, the card links, and the sitemap entries all
 * read this one flag.
 */
export const PROJECT_DETAILS_ENABLED = false;

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
    companyUrl?: string;
    logo?: string;
    role: string;
    location: string;
    range: DateRange;
    summary: string;
    highlights: string[];
    /** Tight, punchy versions of the highlights for the hero spotlight. */
    spotlight?: string[];
    stack: string[];
};

export type ProjectCategory =
    | "Enterprise"
    | "Platform"
    | "Product"
    | "Education"
    | "Competitive Programming";

/** Rendered as a badge wherever the project appears. */
export type ProjectStatus = {
    label: string;
    note: string;
    tone: "warn" | "success" | "accent";
};

export type ProjectItem = {
    slug: string;
    title: string;
    tagline: string;
    range: DateRange;
    description: string;
    bullets: string[];
    features: string[];
    stack: string[];
    links: LinkItem[];
    images?: { src: string; alt: string }[];
    category: ProjectCategory;
    status?: ProjectStatus;
    featured?: boolean;
};

export type SkillGroup = {
    key: string;
    label: string;
    blurb: string;
    items: string[];
};

export const resume = {
    person: {
        name: "Jubayer Ahmed",
        role: "Software Engineer",
        tagline: "Backend-first full-stack engineer",
        location: "Dhaka, Bangladesh",
        email: "ahmedjubayer52@gmail.com",
        phone: "+8801785-720927",
        phoneHref: "tel:+8801785720927",
        whatsapp: "https://wa.me/8801785720927",
        resumeUrl: "/assets/Resume_of_Jubayer_Ahmed.pdf",
        links: [
            { label: "GitHub", href: "https://github.com/jubayer17" },
            { label: "LinkedIn", href: "https://www.linkedin.com/in/jubayer26" },
            { label: "Codeforces", href: "https://codeforces.com/profile/_ultron" },
            { label: "LeetCode", href: "https://leetcode.com/u/Jubayer17" },
            { label: "CSES", href: "https://cses.fi/user/GalvaaaTroN" },
        ] satisfies LinkItem[],
    },

    summary: [
        "Software Engineer specializing in full-stack systems with React, Next.js, Node.js, NestJS, Django, and PostgreSQL.",
        "Proven experience building scalable, high-performance REST APIs, microservices, and cloud-native architectures with CI/CD.",
        "Strong in AI/ML integration — LLM workflows, RAG pipelines, semantic search, vector databases, LangChain, and LangGraph-based systems.",
        "Skilled in system design, distributed systems, DevOps (Docker, AWS), and performance optimization, with a competitive programming foundation.",
    ],

    /** Headline numbers, each traceable to a line in the CV. */
    metrics: [
        { value: "210+", label: "Production APIs", sub: "NestJS · Prisma · TypeORM", tone: "#8b5cf6" },
        { value: "115+", label: "Django REST APIs", sub: "DRF · Celery · Redis", tone: "#0ea5e9" },
        { value: "800+", label: "Problems Solved", sub: "Codeforces · LeetCode · CSES", tone: "#f59e0b" },
        { value: "4", label: "Contest Placements", sub: "ICPC · IUPC · Hacker Cup", tone: "#f43f5e" },
    ],

    education: {
        school: "Patuakhali Science and Technology University",
        degree: "B.Sc. in Computer Science",
        range: { start: "Jan 2020", end: "Oct 2025" },
        grade: "CGPA 3.35 / 4.00",
        coursework: [
            "Data Structures",
            "Algorithms",
            "Operating Systems",
            "Software Engineering",
            "System Design",
            "Artificial Intelligence",
            "Network Routing and Switching",
            "Cryptography",
        ],
    },

    skills: [
        {
            key: "languages",
            label: "Languages",
            blurb: "Typed, modern languages for scalable systems",
            items: ["JavaScript (ES6+)", "TypeScript", "Python", "C", "C++"],
        },
        {
            key: "frontend",
            label: "Frontend",
            blurb: "Accessible interfaces with performance-first rendering",
            items: ["React.js", "Next.js", "Redux Toolkit", "HTML5", "CSS3", "Tailwind CSS", "SSR/SSG"],
        },
        {
            key: "backend",
            label: "Backend",
            blurb: "Robust APIs, auth, and service architecture",
            items: [
                "Node.js",
                "NestJS",
                "Django",
                "Django REST Framework",
                "REST APIs",
                "GraphQL",
                "Microservices Architecture",
                "WebSockets",
                "JWT Authentication",
                "RBAC",
            ],
        },
        {
            key: "ai",
            label: "AI & ML",
            blurb: "LLM workflows, retrieval pipelines, and semantic search",
            items: [
                "LLMs",
                "RAG",
                "NLP",
                "Prompt Engineering",
                "Embeddings",
                "Vector Databases",
                "OpenAI API",
                "LangChain",
                "LangGraph",
                "Semantic Search",
            ],
        },
        {
            key: "databases",
            label: "Databases",
            blurb: "Efficient schemas, indexing, and query optimization",
            items: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Prisma", "TypeORM", "Firebase"],
        },
        {
            key: "devops",
            label: "DevOps & Cloud",
            blurb: "Containers, pipelines, and cloud deployment workflows",
            items: ["Docker", "Kubernetes", "AWS (EC2, S3)", "CI/CD (GitHub Actions)", "Vercel"],
        },
        {
            key: "tools",
            label: "Tools & Platforms",
            blurb: "Day-to-day delivery and developer experience tooling",
            items: [
                "Git",
                "GitHub",
                "Postman",
                "VS Code",
                "npm",
                "yarn",
                "ESLint",
                "Prettier",
                "Webpack",
                "Inngest",
            ],
        },
    ] satisfies SkillGroup[],

    experience: [
        {
            company: "GeekSSort",
            companyUrl: "https://www.linkedin.com/company/geekssort/posts/?feedView=all",
            logo: "/assets/GS.png",
            role: "Software Engineer",
            location: "Mirpur, Dhaka",
            range: { start: "Feb 2026", end: "Present" },
            summary:
                "Driving backend architecture, API reliability, and delivery velocity across core products.",
            highlights: [
                "Developed 210+ production-grade APIs using NestJS, Prisma, TypeORM, PostgreSQL, and Redis, following Clean Architecture and SOLID principles.",
                "Built and maintained 115+ APIs using Django and Django REST Framework with PostgreSQL, Redis, Celery, and Docker, delivering secure and scalable backend services.",
                "Currently developing a Multi-Tenant ERP System using Django, DRF, PostgreSQL, Redis, Celery, Docker, and Next.js, featuring subdomain tenancy, RBAC, multi-branch support, HRM, Inventory, and POS.",
                "Built an enterprise-grade Barbershop Management System using NestJS, PostgreSQL, Prisma, and Redis, featuring appointments, billing, inventory, attendance tracking, and ZKTeco integration.",
                "Delivered a high-performance full-stack real-estate platform using Next.js and NestJS with GraphQL, PostgreSQL, and Redis, optimized for SSR, SEO, and caching.",
                "Delivered client-facing applications using Shopify, Headless Shopify, and Framer, with a focus on performance and modern UI/UX.",
            ],
            spotlight: [
                "210+ production APIs — NestJS, Prisma, PostgreSQL.",
                "115+ Django REST endpoints — Celery, Redis, Docker.",
                "Multi-tenant ERP — subdomain tenancy, RBAC, POS.",
            ],
            stack: ["NestJS", "Django", "PostgreSQL", "Redis", "Prisma", "Docker", "Next.js"],
        },
        {
            company: "GeekSSort",
            companyUrl: "https://www.linkedin.com/company/geekssort/posts/?feedView=all",
            logo: "/assets/GS.png",
            role: "Junior Software Engineer",
            location: "Mirpur, Dhaka",
            range: { start: "Oct 2025", end: "Jan 2026" },
            summary:
                "Backend delivery on production applications, with a focus on clean, maintainable service code.",
            highlights: [
                "Supported backend development using NestJS, GraphQL, Prisma, and PostgreSQL with a focus on clean, maintainable code.",
                "Assisted in designing scalable API structures and improving backend workflows for production applications.",
                "Contributed to performance improvements through Redis caching and modular service patterns.",
                "Worked on Shopify, Headless Shopify, and Framer tasks in a client-facing delivery environment.",
            ],
            stack: ["NestJS", "GraphQL", "Prisma", "PostgreSQL", "Redis"],
        },
        {
            company: "Vivasoft Ltd.",
            companyUrl: "https://vivasoftltd.com",
            role: "Software Engineer Trainee",
            location: "Dhaka, Bangladesh",
            range: { start: "Jan 2025", end: "Sep 2025" },
            summary:
                "Nine-month trainee program contributing to a production-oriented e-learning platform.",
            highlights: [
                "Completed a 9-month trainee program while contributing to a production-oriented e-learning platform.",
                "Worked on both NestJS backend services and Next.js frontend features for course delivery, user access, and learning workflows.",
                "Integrated and maintained REST APIs, authentication flows, and client-server data handling in a team-based development setup.",
                "Used TypeScript, PostgreSQL, Prisma, Git, and Postman while following code review, debugging, and task-based delivery practices.",
            ],
            stack: ["NestJS", "Next.js", "TypeScript", "PostgreSQL", "Prisma", "Postman"],
        },
    ] satisfies ExperienceItem[],

    projects: [
        {
            slug: "sortorium",
            title: "Sortorium",
            tagline: "ERP Platform — HR, Inventory & Operations",
            range: { start: "2026", end: "Present" },
            category: "Enterprise",
            featured: true,
            status: {
                label: "In active development",
                note: "Shipping incrementally",
                tone: "accent",
            },
            description:
                "Multi-tenant ERP platform covering HR, inventory, and day-to-day operations, built on subdomain tenancy with role-based access across multiple branches.",
            bullets: [
                "Architected a multi-tenant system with subdomain tenancy so each organisation gets an isolated workspace from a single deployment.",
                "Implemented RBAC and multi-branch support so permissions and data scope follow the user's role and location.",
                "Built HRM, Inventory, and POS modules on Django and DRF with PostgreSQL, using Celery for background jobs and Redis for caching.",
                "Delivered the operator-facing frontend in Next.js with Redux Toolkit, and shipped the stack through Docker, Kubernetes, and CI/CD.",
            ],
            features: [
                "Subdomain-based multi-tenancy",
                "Role-based access control",
                "Multi-branch operations",
                "HRM module",
                "Inventory management",
                "Point of sale",
                "Celery background jobs",
                "Redis caching layer",
            ],
            stack: [
                "Next.js",
                "Redux Toolkit",
                "Django",
                "Django REST Framework",
                "PostgreSQL",
                "Redis",
                "Celery",
                "Docker",
                "Kubernetes",
                "CI/CD (GitHub Actions)",
            ],
            // TODO: add { label: "Live", href: "…" } once the URL is confirmed.
            links: [],
        },
        {
            slug: "glamora",
            title: "Glamora",
            tagline: "Barbershop & Salon Management System",
            range: { start: "2026", end: "2026" },
            category: "Enterprise",
            featured: true,
            description:
                "Enterprise-grade salon operations system handling appointments, billing, inventory, and staff attendance, with ZKTeco biometric device integration.",
            bullets: [
                "Built an appointment engine covering booking, rescheduling, and stylist assignment against real-time chair availability.",
                "Implemented billing and inventory so each service and retail sale settles against stock in one transaction.",
                "Integrated ZKTeco biometric devices for staff attendance tracking, feeding directly into payroll-ready reporting.",
                "Backed the system with NestJS, PostgreSQL, and Prisma, using Redis to keep schedule and availability reads fast under load.",
            ],
            features: [
                "Appointment scheduling",
                "Billing & invoicing",
                "Retail inventory",
                "Staff attendance tracking",
                "ZKTeco biometric integration",
                "Redis-backed availability reads",
                "Dockerised deployment",
                "CI/CD pipeline",
            ],
            stack: [
                "Next.js",
                "NestJS",
                "TypeScript",
                "PostgreSQL",
                "Prisma",
                "Redis",
                "Docker",
                "CI/CD (GitHub Actions)",
            ],
            links: [],
        },
        {
            slug: "hirebd",
            title: "HireBD",
            tagline: "Job Marketplace — Candidates & Employers",
            range: { start: "2025", end: "2025" },
            category: "Platform",
            featured: true,
            description:
                "Full-stack job marketplace where candidates browse and apply while employers post listings and manage applicants from a role-based dashboard.",
            bullets: [
                "Built a dual-role platform serving candidate job discovery and employer applicant management from one codebase.",
                "Implemented a GraphQL API with NestJS and Prisma ORM for flexible, type-safe querying across listings and applications.",
                "Integrated NextAuth and JWT for secure authentication, with role-based routing separating candidate and employer surfaces.",
                "Wired Apollo Client into the Next.js frontend for cache-aware data fetching and optimistic application flows.",
            ],
            features: [
                "Candidate job search & filtering",
                "One-click applications",
                "Employer job posting",
                "Applicant tracking dashboard",
                "Role-based access",
                "NextAuth + JWT sessions",
                "GraphQL API",
                "Type-safe Prisma data layer",
            ],
            stack: [
                "Next.js",
                "NestJS",
                "TypeScript",
                "GraphQL",
                "PostgreSQL",
                "Prisma ORM",
                "Apollo Client",
                "NextAuth",
                "JWT auth",
                "REST APIs",
            ],
            links: [{ label: "Live", href: "https://job-board-client-six.vercel.app/" }],
            images: [{ src: "/assets/Job-Board-SS.png", alt: "HireBD job marketplace screenshot" }],
        },
        {
            slug: "restrocore",
            title: "RestroCore",
            tagline: "Restaurant Management — POS, KDS & Analytics",
            range: { start: "2025", end: "Present" },
            category: "Product",
            featured: true,
            status: {
                label: "Frontend live",
                note: "Backend in progress",
                tone: "warn",
            },
            description:
                "All-in-one restaurant operations platform — point of sale, kitchen display, reservations, and an analytics dashboard in a single interface.",
            bullets: [
                "Built a unified restaurant ops surface covering POS, kitchen display (KDS), table reservations, and delivery tracking.",
                "Designed an analytics dashboard that surfaces real-time order, revenue, and inventory movement.",
                "Architected the frontend with Zustand for local state and TanStack Query for server sync, keeping order screens responsive under rapid updates.",
                "Enforced input correctness with React Hook Form and Zod so ticket and menu edits fail fast rather than corrupting an order.",
            ],
            features: [
                "Point of sale",
                "Kitchen display system",
                "Table reservations",
                "Delivery tracking",
                "Real-time analytics",
                "Menu & inventory management",
                "Zod-validated forms",
                "Optimistic order updates",
            ],
            stack: [
                "React",
                "TypeScript",
                "Vite",
                "Tailwind CSS",
                "Zustand",
                "TanStack Query",
                "Framer Motion",
                "React Hook Form",
                "Zod",
            ],
            links: [{ label: "Live", href: "https://restro-core-frontend.vercel.app/" }],
            images: [{ src: "/assets/restroCore-SS.png", alt: "RestroCore restaurant platform screenshot" }],
        },
        {
            slug: "geek-estates",
            title: "Geek Estates",
            tagline: "Real Estate Platform — Listings & Search",
            range: { start: "2026", end: "Present" },
            category: "Platform",
            featured: true,
            description:
                "High-performance real-estate platform for browsing property listings, tuned for server-side rendering, SEO, and cached search.",
            bullets: [
                "Delivered a full-stack listings platform with Next.js on the frontend and NestJS with GraphQL behind it.",
                "Optimised for SSR and SEO so property pages are crawlable and fast on first paint.",
                "Added Redis caching across search and detail queries to keep listing reads cheap under repeated traffic.",
                "Handled property media through Cloudinary, with JWT-authenticated flows for listing management.",
            ],
            features: [
                "Property listing browse",
                "Filtered search",
                "Server-side rendered detail pages",
                "SEO-optimised routes",
                "Redis query caching",
                "Cloudinary media pipeline",
                "JWT-authenticated management",
                "GraphQL data layer",
            ],
            stack: [
                "Next.js",
                "NestJS",
                "TypeScript",
                "GraphQL",
                "PostgreSQL",
                "Prisma",
                "Redis",
                "Apollo Client",
                "Cloudinary",
                "JWT auth",
            ],
            // TODO: add { label: "Live", href: "…" } once the URL is confirmed.
            links: [],
        },
        {
            slug: "cf-ladder",
            title: "CF Ladder",
            tagline: "Codeforces Tracker — Filtering & Performance Dashboard",
            range: { start: "Aug 2025", end: "Present" },
            category: "Competitive Programming",
            featured: true,
            description:
                "Codeforces practice tracker with problem filtering by rating and tag, plus a dashboard for monitoring solve progress over time.",
            bullets: [
                "Built a responsive practice surface to browse and filter problems by topic, tag, and rating band.",
                "Visualised submissions and performance trends with Chart.js so practice gaps are obvious at a glance.",
                "Implemented backend services for uploads and data handling with Express.js and MongoDB.",
                "Integrated the Codeforces API with caching so repeated dashboard loads stay fast without hammering upstream.",
            ],
            features: [
                "Rating-band problem ladders",
                "Tag & topic filtering",
                "Submission history sync",
                "Progress charts",
                "Solve streak tracking",
                "Cached Codeforces API reads",
                "File uploads via Multer",
                "Fully responsive layout",
            ],
            stack: [
                "Next.js",
                "Express.js",
                "MongoDB",
                "Tailwind CSS",
                "Axios",
                "Multer",
                "Chart.js",
                "REST APIs",
            ],
            links: [{ label: "Live", href: "https://cf-ladder-pro.vercel.app" }],
            images: [{ src: "/assets/ladderSS.png", alt: "CF Ladder dashboard screenshot" }],
        },
        {
            slug: "edulecta",
            title: "Edulecta",
            tagline: "MERN eLearning Platform — Auth & Progress Tracking",
            range: { start: "Feb 2025", end: "Jun 2025" },
            category: "Education",
            featured: true,
            description:
                "MERN eLearning platform with authentication, personalised course access, and learner progress tracking.",
            bullets: [
                "Built a scalable MERN platform with JWT authentication and separate learner and instructor dashboards.",
                "Implemented role-based access control so course authoring stays separate from course consumption.",
                "Delivered interactive learning flows with per-lesson progress tracking persisted against each enrolment.",
                "Managed client state with Redux and server communication through Axios over a REST API.",
            ],
            features: [
                "Course catalogue & enrolment",
                "Lesson progress tracking",
                "JWT authentication",
                "Role-based access control",
                "Instructor dashboard",
                "Redux state management",
                "REST API backend",
                "Responsive learner UI",
            ],
            stack: [
                "React",
                "Node.js",
                "Express.js",
                "MongoDB",
                "JWT auth",
                "REST APIs",
                "RBAC",
                "Redux",
                "Axios",
            ],
            links: [{ label: "Live", href: "https://client-sigma-rust.vercel.app" }],
            images: [{ src: "/assets/edulectaSS.png", alt: "Edulecta eLearning platform screenshot" }],
        },
    ] satisfies ProjectItem[],

    problemSolving: [
        {
            platform: "Codeforces",
            handle: "_ultron",
            href: "https://codeforces.com/profile/_ultron",
            count: "600+",
            detail:
                "Solved 600+ problems across diverse difficulty levels, mastering algorithms, data structures, and optimization strategies.",
        },
        {
            platform: "LeetCode",
            handle: "Jubayer17",
            href: "https://leetcode.com/u/Jubayer17",
            count: "200+",
            detail:
                "Solved 200+ problems focused on data structures and patterns, enhancing efficient coding and technical interview readiness.",
        },
        {
            platform: "CSES",
            handle: "GalvaaaTroN",
            href: "https://cses.fi/user/GalvaaaTroN",
            count: "40+",
            detail:
                "Solved 40+ problems, improving algorithmic thinking and problem-solving skills.",
        },
    ],

    achievements: [
        {
            title: "ICPC Dhaka Regional 2025",
            detail:
                "Represented the team at ICPC Dhaka Regional, solved 3 problems, and gained teamwork and problem-solving experience under pressure.",
        },
        {
            title: "DUET IUPC 2025",
            detail:
                "Secured an honorable position in DUET IUPC, solving 4 problems and showcasing teamwork and problem-solving skills.",
        },
        {
            title: "Meta Hacker Cup 2025",
            detail:
                "Solved 2 challenging problems in Meta's global coding competition, demonstrating analytical and algorithmic skills.",
        },
        {
            title: "PSTU IT Carnival 2025",
            detail:
                "Achieved 3rd position by solving 4 challenging problems, demonstrating problem-solving and analytical skills.",
        },
    ],

    certifications: [
        { title: "JavaScript Algorithms and Data Structures", issuer: "freeCodeCamp" },
        { title: "Backend Development and APIs", issuer: "freeCodeCamp" },
        { title: "AWS Cloud Practitioner Essentials", issuer: "AWS Skill Builder" },
        { title: "Docker Essentials", issuer: "IBM SkillsBuild" },
        { title: "Git & GitHub Fundamentals", issuer: "GitHub Learning Lab" },
    ],

    industryKeywords: [
        "SaaS",
        "EdTech",
        "E-commerce",
        "LMS",
        "API Design",
        "Event-driven Architecture",
        "Serverless",
        "Authentication",
        "Observability",
        "Monitoring",
    ],
} as const;

/** Convenience lookups used across pages. */
export const projectBySlug = (slug: string) =>
    resume.projects.find((p) => p.slug === slug);

export const skillGroup = (key: string) =>
    resume.skills.find((g) => g.key === key)?.items ?? [];
