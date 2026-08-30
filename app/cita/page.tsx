"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Clock, User, Phone, Mail, FileText, CheckCircle, ChevronLeft, ChevronRight, MessageCircle } from "lucide-react";
import { siteConfig } from "@/lib/config";
import { supabase } from "@/lib/supabase";

const timeSlots = [
  "08:00", "08:30", "09:00", "09:30", "10:00", "10:30",
  "11:00", "11:30", "14:00", "14:30", "15:00", "15:30",
  "16:00", "16:30", "17:00", "17:30",
];

const motivoOptions = [
  "Asesoría de productos",
  "Evaluación ortopédica",
  "Rehabilitación física",
  "Adulto mayor",
  "Postoperatorio",
  "Otro",
];

function getDaysInMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate();
}
function getFirstDayOfMonth(year: number, month: number) {
  return new Date(year, month, 1).getDay();
}

const MONTHS_ES = [
  "Enero","Febrero","Marzo","Abril","Mayo","Junio",
  "Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre",
];
const DAYS_ES = ["Dom","Lun","Mar","Mié","Jue","Vie","Sáb"];

interface ReservedSlot {
  fecha: string;
  hora: string;
}

export default function CitaPage() {
  const today = new Date();
  const [viewYear, setViewYear] = useState(today.getFullYear());
  const [viewMonth, setViewMonth] = useState(today.getMonth());
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [form, setForm] = useState({ nombre: "", telefono: "", email: "", motivo: "" });
  const [submitted, setSubmitted] = useState(false);
  const [reservedSlots, setReservedSlots] = useState<ReservedSlot[]>([]);
  const [loadingSlots, setLoadingSlots] = useState(false);
  const [saving, setSaving] = useState(false);

  // Cargar citas reservadas desde Supabase
  useEffect(() => {
    loadReservedSlots();
  }, []);

  const loadReservedSlots = async () => {
    setLoadingSlots(true);
    try {
      const { data, error } = await supabase
        .from("citas")
        .select("fecha, hora");
      
      if (error) {
        console.error("Error cargando citas:", error);
      } else if (data) {
        setReservedSlots(data as ReservedSlot[]);
      }
    } catch (err) {
      console.error("Error:", err);
    } finally {
      setLoadingSlots(false);
    }
  };

  const daysInMonth = getDaysInMonth(viewYear, viewMonth);
  const firstDay = getFirstDayOfMonth(viewYear, viewMonth);

  const prevMonth = () => {
    if (viewMonth === 0) { setViewMonth(11); setViewYear(y => y - 1); }
    else setViewMonth(m => m - 1);
  };
  const nextMonth = () => {
    if (viewMonth === 11) { setViewMonth(0); setViewYear(y => y + 1); }
    else setViewMonth(m => m + 1);
  };

  const selectDay = (day: number) => {
    const d = new Date(viewYear, viewMonth, day);
    if (d < new Date(today.getFullYear(), today.getMonth(), today.getDate())) return;
    if (d.getDay() === 0) return;
    setSelectedDate(`${viewYear}-${String(viewMonth + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`);
    setSelectedTime(null);
  };

  const isSlotReserved = (date: string, time: string) => {
    return reservedSlots.some((slot) => slot.fecha === date && slot.hora === time);
  };

  const getAvailableSlotsCount = (date: string) => {
    return timeSlots.filter((t) => !isSlotReserved(date, t)).length;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedDate || !selectedTime || !form.nombre || !form.telefono || !form.motivo) return;

    if (isSlotReserved(selectedDate, selectedTime)) {
      alert("Este horario ya fue reservado. Por favor selecciona otro.");
      setSelectedTime(null);
      return;
    }

    setSaving(true);

    try {
      // Insertar en Supabase
      const { error } = await supabase
        .from("citas")
        .insert([
          {
            fecha: selectedDate,
            hora: selectedTime,
            nombre: form.nombre,
            telefono: form.telefono,
            email: form.email || null,
            motivo: form.motivo,
          },
        ]);

      if (error) {
        console.error("Error guardando cita:", error);
        alert("Hubo un error al guardar la cita. Intenta de nuevo.");
        return;
      }

      // Recargar slots reservados
      await loadReservedSlots();

      // Enviar a WhatsApp
      const waMessage = `🌐 *NUEVA CITA AGENDADA - ORTOPEDIX* 🌐\n\n` +
        `📅 *Fecha:* ${selectedDate}\n` +
        `⏰ *Hora:* ${selectedTime}\n\n` +
        `👤 *Nombre:* ${form.nombre}\n` +
        `📞 *Teléfono:* ${form.telefono}\n` +
        (form.email ? `📧 *Email:* ${form.email}\n` : "") +
        `📋 *Motivo:* ${form.motivo}\n\n` +
        `✅ Cita registrada desde la página web`;

      const waUrl = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(waMessage)}`;
      window.open(waUrl, "_blank");

      setSubmitted(true);
    } catch (err) {
      console.error("Error:", err);
      alert("Hubo un error. Intenta de nuevo.");
    } finally {
      setSaving(false);
    }
  };

  const isPast = (day: number) => {
    const d = new Date(viewYear, viewMonth, day);
    return d < new Date(today.getFullYear(), today.getMonth(), today.getDate());
  };
  const isSunday = (day: number) => new Date(viewYear, viewMonth, day).getDay() === 0;
  const isSelected = (day: number) =>
    selectedDate === `${viewYear}-${String(viewMonth + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;

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
            <h1 className="text-5xl sm:text-6xl font-black text-white mb-4">Agendar Cita</h1>
            <p className="text-white/75 text-xl max-w-2xl mx-auto">
              Reserva una consulta personalizada con nuestro equipo de especialistas.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="bg-[#F5F7FA] py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Notificación: En el teléfono es más fácil */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8 bg-gradient-to-r from-[#6ABF4B] to-[#4a9932] rounded-2xl shadow-lg p-5 sm:p-6"
          >
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                  <Phone size={26} className="text-white" />
                </div>
                <div>
                  <p className="text-white font-bold text-lg leading-tight">
                    📱 ¿Estás en tu teléfono?
                  </p>
                  <p className="text-white/85 text-sm mt-1">
                    Agenda tu cita por WhatsApp directamente desde tu teléfono. Es más rápido, ya tienes la app iniciada.
                  </p>
                </div>
              </div>
              <a
                href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent("Hola, quiero agendar una cita en ORTOPEDIX.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-[#4a9932] px-6 py-3 rounded-xl font-black hover:bg-gray-50 transition-all hover:shadow-lg shrink-0"
              >
                <MessageCircle size={20} />
                Agendar por WhatsApp
              </a>
            </div>
          </motion.div>

          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white rounded-3xl shadow-lg p-12 text-center max-w-lg mx-auto"
              >
                <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                  <CheckCircle size={40} className="text-[#6ABF4B]" />
                </div>
                <h2 className="text-3xl font-black text-[#083B8A] mb-4">¡Cita Registrada!</h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  Su cita ha sido registrada exitosamente. Nos comunicaremos con usted para confirmar la disponibilidad.
                </p>
                <div className="bg-blue-50 rounded-2xl p-5 text-left mb-8 space-y-2">
                  <div className="flex items-center gap-3 text-sm"><Calendar size={16} className="text-[#0D5BD7]" /><span className="font-semibold">{selectedDate}</span></div>
                  <div className="flex items-center gap-3 text-sm"><Clock size={16} className="text-[#0D5BD7]" /><span className="font-semibold">{selectedTime}</span></div>
                  <div className="flex items-center gap-3 text-sm"><User size={16} className="text-[#0D5BD7]" /><span className="font-semibold">{form.nombre}</span></div>
                </div>
                <button
                  onClick={() => { setSubmitted(false); setSelectedDate(null); setSelectedTime(null); setForm({ nombre: "", telefono: "", email: "", motivo: "" }); }}
                  className="bg-[#0D5BD7] text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-[#083B8A] transition-colors"
                >
                  Agendar otra cita
                </button>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                onSubmit={handleSubmit}
                className="grid lg:grid-cols-2 gap-8"
              >
                {/* Calendar */}
                <div className="bg-white rounded-3xl shadow-sm p-7">
                  <h2 className="text-2xl font-black text-[#083B8A] mb-6 flex items-center gap-2">
                    <Calendar size={24} className="text-[#0D5BD7]" /> Selecciona una fecha
                  </h2>

                  {/* Month nav */}
                  <div className="flex items-center justify-between mb-5">
                    <button type="button" onClick={prevMonth} className="p-2 rounded-xl hover:bg-blue-50 text-[#0D5BD7] transition-colors">
                      <ChevronLeft size={22} />
                    </button>
                    <span className="font-bold text-lg text-gray-800">
                      {MONTHS_ES[viewMonth]} {viewYear}
                    </span>
                    <button type="button" onClick={nextMonth} className="p-2 rounded-xl hover:bg-blue-50 text-[#0D5BD7] transition-colors">
                      <ChevronRight size={22} />
                    </button>
                  </div>

                  {/* Day headers */}
                  <div className="grid grid-cols-7 mb-2">
                    {DAYS_ES.map((d) => (
                      <div key={d} className="text-center text-xs font-bold text-gray-400 py-2">{d}</div>
                    ))}
                  </div>

                  {/* Days */}
                  <div className="grid grid-cols-7 gap-1">
                    {Array.from({ length: firstDay }).map((_, i) => <div key={`empty-${i}`} />)}
                    {Array.from({ length: daysInMonth }).map((_, i) => {
                      const day = i + 1;
                      const past = isPast(day);
                      const sun = isSunday(day);
                      const sel = isSelected(day);
                      const disabled = past || sun;
                      const dateStr = `${viewYear}-${String(viewMonth + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
                      const availableCount = getAvailableSlotsCount(dateStr);
                      const fullyBooked = availableCount === 0;
                      
                      return (
                        <button
                          key={day}
                          type="button"
                          disabled={disabled || fullyBooked}
                          onClick={() => selectDay(day)}
                          className={`relative w-full aspect-square rounded-xl text-sm font-semibold transition-all ${
                            sel
                              ? "bg-[#0D5BD7] text-white shadow-md"
                              : disabled
                              ? "text-gray-200 cursor-not-allowed"
                              : fullyBooked
                              ? "text-gray-300 cursor-not-allowed bg-gray-50 line-through"
                              : "text-gray-700 hover:bg-blue-50 hover:text-[#0D5BD7]"
                          }`}
                        >
                          {day}
                          {!disabled && !fullyBooked && availableCount < timeSlots.length && (
                            <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-[#6ABF4B] rounded-full" />
                          )}
                        </button>
                      );
                    })}
                  </div>

                  {/* Time slots */}
                  {selectedDate && (
                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mt-6">
                      <h3 className="text-base font-bold text-gray-700 mb-3 flex items-center gap-2">
                        <Clock size={18} className="text-[#0D5BD7]" /> Horario disponible
                      </h3>
                      {loadingSlots ? (
                        <p className="text-sm text-gray-400 italic">Cargando horarios...</p>
                      ) : getAvailableSlotsCount(selectedDate) === 0 ? (
                        <p className="text-sm text-gray-400 italic">
                          No hay horarios disponibles para esta fecha.
                        </p>
                      ) : (
                        <div className="grid grid-cols-4 gap-2">
                          {timeSlots.map((t) => {
                            const reserved = isSlotReserved(selectedDate, t);
                            return (
                              <button
                                key={t}
                                type="button"
                                disabled={reserved}
                                onClick={() => setSelectedTime(t)}
                                className={`py-2.5 rounded-xl text-sm font-semibold transition-all ${
                                  reserved
                                    ? "bg-gray-100 text-gray-300 cursor-not-allowed line-through"
                                    : selectedTime === t
                                    ? "bg-[#6ABF4B] text-white shadow-sm"
                                    : "bg-gray-50 text-gray-600 hover:bg-blue-50 hover:text-[#0D5BD7] border border-gray-100"
                                }`}
                              >
                                {t}
                              </button>
                            );
                          })}
                        </div>
                      )}
                    </motion.div>
                  )}
                </div>

                {/* Form */}
                <div className="bg-white rounded-3xl shadow-sm p-7 flex flex-col">
                  <h2 className="text-2xl font-black text-[#083B8A] mb-6 flex items-center gap-2">
                    <User size={24} className="text-[#0D5BD7]" /> Tus datos
                  </h2>

                  <div className="flex flex-col gap-5 flex-1">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1.5">Nombre completo *</label>
                      <div className="relative">
                        <User size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                        <input
                          type="text"
                          required
                          placeholder="Tu nombre completo"
                          value={form.nombre}
                          onChange={(e) => setForm({ ...form, nombre: e.target.value })}
                          className="w-full pl-11 pr-4 py-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0D5BD7] text-base"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1.5">Teléfono *</label>
                      <div className="relative">
                        <Phone size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                        <input
                          type="tel"
                          required
                          placeholder="Ej: 0999999999"
                          value={form.telefono}
                          onChange={(e) => setForm({ ...form, telefono: e.target.value })}
                          className="w-full pl-11 pr-4 py-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0D5BD7] text-base"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1.5">Correo electrónico</label>
                      <div className="relative">
                        <Mail size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                        <input
                          type="email"
                          placeholder="correo@ejemplo.com"
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          className="w-full pl-11 pr-4 py-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0D5BD7] text-base"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1.5">Motivo de consulta *</label>
                      <div className="relative">
                        <FileText size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                        <select
                          required
                          value={form.motivo}
                          onChange={(e) => setForm({ ...form, motivo: e.target.value })}
                          className="w-full pl-11 pr-4 py-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0D5BD7] text-base bg-white appearance-none"
                        >
                          <option value="">Selecciona un motivo</option>
                          {motivoOptions.map((m) => <option key={m}>{m}</option>)}
                        </select>
                      </div>
                    </div>

                    {/* Summary */}
                    {selectedDate && selectedTime && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="bg-blue-50 rounded-2xl p-4 flex items-center gap-4 mt-1"
                      >
                        <div className="text-3xl">📅</div>
                        <div>
                          <div className="font-bold text-[#083B8A]">{selectedDate}</div>
                          <div className="text-[#0D5BD7] font-semibold">{selectedTime}</div>
                        </div>
                      </motion.div>
                    )}

                    <button
                      type="submit"
                      disabled={!selectedDate || !selectedTime || !form.nombre || !form.telefono || !form.motivo || saving}
                      className="mt-auto w-full bg-[#0D5BD7] hover:bg-[#083B8A] text-white py-5 rounded-2xl font-black text-xl transition-all hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed min-h-[68px]"
                    >
                      {saving ? "Guardando..." : "Agendar Cita"}
                    </button>
                    <p className="text-gray-400 text-xs text-center">
                      * Te contactaremos para confirmar disponibilidad
                    </p>
                  </div>
                </div>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </section>
    </>
  );
}
