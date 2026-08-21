"use client";

import { motion } from "framer-motion";
import { featuredExperiences } from "@/data/skills";


export function ExperienceTimeline() {
  return (
    <section className="py-6">
      <h3 className="font-display text-2xl tracking-tight text-foreground">
        Experience Timeline
      </h3>
      <div className="relative mt-8 space-y-8 border-l border-white/15 pl-7">
        {featuredExperiences.map((item, index) => (
          <motion.article
            key={`${item.role}-${item.period}`}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: index * 0.08 }}
            className="relative"
          >
            <span className="absolute -left-[2.05rem] top-1.5 h-3 w-3 rounded-full bg-zinc-200 shadow-[0_0_0_6px_rgba(255,255,255,0.04)]" />
            <div className="rounded-xl border border-white/10 bg-card/60 p-5 backdrop-blur">
              <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">
                {item.period}
              </p>
              <h4 className="mt-2 text-lg font-semibold text-foreground">
                {item.role}
              </h4>
              <p className="text-sm text-zinc-300">{item.company}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {item.summary}
              </p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
