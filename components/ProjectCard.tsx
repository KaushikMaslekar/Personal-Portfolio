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
        <CardContent className="space-y-4">
          <p className="text-sm leading-relaxed text-muted-foreground">
            {project.summary}
          </p>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <Badge
                key={tech}
                variant="secondary"
                className="bg-muted/70 text-xs"
              >
                {tech}
              </Badge>
            ))}
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
