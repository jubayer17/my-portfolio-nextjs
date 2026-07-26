import Hero from "@/components/home/Hero";
import SkillsMap from "@/components/home/SkillsMap";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import Achievements from "@/components/home/Achievements";
import CtaBanner from "@/components/home/CtaBanner";

function Divider() {
  return <div className="h-px" style={{ background: "var(--border)" }} aria-hidden="true" />;
}

export default function HomePage() {
  return (
    <main id="content" className="shell">
      <Hero />
      <Divider />
      <SkillsMap />
      <Divider />
      <FeaturedProjects />
      <Divider />
      <Achievements />
      <CtaBanner />
    </main>
  );
}
