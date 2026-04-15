"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { projects } from "@/data/projects";

export default function FeaturedProjects() {
  const featured = projects.filter((p) => p.featured);

  return (
    <section className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 text-center">
          <h2 className="font-heading text-3xl font-bold md:text-4xl">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="mt-4 text-muted">
            A selection of our recent work across different industries.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((project, i) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <Link
                href={`/projects/${project.slug}`}
                className="group block overflow-hidden rounded-xl border border-border bg-card transition-all hover:border-accent/50 hover:shadow-lg hover:shadow-accent/5"
              >
                {/* Placeholder image area */}
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
                  <span className="text-xs font-medium uppercase tracking-wider text-accent">
                    {project.category}
                  </span>
                  <h3 className="mt-2 font-heading text-lg font-semibold transition-colors group-hover:text-accent">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted line-clamp-2">
                    {project.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tech.slice(0, 3).map((t) => (
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
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/projects"
            className="text-sm font-medium text-accent transition-colors hover:text-accent/80"
          >
            View All Projects →
          </Link>
        </div>
      </div>
    </section>
  );
}
