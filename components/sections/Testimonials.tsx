"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import { testimonials } from "@/lib/config";

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  const t = testimonials[current];

  return (
    <section className="bg-[#F5F7FA] py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-[#6ABF4B] font-bold text-sm uppercase tracking-widest">
            Testimonios
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-[#083B8A] mt-3">
            Lo que dicen nuestros pacientes
          </h2>
        </motion.div>

        <div className="relative max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.4 }}
              className="bg-white rounded-3xl shadow-lg p-10 sm:p-14"
            >
              <Quote size={48} className="text-blue-100 mb-6" />
              <p className="text-gray-700 text-xl leading-relaxed mb-8 italic">
                "{t.text}"
              </p>
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#0D5BD7] to-[#6ABF4B] flex items-center justify-center text-white font-black text-xl">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-bold text-gray-800 text-lg">{t.name}</div>
                    <div className="text-gray-400 text-sm">
                      {(t as any).role ?? `${(t as any).age} años`} · {t.product}
                    </div>
                  </div>
                </div>
                <div className="flex gap-1">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} size={20} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center text-[#0D5BD7] hover:bg-[#0D5BD7] hover:text-white transition-all"
              aria-label="Anterior"
            >
              <ChevronLeft size={22} />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`rounded-full transition-all ${
                    i === current ? "w-8 h-3 bg-[#0D5BD7]" : "w-3 h-3 bg-gray-200"
                  }`}
                  aria-label={`Testimonio ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center text-[#0D5BD7] hover:bg-[#0D5BD7] hover:text-white transition-all"
              aria-label="Siguiente"
            >
              <ChevronRight size={22} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
