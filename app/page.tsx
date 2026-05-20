import { ContactSection } from "@/components/ContactSection";
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
        <TechStack />
        <EngineeringNotes />
        <FeaturedProjects />
        <GitHubActivityNoSSR />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
