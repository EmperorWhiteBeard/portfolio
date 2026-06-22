import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { TechStack } from "@/components/sections/tech-stack";
import { Certifications } from "@/components/sections/certifications";
import { Projects } from "@/components/sections/projects";
import { DevOpsLabs } from "@/components/sections/devops-labs";
import { DocumentationHub } from "@/components/sections/documentation-hub";
import { ArchitectureDiagrams } from "@/components/sections/architecture-diagrams";
import { Journey } from "@/components/sections/journey";
import { GitHubActivity } from "@/components/sections/github-activity";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <TechStack />
        <Certifications />
        <Projects />
        <DevOpsLabs />
        <DocumentationHub />
        <ArchitectureDiagrams />
        <Journey />
        <GitHubActivity />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
