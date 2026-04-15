import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects — SodiMedia",
  description:
    "Explore our portfolio of web development projects across e-commerce, SaaS, and more.",
  openGraph: {
    title: "Projects — SodiMedia",
    description:
      "Explore our portfolio of web development projects across e-commerce, SaaS, and more.",
  },
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
