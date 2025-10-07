"use client";

interface TechTagProps {
  technology: string;
}

const getTechColor = (tech: string) => {
  const techColors: { [key: string]: string } = {
    "Next.js": "bg-gray-900 text-white",
    "React": "bg-blue-500 text-white",
    "Node.js": "bg-green-600 text-white",
    "MongoDB": "bg-green-500 text-white",
    "Express.js": "bg-gray-600 text-white",
    "TypeScript": "bg-blue-600 text-white",
    "JavaScript": "bg-yellow-400 text-gray-900",
    "Tailwind CSS": "bg-cyan-400 text-gray-900",
    "Stripe": "bg-purple-600 text-white",
    "Clerk": "bg-indigo-600 text-white",
    "shadcn/ui": "bg-slate-700 text-white",
    "Axios": "bg-blue-400 text-white",
    "NodeMailer": "bg-red-500 text-white",
  };
  
  return techColors[tech] || "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200";
};

export default function TechTag({ technology }: TechTagProps) {
  return (
    <span className={`px-2 py-1 text-xs font-medium rounded ${getTechColor(technology)}`}>
      {technology}
    </span>
  );
}
