import type { Metadata } from "next";

import { ExperienceTimeline } from "@/components/ExperienceTimeline";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { backendSkills, education } from "@/data/skills";

export const metadata: Metadata = {
  title: "About | kaushikmaslekar",
  description:
    "Professional summary, skills, timeline, and education of Kaushik Maslekar.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto w-full max-w-6xl space-y-12">
          <section>
            <h1 className="font-display text-[2.7rem] leading-tight tracking-tight text-foreground md:text-[3.5rem]">
              About
            </h1>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg">
              AI engineering enthusiast with hands-on experience in machine
              learning pipelines, scalable backend infrastructure, and
              cloud-native systems. I focus on building reliable APIs,
              event-driven services, and production-grade platforms that balance
              performance, maintainability, and observability.
            </p>
          </section>

          <section>
            <h2 className="font-display text-[2rem] tracking-tight text-foreground md:text-[2.25rem]">
              Skills
            </h2>
            <div className="mt-5 flex flex-wrap gap-2">
              {backendSkills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-white/15 bg-card/60 px-4 py-2 text-sm text-foreground"
                >
                  {skill}
                </span>
              ))}
            </div>
          </section>

          <ExperienceTimeline />

          <section>
            <h2 className="font-display text-[2rem] tracking-tight text-foreground md:text-[2.25rem]">
              Education
            </h2>
            <div className="mt-5 rounded-2xl border border-white/10 bg-card/60 p-6">
              <h3 className="text-xl font-semibold text-foreground">
                {education.degree}
              </h3>
              <p className="mt-2 text-sm text-zinc-300">
                {education.institution}
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                {education.period}
              </p>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
