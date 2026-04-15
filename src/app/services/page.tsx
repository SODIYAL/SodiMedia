"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const services = [
  {
    icon: "💻",
    title: "Web Development",
    description:
      "Custom websites and web applications built with modern frameworks like Next.js, React, and Node.js.",
    features: [
      "Responsive, mobile-first design",
      "Server-side rendering & static generation",
      "API development & third-party integrations",
      "Performance optimization & SEO",
    ],
  },
  {
    icon: "🎨",
    title: "UI/UX Design",
    description:
      "User-centered design that balances aesthetics with usability, creating interfaces people love.",
    features: [
      "Wireframing & prototyping",
      "Design systems & component libraries",
      "Accessibility (WCAG) compliance",
      "User research & testing",
    ],
  },
  {
    icon: "🛒",
    title: "E-Commerce Solutions",
    description:
      "Full-featured online stores with seamless checkout, inventory management, and analytics.",
    features: [
      "Custom storefront development",
      "Payment gateway integration (Stripe, etc.)",
      "Inventory & order management",
      "Analytics & conversion optimization",
    ],
  },
  {
    icon: "⚡",
    title: "Performance Optimization",
    description:
      "Speed optimization and Core Web Vitals tuning to maximize your search rankings and user experience.",
    features: [
      "Core Web Vitals improvement",
      "Image & asset optimization",
      "Caching strategies & CDN setup",
      "Lighthouse score optimization",
    ],
  },
  {
    icon: "🔧",
    title: "Maintenance & Support",
    description:
      "Ongoing support to keep your site running smoothly, securely, and up-to-date.",
    features: [
      "Regular updates & security patches",
      "Uptime monitoring & alerting",
      "Bug fixes & feature enhancements",
      "Content updates & migrations",
    ],
  },
  {
    icon: "🚀",
    title: "SaaS Development",
    description:
      "Scalable software-as-a-service applications with authentication, billing, and multi-tenancy.",
    features: [
      "User auth & role management",
      "Subscription billing (Stripe)",
      "Dashboard & analytics",
      "Multi-tenant architecture",
    ],
  },
];

const process = [
  {
    step: "01",
    title: "Discovery",
    description: "We learn about your goals, users, and requirements to define the project scope.",
  },
  {
    step: "02",
    title: "Design",
    description: "We create wireframes and designs that align with your brand and user needs.",
  },
  {
    step: "03",
    title: "Development",
    description: "We build your project with clean code, regular check-ins, and iterative delivery.",
  },
  {
    step: "04",
    title: "Launch & Support",
    description: "We deploy, monitor, and provide ongoing support to ensure long-term success.",
  },
];

export default function ServicesPage() {
  return (
    <div className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        {/* Hero */}
        <div className="mx-auto max-w-3xl text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-heading text-4xl font-bold md:text-5xl"
          >
            Our <span className="gradient-text">Services</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-6 text-lg text-muted"
          >
            End-to-end web development services to bring your ideas to life
            and grow your business online.
          </motion.p>
        </div>

        {/* Service cards */}
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group rounded-xl border border-border bg-card p-8 transition-all hover:border-accent/50 hover:shadow-lg hover:shadow-accent/5"
            >
              <span className="text-4xl">{service.icon}</span>
              <h3 className="mt-4 font-heading text-xl font-semibold transition-colors group-hover:text-accent">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {service.description}
              </p>
              <ul className="mt-5 space-y-2">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-2 text-sm text-muted"
                  >
                    <span className="h-1 w-1 shrink-0 rounded-full bg-accent" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Process */}
        <div className="mt-24">
          <h2 className="text-center font-heading text-3xl font-bold">
            Our <span className="gradient-text">Process</span>
          </h2>
          <p className="mt-4 text-center text-muted">
            A proven workflow that delivers results on time and on budget.
          </p>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((item, i) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="relative rounded-xl border border-border bg-card p-6"
              >
                <span className="font-heading text-4xl font-bold text-accent/20">
                  {item.step}
                </span>
                <h3 className="mt-2 font-heading text-lg font-semibold">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-muted">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 text-center"
        >
          <h2 className="font-heading text-3xl font-bold">
            Ready to <span className="gradient-text">Get Started</span>?
          </h2>
          <p className="mt-4 text-muted">
            Tell us about your project and let&apos;s build something great together.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-block rounded-full bg-accent px-8 py-3 text-sm font-semibold text-background transition-all hover:bg-accent/80 hover:shadow-lg hover:shadow-accent/25"
          >
            Start a Project
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
