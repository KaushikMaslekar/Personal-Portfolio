"use client";

import { useMemo, useState } from "react";
import { Github } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import { projects } from "@/data/projects";

export function ProjectsFilteredList() {
  const [activeTech, setActiveTech] = useState<string | null>(null);

  const allTechs = useMemo(() => {
    const techSet = new Set<string>();
    projects.forEach((p) => p.technologies.forEach((t) => techSet.add(t)));
    return Array.from(techSet).sort();
  }, []);

  const filtered = activeTech
    ? projects.filter((p) => p.technologies.includes(activeTech))
    : projects;

  const toggle = (tech: string) =>
    setActiveTech((prev) => (prev === tech ? null : tech));

  return (
    <>
      {/* Filter bar */}
      <div className="mt-8 flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => setActiveTech(null)}
          className={`rounded-full border px-3 py-1.5 text-xs transition-colors ${
            activeTech === null
              ? "border-foreground bg-foreground text-background"
              : "border-border text-muted-foreground hover:border-foreground/50 hover:text-foreground"
          }`}
        >
          All
        </button>
        {allTechs.map((tech) => (
          <button
            key={tech}
            type="button"
            onClick={() => toggle(tech)}
            className={`rounded-full border px-3 py-1.5 text-xs transition-colors ${
              activeTech === tech
                ? "border-foreground bg-foreground text-background"
                : "border-border text-muted-foreground hover:border-foreground/50 hover:text-foreground"
            }`}
          >
            {tech}
          </button>
        ))}
      </div>

      {/* Result count */}
      <p className="mt-3 text-xs text-muted-foreground">
        {filtered.length} project{filtered.length !== 1 ? "s" : ""}
        {activeTech ? ` · filtered by ${activeTech}` : ""}
      </p>

      {/* Project cards */}
      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        <AnimatePresence mode="popLayout">
          {filtered.map((project, idx) => (
            <motion.article
              key={project.slug}
              layout
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{
                duration: 0.25,
                ease: "easeOut",
                delay: idx * 0.03,
              }}
              className="rounded-2xl border border-white/10 bg-card/65 p-6 backdrop-blur"
            >
              <h2 className="font-display text-2xl text-foreground">
                {project.title}
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {project.summary}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <button
                    key={tech}
                    type="button"
                    onClick={() => toggle(tech)}
                    className={`rounded-full border px-2.5 py-0.5 text-xs transition-colors ${
                      activeTech === tech
                        ? "border-foreground bg-foreground text-background"
                        : "border-border text-muted-foreground hover:border-foreground/50"
                    }`}
                  >
                    {tech}
                  </button>
                ))}
              </div>
              <div className="mt-6 flex gap-4 text-sm">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Github className="size-4" />
                  Repository
                </a>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </div>
    </>
  );
}
