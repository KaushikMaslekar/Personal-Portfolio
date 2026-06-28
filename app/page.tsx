import { ContactSection } from "@/components/ContactSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { EngineeringNotes } from "@/components/EngineeringNotes";
import { FeaturedProjects } from "@/components/FeaturedProjects";
import { Footer } from "@/components/Footer";
import { GitHubActivityNoSSR } from "@/components/GitHubActivityNoSSR";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { TechStack } from "@/components/TechStack";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ExperienceSection />
        <TechStack />
        <FeaturedProjects />
        <EngineeringNotes />
        <GitHubActivityNoSSR />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
