"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "50+", label: "Projects Delivered" },
  { value: "30+", label: "Happy Clients" },
  { value: "3+", label: "Years Experience" },
  { value: "99%", label: "Client Satisfaction" },
];

const techStack = [
  { name: "Next.js", category: "Framework" },
  { name: "React", category: "Framework" },
  { name: "TypeScript", category: "Language" },
  { name: "Tailwind CSS", category: "Styling" },
  { name: "Node.js", category: "Backend" },
  { name: "PostgreSQL", category: "Database" },
  { name: "MongoDB", category: "Database" },
  { name: "Prisma", category: "ORM" },
  { name: "Vercel", category: "Deployment" },
  { name: "Figma", category: "Design" },
  { name: "Stripe", category: "Payments" },
  { name: "Git", category: "Tools" },
];

const timeline = [
  {
    year: "2023",
    title: "Founded SodiMedia",
    description: "Started with a vision to build exceptional web experiences for businesses of all sizes.",
  },
  {
    year: "2024",
    title: "Expanded Services",
    description: "Grew our team and added e-commerce, SaaS, and custom web application development.",
  },
  {
    year: "2025",
    title: "50+ Projects Milestone",
    description: "Reached 50 delivered projects with clients across multiple industries and countries.",
  },
  {
    year: "2026",
    title: "AI-Powered Development",
    description: "Pioneering AI-assisted development workflows to deliver faster, higher-quality results.",
  },
];

export default function AboutPage() {
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
            About <span className="gradient-text">SodiMedia</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-6 text-lg leading-relaxed text-muted"
          >
            We&apos;re a web development studio passionate about crafting modern,
            high-performance digital experiences. We combine clean code with
            thoughtful design to build websites and applications that truly
            make an impact.
          </motion.p>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 gap-6 md:grid-cols-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="rounded-xl border border-border bg-card p-6 text-center"
            >
              <p className="font-heading text-3xl font-bold gradient-text">
                {stat.value}
              </p>
              <p className="mt-2 text-sm text-muted">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Mission */}
        <div className="mt-24 grid gap-12 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-3xl font-bold">
              Our <span className="gradient-text">Mission</span>
            </h2>
            <p className="mt-4 leading-relaxed text-muted">
              To empower businesses with exceptional web solutions that drive
              growth and deliver measurable results. We believe great software
              should be accessible, performant, and a joy to use.
            </p>
            <p className="mt-4 leading-relaxed text-muted">
              Every project we take on starts with understanding your goals and
              your users. We don&apos;t just write code — we solve problems and
              create experiences that keep people coming back.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-3xl font-bold">
              Our <span className="gradient-text">Approach</span>
            </h2>
            <ul className="mt-4 space-y-4">
              {[
                "Clean, maintainable code built on modern frameworks",
                "Mobile-first, responsive design for every screen",
                "Performance-optimized from day one",
                "Transparent communication throughout the process",
                "Post-launch support and continuous improvement",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-muted">
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Tech Stack */}
        <div className="mt-24">
          <h2 className="text-center font-heading text-3xl font-bold">
            Our <span className="gradient-text">Tech Stack</span>
          </h2>
          <p className="mt-4 text-center text-muted">
            The tools and technologies we use to build exceptional products.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {techStack.map((tech, i) => (
              <motion.span
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.03 }}
                viewport={{ once: true }}
                className="rounded-full border border-border bg-card px-4 py-2 text-sm transition-colors hover:border-accent/50 hover:text-accent"
              >
                {tech.name}
              </motion.span>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="mt-24">
          <h2 className="text-center font-heading text-3xl font-bold">
            Our <span className="gradient-text">Journey</span>
          </h2>
          <div className="mt-12 space-y-8">
            {timeline.map((item, i) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex gap-6"
              >
                <div className="flex flex-col items-center">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-accent bg-accent/10 font-heading text-sm font-bold text-accent">
                    {item.year.slice(2)}
                  </div>
                  {i < timeline.length - 1 && (
                    <div className="mt-2 h-full w-px bg-border" />
                  )}
                </div>
                <div className="pb-8">
                  <h3 className="font-heading text-lg font-semibold">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm text-muted">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
