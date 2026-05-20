"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  CloudCog,
  Database,
  ServerCog,
  Sparkles,
} from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const containerVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
      staggerChildren: 0.08,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0 },
};

const floatingIcons = [
  { icon: ServerCog, delay: 0 },
  { icon: CloudCog, delay: 0.2 },
  { icon: Database, delay: 0.4 },
];

const availabilityTags = [
  "Available For Backend Roles",
  "Available For Cloud Roles",
  "Available For AI Roles",
];

const liveHeadlines = [
  "Cloud-native backend systems",
  "AI-powered product engineering",
  "Distributed platforms at scale",
];

const longestHeadline = liveHeadlines.reduce((longest, current) =>
  current.length > longest.length ? current : longest,
);

export function Hero() {
  const [headlineIndex, setHeadlineIndex] = useState(0);
  const [typedHeadline, setTypedHeadline] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullText = liveHeadlines[headlineIndex];
    const typingDelay = isDeleting ? 45 : 75;

    if (!isDeleting && typedHeadline === fullText) {
      const holdTimer = window.setTimeout(() => setIsDeleting(true), 1100);
      return () => window.clearTimeout(holdTimer);
    }

    if (isDeleting && typedHeadline.length === 0) {
      const resetTimer = window.setTimeout(() => {
        setIsDeleting(false);
        setHeadlineIndex((prev) => (prev + 1) % liveHeadlines.length);
      }, 0);
      return () => window.clearTimeout(resetTimer);
    }

    const timer = window.setTimeout(() => {
      setTypedHeadline((prev) =>
        isDeleting
          ? fullText.slice(0, Math.max(0, prev.length - 1))
          : fullText.slice(0, prev.length + 1),
      );
    }, typingDelay);

    return () => window.clearTimeout(timer);
  }, [headlineIndex, isDeleting, typedHeadline]);

  return (
    <section
      id="home"
      className="relative overflow-hidden px-5 pb-14 pt-12 md:px-8 md:pb-20 md:pt-16"
    >
      <div className="absolute -left-20 top-4 h-72 w-72 rounded-full bg-white/8 blur-3xl" />
      <div className="absolute -right-16 top-24 h-72 w-72 rounded-full bg-white/6 blur-3xl" />

      <div className="mx-auto grid w-full max-w-6xl items-center gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="min-w-0 space-y-7"
        >
          <motion.div variants={itemVariants} className="flex flex-wrap gap-2">
            {availabilityTags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-2.5 py-1 text-[10px] uppercase tracking-[0.1em] text-foreground sm:px-3 sm:text-xs sm:tracking-[0.14em]"
              >
                <CheckCircle2 className="size-3.5" />
                {tag}
              </span>
            ))}
          </motion.div>

          <motion.h3
            variants={itemVariants}
            className="text-sm font-semibold uppercase tracking-[0.16em] text-zinc-400 md:text-base"
          >
            Backend · AI Engineering · Cloud Computing
          </motion.h3>

          <motion.h1
            variants={itemVariants}
            className="relative max-w-2xl text-[2rem] leading-[1.06] tracking-tight text-foreground sm:break-words sm:text-[3.2rem] lg:text-[4rem]"
          >
            <span className="block pr-2 sm:hidden">{liveHeadlines[0]}</span>
            <span className="invisible hidden pr-2 sm:block">
              {longestHeadline}|
            </span>
            <span className="absolute inset-0 hidden pr-2 sm:block">
              {typedHeadline}
              <span className="ml-1 inline-block animate-pulse text-zinc-300">
                |
              </span>
            </span>
          </motion.h1>

          <motion.h2
            variants={itemVariants}
            className="text-lg font-semibold leading-snug text-foreground/95 md:text-xl"
          >
            Kaushik Maslekar
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base md:text-lg"
          >
            I build scalable backend systems and cloud-native infrastructure
            using Java, Spring Boot, and modern distributed technologies.
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="max-w-2xl text-sm leading-relaxed text-zinc-300 sm:text-base md:text-lg"
          >
            On the backend side, I design resilient APIs and event-driven
            microservices for real production workloads.
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="max-w-2xl text-sm leading-relaxed text-zinc-300 sm:text-base md:text-lg"
          >
            On the AI side, I build practical RAG and ML-powered features that
            integrate cleanly into cloud-native systems.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col gap-3 sm:flex-row sm:flex-wrap"
          >
            <Link
              href="/#projects"
              className={cn(
                buttonVariants(),
                "group w-full rounded-full bg-white px-6 text-black hover:bg-white/90 sm:w-auto",
              )}
            >
              View Projects
              <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/contact"
              className={cn(
                buttonVariants({ variant: "secondary" }),
                "w-full rounded-full px-6 sm:w-auto",
              )}
            >
              Contact Me
            </Link>
            <Link
              href="/Kaushik_Maslekar_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                buttonVariants({ variant: "outline" }),
                "w-full rounded-full border-white/20 bg-transparent px-6 sm:w-auto",
              )}
            >
              Download Resume
            </Link>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="grid max-w-xl grid-cols-1 gap-3 rounded-2xl border border-white/10 bg-card/40 p-4 backdrop-blur sm:grid-cols-3"
          >
            <div>
              <p className="font-mono text-xs text-muted-foreground">focus</p>
              <p className="mt-1 text-sm font-medium">APIs + Microservices</p>
            </div>
            <div>
              <p className="font-mono text-xs text-muted-foreground">
                specialty
              </p>
              <p className="mt-1 text-sm font-medium">Event-driven Design</p>
            </div>
            <div>
              <p className="font-mono text-xs text-muted-foreground">target</p>
              <p className="mt-1 text-sm font-medium">Cloud Scale</p>
            </div>
          </motion.div>
        </motion.div>

        <motion.aside
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          className="relative min-w-0"
        >
          <div className="rounded-3xl border border-white/10 bg-card/70 p-6 shadow-2xl backdrop-blur">
            <div className="mb-4 flex items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-zinc-300" />
                <span className="h-2.5 w-2.5 rounded-full bg-zinc-500" />
                <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
              </div>
              <span className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-2 py-1 text-[10px] uppercase tracking-[0.12em] text-muted-foreground">
                <Sparkles className="size-3 text-zinc-200" />
                live config
              </span>
            </div>
            <div className="mb-4 rounded-xl border border-white/10 bg-black/25 p-2 text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
              platform blueprint
            </div>
            <p className="mb-4 text-xs text-muted-foreground">
              system-architecture.ts
            </p>
            <pre className="max-w-full overflow-x-auto whitespace-pre-wrap break-words rounded-xl border border-white/10 bg-black/40 p-3 font-mono text-[11px] text-zinc-200 sm:whitespace-pre sm:p-4 sm:text-sm">
              <code>
                {`interface ServiceBoundary {
  domain: "payments" | "events" | "observability";
  scale: "horizontal";
  strategy: "event-driven";
}

const cloudStack = {
  runtime: "Spring Boot",
  messaging: "Kafka",
  orchestration: "Kubernetes",
  datastore: ["PostgreSQL", "Redis", "MongoDB"],
  infrastructure: "Terraform",
};

const objective = "99.95% service availability";`}
              </code>
            </pre>
          </div>

          {floatingIcons.map(({ icon: Icon, delay }, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: [0, -8, 0] }}
              transition={{
                delay,
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
              className="absolute hidden lg:block"
              style={{
                top: `${12 + index * 28}%`,
                right: `${index % 2 === 0 ? -16 : -28}px`,
              }}
            >
              <div className="rounded-full border border-white/20 bg-background/70 p-2 backdrop-blur">
                <Icon className="size-4 text-zinc-200" />
              </div>
            </motion.div>
          ))}
        </motion.aside>
      </div>
    </section>
  );
}
