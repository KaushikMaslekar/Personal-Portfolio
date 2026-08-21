"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowRight, FileText, FolderOpen, Search, X } from "lucide-react";
import { motion } from "framer-motion";

import { engineeringNotes } from "@/data/notes";
import { projects } from "@/data/projects";

type ResultItem = {
  id: string;
  type: "page" | "project" | "note";
  label: string;
  description: string;
  href: string;
};

const staticPages: ResultItem[] = [
  {
    id: "page-recruiter",
    type: "page",
    label: "Recruiter Fast-Track (1-Min Read)",
    description: "60-second executive summary & key proof points",
    href: "recruiter://open",
  },
  {
    id: "page-terminal",
    type: "page",
    label: "Developer Terminal (CLI Mode)",
    description: "Launch interactive terminal with commands (Shortcut: ~)",
    href: "terminal://open",
  },
  {
    id: "page-home",
    type: "page",
    label: "Home",
    description: "Back to the homepage",
    href: "/",
  },
  {
    id: "page-about",
    type: "page",
    label: "About",
    description: "Skills, experience, and education",
    href: "/about",
  },
  {
    id: "page-projects",
    type: "page",
    label: "Projects",
    description: "All engineering projects",
    href: "/projects",
  },
  {
    id: "page-notes",
    type: "page",
    label: "Engineering Notes",
    description: "All notes on RAG, cloud, and systems",
    href: "/notes",
  },
  {
    id: "page-contact",
    type: "page",
    label: "Contact",
    description: "Get in touch",
    href: "/#contact",
  },
];

const allItems: ResultItem[] = [
  ...staticPages,
  ...projects.map((p) => ({
    id: `project-${p.slug}`,
    type: "project" as const,
    label: p.title,
    description: p.summary.slice(0, 85) + "…",
    href: "/projects",
  })),
  ...engineeringNotes.map((n) => ({
    id: `note-${n.slug}`,
    type: "note" as const,
    label: n.title,
    description: n.tags.join(" · "),
    href: "/notes",
  })),
];

export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [focused, setFocused] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const router = useRouter();

  const filtered = query.trim()
    ? allItems.filter(
        (item) =>
          item.label.toLowerCase().includes(query.toLowerCase()) ||
          item.description.toLowerCase().includes(query.toLowerCase()),
      )
    : staticPages;

  const openPalette = useCallback(() => {
    setOpen(true);
    setQuery("");
    setFocused(0);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        openPalette();
      }
    };
    const handleOpen = () => openPalette();

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("open-command-palette", handleOpen);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("open-command-palette", handleOpen);
    };
  }, [openPalette]);

  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 30);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!listRef.current) return;
    const el = listRef.current.children[focused] as HTMLElement | undefined;
    el?.scrollIntoView({ block: "nearest" });
  }, [focused]);

  const select = useCallback(
    (item: ResultItem) => {
      setOpen(false);
      if (item.href === "terminal://open") {
        window.dispatchEvent(new CustomEvent("open-terminal"));
        return;
      }
      if (item.href === "recruiter://open") {
        window.dispatchEvent(new CustomEvent("open-recruiter-modal"));
        return;
      }
      router.push(item.href);
    },
    [router],
  );

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setFocused((f) => Math.min(f + 1, filtered.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setFocused((f) => Math.max(f - 1, 0));
    } else if (e.key === "Enter" && filtered[focused]) {
      select(filtered[focused]);
    } else if (e.key === "Escape") {
      setOpen(false);
    }
  };

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Command palette"
      className="fixed inset-0 z-[100] flex items-start justify-center bg-black/75 px-4 pt-[14vh]"
      onClick={() => setOpen(false)}
    >
      <motion.div
        initial={{ opacity: 0, y: -10, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.16, ease: "easeOut" }}
        className="w-full max-w-xl overflow-hidden rounded-2xl border border-border bg-card shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search input */}
        <div className="flex items-center gap-3 border-b border-border px-4 py-3">
          <Search className="size-4 shrink-0 text-muted-foreground" />
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setFocused(0);
            }}
            onKeyDown={handleKeyDown}
            placeholder="Search pages, projects, notes…"
            className="flex-1 bg-transparent text-sm text-foreground outline-none placeholder:text-muted-foreground"
            aria-label="Search"
            autoComplete="off"
            spellCheck={false}
          />
          {query ? (
            <button
              type="button"
              onClick={() => setQuery("")}
              className="text-muted-foreground hover:text-foreground"
              aria-label="Clear search"
            >
              <X className="size-4" />
            </button>
          ) : null}
          <kbd className="rounded border border-border px-1.5 py-0.5 text-xs text-muted-foreground">
            Esc
          </kbd>
        </div>

        {/* Results */}
        <ul
          ref={listRef}
          className="max-h-72 overflow-y-auto py-1"
          role="listbox"
          aria-label="Search results"
        >
          {filtered.length === 0 ? (
            <li className="px-4 py-8 text-center text-sm text-muted-foreground">
              No results for &ldquo;{query}&rdquo;
            </li>
          ) : (
            filtered.map((item, idx) => {
              const Icon =
                item.type === "note"
                  ? FileText
                  : item.type === "project"
                    ? FolderOpen
                    : ArrowRight;
              return (
                <li key={item.id} role="option" aria-selected={focused === idx}>
                  <button
                    type="button"
                    onMouseEnter={() => setFocused(idx)}
                    onClick={() => select(item)}
                    className={`flex w-full items-center gap-3 px-4 py-2.5 text-left transition-colors ${
                      focused === idx ? "bg-muted" : ""
                    }`}
                  >
                    <Icon className="size-4 shrink-0 text-muted-foreground" />
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm text-foreground">
                        {item.label}
                      </p>
                      <p className="truncate text-xs text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                    <span className="shrink-0 rounded-full border border-border px-2 py-0.5 text-xs text-muted-foreground">
                      {item.type}
                    </span>
                  </button>
                </li>
              );
            })
          )}
        </ul>

        {/* Footer shortcuts */}
        <div className="flex items-center gap-4 border-t border-border px-4 py-2 text-xs text-muted-foreground">
          <span>
            <kbd className="rounded border border-border px-1 py-0.5">↑↓</kbd>{" "}
            navigate
          </span>
          <span>
            <kbd className="rounded border border-border px-1 py-0.5">↩</kbd>{" "}
            open
          </span>
          <span>
            <kbd className="rounded border border-border px-1 py-0.5">Esc</kbd>{" "}
            close
          </span>
          <span className="ml-auto opacity-60">⌘K</span>
        </div>
      </motion.div>
    </div>
  );
}
