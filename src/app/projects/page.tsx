import ProjectsGrid from "@/components/projects/ProjectsGrid";
import { resume } from "@/data/resume";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { Layers } from "lucide-react";

export const metadata = { title: "Projects" };

export default function ProjectsPage() {
  return (
    <main id="content" className="mx-auto max-w-6xl px-6 py-14 md:px-6 md:py-20">

      <AnimatedSection>
        <span className="chip">
          <Layers className="h-3 w-3" />
          Portfolio
        </span>
        <h1
          className="font-outfit mt-4 text-4xl font-black tracking-tight md:text-5xl"
          style={{ color: "var(--fg)" }}
        >
          Projects
        </h1>
        <p className="mt-3 max-w-prose text-sm leading-relaxed md:text-base" style={{ color: "var(--fg-3)" }}>
          A curated set of builds focused on maintainable architecture, polished UI,
          and practical outcomes.
        </p>
      </AnimatedSection>

      <AnimatedSection className="mt-10" delay={0.1}>
        <ProjectsGrid projects={resume.projects} />
      </AnimatedSection>

    </main>
  );
}
