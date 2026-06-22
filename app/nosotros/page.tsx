"use client";

import { motion } from "framer-motion";
import { Heart, Target, Eye, Award, Users, ShieldCheck, Handshake } from "lucide-react";

const values = [
  { icon: <Heart size={28} />, title: "Vocación de servicio", description: "Cada paciente es único. Atendemos con empatía, paciencia y dedicación genuina." },
  { icon: <Award size={28} />, title: "Excelencia", description: "Trabajamos con los más altos estándares de calidad en cada producto y servicio." },
  { icon: <ShieldCheck size={28} />, title: "Confianza", description: "Transparencia, honestidad y respaldo en cada recomendación y venta." },
  { icon: <Handshake size={28} />, title: "Compromiso", description: "Acompañamos a nuestros pacientes en todo su proceso de recuperación." },
];

const team = [
  { name: "Dra. Patricia Morales", role: "Directora Médica", specialty: "Ortopedia y Traumatología" },
  { name: "Lic. Roberto Sánchez", role: "Fisioterapeuta Senior", specialty: "Rehabilitación Física" },
  { name: "Ing. Carmen Torres", role: "Especialista en Equipos", specialty: "Ingeniería Biomédica" },
];

export default function NosotrosPage() {
  return (
    <>
      {/* Header */}
      <section
        className="pt-32 pb-16 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #083B8A 0%, #0D5BD7 100%)" }}
      >
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 40" className="w-full block">
            <path d="M0,20 C360,40 1080,0 1440,20 L1440,40 L0,40 Z" fill="white" />
          </svg>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-5xl sm:text-6xl font-black text-white mb-4">Nosotros</h1>
            <p className="text-white/75 text-xl max-w-2xl mx-auto">
              Más de 10 años ayudando a personas a recuperar su movilidad y calidad de vida.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Historia */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="text-[#6ABF4B] font-bold text-sm uppercase tracking-widest">Nuestra Historia</span>
              <h2 className="text-4xl font-black text-[#083B8A] mt-3 mb-6 leading-tight">
                Nació de la necesidad de un servicio humano y especializado
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed text-lg">
                <p>
                  ORTOPEDIX nació en Quito hace más de una década, impulsada por la convicción de que cada persona
                  merece acceso a productos ortopédicos de calidad acompañados de una orientación profesional genuina.
                </p>
                <p>
                  Fundada por un equipo de profesionales de la salud y la ingeniería biomédica, nos especializamos en
                  ofrecer soluciones integrales para la movilidad, la rehabilitación física y el cuidado del adulto mayor.
                </p>
                <p>
                  Hoy, con más de 5.000 pacientes atendidos y una red de productos certificados internacionalmente,
                  seguimos comprometidos con nuestra misión original: mejorar la calidad de vida de quienes más lo necesitan.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-5">
                {[
                  { value: "10+", label: "Años de experiencia", color: "from-blue-500 to-blue-700" },
                  { value: "5.000+", label: "Pacientes atendidos", color: "from-green-500 to-green-700" },
                  { value: "500+", label: "Productos en catálogo", color: "from-indigo-500 to-indigo-700" },
                  { value: "100%", label: "Productos certificados", color: "from-teal-500 to-teal-700" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className={`bg-gradient-to-br ${stat.color} rounded-3xl p-8 text-white text-center`}
                  >
                    <div className="text-4xl font-black mb-2">{stat.value}</div>
                    <div className="text-white/80 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Misión y Visión */}
      <section className="bg-[#F5F7FA] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: <Target size={32} />,
                title: "Misión",
                text: "Brindar productos ortopédicos y de rehabilitación de alta calidad, acompañados de asesoría profesional personalizada, para mejorar la movilidad, independencia y bienestar de nuestros pacientes.",
                color: "bg-[#0D5BD7]",
              },
              {
                icon: <Eye size={32} />,
                title: "Visión",
                text: "Ser la empresa líder en ortopedia y rehabilitación física del Ecuador, reconocida por la excelencia en sus productos, la calidez en su atención y su compromiso con la salud y la calidad de vida de las personas.",
                color: "bg-[#6ABF4B]",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                className="bg-white rounded-3xl p-10 shadow-sm"
              >
                <div className={`w-16 h-16 ${item.color} rounded-2xl flex items-center justify-center text-white mb-6`}>
                  {item.icon}
                </div>
                <h3 className="text-2xl font-black text-[#083B8A] mb-4">{item.title}</h3>
                <p className="text-gray-600 text-lg leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="text-[#6ABF4B] font-bold text-sm uppercase tracking-widest">Lo que nos define</span>
            <h2 className="text-4xl font-black text-[#083B8A] mt-3">Nuestros Valores</h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((val, i) => (
              <motion.div
                key={val.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="text-center p-8 rounded-2xl bg-[#F5F7FA] hover:bg-blue-50 transition-colors group"
              >
                <div className="w-16 h-16 rounded-2xl bg-white group-hover:bg-[#0D5BD7] flex items-center justify-center text-[#0D5BD7] group-hover:text-white mx-auto mb-5 shadow-sm transition-all duration-300">
                  {val.icon}
                </div>
                <h3 className="font-bold text-gray-800 text-lg mb-3">{val.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{val.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-[#F5F7FA] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="text-[#6ABF4B] font-bold text-sm uppercase tracking-widest">Equipo</span>
            <h2 className="text-4xl font-black text-[#083B8A] mt-3">Profesionales a tu servicio</h2>
          </motion.div>
          <div className="grid sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl p-8 text-center shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#0D5BD7] to-[#6ABF4B] flex items-center justify-center text-white font-black text-2xl mx-auto mb-5">
                  {member.name.charAt(0)}
                </div>
                <h3 className="font-bold text-gray-800 text-lg">{member.name}</h3>
                <p className="text-[#0D5BD7] font-semibold text-sm mt-1">{member.role}</p>
                <p className="text-gray-400 text-sm mt-1">{member.specialty}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
