import { Layers } from "lucide-react";

import ProjectsGrid from "@/components/projects/ProjectsGrid";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { visibleProjects } from "@/data/resume";

export const metadata = {
  title: "Projects",
  description:
    "Enterprise ERP, salon and restaurant management systems, job marketplaces, real-estate platforms, and developer tools built by Jubayer Ahmed.",
};

export default function ProjectsPage() {
  return (
    <main id="content" className="shell py-12 md:py-16">
      <AnimatedSection>
        <span className="chip">
          <Layers className="h-3 w-3" aria-hidden="true" />
          Portfolio
        </span>
        <h1
          className="font-outfit mt-4 text-[clamp(2rem,6vw,3rem)] font-bold leading-tight tracking-tight"
          style={{ color: "var(--fg)" }}
        >
          Projects
        </h1>
        <p
          className="mt-3 max-w-prose text-sm leading-relaxed md:text-base"
          style={{ color: "var(--fg-3)" }}
        >
          {visibleProjects.length} builds spanning multi-tenant ERP, language-learning and
          restaurant platforms, job marketplaces, real estate, and competitive-programming
          tooling — each focused on maintainable architecture and practical outcomes.
        </p>
      </AnimatedSection>

      <AnimatedSection className="mt-9" delay={0.08}>
        <ProjectsGrid projects={visibleProjects} />
      </AnimatedSection>
    </main>
  );
}
