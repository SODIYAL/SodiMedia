"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-4xl px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-2xl border border-border bg-card p-12 text-center md:p-16"
        >
          {/* Background glow */}
          <div className="absolute left-1/2 top-0 h-40 w-80 -translate-x-1/2 rounded-full bg-accent/20 blur-[100px]" />

          <h2 className="relative font-heading text-3xl font-bold md:text-4xl">
            Ready to Start Your{" "}
            <span className="gradient-text">Next Project</span>?
          </h2>
          <p className="relative mx-auto mt-4 max-w-lg text-muted">
            Let&apos;s discuss your ideas and bring them to life. We&apos;re here to help
            you build something amazing.
          </p>
          <div className="relative mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/contact"
              className="rounded-full bg-accent px-8 py-3 text-sm font-semibold text-background transition-all hover:bg-accent/80 hover:shadow-lg hover:shadow-accent/25"
            >
              Start a Conversation
            </Link>
            <Link
              href="/projects"
              className="rounded-full border border-border px-8 py-3 text-sm font-semibold text-foreground transition-colors hover:border-accent hover:text-accent"
            >
              See Our Work
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
