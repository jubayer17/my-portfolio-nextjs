import ProjectsGrid from "@/components/projects/ProjectsGrid";
import { resume } from "@/data/resume";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { Layers } from "lucide-react";

export const metadata = {
  title: "Projects",
};

export default function ProjectsPage() {
  return (
    <main id="content" className="mx-auto max-w-6xl px-4 py-14 md:py-20">

      <AnimatedSection>
        <span className="section-label">
          <Layers className="h-3 w-3" />
          Portfolio
        </span>
        <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white md:text-5xl">
          Projects
        </h1>
        <p className="mt-3 max-w-prose text-sm leading-relaxed text-slate-600 dark:text-slate-400 md:text-base">
          A curated set of builds focused on maintainable architecture, polished UI, and
          practical outcomes.
        </p>
      </AnimatedSection>

      <AnimatedSection className="mt-10" delay={0.1}>
        <ProjectsGrid projects={resume.projects} />
      </AnimatedSection>

    </main>
  );
}
