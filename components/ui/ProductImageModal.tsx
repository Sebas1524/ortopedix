"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn, ZoomOut, MessageCircle } from "lucide-react";
import { siteConfig } from "@/lib/config";

interface ProductImageModalProps {
  product: {
    name: string;
    image?: string;
    description?: string;
  } | null;
  onClose: () => void;
}

export default function ProductImageModal({ product, onClose }: ProductImageModalProps) {
  const [zoom, setZoom] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  if (!product) return null;

  const waUrl = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(
    `Hola, me interesa el producto: *${product.name}* de ORTOPEDIX. ¿Podría darme más información?`
  )}`;

  const handleZoomIn = () => {
    setZoom((prev) => Math.min(prev + 0.5, 4));
  };

  const handleZoomOut = () => {
    setZoom((prev) => {
      const newZoom = Math.max(prev - 0.5, 1);
      if (newZoom === 1) setPosition({ x: 0, y: 0 });
      return newZoom;
    });
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (zoom > 1) {
      setIsDragging(true);
      setDragStart({ x: e.clientX - position.x, y: e.clientY - position.y });
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging && zoom > 1) {
      setPosition({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y,
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleWheel = (e: React.WheelEvent) => {
    if (e.deltaY < 0) {
      handleZoomIn();
    } else {
      handleZoomOut();
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
        onClick={onClose}
      >
        {/* Contenido */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="relative max-w-5xl w-full max-h-[90vh] flex flex-col bg-black rounded-2xl overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Barra superior */}
          <div className="flex items-center justify-between p-4 bg-black/50 backdrop-blur-sm border-b border-white/10">
            <div>
              <h3 className="text-white font-bold text-lg">{product.name}</h3>
              <p className="text-white/50 text-xs">
                Click y arrastra para mover · Rueda del mouse para zoom
              </p>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              aria-label="Cerrar"
            >
              <X size={24} />
            </button>
          </div>

          {/* Área de imagen con zoom */}
          <div
            className="relative flex-1 overflow-hidden cursor-grab active:cursor-grabbing"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onWheel={handleWheel}
          >
            {product.image ? (
              <motion.img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-contain select-none"
                style={{
                  scale: zoom,
                  x: position.x,
                  y: position.y,
                  transition: isDragging ? "none" : "all 0.2s ease-out",
                }}
                drag={zoom === 1 ? false : true}
                dragConstraints={{ left: -500, right: 500, top: -500, bottom: 500 }}
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-white/50 text-xl">
                Imagen no disponible
              </div>
            )}
          </div>

          {/* Barra inferior */}
          <div className="flex items-center justify-between p-4 bg-black/50 backdrop-blur-sm border-t border-white/10">
            {/* Controles de zoom */}
            <div className="flex items-center gap-2">
              <button
                onClick={handleZoomOut}
                disabled={zoom === 1}
                className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                aria-label="Alejar"
              >
                <ZoomOut size={20} />
              </button>
              <span className="text-white/70 text-sm font-semibold w-14 text-center">
                {Math.round(zoom * 100)}%
              </span>
              <button
                onClick={handleZoomIn}
                disabled={zoom === 4}
                className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                aria-label="Acercar"
              >
                <ZoomIn size={20} />
              </button>
              <button
                onClick={() => {
                  setZoom(1);
                  setPosition({ x: 0, y: 0 });
                }}
                className="ml-2 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white text-sm font-semibold transition-colors"
              >
                Reset
              </button>
            </div>

            {/* Botón WhatsApp */}
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#6ABF4B] hover:bg-[#4a9932] text-white px-5 py-3 rounded-xl font-bold transition-all hover:shadow-lg"
            >
              <MessageCircle size={20} />
              ¿Quieres este producto? Escríbenos
            </a>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
