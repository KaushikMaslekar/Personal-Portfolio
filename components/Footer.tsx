import Link from "next/link";
import { Github, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/10 px-5 py-8 md:px-8">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
        <p className="font-medium text-foreground">Kaushik Maslekar</p>
        <p>
          © {new Date().getFullYear()} kaushikmaslekar. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <Link
            href="https://github.com/KaushikMaslekar"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="transition-colors hover:text-foreground"
          >
            <Github className="size-4" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/kaushikmaslekar/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="transition-colors hover:text-foreground"
          >
            <Linkedin className="size-4" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
