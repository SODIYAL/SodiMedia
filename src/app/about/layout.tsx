import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — SodiMedia",
  description:
    "Learn about SodiMedia, our mission, tech stack, and the team behind our web development projects.",
  openGraph: {
    title: "About — SodiMedia",
    description:
      "Learn about SodiMedia, our mission, tech stack, and the team behind our web development projects.",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
