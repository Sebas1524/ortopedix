"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import ProductCard from "@/components/ui/ProductCard";
import { products } from "@/lib/config";
import { ArrowRight } from "lucide-react";

export default function FeaturedProducts() {
  const featured = products.filter((p) => p.featured).slice(0, 6);

  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14"
        >
          <div>
            <span className="text-[#6ABF4B] font-bold text-sm uppercase tracking-widest">
              Catálogo
            </span>
            <h2 className="text-4xl sm:text-5xl font-black text-[#083B8A] mt-2">
              Productos Destacados
            </h2>
            <p className="text-gray-500 text-lg mt-3 max-w-xl">
              Selección de nuestros productos más solicitados por pacientes y profesionales de salud.
            </p>
          </div>
          <Link
            href="/productos"
            className="inline-flex items-center gap-2 text-[#0D5BD7] font-bold text-base hover:gap-3 transition-all shrink-0"
          >
            Ver todos los productos <ArrowRight size={18} />
          </Link>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
