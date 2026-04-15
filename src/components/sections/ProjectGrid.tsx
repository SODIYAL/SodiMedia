"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/data/projects";

const categories = ["All", ...Array.from(new Set(projects.map((p) => p.category)))];

export default function ProjectGrid() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <div>
      {/* Filter tabs */}
      <div className="mb-10 flex flex-wrap justify-center gap-3">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`rounded-full px-5 py-2 text-sm font-medium transition-all ${
              active === cat
                ? "bg-accent text-background"
                : "border border-border text-muted hover:border-accent/50 hover:text-foreground"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Project grid */}
      <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {filtered.map((project) => (
            <motion.div
              key={project.slug}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <Link
                href={`/projects/${project.slug}`}
                className="group block overflow-hidden rounded-xl border border-border bg-card transition-all hover:border-accent/50 hover:shadow-lg hover:shadow-accent/5"
              >
                {/* Placeholder image */}
                <div className="flex h-48 items-center justify-center bg-gradient-to-br from-accent/10 to-accent-secondary/10">
                  <span className="text-4xl opacity-50">
                    {project.category === "Web App"
                      ? "🚀"
                      : project.category === "Dashboard"
                        ? "📊"
                        : "🌐"}
                  </span>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-medium uppercase tracking-wider text-accent">
                      {project.category}
                    </span>
                    {project.featured && (
                      <span className="rounded-full bg-accent/10 px-2 py-0.5 text-xs text-accent">
                        Featured
                      </span>
                    )}
                  </div>
                  <h3 className="mt-2 font-heading text-lg font-semibold transition-colors group-hover:text-accent">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted line-clamp-2">
                    {project.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-full bg-background px-3 py-1 text-xs text-muted"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
