"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { MessageCircle, Calendar, ChevronDown } from "lucide-react";
import { siteConfig } from "@/lib/config";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: [0.0, 0.0, 0.2, 1] as any },
  }),
};

export default function Hero() {
  const waUrl = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(
    siteConfig.whatsappMessage
  )}`;

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background gradient */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "linear-gradient(135deg, #083B8A 0%, #0D5BD7 45%, #0a6e42 100%)",
        }}
      />

      {/* Decorative circles */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div
          className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full opacity-10"
          style={{ background: "radial-gradient(circle, #6ABF4B, transparent)" }}
        />
        <div
          className="absolute bottom-0 -left-40 w-[500px] h-[500px] rounded-full opacity-10"
          style={{ background: "radial-gradient(circle, #6ABF4B, transparent)" }}
        />
        {/* Animated grid lines */}
        <svg
          className="absolute inset-0 w-full h-full opacity-5"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Floating medical icons */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {[
          { top: "15%", left: "8%", size: 80, delay: 0 },
          { top: "60%", left: "5%", size: 60, delay: 0.5 },
          { top: "20%", right: "8%", size: 70, delay: 0.3 },
          { top: "70%", right: "6%", size: 50, delay: 0.8 },
        ].map((item, i) => (
          <motion.div
            key={i}
            animate={{ y: [0, -12, 0] }}
            transition={{ repeat: Infinity, duration: 4 + i, delay: item.delay, ease: "easeInOut" }}
            className="absolute opacity-10 text-white"
            style={{ top: item.top, left: (item as any).left, right: (item as any).right, fontSize: item.size }}
          >
            {["♿", "🦯", "🩺", "💊"][i]}
          </motion.div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.div
              custom={0}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white border border-white/20 rounded-full px-5 py-2 text-sm font-semibold mb-6"
            >
              <span className="w-2 h-2 bg-[#6ABF4B] rounded-full animate-pulse" />
              Especialistas en Ortopedia y Rehabilitación
            </motion.div>

            <motion.h1
              custom={1}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-tight mb-6"
            >
              Movilidad,{" "}
              <span
                style={{
                  background: "linear-gradient(90deg, #6ABF4B, #a8e063)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                bienestar
              </span>{" "}
              y calidad de vida
            </motion.h1>

            <motion.p
              custom={2}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="text-xl text-white/80 mb-10 max-w-lg leading-relaxed"
            >
              Productos ortopédicos y rehabilitación física para cada etapa de
              tu recuperación. Atención personalizada y asesoría profesional.
            </motion.p>

            <motion.div
              custom={3}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                href="/productos"
                className="inline-flex items-center justify-center gap-2 bg-white text-[#0D5BD7] px-8 py-4 rounded-2xl font-bold text-lg hover:bg-blue-50 transition-all hover:shadow-xl hover:-translate-y-0.5 min-h-[58px]"
              >
                Ver Catálogo
              </Link>
              <Link
                href="/cita"
                className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-white/20 transition-all min-h-[58px]"
              >
                <Calendar size={22} />
                Agendar Cita
              </Link>
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#6ABF4B] hover:bg-[#4a9932] text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all hover:shadow-xl hover:-translate-y-0.5 min-h-[58px]"
              >
                <MessageCircle size={22} />
                WhatsApp
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              custom={4}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="mt-12 flex gap-8"
            >
              {[
                { value: "+500", label: "Productos" },
                { value: "+5000", label: "Pacientes" },
                { value: "10+", label: "Años de experiencia" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-3xl font-black text-white">{stat.value}</div>
                  <div className="text-white/60 text-sm mt-0.5">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hidden lg:flex items-center justify-center"
          >
            <div className="relative w-[440px] h-[440px]">
              {/* Rings */}
              <div className="absolute inset-0 rounded-full border-2 border-white/10 animate-spin" style={{ animationDuration: "20s" }} />
              <div className="absolute inset-8 rounded-full border-2 border-[#6ABF4B]/20 animate-spin" style={{ animationDuration: "15s", animationDirection: "reverse" }} />

              {/* Center card */}
              <div className="absolute inset-16 bg-white/10 backdrop-blur-sm rounded-3xl border border-white/20 flex flex-col items-center justify-center text-white text-center p-6">
                <div className="text-7xl mb-4">♿</div>
                <div className="font-bold text-lg leading-tight">
                  Tu movilidad<br />es nuestra misión
                </div>
              </div>

              {/* Floating product chips */}
              {[
                { label: "Sillas de Ruedas", emoji: "♿", pos: "top-4 left-4" },
                { label: "Andadores", emoji: "🦯", pos: "top-4 right-4" },
                { label: "Rehabilitación", emoji: "💪", pos: "bottom-4 left-4" },
                { label: "Ortesis", emoji: "🦵", pos: "bottom-4 right-4" },
              ].map((chip, i) => (
                <motion.div
                  key={chip.label}
                  animate={{ y: [0, -8, 0] }}
                  transition={{ repeat: Infinity, duration: 3 + i * 0.5, delay: i * 0.3, ease: "easeInOut" }}
                  className={`absolute ${chip.pos} bg-white/15 backdrop-blur-sm border border-white/25 rounded-2xl px-3 py-2 flex items-center gap-2`}
                >
                  <span className="text-xl">{chip.emoji}</span>
                  <span className="text-white text-xs font-semibold whitespace-nowrap">{chip.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50"
      >
        <ChevronDown size={32} />
      </motion.div>

      {/* Wave bottom */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" className="w-full block">
          <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" fill="#F5F7FA" />
        </svg>
      </div>
    </section>
  );
}
