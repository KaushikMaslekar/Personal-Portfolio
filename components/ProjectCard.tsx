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
import type { Project } from "@/data/projects";

type ProjectCardProps = {
  project: Project;
  index?: number;
};

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.01 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
    >
      <Card className="h-full border-white/10 bg-card/65 shadow-[0_12px_40px_rgb(0_0_0/0.2)] backdrop-blur-lg">
        <CardHeader>
          <p className="font-mono text-xs uppercase tracking-[0.14em] text-zinc-300">
            {String(index ?? 1).padStart(2, "0")}
          </p>
          <CardTitle className="font-display text-xl leading-tight text-foreground">
            {project.title}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <p className="text-sm leading-relaxed text-muted-foreground">
            {project.summary}
          </p>

          {/* Engineering Challenges */}
          {project.engineeringChallenges &&
            project.engineeringChallenges.length > 0 && (
              <div className="space-y-2 pt-2 border-t border-white/5">
                <ul className="space-y-1">
                  {project.engineeringChallenges
                    .slice(0, 2)
                    .map((challenge) => (
                      <li
                        key={challenge}
                        className="text-xs text-muted-foreground flex items-start gap-2"
                      >
                        <span className="text-muted-foreground/40 mt-1 text-[5px]">▪</span>
                        <span>{challenge}</span>
                      </li>
                    ))}
                </ul>
              </div>
            )}

          {/* Metrics */}
          {project.metrics && project.metrics.length > 0 && (
            <div className="grid grid-cols-3 gap-2 rounded-lg bg-white/5 p-2 pt-3 border-t border-white/5">
              {project.metrics.slice(0, 3).map((metric) => (
                <div key={metric.label} className="space-y-0.5">
                  <p className="text-xs font-mono text-foreground font-semibold">
                    {metric.value}
                  </p>
                  <p className="text-[10px] text-muted-foreground leading-tight">
                    {metric.label}
                  </p>
                </div>
              ))}
            </div>
          )}

          <div className="flex flex-wrap gap-1.5 pt-2 border-t border-white/5">
            {project.technologies.slice(0, 6).map((tech) => (
              <Badge
                key={tech}
                variant="secondary"
                className="bg-white/5 border border-white/10 text-muted-foreground text-xs font-normal"
              >
                {tech}
              </Badge>
            ))}
            {project.technologies.length > 6 && (
              <Badge
                variant="secondary"
                className="bg-white/5 border border-white/10 text-muted-foreground text-xs font-normal"
              >
                +{project.technologies.length - 6}
              </Badge>
            )}
          </div>
        </CardContent>
        <CardFooter className="mt-auto flex items-center gap-4 border-t border-white/10 pt-5">
          <Link
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <Github className="size-4" />
            GitHub
          </Link>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
