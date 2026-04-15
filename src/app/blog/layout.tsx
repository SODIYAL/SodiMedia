import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog — SodiMedia",
  description:
    "Insights, tutorials, and thoughts on modern web development from the SodiMedia team.",
  openGraph: {
    title: "Blog — SodiMedia",
    description:
      "Insights, tutorials, and thoughts on modern web development from the SodiMedia team.",
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
