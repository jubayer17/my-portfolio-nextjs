"use client";

interface TechTagProps {
  technology: string;
}

export default function TechTag({ technology }: TechTagProps) {
  const getTagStyle = (tech: string) => {
    const styles: { [key: string]: string } = {
      "Next.js": "bg-black text-white",
      "React": "bg-blue-500 text-white",
      "Node.js": "bg-green-600 text-white",
      "MongoDB": "bg-green-500 text-white",
      "Express.js": "bg-gray-700 text-white",
      "TypeScript": "bg-blue-600 text-white",
      "JavaScript": "bg-yellow-400 text-gray-900",
      "Tailwind CSS": "bg-cyan-400 text-gray-900",
      "Stripe": "bg-purple-600 text-white",
      "Clerk": "bg-indigo-600 text-white",
      "shadcn/ui": "bg-slate-700 text-white",
      "Axios": "bg-blue-400 text-white",
      "NodeMailer": "bg-red-500 text-white",
    };
    
    return styles[tech] || "bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300";
  };

  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 text-xs font-medium rounded-full transition-all duration-200 hover:scale-105 ${getTagStyle(technology)}`}>
      {technology}
    </span>
  );
}
