"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Github } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { featuredExperiences } from "@/data/skills";

export function ExperienceSection() {
  return (
    <section id="experience" className="px-5 py-14 md:px-8 md:py-20">
      <div className="mx-auto w-full max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-10"
        >
          <h2 className="font-display text-[2rem] tracking-tight text-foreground md:text-[2.25rem]">
            Experience
          </h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {featuredExperiences.map((experience, idx) => (
            <motion.div
              key={`${experience.company}-${experience.role}`}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.45,
                ease: "easeOut",
                delay: idx * 0.06,
              }}
              className="md:col-span-2"
            >
              <motion.div
                whileHover={{ y: -4, scale: 1.01 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
              >
                <Card className="h-full border-white/10 bg-card/65 shadow-[0_12px_40px_rgb(0_0_0/0.2)] backdrop-blur-lg">
                  <CardHeader>
                    <p className="font-mono text-xs uppercase tracking-[0.14em] text-zinc-300">
                      {experience.period}
                    </p>
                    <CardTitle className="font-display text-xl leading-tight text-foreground">
                      {experience.role}
                    </CardTitle>
                    <p className="text-sm text-zinc-300">
                      {experience.company}
                    </p>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {experience.summary}
                    </p>

                    <div className="space-y-2 border-t border-white/5 pt-2">
                      <ul className="space-y-1.5">
                        {experience.contributions.map((contribution) => (
                          <li
                            key={contribution}
                            className="flex items-start gap-2 text-sm text-muted-foreground"
                          >
                            <span className="mt-1 text-[5px] text-muted-foreground/40">
                              ▪
                            </span>
                            <span>{contribution}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-1.5 border-t border-white/5 pt-2">
                      {experience.technologies.map((technology) => (
                        <Badge
                          key={technology}
                          variant="secondary"
                          className="border border-white/10 bg-white/5 text-xs font-normal text-muted-foreground"
                        >
                          {technology}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>

                  <CardFooter className="mt-auto flex items-center justify-end border-t border-white/10 bg-transparent pt-5">
                    <Link
                      href={experience.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      <Github className="size-4" />
                      View Project
                    </Link>
                  </CardFooter>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
