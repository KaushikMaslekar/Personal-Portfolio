import type { Metadata } from "next";

import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { ProjectsFilteredList } from "@/components/ProjectsFilteredList";

export const metadata: Metadata = {
  title: "Projects | kaushikmaslekar",
  description:
    "Detailed project architecture and problem-solving portfolio for backend and cloud engineering.",
};

export default function ProjectsPage() {
  return (
    <>
      <Navbar />
      <main className="px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto w-full max-w-6xl">
          <h1 className="font-display text-[2.7rem] leading-tight tracking-tight text-foreground md:text-[3.5rem]">
            Projects
          </h1>
          <p className="mt-4 max-w-3xl text-base text-muted-foreground md:text-lg">
            Full architecture snapshots of the systems I have designed and
            built.
          </p>

          <ProjectsFilteredList />
        </div>
      </main>
      <Footer />
    </>
  );
}
