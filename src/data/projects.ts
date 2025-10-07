export interface Project {
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
    slug: string;
    detailedDescription?: string;
    images?: string[];
    features?: string[];
    techStack?: {
        frontend: string[];
        backend: string[];
        database: string[];
        tools: string[];
    };
    challenges?: string[];
    learnings?: string[];
    timeline?: string;
    category?: string;
}

export const projectsData: Project[] = [
    {
        title: "Tech-Nest",
        slug: "tech-nest",
        description:
            "A full-featured tech eCommerce platform with Next.js, offering seamless browsing, secure payments via Stripe/COD, and robust admin management.",
        detailedDescription:
            "Tech-Nest is a comprehensive eCommerce platform designed specifically for technology products. Built with modern web technologies, it provides a seamless shopping experience with advanced features like real-time inventory management, secure payment processing, and an intuitive admin dashboard.",
        image: "/assets/technestSS.png",
        images: [
            "/assets/technestSS.png",
            "/assets/ss.png"
        ],
        imageAlt: "Tech-Nest Dashboard",
        icon: "fas fa-shopping-cart",
        technologies: ["Next.js", "React", "MongoDB", "Stripe"],
        techStack: {
            frontend: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
            backend: ["Node.js", "Express.js", "Next.js API Routes"],
            database: ["MongoDB", "Mongoose"],
            tools: ["Stripe", "Vercel", "Git", "VS Code"]
        },
        features: [
            "🛒 Complete shopping cart functionality",
            "💳 Secure payment processing with Stripe",
            "📦 Cash on Delivery (COD) option",
            "👨‍💼 Comprehensive admin dashboard",
            "📱 Fully responsive design",
            "🔍 Advanced product search and filtering",
            "📊 Real-time inventory management",
            "👤 User authentication and profiles",
            "📧 Email notifications for orders",
            "⭐ Product reviews and ratings"
        ],
        challenges: [
            "Implementing secure payment gateway integration",
            "Optimizing database queries for better performance",
            "Creating responsive design for mobile devices",
            "Managing complex state for cart functionality"
        ],
        learnings: [
            "Advanced Next.js features and API routes",
            "Payment gateway integration best practices",
            "Database optimization techniques",
            "User experience design principles"
        ],
        liveUrl: "https://quick-cart-ax1j.vercel.app/",
        githubUrl: "https://github.com/jubayer17",
        timeline: "3 months",
        category: "eCommerce",
        animationClass: "animate-on-scroll-left",
    },
    {
        title: "Edulecta",
        slug: "edulecta",
        description:
            "An innovative eLearning platform built with MERN stack, providing seamless online education with interactive courses and real-time progress tracking.",
        detailedDescription:
            "Edulecta is a modern eLearning platform that revolutionizes online education. It offers interactive courses, real-time progress tracking, and a collaborative learning environment. Built with the MERN stack, it provides scalable and efficient learning solutions for students and educators.",
        image: "/assets/edulectaSS.png",
        images: [
            "/assets/edulectaSS.png"
        ],
        imageAlt: "Edulecta Screenshot",
        icon: "fas fa-tasks",
        technologies: ["React", "Node.js", "MongoDB", "Clerk"],
        techStack: {
            frontend: ["React", "JavaScript", "CSS3", "Material-UI"],
            backend: ["Node.js", "Express.js", "RESTful API"],
            database: ["MongoDB", "Mongoose"],
            tools: ["Clerk Auth", "Git", "Postman", "VS Code"]
        },
        features: [
            "📚 Interactive course content",
            "📈 Real-time progress tracking",
            "👥 Collaborative learning environment",
            "🔐 Secure authentication with Clerk",
            "📱 Mobile-responsive design",
            "💬 Discussion forums and chat",
            "📊 Analytics dashboard for instructors",
            "🎯 Personalized learning paths",
            "📝 Assignments and quizzes",
            "🏆 Achievement badges and certificates"
        ],
        challenges: [
            "Building real-time communication features",
            "Implementing complex user role management",
            "Creating engaging user interface",
            "Optimizing video content delivery"
        ],
        learnings: [
            "MERN stack development",
            "Real-time data synchronization",
            "User authentication systems",
            "Educational technology best practices"
        ],
        liveUrl: "https://client-sigma-rust.vercel.app/",
        githubUrl: "https://github.com/jubayer17/Edulecta",
        timeline: "4 months",
        category: "Education",
        inDevelopment: false,
        animationClass: "animate-on-scroll",
    },
    {
        title: "Exchango",
        slug: "exchango",
        description:
            "A secure online marketplace for buying, selling, and exchanging products with seamless communication and end-to-end security.",
        detailedDescription:
            "Exchango is a next-generation marketplace platform that enables secure buying, selling, and exchanging of products. With advanced security features, real-time communication, and a modern user interface, it provides a trustworthy environment for online transactions.",
        image: "/assets/code-icon.png",
        images: [
            "/assets/code-icon.png"
        ],
        imageAlt: "Exchango - Coming Soon",
        icon: "fas fa-exchange-alt",
        technologies: ["Next.js", "Express.js", "Tailwind CSS", "MongoDB", "shadcn/ui", "Axios", "NodeMailer"],
        techStack: {
            frontend: ["Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui"],
            backend: ["Express.js", "Node.js", "RESTful API"],
            database: ["MongoDB", "Mongoose"],
            tools: ["Axios", "NodeMailer", "Git", "Figma"]
        },
        features: [
            "🛡️ End-to-end security",
            "💬 Real-time messaging system",
            "🔄 Product exchange functionality",
            "📱 Mobile-first responsive design",
            "🔍 Advanced search and filtering",
            "⭐ User rating and review system",
            "📧 Email notifications",
            "💰 Secure payment processing",
            "📍 Location-based services",
            "🎯 Smart product recommendations"
        ],
        challenges: [
            "Implementing complex exchange algorithms",
            "Building secure communication channels",
            "Creating intuitive user experience",
            "Developing trust and safety features"
        ],
        learnings: [
            "Advanced security implementations",
            "Real-time communication systems",
            "Complex business logic development",
            "Modern UI/UX design patterns"
        ],
        liveUrl: "#",
        githubUrl: "https://github.com/jubayer17",
        timeline: "Ongoing",
        category: "Marketplace",
        inDevelopment: true,
        animationClass: "",
    },
];
