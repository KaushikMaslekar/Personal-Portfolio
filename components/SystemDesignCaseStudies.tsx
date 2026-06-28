"use client";

import { motion } from "framer-motion";
import { systemDesignCaseStudies } from "@/data/system-design";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function SystemDesignCaseStudies() {
  return (
    <section className="space-y-8 py-20">
      <div className="space-y-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-foreground">
            System Design Case Studies
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Deep-dive analysis of common system design problems, scaling
            challenges, and architectural trade-offs.
          </p>
        </motion.div>
      </div>

      <div className="space-y-6">
        {systemDesignCaseStudies.map((caseStudy, idx) => (
          <motion.div
            key={caseStudy.slug}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.05 }}
            viewport={{ once: true }}
            whileHover={{ x: 4 }}
          >
            <Card className="border-white/10 bg-card/50 shadow-lg backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-xl text-foreground">
                  {caseStudy.title}
                </CardTitle>
                <CardDescription className="text-sm text-muted-foreground">
                  {caseStudy.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Core Components */}
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <p className="text-xs font-semibold uppercase tracking-wide text-zinc-400">
                      Core Components
                    </p>
                    <ul className="space-y-1">
                      {caseStudy.coreComponents.map((component) => (
                        <li
                          key={component}
                          className="flex items-start gap-2 text-xs text-muted-foreground"
                        >
                          <span className="text-muted-foreground/50 mt-1 text-[6px]">▪</span>
                          <span>{component}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Scaling Challenges */}
                  <div className="space-y-2">
                    <p className="text-xs font-semibold uppercase tracking-wide text-zinc-400">
                      Scaling Challenges
                    </p>
                    <ul className="space-y-1">
                      {caseStudy.scalingChallenges.map((challenge) => (
                        <li
                          key={challenge}
                          className="flex items-start gap-2 text-xs text-muted-foreground"
                        >
                          <span className="text-muted-foreground/50 mt-1 text-[6px]">▪</span>
                          <span>{challenge}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Database Decisions */}
                  <div className="space-y-2">
                    <p className="text-xs font-semibold uppercase tracking-wide text-zinc-400">
                      Database Decisions
                    </p>
                    <ul className="space-y-1">
                      {caseStudy.databaseDecisions.map((decision) => (
                        <li
                          key={decision}
                          className="flex items-start gap-2 text-xs text-muted-foreground"
                        >
                          <span className="text-muted-foreground/50 mt-1 text-[6px]">▪</span>
                          <span>{decision}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Engineering Tradeoffs */}
                  <div className="space-y-2">
                    <p className="text-xs font-semibold uppercase tracking-wide text-zinc-400">
                      Engineering Trade-offs
                    </p>
                    <ul className="space-y-1">
                      {caseStudy.engineeringTradeoffs.map((tradeoff) => (
                        <li
                          key={tradeoff}
                          className="flex items-start gap-2 text-xs text-muted-foreground"
                        >
                          <span className="text-muted-foreground/50 mt-1 text-[6px]">▪</span>
                          <span>{tradeoff}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Estimated Numbers */}
                {caseStudy.estimatedNumbers &&
                  caseStudy.estimatedNumbers.length > 0 && (
                    <div className="border-t border-white/10 pt-4">
                      <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-zinc-400">
                        Estimated Numbers
                      </p>
                      <div className="grid gap-2 md:grid-cols-4">
                        {caseStudy.estimatedNumbers.map((num) => (
                          <div
                            key={num.label}
                            className="rounded bg-white/5 p-2"
                          >
                            <p className="font-mono text-sm font-semibold text-blue-400">
                              {num.value}
                            </p>
                            <p className="text-xs text-muted-foreground">
                              {num.label}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
