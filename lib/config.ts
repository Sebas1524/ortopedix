// ============================================================
// ORTOPEDIX - CONFIGURACIÓN CENTRAL
// Edita este archivo para cambiar información del sitio
// ============================================================

export const siteConfig = {
  name: "ORTOPEDIX",
  tagline: "Ortopedia y Rehabilitación Física",
  description:
    "Productos ortopédicos y equipos de rehabilitación física de alta calidad. Atención personalizada para adultos mayores, pacientes en recuperación y profesionales de salud.",

  // ---- CONTACTO ----
  whatsapp: "593999999999", // número sin + ni espacios
  whatsappMessage: "Hola, me interesa recibir asesoría de ORTOPEDIX.",
  email: "info@ortopedix.com",
  phone: "+593 99 999 9999",
  address: "Av. Principal 123, Quito, Ecuador",
  mapUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.793!2d-78.5249!3d-0.2295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMDDCsDEzJzQ2LjIiUyA3OMKwMzEnMjkuNiJX!5e0!3m2!1ses!2sec!4v1620000000000!5m2!1ses!2sec",

  // ---- HORARIOS ----
  hours: [
    { day: "Lunes – Viernes", time: "8:00 – 18:00" },
    { day: "Sábado", time: "9:00 – 14:00" },
    { day: "Domingo", time: "Cerrado" },
  ],

  // ---- REDES SOCIALES ----
  social: {
    facebook: "https://facebook.com/ortopedix",
    instagram: "https://instagram.com/ortopedix",
    tiktok: "https://tiktok.com/@ortopedix",
  },

  // ---- CATÁLOGO ----
  showPrices: true, // Cambiar a false para ocultar precios

  // ---- SEO ----
  siteUrl: "https://ortopedix.com",
  keywords:
    "ortopedia, productos ortopédicos, rehabilitación física, sillas de ruedas, muletas, andadores, adulto mayor, equipos médicos, fisioterapia, Quito",
};

// ---- PRODUCTOS ----
export const products = [
  // Movilidad
  {
    id: 1,
    name: "Silla de Ruedas Estándar",
    category: "Movilidad",
    subcategory: "Sillas de ruedas",
    description:
      "Silla de ruedas plegable con estructura de aluminio ligero. Ideal para uso diario y desplazamientos exteriores.",
    price: 280,
    featured: true,
    image: "/images/products/silla-ruedas.jpg",
  },
  {
    id: 2,
    name: "Andador con Ruedas",
    category: "Movilidad",
    subcategory: "Andadores",
    description:
      "Andador ergonómico con 4 ruedas, frenos de mano y asiento integrado para descanso.",
    price: 145,
    featured: true,
    image: "/images/products/andador.jpg",
  },
  {
    id: 3,
    name: "Bastón Regulable",
    category: "Movilidad",
    subcategory: "Bastones",
    description:
      "Bastón de aluminio con altura regulable y empuñadura anatómica antideslizante.",
    price: 35,
    featured: true,
    image: "/images/products/baston.jpg",
  },
  {
    id: 4,
    name: "Muletas Axilares",
    category: "Movilidad",
    subcategory: "Muletas",
    description:
      "Par de muletas axilares regulables con almohadillas ergonómicas de alta densidad.",
    price: 55,
    featured: true,
    image: "/images/products/muletas.jpg",
  },
  // Rehabilitación
  {
    id: 5,
    name: "Set Bandas Elásticas",
    category: "Rehabilitación",
    subcategory: "Bandas elásticas",
    description:
      "Set de 5 bandas de resistencia progresiva para fisioterapia y rehabilitación muscular.",
    price: 28,
    featured: false,
    image: "/images/products/bandas.jpg",
  },
  {
    id: 6,
    name: "Pesas Terapéuticas",
    category: "Rehabilitación",
    subcategory: "Pesas terapéuticas",
    description:
      "Set de pesas de muñeca y tobillo para rehabilitación progresiva. Desde 0.5 kg hasta 3 kg.",
    price: 42,
    featured: false,
    image: "/images/products/pesas.jpg",
  },
  {
    id: 7,
    name: "Rodillera de Soporte",
    category: "Ortesis",
    subcategory: "Rodilleras",
    description:
      "Rodillera ortopédica con varillas laterales para estabilización y soporte articular.",
    price: 38,
    featured: true,
    image: "/images/products/rodillera.jpg",
  },
  {
    id: 8,
    name: "Faja Lumbar Premium",
    category: "Ortesis",
    subcategory: "Fajas",
    description:
      "Faja lumbar con soporte rígido ajustable. Ideal para dolor lumbar crónico y postoperatorio.",
    price: 65,
    featured: true,
    image: "/images/products/faja.jpg",
  },
  {
    id: 9,
    name: "Cama Hospitalaria Manual",
    category: "Adulto Mayor",
    subcategory: "Camas hospitalarias",
    description:
      "Cama hospitalaria de 3 posiciones con barandas de seguridad y colchón antiescaras incluido.",
    price: 650,
    featured: false,
    image: "/images/products/cama.jpg",
  },
  {
    id: 10,
    name: "Silla Sanitaria con Ruedas",
    category: "Adulto Mayor",
    subcategory: "Sillas sanitarias",
    description:
      "Silla de baño con ruedas, reposa brazos abatibles y asiento con apertura central.",
    price: 95,
    featured: false,
    image: "/images/products/silla-sanitaria.jpg",
  },
  {
    id: 11,
    name: "Cojín Antiescaras",
    category: "Adulto Mayor",
    subcategory: "Cojines antiescaras",
    description:
      "Cojín de gel viscoelástico para prevención de úlceras por presión. Compatible con sillas de ruedas.",
    price: 48,
    featured: false,
    image: "/images/products/cojin.jpg",
  },
  {
    id: 12,
    name: "Tobillera Ortopédica",
    category: "Ortesis",
    subcategory: "Tobilleras",
    description:
      "Tobillera de estabilización con sistema de cordones y soporte lateral reforzado.",
    price: 32,
    featured: false,
    image: "/images/products/tobillera.jpg",
  },
];

export const categories = [
  {
    id: "movilidad",
    name: "Movilidad",
    description:
      "Sillas de ruedas, andadores, bastones y muletas para mantener tu independencia y calidad de vida.",
    icon: "♿",
    color: "from-blue-500 to-blue-700",
    subcategories: ["Sillas de ruedas", "Bastones", "Muletas", "Andadores"],
  },
  {
    id: "rehabilitacion",
    name: "Rehabilitación",
    description:
      "Equipos y accesorios para tu proceso de recuperación física, supervisado por profesionales.",
    icon: "💪",
    color: "from-green-500 to-green-700",
    subcategories: [
      "Bandas elásticas",
      "Equipos de fisioterapia",
      "Pesas terapéuticas",
    ],
  },
  {
    id: "ortesis",
    name: "Ortesis",
    description:
      "Rodilleras, tobilleras, muñequeras y fajas para soporte y estabilización articular.",
    icon: "🦵",
    color: "from-indigo-500 to-indigo-700",
    subcategories: ["Rodilleras", "Tobilleras", "Muñequeras", "Fajas"],
  },
  {
    id: "adulto-mayor",
    name: "Adulto Mayor",
    description:
      "Soluciones especializadas para el cuidado y confort de adultos mayores en el hogar.",
    icon: "🏡",
    color: "from-teal-500 to-teal-700",
    subcategories: [
      "Sillas sanitarias",
      "Camas hospitalarias",
      "Cojines antiescaras",
    ],
  },
];

export const testimonials = [
  {
    id: 1,
    name: "Rosa Elena Vásquez",
    age: 72,
    text: "Después de mi operación de cadera, ORTOPEDIX me ayudó a encontrar exactamente lo que necesitaba. El andador que me recomendaron cambió mi vida. El equipo es muy atento y paciente.",
    rating: 5,
    product: "Andador con Ruedas",
  },
  {
    id: 2,
    name: "Dr. Andrés Mora",
    role: "Fisioterapeuta",
    text: "Trabajo con ORTOPEDIX para mis pacientes y siempre encuentro productos de calidad certificada. Su asesoría profesional es excelente y los precios son competitivos.",
    rating: 5,
    product: "Equipos de Rehabilitación",
  },
  {
    id: 3,
    name: "Carmen López",
    age: 58,
    text: "Mi madre necesitaba una silla de ruedas y no sabíamos cuál elegir. El equipo de ORTOPEDIX nos guió perfectamente. La atención fue increíble, como si fueran de la familia.",
    rating: 5,
    product: "Silla de Ruedas Estándar",
  },
  {
    id: 4,
    name: "Jorge Paredes",
    age: 45,
    text: "Me lesioné la rodilla y necesitaba una rodillera especializada. En ORTOPEDIX encontré exactamente lo que mi médico recomendó. Entrega rápida y producto de primera calidad.",
    rating: 5,
    product: "Rodillera de Soporte",
  },
];

export const benefits = [
  {
    icon: "ShieldCheck",
    title: "Calidad Garantizada",
    description:
      "Todos nuestros productos cuentan con certificación médica y garantía de calidad.",
  },
  {
    icon: "UserCheck",
    title: "Atención Personalizada",
    description:
      "Nuestros asesores te guían para encontrar el producto ideal según tu condición.",
  },
  {
    icon: "Award",
    title: "Productos Certificados",
    description:
      "Cumplimos con estándares internacionales de seguridad y eficacia médica.",
  },
  {
    icon: "Truck",
    title: "Entrega Rápida",
    description:
      "Llevamos tus productos donde los necesitas, con cuidado y puntualidad.",
  },
  {
    icon: "Stethoscope",
    title: "Asesoría Profesional",
    description:
      "Contamos con profesionales de salud para orientarte correctamente.",
  },
  {
    icon: "HeartHandshake",
    title: "Soporte Continuo",
    description:
      "Te acompañamos después de tu compra con seguimiento y atención postventa.",
  },
];
