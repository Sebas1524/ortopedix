"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Search, SlidersHorizontal } from "lucide-react";
import ProductCard from "@/components/ui/ProductCard";
import { products, categories } from "@/lib/config";
import { useSearchParams, useRouter } from "next/navigation";
import { Suspense } from "react";

const allCategories = ["Todos", ...categories.map((c) => c.name)];

function ProductosContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("Todos");
  const [activeSubcategory, setActiveSubcategory] = useState<string | null>(null);
  const [showFilters, setShowFilters] = useState(true);
  const lastScrollY = useRef(0);

  // Leer parámetros de la URL al cargar
  useEffect(() => {
    const categoria = searchParams.get("categoria");
    const subcategoria = searchParams.get("subcategoria");
    const buscar = searchParams.get("buscar");
    
    if (categoria) {
      // Convertir id a nombre
      const cat = categories.find((c) => c.id === categoria.toLowerCase());
      if (cat) setActiveCategory(cat.name);
    }
    
    if (subcategoria) {
      setActiveSubcategory(subcategoria);
    }
    
    if (buscar) {
      setSearch(buscar);
    }
  }, [searchParams]);

  // Scroll behavior
  useEffect(() => {
    const onScroll = () => {
      const currentScrollY = window.scrollY;
      const difference = currentScrollY - lastScrollY.current;
      
      if (Math.abs(difference) > 5) {
        if (currentScrollY > lastScrollY.current && currentScrollY > 300) {
          setShowFilters(false);
        } else if (currentScrollY < lastScrollY.current) {
          setShowFilters(true);
        }
        lastScrollY.current = currentScrollY;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const filtered = products.filter((p) => {
    const matchCat = activeCategory === "Todos" || p.category === activeCategory;
    const matchSub = !activeSubcategory || p.subcategory === activeSubcategory;
    const matchSearch =
      !search ||
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.description.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSub && matchSearch;
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
      <div
        className={`bg-[#F5F7FA] overflow-hidden transition-all duration-300 ease-in-out ${
          showFilters ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="py-8">
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
                    onClick={() => {
                      setActiveCategory(cat);
                      setActiveSubcategory(null);
                    }}
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

              {/* Clear subcategory if active */}
              {activeSubcategory && (
                <button
                  onClick={() => setActiveSubcategory(null)}
                  className="text-sm text-[#0D5BD7] font-semibold bg-blue-50 rounded-full px-4 py-2 hover:bg-blue-100 transition-colors shrink-0"
                >
                  ✕ {activeSubcategory}
                </button>
              )}

              <div className="flex items-center gap-2 text-gray-400 text-sm shrink-0">
                <SlidersHorizontal size={16} />
                {filtered.length} productos
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Products grid */}
      <section className="bg-[#F5F7FA] pb-24 pt-4">
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

// Wrapper con Suspense para useSearchParams
export default function ProductosPage() {
  return (
    <Suspense fallback={<div className="pt-32 text-center text-gray-500">Cargando...</div>}>
      <ProductosContent />
    </Suspense>
  );
}
