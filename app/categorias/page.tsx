"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Search } from "lucide-react";
import { categories, products } from "@/lib/config";

export default function CategoriasPage() {
  const [searchTerm, setSearchTerm] = useState("");

  // Filtrar categorías por búsqueda
  const filteredCategories = categories.filter((cat) => {
    if (!searchTerm) return true;
    
    const matchCategory = cat.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchSubcategories = cat.subcategories.some((sub) =>
      sub.toLowerCase().includes(searchTerm.toLowerCase())
    );
    
    return matchCategory || matchSubcategories;
  });

  return (
    <>
      {/* Header */}
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
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 40" className="w-full block">
            <path d="M0,20 C360,40 1080,0 1440,20 L1440,40 L0,40 Z" fill="white" />
          </svg>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-5xl sm:text-6xl font-black text-white mb-4">Categorías</h1>
            <p className="text-white/75 text-xl max-w-2xl mx-auto mb-8">
              Explora nuestra selección de productos agrupados por área de necesidad.
            </p>
            
            {/* Búsqueda rápida */}
            <div className="relative max-w-md mx-auto">
              <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Buscar categoría o subcategoría..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-11 pr-4 py-3.5 rounded-xl border-2 border-white/20 bg-white/10 backdrop-blur-sm text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#6ABF4B] focus:border-transparent transition-all"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredCategories.length === 0 ? (
            <div className="text-center py-24">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-gray-600 mb-2">No encontramos resultados</h3>
              <p className="text-gray-400">Intenta con otro término.</p>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCategories.map((cat, i) => {
                const catProducts = products.filter((p) => p.category === cat.name);
                const previewProducts = catProducts.slice(0, 4);
                const count = catProducts.length;
                
                return (
                  <motion.div
                    key={cat.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    className="group rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col"
                  >
                    {/* Header gradient */}
                    <div className={`bg-gradient-to-br ${cat.color} p-8 flex items-start justify-between relative overflow-hidden`}>
                      {/* Círculo decorativo */}
                      <div className="absolute -top-12 -right-12 w-40 h-40 bg-white/10 rounded-full group-hover:scale-150 transition-transform duration-500" />
                      
                      <div className="relative z-10">
                        <motion.div 
                          className="text-5xl mb-4 inline-block"
                          whileHover={{ scale: 1.2, rotate: 10 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          {cat.icon}
                        </motion.div>
                        <h2 className="text-2xl lg:text-3xl font-black text-white mb-2">{cat.name}</h2>
                        <p className="text-white/80 text-sm leading-relaxed max-w-xs">
                          {cat.description}
                        </p>
                      </div>
                      <div className="text-right relative z-10">
                        <div className="text-4xl font-black text-white/30">{count}</div>
                        <div className="text-white/50 text-sm">productos</div>
                      </div>
                    </div>

                    {/* Subcategories clickeables */}
                    <div className="bg-white p-6 flex-1">
                      <div className="flex flex-wrap gap-2 mb-5">
                        {cat.subcategories.map((sub) => (
                          <Link
                            key={sub}
                            href={`/productos?categoria=${encodeURIComponent(cat.name)}&subcategoria=${encodeURIComponent(sub)}`}
                            className="text-sm font-medium text-gray-600 bg-gray-100 hover:bg-[#0D5BD7] hover:text-white rounded-full px-4 py-1.5 transition-all cursor-pointer"
                          >
                            {sub}
                          </Link>
                        ))}
                      </div>

                      {/* Vista previa de productos */}
                      {previewProducts.length > 0 && (
                        <div className="mb-5">
                          <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">
                            Productos destacados
                          </p>
                          <div className="flex gap-2">
                            {previewProducts.map((prod) => (
                              <Link
                                key={prod.id}
                                href={`/productos?buscar=${encodeURIComponent(prod.name)}`}
                                className="flex-shrink-0"
                                title={prod.name}
                              >
                                <div className="w-16 h-16 rounded-xl overflow-hidden bg-gray-100 border-2 border-transparent hover:border-[#6ABF4B] transition-all">
                                  <img
                                    src={prod.image}
                                    alt={prod.name}
                                    className="w-full h-full object-cover"
                                  />
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* CTA */}
                      <Link
                        href={`/productos?categoria=${encodeURIComponent(cat.name)}`}
                        className="inline-flex items-center gap-2 text-[#0D5BD7] font-bold text-base group-hover:gap-3 transition-all mt-auto"
                      >
                        Explorar productos <ArrowRight size={18} />
                      </Link>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
