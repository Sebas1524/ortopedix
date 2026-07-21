"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { MessageCircle, Calendar, ChevronDown } from "lucide-react";
import { siteConfig } from "@/lib/config";

const slides = [
  {
    image: "/hero-1.png",
    title: "Movilidad y Bienestar",
    subtitle: "Productos ortopédicos de alta calidad",
  },
  {
    image: "/hero-2.png",
    title: "Rehabilitación Física",
    subtitle: "Equipos profesionales para tu recuperación",
  },
  {
    image: "/hero-3.png",
    title: "Atención Personalizada",
    subtitle: "Asesoría profesional para cada paciente",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  const waUrl = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(
    siteConfig.whatsappMessage
  )}`;

  // Auto-slide cada 4 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* ===== SLIDER DE IMÁGENES ===== */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <img
              src={slides[current].image}
              alt={slides[current].title}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </AnimatePresence>

        {/* Overlay oscuro para legibilidad */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#083B8A]/85 to-black/50" />
      </div>

      {/* ===== CONTENIDO ===== */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20 w-full">
        <div className="max-w-2xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white border border-white/20 rounded-full px-5 py-2 text-sm font-semibold mb-6"
          >
            <span className="w-2 h-2 bg-[#6ABF4B] rounded-full animate-pulse" />
            Especialistas en Ortopedia y Rehabilitación
          </motion.div>

          {/* Título animado */}
          <AnimatePresence mode="wait">
            <motion.h1
              key={current}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-tight mb-6"
            >
              {slides[current].title}{" "}
              <span className="text-[#6ABF4B]">para ti</span>
            </motion.h1>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.p
              key={current + "sub"}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-white/80 mb-10 leading-relaxed"
            >
              {slides[current].subtitle}
            </motion.p>
          </AnimatePresence>

          {/* Botones */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link
              href="/productos"
              className="inline-flex items-center justify-center gap-2 bg-white text-[#0D5BD7] px-8 py-4 rounded-2xl font-bold text-lg hover:bg-blue-50 transition-all hover:shadow-xl hover:-translate-y-0.5"
            >
              Ver Catálogo
            </Link>
            <Link
              href="/cita"
              className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-white/20 transition-all"
            >
              <Calendar size={22} />
              Agendar Cita
            </Link>
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#6ABF4B] hover:bg-[#4a9932] text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all hover:shadow-xl hover:-translate-y-0.5"
            >
              <MessageCircle size={22} />
              WhatsApp
            </a>
          </motion.div>

          {/* Indicadores de slide */}
          <div className="flex gap-3 mt-8">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-2 rounded-full transition-all ${
                  i === current ? "w-8 bg-[#6ABF4B]" : "w-2 bg-white/40 hover:bg-white/60"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 z-10"
      >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  );
}
