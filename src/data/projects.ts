import { Project } from "@/types/project";

export const projects: Project[] = [
  {
    slug: "ecommerce-platform",
    title: "E-Commerce Platform",
    description:
      "A full-featured online store with real-time inventory, payment processing, and an admin dashboard.",
    category: "Web App",
    tech: ["Next.js", "Stripe", "PostgreSQL", "Tailwind CSS"],
    image: "/projects/ecommerce.jpg",
    featured: true,
  },
  {
    slug: "saas-dashboard",
    title: "SaaS Analytics Dashboard",
    description:
      "Interactive analytics dashboard with real-time data visualization and team collaboration features.",
    category: "Dashboard",
    tech: ["React", "D3.js", "Node.js", "MongoDB"],
    image: "/projects/dashboard.jpg",
    featured: true,
  },
  {
    slug: "restaurant-website",
    title: "Restaurant Website",
    description:
      "Modern restaurant site with online reservations, menu management, and a delivery integration.",
    category: "Website",
    tech: ["Next.js", "Sanity CMS", "Tailwind CSS"],
    image: "/projects/restaurant.jpg",
    featured: true,
  },
  {
    slug: "fitness-app",
    title: "Fitness Tracking App",
    description:
      "Progressive web app for workout tracking with offline support and social features.",
    category: "Web App",
    tech: ["React", "Firebase", "PWA", "Chart.js"],
    image: "/projects/fitness.jpg",
    featured: false,
  },
  {
    slug: "portfolio-theme",
    title: "Portfolio Theme",
    description:
      "Customizable portfolio template for creatives with CMS integration and dark mode.",
    category: "Website",
    tech: ["Astro", "Tailwind CSS", "MDX"],
    image: "/projects/portfolio.jpg",
    featured: false,
  },
  {
    slug: "booking-system",
    title: "Appointment Booking System",
    description:
      "Calendar-based booking platform with automated reminders and payment collection.",
    category: "Web App",
    tech: ["Next.js", "Prisma", "Stripe", "SendGrid"],
    image: "/projects/booking.jpg",
    featured: false,
  },
];
