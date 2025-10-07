"use client";

interface TechTagProps {
  technology: string;
}

export default function TechTag({ technology }: TechTagProps) {
  const getTagStyle = (tech: string) => {
    const styles: { [key: string]: string } = {
      "Next.js": "bg-black text-white",
      "React": "bg-blue-600 text-white",
      "Node.js": "bg-green-600 text-white",
      "MongoDB": "bg-green-500 text-white",
      "Express.js": "bg-gray-700 text-white",
      "TypeScript": "bg-blue-700 text-white",
      "JavaScript": "bg-yellow-500 text-black",
      "Tailwind CSS": "bg-cyan-500 text-white",
      "Stripe": "bg-purple-600 text-white",
      "Clerk": "bg-indigo-600 text-white",
      "shadcn/ui": "bg-slate-800 text-white",
      "Axios": "bg-blue-500 text-white",
      "NodeMailer": "bg-red-600 text-white",
    };
    
    return styles[tech] || "bg-gray-200 dark:bg-gray-600 text-gray-800 dark:text-gray-200";
  };

  return (
    <span className={`inline-block px-2 py-1 text-xs font-medium rounded ${getTagStyle(technology)}`}>
      {technology}
    </span>
  );
}
