import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "SodiMedia — Web Development Portfolio",
    template: "%s — SodiMedia",
  },
  description:
    "We build modern, high-performance websites and web applications. Explore our portfolio of web development projects.",
  metadataBase: new URL("https://sodimedia.dev"),
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "SodiMedia",
    title: "SodiMedia — Web Development Portfolio",
    description:
      "We build modern, high-performance websites and web applications.",
  },
  twitter: {
    card: "summary_large_image",
    title: "SodiMedia — Web Development Portfolio",
    description:
      "We build modern, high-performance websites and web applications.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
