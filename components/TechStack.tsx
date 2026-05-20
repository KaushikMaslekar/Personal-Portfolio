"use client";

import { motion } from "framer-motion";
import { skillGroups } from "@/data/skills";

export function TechStack() {
  return (
    <section id="stack" className="px-5 py-14 md:px-8 md:py-20">
      <div className="mx-auto w-full max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-10"
        >
          <h2 className="font-display text-[2rem] tracking-tight text-foreground md:text-[2.25rem]">
            Tech Stack
          </h2>
          <p className="mt-2 max-w-2xl text-muted-foreground">
            Grouped by engineering domains, based on my production and research
            projects.
          </p>
        </motion.div>

        <div className="grid gap-4 lg:grid-cols-2">
          {skillGroups.map((group, idx) => (
            <motion.article
              key={group.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.35, delay: idx * 0.03 }}
              className="rounded-xl border border-white/10 bg-card/60 p-4 shadow-[0_8px_24px_rgb(0_0_0/0.16)]"
            >
              <p className="text-lg font-semibold text-foreground">
                {group.title}:
              </p>
              <p className="mt-1 text-sm leading-relaxed text-zinc-300">
                {group.items.join(", ")}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
