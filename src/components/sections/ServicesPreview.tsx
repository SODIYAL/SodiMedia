"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const services = [
  {
    icon: "💻",
    title: "Web Development",
    description:
      "Custom websites and web applications built with modern frameworks and best practices.",
  },
  {
    icon: "🎨",
    title: "UI/UX Design",
    description:
      "User-centered design that balances aesthetics with functionality and accessibility.",
  },
  {
    icon: "🛒",
    title: "E-Commerce",
    description:
      "Online stores with seamless checkout, inventory management, and payment integration.",
  },
  {
    icon: "⚡",
    title: "Performance",
    description:
      "Speed optimization, SEO, and Core Web Vitals tuning to maximize your online presence.",
  },
];

export default function ServicesPreview() {
  return (
    <section className="border-y border-border bg-card/50 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 text-center">
          <h2 className="font-heading text-3xl font-bold md:text-4xl">
            What We <span className="gradient-text">Do</span>
          </h2>
          <p className="mt-4 text-muted">
            End-to-end web development services tailored to your needs.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="rounded-xl border border-border bg-background p-6 transition-all hover:border-accent/50 hover:shadow-lg hover:shadow-accent/5"
            >
              <span className="text-3xl">{service.icon}</span>
              <h3 className="mt-4 font-heading text-lg font-semibold">
                {service.title}
              </h3>
              <p className="mt-2 text-sm text-muted">{service.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/services"
            className="text-sm font-medium text-accent transition-colors hover:text-accent/80"
          >
            Learn More About Our Services →
          </Link>
        </div>
      </div>
    </section>
  );
}
