"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/lib/config";

export default function AdvisoryCTA() {
  const waUrl = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(
    "Hola, necesito asesoría personalizada de ORTOPEDIX."
  )}`;

  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-br from-[#083B8A] via-[#0D5BD7] to-[#0a6e42]">
      {/* ===== ONDAS DECORATIVAS ===== */}
      <div className="absolute inset-0 z-0 opacity-10">
        <svg viewBox="0 0 1200 600" className="w-full h-full" preserveAspectRatio="none">
          <path
            d="M0,300 C300,100 600,500 1200,200 L1200,600 L0,600 Z"
            fill="white"
          />
          <path
            d="M0,400 C400,200 800,500 1200,350 L1200,600 L0,600 Z"
            fill="white"
            opacity="0.5"
          />
        </svg>
      </div>

      {/* ===== CÍRCULOS DECORATIVOS ===== */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#6ABF4B]/20 rounded-full blur-3xl" />
      <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-[#6ABF4B]/15 rounded-full blur-3xl" />

      {/* ===== CONTENIDO ===== */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Ícono */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
            className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8"
          >
            <MessageCircle size={36} className="text-[#6ABF4B]" />
          </motion.div>

          {/* Título */}
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-6 leading-tight">
            ¿Necesitas asesoría{" "}
            <span className="text-[#6ABF4B]">
              personalizada?
            </span>
          </h2>

          {/* Descripción */}
          <p className="text-white/75 text-xl leading-relaxed mb-10 max-w-2xl mx-auto">
            Nuestro equipo te ayudará a encontrar el producto adecuado según
            tus necesidades y condición física. Atención humana, cálida y profesional.
          </p>

          {/* Botón CTA */}
          <motion.a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-3 bg-[#6ABF4B] hover:bg-[#4a9932] text-white px-10 py-5 rounded-2xl font-black text-xl transition-all shadow-2xl hover:shadow-[#6ABF4B]/40 min-h-[70px]"
          >
            <MessageCircle size={28} />
            Hablar con un asesor
          </motion.a>

          {/* Subtítulo de confianza */}
          <p className="text-white/40 text-sm mt-5">
            Respuesta inmediata · Sin compromiso · Atención personalizada
          </p>
        </motion.div>
      </div>
    </section>
  );
}
