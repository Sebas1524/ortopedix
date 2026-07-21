"use client";
import { siteConfig } from "@/lib/config";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export default function PromoModal() {
  const [step, setStep] = useState(0); // 0 = cerrado, 1 = MODAL-1, 2 = MODAL-2
  const [hasSeenSession, setHasSeenSession] = useState(false);

  useEffect(() => {
    // Verificar si ya se mostró en esta sesión
    const seen = sessionStorage.getItem("promoSeen");
    if (!seen) {
      setStep(1);
    }
    setHasSeenSession(true);
  }, []);

  const closeModal = () => {
    setStep(0);
    sessionStorage.setItem("promoSeen", "true");
  };

  const goToStep2 = () => {
    setStep(2);
  };

  const handleFinalClose = () => {
    setStep(0);
    sessionStorage.setItem("promoSeen", "true");
  };

  // No renderizar hasta saber si ya se mostró
  if (!hasSeenSession) return null;

  return (
    <AnimatePresence>
      {step > 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
        >
          {step === 1 && (
            <motion.div
              key="modal1"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="relative max-w-md w-full rounded-2xl overflow-hidden shadow-2xl"
            >
              {/* Botón cerrar */}
              <button
                onClick={closeModal}
                className="absolute top-3 right-3 z-10 bg-white/80 hover:bg-white rounded-full p-1.5 transition-colors"
              >
                <X size={20} className="text-gray-700" />
              </button>

              {/* Imagen MODAL-1 */}
              <img
                src="/MODAL-1.jpeg"
                alt="Promoción ORTOPEDIX"
                className="w-full h-auto cursor-pointer"
                onClick={goToStep2}
              />

              {/* Botón de acción */}
              <div className="absolute bottom-4 left-0 right-0 flex justify-center">
                <button
                  onClick={goToStep2}
                  className="bg-[#0D5BD7] hover:bg-[#083B8A] text-white font-bold px-8 py-3 rounded-full text-lg shadow-lg transition-all hover:shadow-xl hover:scale-105"
                >
                  Ver más
                </button>
              </div>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              key="modal2"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="relative max-w-md w-full rounded-2xl overflow-hidden shadow-2xl"
            >
              {/* Botón cerrar */}
              <button
                onClick={handleFinalClose}
                className="absolute top-3 right-3 z-10 bg-white/80 hover:bg-white rounded-full p-1.5 transition-colors"
              >
                <X size={20} className="text-gray-700" />
              </button>

              {/* Imagen MODAL-2 */}
              <a
                href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent("¡Quiero aprovechar la promoción! 🎉")}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/MODAL-2.jpeg"
                  alt="Promoción ORTOPEDIX"
                  className="w-full h-auto cursor-pointer"
                />
              </a>
            </motion.div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
