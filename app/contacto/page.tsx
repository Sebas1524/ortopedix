"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, MessageCircle, CheckCircle } from "lucide-react";
import { siteConfig } from "@/lib/config";

export default function ContactoPage() {
  const [form, setForm] = useState({ nombre: "", email: "", telefono: "", mensaje: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  const waUrl = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(
    "Hola, me contacto desde la página web de ORTOPEDIX."
  )}`;

  return (
    <>
      {/* Header */}
      <section
        className="pt-32 pb-16 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #083B8A 0%, #0D5BD7 100%)" }}
      >
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 40" className="w-full block">
            <path d="M0,20 C360,40 1080,0 1440,20 L1440,40 L0,40 Z" fill="#F5F7FA" />
          </svg>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-5xl sm:text-6xl font-black text-white mb-4">Contacto</h1>
            <p className="text-white/75 text-xl max-w-2xl mx-auto">
              Estamos aquí para ayudarte. Escríbenos, llámanos o visítanos en nuestra tienda.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="bg-[#F5F7FA] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-8">
            {/* Left info */}
            <div className="lg:col-span-2 flex flex-col gap-6">
              {/* Info card */}
              <div className="bg-white rounded-3xl p-8 shadow-sm">
                <h2 className="text-2xl font-black text-[#083B8A] mb-6">Información de contacto</h2>
                <ul className="space-y-5">
                  <li className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-xl bg-blue-50 flex items-center justify-center text-[#0D5BD7] shrink-0">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-700 text-sm mb-0.5">Dirección</div>
                      <div className="text-gray-500">{siteConfig.address}</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-xl bg-blue-50 flex items-center justify-center text-[#0D5BD7] shrink-0">
                      <Phone size={20} />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-700 text-sm mb-0.5">Teléfono</div>
                      <a href={`tel:${siteConfig.phone}`} className="text-gray-500 hover:text-[#0D5BD7] transition-colors">
                        {siteConfig.phone}
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-xl bg-blue-50 flex items-center justify-center text-[#0D5BD7] shrink-0">
                      <Mail size={20} />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-700 text-sm mb-0.5">Correo</div>
                      <a href={`mailto:${siteConfig.email}`} className="text-gray-500 hover:text-[#0D5BD7] transition-colors">
                        {siteConfig.email}
                      </a>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Hours */}
              <div className="bg-white rounded-3xl p-8 shadow-sm">
                <h2 className="text-xl font-black text-[#083B8A] mb-5 flex items-center gap-2">
                  <Clock size={20} className="text-[#0D5BD7]" /> Horarios
                </h2>
                <ul className="space-y-3">
                  {siteConfig.hours.map((h, i) => (
                    <li key={i} className="flex justify-between items-center">
                      <span className="font-semibold text-gray-600 text-sm">{h.day}</span>
                      <span className={`text-sm font-bold ${h.time === "Cerrado" ? "text-red-400" : "text-[#0D5BD7]"}`}>
                        {h.time}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* WhatsApp button */}
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#1aab50] text-white px-6 py-5 rounded-3xl font-black text-xl transition-all hover:shadow-xl"
              >
                <MessageCircle size={28} />
                Escribir por WhatsApp
              </a>

              {/* Social */}
              <div className="bg-white rounded-3xl p-6 shadow-sm">
                <h3 className="font-bold text-gray-700 mb-4">Redes sociales</h3>
                <div className="flex gap-3">
                  <a href={siteConfig.social.facebook} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-blue-50 text-[#0D5BD7] font-semibold text-sm hover:bg-[#0D5BD7] hover:text-white transition-all">
                    <span className="font-bold">FB</span> Facebook
                  </a>
                  <a href={siteConfig.social.instagram} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-pink-50 text-pink-600 font-semibold text-sm hover:bg-pink-600 hover:text-white transition-all">
                    <span className="font-bold">IG</span> Instagram
                  </a>
                </div>
              </div>
            </div>

            {/* Right: form + map */}
            <div className="lg:col-span-3 flex flex-col gap-6">
              {/* Contact form */}
              <div className="bg-white rounded-3xl p-8 shadow-sm">
                <h2 className="text-2xl font-black text-[#083B8A] mb-7">Envíanos un mensaje</h2>
                {sent ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-10"
                  >
                    <CheckCircle size={56} className="text-[#6ABF4B] mx-auto mb-4" />
                    <h3 className="text-2xl font-black text-[#083B8A] mb-2">¡Mensaje enviado!</h3>
                    <p className="text-gray-500 text-lg">Te responderemos a la brevedad posible.</p>
                    <button
                      onClick={() => { setSent(false); setForm({ nombre: "", email: "", telefono: "", mensaje: "" }); }}
                      className="mt-6 text-[#0D5BD7] font-semibold hover:underline"
                    >
                      Enviar otro mensaje
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1.5">Nombre *</label>
                        <input
                          type="text" required placeholder="Tu nombre"
                          value={form.nombre} onChange={(e) => setForm({ ...form, nombre: e.target.value })}
                          className="w-full px-4 py-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0D5BD7] text-base"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1.5">Teléfono</label>
                        <input
                          type="tel" placeholder="0999999999"
                          value={form.telefono} onChange={(e) => setForm({ ...form, telefono: e.target.value })}
                          className="w-full px-4 py-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0D5BD7] text-base"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1.5">Correo electrónico *</label>
                      <input
                        type="email" required placeholder="correo@ejemplo.com"
                        value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full px-4 py-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0D5BD7] text-base"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1.5">Mensaje *</label>
                      <textarea
                        required rows={5} placeholder="¿En qué podemos ayudarte?"
                        value={form.mensaje} onChange={(e) => setForm({ ...form, mensaje: e.target.value })}
                        className="w-full px-4 py-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0D5BD7] text-base resize-none"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-[#0D5BD7] hover:bg-[#083B8A] text-white py-5 rounded-2xl font-black text-xl transition-all hover:shadow-xl min-h-[68px]"
                    >
                      Enviar mensaje
                    </button>
                  </form>
                )}
              </div>

              {/* Map */}
              <div className="bg-white rounded-3xl overflow-hidden shadow-sm h-72">
                <iframe
                  src={siteConfig.mapUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ubicación ORTOPEDIX"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
