"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/lib/config";

export default function AdvisoryCTA() {
  const waUrl = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(
    "Hola, necesito asesoría personalizada de ORTOPEDIX."
  )}`;

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: "linear-gradient(135deg, #083B8A 0%, #0D5BD7 60%, #0a6e42 100%)",
        }}
      />
      {/* Decorative */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div
          className="absolute -top-24 -right-24 w-96 h-96 rounded-full opacity-10"
          style={{ background: "radial-gradient(circle, #6ABF4B, transparent)" }}
        />
        <div
          className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full opacity-10"
          style={{ background: "radial-gradient(circle, #6ABF4B, transparent)" }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8">
            <MessageCircle size={36} className="text-[#6ABF4B]" />
          </div>

          <h2 className="text-4xl sm:text-5xl font-black text-white mb-6 leading-tight">
            ¿Necesitas asesoría{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #6ABF4B, #a8e063)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              personalizada?
            </span>
          </h2>

          <p className="text-white/75 text-xl leading-relaxed mb-10 max-w-2xl mx-auto">
            Nuestro equipo te ayudará a encontrar el producto adecuado según
            tus necesidades y condición física. Atención humana, cálida y profesional.
          </p>

          <motion.a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-3 bg-[#6ABF4B] hover:bg-[#4a9932] text-white px-10 py-5 rounded-2xl font-black text-xl transition-all shadow-2xl hover:shadow-green-900/40 min-h-[70px]"
          >
            <MessageCircle size={28} />
            Hablar con un asesor
          </motion.a>

          <p className="text-white/40 text-sm mt-5">
            Respuesta inmediata · Sin compromiso · Atención personalizada
          </p>
        </motion.div>
      </div>
    </section>
  );
}
