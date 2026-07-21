import PromoModal from "@/components/ui/PromoModal";
import Hero from "@/components/sections/Hero";
import Benefits from "@/components/sections/Benefits";
import FeaturedProducts from "@/components/sections/FeaturedProducts";
import AdvisoryCTA from "@/components/sections/AdvisoryCTA";
import Testimonials from "@/components/sections/Testimonials";

export default function Home() {
  return (
    <>
      <PromoModal />
      <Hero />
      <Benefits />
      <FeaturedProducts />
      <AdvisoryCTA />
      <Testimonials />
    </>
  );
}
