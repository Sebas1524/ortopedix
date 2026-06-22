"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Search, SlidersHorizontal } from "lucide-react";
import ProductCard from "@/components/ui/ProductCard";
import { products, categories } from "@/lib/config";

const allCategories = ["Todos", ...categories.map((c) => c.name)];

export default function ProductosPage() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("Todos");

  const filtered = products.filter((p) => {
    const matchCat = activeCategory === "Todos" || p.category === activeCategory;
    const matchSearch =
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.description.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <>
      {/* Page header */}
      <section
        className="pt-32 pb-16 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #083B8A 0%, #0D5BD7 100%)" }}
      >
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full">
            <defs>
              <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-5xl sm:text-6xl font-black text-white mb-4">
              Catálogo de Productos
            </h1>
            <p className="text-white/75 text-xl max-w-2xl mx-auto">
              Encuentra el producto ortopédico o de rehabilitación que necesitas. 
              Escríbenos por WhatsApp para recibir asesoría personalizada.
            </p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 40" xmlns="http://www.w3.org/2000/svg" className="w-full block">
            <path d="M0,20 C360,40 1080,0 1440,20 L1440,40 L0,40 Z" fill="#F5F7FA" />
          </svg>
        </div>
      </section>

      {/* Filters */}
      <section className="bg-[#F5F7FA] py-8 sticky top-20 z-30 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Buscar productos..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-[#0D5BD7] text-base"
              />
            </div>

            {/* Category tabs */}
            <div className="flex gap-2 flex-wrap">
              {allCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                    activeCategory === cat
                      ? "bg-[#0D5BD7] text-white shadow-md"
                      : "bg-white text-gray-600 hover:bg-blue-50 border border-gray-200"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-2 text-gray-400 text-sm shrink-0">
              <SlidersHorizontal size={16} />
              {filtered.length} productos
            </div>
          </div>
        </div>
      </section>

      {/* Products grid */}
      <section className="bg-[#F5F7FA] pb-24 pt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filtered.length === 0 ? (
            <div className="text-center py-24">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-gray-600 mb-2">No encontramos resultados</h3>
              <p className="text-gray-400">Intenta con otro término o categoría.</p>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filtered.map((product, i) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.4 }}
                >
                  <ProductCard product={product} />
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
