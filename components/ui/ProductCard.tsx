"use client";

import { motion } from "framer-motion";
import { MessageCircle, Tag } from "lucide-react";
import { siteConfig } from "@/lib/config";

interface Product {
  id: number;
  name: string;
  category: string;
  description: string;
  price?: number;
  image?: string;
}

export default function ProductCard({ product }: { product: Product }) {
  const waMessage = `Hola, me interesa el producto: *${product.name}* de ORTOPEDIX. ¿Podría darme más información?`;
  const waUrl = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(waMessage)}`;

  // Color placeholder per category
  const categoryColors: Record<string, string> = {
    Movilidad: "from-blue-400 to-blue-600",
    Rehabilitación: "from-green-400 to-green-600",
    Ortesis: "from-indigo-400 to-indigo-600",
    "Adulto Mayor": "from-teal-400 to-teal-600",
  };
  const gradient = categoryColors[product.category] || "from-blue-400 to-blue-600";

  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col"
    >
      {/* Image / placeholder */}
      <div className={`relative h-52 bg-gradient-to-br ${gradient} flex items-center justify-center overflow-hidden`}>
        <div className="text-white/20 text-8xl font-black select-none">
          {product.name.charAt(0)}
        </div>
        <div className="absolute top-3 left-3">
          <span className="bg-white/20 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1 rounded-full">
            {product.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-bold text-gray-800 text-lg leading-tight mb-2">
          {product.name}
        </h3>
        <p className="text-gray-500 text-sm leading-relaxed flex-1 mb-4">
          {product.description}
        </p>

        <div className="flex items-center justify-between mt-auto">
          {siteConfig.showPrices && product.price ? (
            <div className="flex items-center gap-1.5 text-[#0D5BD7]">
              <Tag size={16} />
              <span className="font-bold text-xl">${product.price}</span>
            </div>
          ) : (
            <span className="text-gray-400 text-sm italic">Consultar precio</span>
          )}
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#6ABF4B] hover:bg-[#4a9932] text-white px-4 py-2.5 rounded-xl font-semibold text-sm transition-all hover:shadow-md"
          >
            <MessageCircle size={16} />
            WhatsApp
          </a>
        </div>
      </div>
    </motion.div>
  );
}
