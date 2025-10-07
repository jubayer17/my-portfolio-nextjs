"use client";

interface TechTagProps {
  technology: string;
}

const getTechColor = (tech: string) => {
  const techColors: { [key: string]: string } = {
    "Next.js": "bg-black text-white",
    React: "bg-blue-500 text-white",
    "Node.js": "bg-green-600 text-white",
    MongoDB: "bg-green-500 text-white",
    "Express.js": "bg-gray-600 text-white",
    TypeScript: "bg-blue-600 text-white",
    JavaScript: "bg-yellow-500 text-black",
    "Tailwind CSS": "bg-cyan-500 text-white",
    Stripe: "bg-purple-600 text-white",
    Clerk: "bg-indigo-600 text-white",
    "shadcn/ui": "bg-slate-700 text-white",
    Axios: "bg-blue-400 text-white",
    NodeMailer: "bg-red-500 text-white",
  };

  return techColors[tech] || "bg-gray-500 text-white";
};

export default function TechTag({ technology }: TechTagProps) {
  return (
    <span
      className={`
      inline-block px-3 py-1 text-xs font-medium rounded-full
      transition-all duration-200 hover:scale-105 cursor-default
      ${getTechColor(technology)}
    `}
    >
      {technology}
    </span>
  );
}
