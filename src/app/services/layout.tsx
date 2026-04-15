import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services — SodiMedia",
  description:
    "Web development, UI/UX design, e-commerce, performance optimization, and SaaS development services.",
  openGraph: {
    title: "Services — SodiMedia",
    description:
      "Web development, UI/UX design, e-commerce, performance optimization, and SaaS development services.",
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
