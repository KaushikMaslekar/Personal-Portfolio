"use client";

import Link from "next/link";
import { ExternalLink, Search, X } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

import { engineeringNotes, type EngineeringNote } from "@/data/notes";

type EngineeringNotesProps = {
  limit?: number;
  showAllLink?: boolean;
};

function getHighImpactPoints(note: EngineeringNote): string[] {
  const points: string[] = [];

  if (note.tags.includes("RAG")) {
    points.push(
      "Cut hallucination risk by enforcing citation-backed responses and measuring grounded-answer rate.",
    );
  }

  if (note.tags.includes("LLM")) {
    points.push(
      "Reduce serving cost with model-routing policies while maintaining answer quality SLOs.",
    );
  }

  if (note.tags.includes("Transformers")) {
    points.push(
      "Improve p95 latency with attention optimizations and quantization without major quality regression.",
    );
  }

  if (note.tags.includes("Architecture") || note.tags.includes("Cloud")) {
    points.push(
      "Increase system resilience by separating synchronous user paths from asynchronous failure-prone workflows.",
    );
  }

  if (note.tags.includes("SRE") || note.tags.includes("Observability")) {
    points.push(
      "Lower MTTR using trace-led debugging and production alerts tied to real user-impact signals.",
    );
  }

  if (note.tags.includes("Performance") || note.tags.includes("Latency")) {
    points.push(
      "Protect user experience under load with backpressure, bounded queues, and adaptive concurrency control.",
    );
  }

  if (points.length < 3) {
    points.push(
      "Define a measurable baseline before rollout so improvements are provable, not anecdotal.",
      "Connect technical decisions to business metrics: reliability, cost per request, and response time.",
      "Design safe rollout + rollback paths to minimize production risk during model or infra changes.",
    );
  }

  return points.slice(0, 4);
}

export function EngineeringNotes({
  limit = 3,
  showAllLink = true,
}: EngineeringNotesProps) {
  const [activeNote, setActiveNote] = useState<EngineeringNote | null>(null);
  const [search, setSearch] = useState("");
  const [activeTag, setActiveTag] = useState<string | null>(null);
  const notes = engineeringNotes.slice(0, limit);

  const allTags = useMemo(() => {
    const tagSet = new Set<string>();
    notes.forEach((n) => n.tags.forEach((t) => tagSet.add(t)));
    return Array.from(tagSet).sort();
  }, [notes]);

  const filteredNotes = useMemo(() => {
    return notes.filter((note) => {
      const matchesTag = activeTag ? note.tags.includes(activeTag) : true;
      const matchesSearch = search.trim()
        ? note.title.toLowerCase().includes(search.toLowerCase()) ||
          note.summary.toLowerCase().includes(search.toLowerCase()) ||
          note.tags.some((t) => t.toLowerCase().includes(search.toLowerCase()))
        : true;
      return matchesTag && matchesSearch;
    });
  }, [notes, search, activeTag]);

  useEffect(() => {
    if (!activeNote) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveNote(null);
      }
    };

    window.addEventListener("keydown", handleEscape);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [activeNote]);

  return (
    <section id="notes" className="px-5 py-14 md:px-8 md:py-20">
      <div className="mx-auto w-full max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="mb-10"
        >
          <h2 className="font-display text-[2rem] tracking-tight text-foreground md:text-[2.25rem]">
            Engineering Notes
          </h2>
          <p className="mt-2 max-w-2xl text-muted-foreground">
            Short notes on RAG systems, cloud architecture, and distributed
            systems. I write these to think in public and build a strong
            long-term engineering brand.
          </p>
        </motion.div>

        {!showAllLink ? (
          <div className="mb-8 space-y-4">
            {/* Search input */}
            <div className="relative max-w-md">
              <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search notes…"
                className="w-full rounded-full border border-border bg-card py-2 pl-9 pr-9 text-sm text-foreground outline-none placeholder:text-muted-foreground focus:border-foreground/40"
              />
              {search ? (
                <button
                  type="button"
                  onClick={() => setSearch("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  aria-label="Clear search"
                >
                  <X className="size-3.5" />
                </button>
              ) : null}
            </div>
            {/* Tag filter pills */}
            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => setActiveTag(null)}
                className={`rounded-full border px-3 py-1 text-xs transition-colors ${
                  activeTag === null
                    ? "border-foreground bg-foreground text-background"
                    : "border-border text-muted-foreground hover:border-foreground/40 hover:text-foreground"
                }`}
              >
                All
              </button>
              {allTags.map((tag) => (
                <button
                  key={tag}
                  type="button"
                  onClick={() =>
                    setActiveTag((prev) => (prev === tag ? null : tag))
                  }
                  className={`rounded-full border px-3 py-1 text-xs transition-colors ${
                    activeTag === tag
                      ? "border-foreground bg-foreground text-background"
                      : "border-border text-muted-foreground hover:border-foreground/40 hover:text-foreground"
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
            <p className="text-xs text-muted-foreground">
              {filteredNotes.length} note{filteredNotes.length !== 1 ? "s" : ""}
              {activeTag ? ` · tagged ${activeTag}` : ""}
              {search ? ` · matching \"${search}\"` : ""}
            </p>
          </div>
        ) : null}

        <div className="grid gap-5 md:grid-cols-3">
          {filteredNotes.map((note, idx) => (
            <motion.article
              key={note.slug}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, ease: "easeOut", delay: idx * 0.06 }}
              className="rounded-2xl border border-border bg-card p-5"
            >
              <button
                type="button"
                onClick={() => setActiveNote(note)}
                className="w-full cursor-pointer text-left"
                aria-label={`Open engineering note: ${note.title}`}
              >
                <div className="flex items-center justify-between gap-2 text-xs text-muted-foreground">
                  <span>{new Date(note.publishedOn).toLocaleDateString()}</span>
                  <span>{note.readTime}</span>
                </div>

                <h3 className="mt-3 text-lg text-foreground">{note.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {note.summary}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {note.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-border px-2.5 py-1 text-xs text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <p className="mt-4 text-sm text-foreground underline underline-offset-4">
                  Read detailed note
                </p>
              </button>
            </motion.article>
          ))}
        </div>

        {showAllLink ? (
          <div className="mt-8">
            <Link
              href="/notes"
              className="inline-flex rounded-full border border-border px-4 py-2 text-sm text-foreground transition-colors hover:bg-muted"
            >
              Read all notes
            </Link>
          </div>
        ) : null}
      </div>

      {activeNote ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={activeNote.title}
          className="fixed inset-0 z-[80] flex items-center justify-center bg-black/70 p-4"
          onClick={() => setActiveNote(null)}
        >
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="max-h-[85vh] w-full max-w-3xl overflow-y-auto rounded-2xl border border-border bg-card p-6 md:p-8"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs text-muted-foreground">
                  {new Date(activeNote.publishedOn).toLocaleDateString()} ·{" "}
                  {activeNote.readTime}
                </p>
                <h3 className="mt-2 text-2xl text-foreground">
                  {activeNote.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setActiveNote(null)}
                className="rounded-full border border-border p-2 text-muted-foreground transition-colors hover:text-foreground"
                aria-label="Close note details"
              >
                <X className="size-4" />
              </button>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {activeNote.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-border px-2.5 py-1 text-xs text-muted-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>

            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              {activeNote.summary}
            </p>

            <div className="mt-6 space-y-3">
              <h4 className="text-lg text-foreground">
                High-Impact Discussion Points
              </h4>
              <ul className="space-y-3 text-sm leading-relaxed text-muted-foreground">
                {getHighImpactPoints(activeNote).map((point) => (
                  <li
                    key={point}
                    className="rounded-lg border border-border p-3"
                  >
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 space-y-3">
              <h4 className="text-lg text-foreground">Detailed Takeaways</h4>
              <ul className="space-y-3 text-sm leading-relaxed text-muted-foreground">
                {activeNote.details.map((detail) => (
                  <li
                    key={detail}
                    className="rounded-lg border border-border p-3"
                  >
                    {detail}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-7">
              <h4 className="text-lg text-foreground">Important Websites</h4>
              <div className="mt-3 grid gap-2">
                {activeNote.resources.map((resource) => (
                  <Link
                    key={resource.url}
                    href={resource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-border px-3 py-2 text-sm text-foreground transition-colors hover:bg-muted"
                  >
                    <ExternalLink className="size-4" />
                    <span>{resource.label}</span>
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      ) : null}
    </section>
  );
}
