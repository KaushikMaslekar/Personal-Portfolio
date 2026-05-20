"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const phoneNumber = "+919325790846";
const whatsappBookingLink =
  "https://wa.me/919325790846?text=Hi%20Kaushik%2C%20I%20want%20to%20book%20a%20call.";

export function ContactSection() {
  return (
    <section id="contact" className="px-5 py-14 md:px-8 md:py-20">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="mx-auto w-full max-w-6xl"
      >
        <div className="relative overflow-hidden rounded-2xl border border-border bg-card px-6 py-16 md:px-10 md:py-20">
          <span className="pointer-events-none absolute left-0 right-0 top-4 border-t border-border" />
          <span className="pointer-events-none absolute left-0 right-0 bottom-4 border-t border-border" />

          <span className="pointer-events-none absolute left-0 top-4 -translate-x-1/2 -translate-y-1/2 text-4xl leading-none text-zinc-500">
            +
          </span>
          <span className="pointer-events-none absolute right-0 top-4 translate-x-1/2 -translate-y-1/2 text-4xl leading-none text-zinc-500">
            +
          </span>
          <span className="pointer-events-none absolute left-0 bottom-4 -translate-x-1/2 translate-y-1/2 text-4xl leading-none text-zinc-500">
            +
          </span>
          <span className="pointer-events-none absolute right-0 bottom-4 translate-x-1/2 translate-y-1/2 text-4xl leading-none text-zinc-500">
            +
          </span>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.45, delay: 0.05 }}
            className="mx-auto flex max-w-2xl flex-col items-center text-center"
          >
            <h2 className="font-display text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
              Let&apos;s work together
            </h2>
            <p className="mt-4 text-lg text-zinc-400 md:text-xl">
              Have a project in mind? Let&apos;s create something amazing.
            </p>

            <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="mailto:maslekarkaushik@gmail.com"
                className={cn(
                  buttonVariants({ variant: "outline" }),
                  "rounded-xl border-border px-6 py-6 text-lg",
                )}
              >
                Email Me
              </Link>
              <Link
                href={whatsappBookingLink}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  buttonVariants(),
                  "rounded-xl bg-white px-6 py-6 text-lg text-black hover:bg-zinc-200",
                )}
              >
                Book a Call
                <ArrowRight className="ml-2 size-5" />
              </Link>
            </div>

            <p className="mt-3 text-sm text-zinc-400">
              Prefer direct call?{" "}
              <Link
                href={`tel:${phoneNumber}`}
                className="text-foreground underline underline-offset-4"
              >
                +91 93257 90846
              </Link>
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
