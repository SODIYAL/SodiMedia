import Hero from "@/components/sections/Hero";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import ServicesPreview from "@/components/sections/ServicesPreview";
import CTA from "@/components/sections/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedProjects />
      <ServicesPreview />
      <CTA />
    </>
  );
}
