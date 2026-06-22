"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  UserCheck,
  Award,
  Truck,
  Stethoscope,
  HeartHandshake,
} from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  ShieldCheck: <ShieldCheck size={32} />,
  UserCheck: <UserCheck size={32} />,
  Award: <Award size={32} />,
  Truck: <Truck size={32} />,
  Stethoscope: <Stethoscope size={32} />,
  HeartHandshake: <HeartHandshake size={32} />,
};

const benefitsData = [
  { icon: "ShieldCheck", title: "Calidad Garantizada", description: "Todos nuestros productos cuentan con certificación médica y garantía de calidad comprobada." },
  { icon: "UserCheck", title: "Atención Personalizada", description: "Nuestros asesores te guían para encontrar el producto ideal según tu condición física." },
  { icon: "Award", title: "Productos Certificados", description: "Cumplimos con estándares internacionales de seguridad y eficacia médica." },
  { icon: "Truck", title: "Entrega Rápida", description: "Llevamos tus productos donde los necesitas, con cuidado y puntualidad garantizada." },
  { icon: "Stethoscope", title: "Asesoría Profesional", description: "Contamos con profesionales de salud para orientarte correctamente en cada decisión." },
  { icon: "HeartHandshake", title: "Soporte Continuo", description: "Te acompañamos después de tu compra con seguimiento y atención postventa personalizada." },
];

export default function Benefits() {
  return (
    <section className="bg-[#F5F7FA] py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#6ABF4B] font-bold text-sm uppercase tracking-widest">
            ¿Por qué elegirnos?
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-[#083B8A] mt-3 mb-4">
            Tu bienestar, nuestra prioridad
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Más de 10 años de experiencia respaldando la recuperación y calidad
            de vida de nuestros pacientes.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefitsData.map((benefit, i) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -6, boxShadow: "0 20px 40px rgba(13,91,215,0.12)" }}
              className="bg-white rounded-2xl p-8 shadow-sm cursor-default group transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-2xl bg-blue-50 group-hover:bg-[#0D5BD7] flex items-center justify-center text-[#0D5BD7] group-hover:text-white transition-all duration-300 mb-5">
                {iconMap[benefit.icon]}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                {benefit.title}
              </h3>
              <p className="text-gray-500 leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
