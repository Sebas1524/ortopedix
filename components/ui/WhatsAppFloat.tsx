"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/lib/config";

export default function WhatsAppFloat() {
  const url = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(
    siteConfig.whatsappMessage
  )}`;

  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.5, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-2xl whatsapp-pulse"
    >
      <MessageCircle size={30} className="text-white fill-white" />
    </motion.a>
  );
}
