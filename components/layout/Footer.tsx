import Link from "next/link";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { siteConfig } from "@/lib/config";

export default function Footer() {
  return (
    <footer className="bg-[#083B8A] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#0D5BD7] to-[#6ABF4B] flex items-center justify-center">
                <span className="text-white font-black text-sm">OX</span>
              </div>
              <div>
                <div className="font-black text-xl">ORTOPEDIX</div>
                <div className="text-xs text-white/60">Ortopedia & Rehabilitación</div>
              </div>
            </div>
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              Productos ortopédicos y equipos de rehabilitación de alta calidad.
              Tu bienestar y movilidad son nuestra prioridad.
            </p>
            {/* Social */}
            <div className="flex gap-3">
              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/10 hover:bg-[#6ABF4B] flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <span className="font-bold text-xs">FB</span>
              </a>
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/10 hover:bg-[#6ABF4B] flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <span className="font-bold text-xs">IG</span>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-bold text-lg mb-5 text-white">Navegación</h3>
            <ul className="space-y-3">
              {[
                { href: "/", label: "Inicio" },
                { href: "/productos", label: "Productos" },
                { href: "/categorias", label: "Categorías" },
                { href: "/cita", label: "Agendar Cita" },
                { href: "/nosotros", label: "Nosotros" },
                { href: "/contacto", label: "Contacto" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-[#6ABF4B] transition-colors text-sm font-medium"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="font-bold text-lg mb-5 text-white">Horarios</h3>
            <ul className="space-y-3">
              {siteConfig.hours.map((h, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Clock size={16} className="text-[#6ABF4B] mt-0.5 shrink-0" />
                  <div>
                    <div className="text-sm font-semibold text-white">{h.day}</div>
                    <div className="text-sm text-white/60">{h.time}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-5 text-white">Contacto</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-[#6ABF4B] mt-0.5 shrink-0" />
                <span className="text-sm text-white/70">{siteConfig.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-[#6ABF4B] shrink-0" />
                <a href={`tel:${siteConfig.phone}`} className="text-sm text-white/70 hover:text-white transition-colors">
                  {siteConfig.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-[#6ABF4B] shrink-0" />
                <a href={`mailto:${siteConfig.email}`} className="text-sm text-white/70 hover:text-white transition-colors">
                  {siteConfig.email}
                </a>
              </li>
            </ul>
            <a
              href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 bg-[#6ABF4B] hover:bg-[#4a9932] text-white px-5 py-3 rounded-xl font-bold text-sm transition-all hover:shadow-lg"
            >
              Escribir por WhatsApp
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/40 text-sm">
            © {new Date().getFullYear()} ORTOPEDIX. Todos los derechos reservados.
          </p>
          <p className="text-white/30 text-xs">
            Ortopedia & Rehabilitación Física
          </p>
        </div>
      </div>
    </footer>
  );
}
