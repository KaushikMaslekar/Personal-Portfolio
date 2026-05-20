"use client";

import { motion } from "framer-motion";

import { ProjectCard } from "@/components/ProjectCard";
import { featuredProjects } from "@/data/projects";

export function FeaturedProjects() {
  return (
    <section id="projects" className="px-5 py-14 md:px-8 md:py-20">
      <div className="mx-auto w-full max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-10"
        >
          <h2 className="font-display text-[2rem] tracking-tight text-foreground md:text-[2.25rem]">
            Featured Projects
          </h2>
          <p className="mt-2 max-w-2xl text-muted-foreground">
            Selected engineering work focused on reliability, event processing,
            and cloud-native backend architecture.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {featuredProjects.map((project, idx) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.45,
                ease: "easeOut",
                delay: idx * 0.06,
              }}
            >
              <ProjectCard project={project} index={idx + 1} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
