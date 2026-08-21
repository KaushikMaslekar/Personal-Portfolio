"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { Menu, Search } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const ThemeToggleClient = dynamic(
  () => import("@/components/ThemeToggle").then((mod) => mod.ThemeToggle),
  { ssr: false },
);

const navItems = [
  { label: "Home", href: "/" },
  { label: "Notes", href: "/notes" },
  { label: "Work", href: "/#projects" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/#contact" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 px-4 pt-4 md:px-8">
      <div className="mx-auto flex h-14 w-full max-w-6xl items-center justify-between rounded-full border border-white/10 bg-background/70 px-4 shadow-[0_8px_30px_rgb(0_0_0/0.22)] backdrop-blur-xl md:px-6">
        <Link
          href="/"
          className="max-w-[56vw] truncate font-display text-sm font-semibold tracking-tight text-foreground sm:text-base"
        >
          kaushikmaslekar
        </Link>

        <nav className="hidden items-center gap-1 rounded-full border border-white/10 bg-black/10 p-1 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-white/5 hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <button
            type="button"
            onClick={() =>
              window.dispatchEvent(new CustomEvent("open-terminal"))
            }
            className="flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-950/20 px-3 py-1.5 text-xs text-emerald-400 transition-colors hover:border-emerald-500 hover:bg-emerald-950/40"
            aria-label="Open developer terminal"
          >
            <span className="font-mono font-bold">&gt;_</span>
            <span>CLI</span>
            <kbd className="ml-0.5 rounded border border-emerald-500/30 px-1 py-0.5 text-[10px] text-emerald-300">
              ~
            </kbd>
          </button>
          <button
            type="button"
            onClick={() =>
              window.dispatchEvent(new CustomEvent("open-command-palette"))
            }
            className="flex items-center gap-1.5 rounded-full border border-white/15 px-3 py-1.5 text-xs text-muted-foreground transition-colors hover:bg-white/5 hover:text-foreground"
            aria-label="Open command palette"
          >
            <Search className="size-3" />
            <span>Search</span>
            <kbd className="ml-1 rounded border border-white/20 px-1 py-0.5 text-[10px]">
              ⌘K
            </kbd>
          </button>
          <ThemeToggleClient />
          <Link
            href="/Kaushik_Maslekar_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-white/15 px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-white/5"
          >
            Resume
          </Link>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggleClient />
          <Sheet>
            <SheetTrigger
              render={
                <Button
                  variant="ghost"
                  size="icon"
                  aria-label="Open navigation menu"
                  className="rounded-full"
                />
              }
            >
              <Menu className="size-5" />
            </SheetTrigger>
            <SheetContent
              side="right"
              className="border-white/10 bg-background/95"
            >
              <SheetHeader>
                <SheetTitle className="font-display">Navigate</SheetTitle>
              </SheetHeader>
              <div className="mt-6 grid gap-4">
                {navItems.map((item) => (
                  <SheetClose
                    key={item.href}
                    render={
                      <Link
                        href={item.href}
                        className="rounded-lg px-3 py-2 text-base text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                      />
                    }
                  >
                    {item.label}
                  </SheetClose>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
