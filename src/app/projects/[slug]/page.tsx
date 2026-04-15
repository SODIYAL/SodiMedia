import { notFound } from "next/navigation";
import Link from "next/link";
import { projects } from "@/data/projects";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <article className="py-24">
      <div className="mx-auto max-w-4xl px-6">
        {/* Back link */}
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-accent"
        >
          ← Back to Projects
        </Link>

        {/* Hero image placeholder */}
        <div className="mt-8 flex h-64 items-center justify-center rounded-2xl bg-gradient-to-br from-accent/10 to-accent-secondary/10 md:h-96">
          <span className="text-6xl opacity-50">
            {project.category === "Web App"
              ? "🚀"
              : project.category === "Dashboard"
                ? "📊"
                : "🌐"}
          </span>
        </div>

        {/* Header */}
        <div className="mt-10">
          <span className="text-sm font-medium uppercase tracking-wider text-accent">
            {project.category}
          </span>
          <h1 className="mt-2 font-heading text-4xl font-bold md:text-5xl">
            {project.title}
          </h1>
        </div>

        {/* Content grid */}
        <div className="mt-12 grid gap-12 md:grid-cols-3">
          {/* Main content */}
          <div className="md:col-span-2 space-y-8">
            <div>
              <h2 className="font-heading text-xl font-semibold">Overview</h2>
              <p className="mt-3 leading-relaxed text-muted">
                {project.description}
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl font-semibold">The Challenge</h2>
              <p className="mt-3 leading-relaxed text-muted">
                The client needed a modern, scalable solution that could handle
                growing user demand while maintaining exceptional performance and
                user experience across all devices.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl font-semibold">Our Solution</h2>
              <p className="mt-3 leading-relaxed text-muted">
                We designed and developed a custom solution using cutting-edge
                technologies, focusing on clean architecture, responsive design,
                and optimized performance to deliver a seamless experience.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl font-semibold">Results</h2>
              <div className="mt-4 grid grid-cols-3 gap-4">
                <div className="rounded-xl border border-border bg-card p-4 text-center">
                  <p className="font-heading text-2xl font-bold gradient-text">2x</p>
                  <p className="mt-1 text-xs text-muted">Faster Load Time</p>
                </div>
                <div className="rounded-xl border border-border bg-card p-4 text-center">
                  <p className="font-heading text-2xl font-bold gradient-text">95+</p>
                  <p className="mt-1 text-xs text-muted">Lighthouse Score</p>
                </div>
                <div className="rounded-xl border border-border bg-card p-4 text-center">
                  <p className="font-heading text-2xl font-bold gradient-text">40%</p>
                  <p className="mt-1 text-xs text-muted">More Conversions</p>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="rounded-xl border border-border bg-card p-6">
              <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-muted">
                Tech Stack
              </h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-border bg-background px-3 py-1 text-sm text-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-xl border border-border bg-card p-6">
              <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-muted">
                Category
              </h3>
              <p className="mt-2 text-accent">{project.category}</p>
            </div>

            <Link
              href="/contact"
              className="block rounded-xl bg-accent px-6 py-3 text-center text-sm font-semibold text-background transition-all hover:bg-accent/80 hover:shadow-lg hover:shadow-accent/25"
            >
              Start a Similar Project
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
