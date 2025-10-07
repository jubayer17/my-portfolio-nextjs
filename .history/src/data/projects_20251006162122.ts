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
}

export const projectsData: Project[] = [
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
        inDevelopment: false,
        animationClass: "animate-on-scroll",
    },
    {
        title: "Exchango",
        description:
            "Exchango is a secure online marketplace for buying, selling, and exchanging both new and second-hand products. With seamless buyer–seller communication and end-to-end security, it ensures every transaction is simple, transparent, and trustworthy.",
        image: "",
        imageAlt: "exchango",
        icon: "fas fa-exchange-alt",
        technologies: ["Next.js", "Express.js", "Tailwind CSS", "MongoDB", "shadcn/ui", "Axios", "NodeMailer"],
        liveUrl: "#",
        githubUrl: "#",
        inDevelopment: true,
        animationClass: "",
    },
];
