"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { categories, products } from "@/lib/config";

export default function CategoriasPage() {
  return (
    <>
      {/* Header */}
      <section
        className="pt-32 pb-16 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #083B8A 0%, #0D5BD7 100%)" }}
      >
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 40" className="w-full block">
            <path d="M0,20 C360,40 1080,0 1440,20 L1440,40 L0,40 Z" fill="white" />
          </svg>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-5xl sm:text-6xl font-black text-white mb-4">Categorías</h1>
            <p className="text-white/75 text-xl max-w-2xl mx-auto">
              Explora nuestra selección de productos agrupados por área de necesidad.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 gap-8">
            {categories.map((cat, i) => {
              const count = products.filter((p) => p.category === cat.name).length;
              return (
                <motion.div
                  key={cat.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12, duration: 0.5 }}
                  className="group rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
                >
                  {/* Header gradient */}
                  <div className={`bg-gradient-to-br ${cat.color} p-10 flex items-start justify-between`}>
                    <div>
                      <div className="text-5xl mb-4">{cat.icon}</div>
                      <h2 className="text-3xl font-black text-white mb-2">{cat.name}</h2>
                      <p className="text-white/80 text-base leading-relaxed max-w-xs">
                        {cat.description}
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="text-4xl font-black text-white/30">{count}</div>
                      <div className="text-white/50 text-sm">productos</div>
                    </div>
                  </div>

                  {/* Subcategories + CTA */}
                  <div className="bg-white p-6">
                    <div className="flex flex-wrap gap-2 mb-5">
                      {cat.subcategories.map((sub) => (
                        <span
                          key={sub}
                          className="text-sm font-medium text-gray-600 bg-gray-100 rounded-full px-4 py-1.5"
                        >
                          {sub}
                        </span>
                      ))}
                    </div>
                    <Link
                      href={`/productos?categoria=${cat.id}`}
                      className="inline-flex items-center gap-2 text-[#0D5BD7] font-bold text-base group-hover:gap-3 transition-all"
                    >
                      Explorar productos <ArrowRight size={18} />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
