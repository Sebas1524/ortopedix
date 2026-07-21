import PromoModal from "@/components/ui/PromoModal";
import Hero from "@/components/sections/Hero";
import Benefits from "@/components/sections/Benefits";
import FeaturedProducts from "@/components/sections/FeaturedProducts";
import AdvisoryCTA from "@/components/sections/AdvisoryCTA";
import Testimonials from "@/components/sections/Testimonials";

export default function Home() {
  return (
    <>
      {/* Banner arriba de todo */}
      <div className="w-full">
        <img
          src="/BANNER.jpeg"
          alt="ORTOPEDIX - Productos ortopédicos y rehabilitación"
          className="w-full h-auto"
        />
      </div>

      {/* Menú de navegación (asumo que ya lo tienes en un layout o componente) */}
      
      {/* Pop-ups promocionales */}
      <PromoModal />

      {/* Secciones */}
      <Hero />
      <Benefits />
      <FeaturedProducts />
      <AdvisoryCTA />
      <Testimonials />
    </>
  );
}
