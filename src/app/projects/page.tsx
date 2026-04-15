import ProjectGrid from "@/components/sections/ProjectGrid";

export default function ProjectsPage() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 text-center">
          <h1 className="font-heading text-4xl font-bold md:text-5xl">
            Our <span className="gradient-text">Projects</span>
          </h1>
          <p className="mt-4 text-lg text-muted">
            Explore our portfolio of web development work across different industries.
          </p>
        </div>
        <ProjectGrid />
      </div>
    </section>
  );
}
