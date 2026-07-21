"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { siteConfig } from "@/lib/config";

const navLinks = [
  { href: "/", label: "Inicio" },
  { href: "/productos", label: "Productos" },
  { href: "/categorias", label: "Categorías" },
  { href: "/cita", label: "Agendar Cita" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/contacto", label: "Contacto" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navBg = isHome
    ? scrolled
      ? "bg-white shadow-md"
      : "bg-transparent"
    : "bg-white shadow-sm";

  const textColor = isHome && !scrolled ? "text-white" : "text-gray-800";

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className={`transition-all duration-300 ${navBg}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo con ícono */}
            <Link href="/" className="flex items-center gap-2 group">
              <img
                src="/icono-nav.png"
                alt="ORTOPEDIX"
                className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
              />
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => {
                const active = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                      active
                        ? "bg-[#0D5BD7] text-white"
                        : isHome && !scrolled
                        ? "text-white/90 hover:text-white hover:bg-white/15"
                        : "text-gray-700 hover:text-[#0D5BD7] hover:bg-blue-50"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            {/* CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href={`tel:${siteConfig.phone}`}
                className={`flex items-center gap-2 text-sm font-semibold ${
                  isHome && !scrolled
                    ? "text-white/80 hover:text-white"
                    : "text-gray-600 hover:text-[#0D5BD7]"
                } transition-colors`}
              >
                <Phone size={16} />
                {siteConfig.phone}
              </a>
              <a
                href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#6ABF4B] hover:bg-[#4a9932] text-white px-5 py-2.5 rounded-xl text-sm font-bold transition-all hover:shadow-lg hover:scale-105"
              >
                WhatsApp
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`lg:hidden p-2 rounded-lg ${
                isHome && !scrolled
                  ? "text-white hover:bg-white/15"
                  : "text-gray-700 hover:bg-gray-100"
              } transition-colors`}
              aria-label="Menú"
            >
              {isOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white border-t border-gray-100 shadow-xl"
            >
              <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
                {navLinks.map((link) => {
                  const active = pathname === link.href;
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`px-4 py-4 rounded-xl text-lg font-semibold transition-all ${
                        active
                          ? "bg-[#0D5BD7] text-white"
                          : "text-gray-700 hover:bg-blue-50 hover:text-[#0D5BD7]"
                      }`}
                    >
                      {link.label}
                    </Link>
                  );
                })}
                <div className="mt-3 pt-3 border-t border-gray-100 flex flex-col gap-3">
                  <a
                    href={`tel:${siteConfig.phone}`}
                    className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl border-2 border-[#0D5BD7] text-[#0D5BD7] font-semibold text-lg"
                  >
                    <Phone size={20} />
                    {siteConfig.phone}
                  </a>
                  <a
                    href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsOpen(false)}
                    className="bg-[#6ABF4B] text-white px-4 py-4 rounded-xl font-bold text-lg text-center"
                  >
                    Contactar por WhatsApp
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
