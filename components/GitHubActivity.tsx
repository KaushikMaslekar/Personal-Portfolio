"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { GitHubCalendar } from "react-github-calendar";
import { useTheme } from "next-themes";
import { useMemo } from "react";

const username = "KaushikMaslekar";

export function GitHubActivity() {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme !== "light";

  const calendarTheme = useMemo(
    () => ({
      light: ["#ebedf0", "#c6c6c6", "#9c9c9c", "#6e6e6e", "#000000"],
      dark: ["#161b22", "#2f2f2f", "#555555", "#8a8a8a", "#f5f5f5"],
    }),
    [],
  );

  return (
    <section id="github-activity" className="px-5 py-14 md:px-8 md:py-20">
      <div className="mx-auto w-full max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-8"
        >
          <h2 className="font-display text-[2rem] tracking-tight text-foreground md:text-[2.25rem]">
            GitHub Activity
          </h2>
          <p className="mt-2 text-muted-foreground">
            Live contribution graph synced from GitHub.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45 }}
          className="overflow-x-auto rounded-2xl border border-border bg-card p-4 md:p-6"
        >
          <div className="min-w-[620px] sm:min-w-[720px]">
            <GitHubCalendar
              username={username}
              blockSize={12}
              blockMargin={3}
              fontSize={12}
              colorScheme={isDark ? "dark" : "light"}
              theme={calendarTheme}
            />
          </div>

          <div className="mt-4 flex flex-col items-start justify-between gap-3 text-sm text-muted-foreground sm:flex-row sm:items-center sm:gap-4">
            <p>Updates automatically as your GitHub contributions change.</p>
            <Link
              href={`https://github.com/${username}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground underline underline-offset-4"
            >
              Follow me on GitHub
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
