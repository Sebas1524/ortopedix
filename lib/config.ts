// ============================================================
// ORTOPEDIX - CONFIGURACIÓN CENTRAL
// ============================================================

export const siteConfig = {
  name: "ORTOPEDIX",
  tagline: "Ortopedia y Rehabilitación Física",
  description:
    "Productos ortopédicos y equipos de rehabilitación física de alta calidad. Atención personalizada para adultos mayores, pacientes en recuperación y profesionales de salud.",

  // ---- CONTACTO ----
  whatsapp: "593998385165",
  whatsappMessage: "Hola, me interesa recibir asesoría de ORTOPEDIX.",
  email: "info@ortopedix.com",
  phone: "+593 99 838 5165",
  address: "Gabriel Garcia Moreno y Federico Gonzalez S1-80, 170060 Quito",
  mapUrl: "https://maps.app.goo.gl/ywGvoNovNjYtnsgcA",
  mapEmbed:
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
  showPrices: true, // Cambiar a true para mostrar precios

  // ---- SEO ----
  siteUrl: "https://ortopedix.com",
  keywords:
    "ortopedia, productos ortopédicos, rehabilitación física, sillas de ruedas, muletas, andadores, adulto mayor, equipos médicos, fisioterapia, Quito",
};

// ---- PRODUCTOS ----
export const products = [
  {
    id: 1,
    name: "Collar Cervical Blando",
    category: "Ortesis",
    subcategory: "Collarines",
    description:
      "Collar cervical blando para soporte y alivio del dolor cervical. Diseño cómodo para uso prolongado.",
    price: 9.5,
    sizes: "S-M-L",
    featured: true,
    image: "/COLLAR-CERVICAL-BLANDO.jpg",
  },
  {
    id: 2,
    name: "Corrector de Postura Andino",
    category: "Ortesis",
    subcategory: "Correctores",
    description:
      "Corrector postural que alinea los hombros y la columna para mejorar la postura en el día a día.",
    price: 20,
    sizes: "S-M-L",
    featured: true,
    image: "/CORRECTOR-DE-POSTURA-ANDINO.jpg",
  },
  {
    id: 3,
    name: "Hombrera",
    category: "Ortesis",
    subcategory: "Hombreras",
    description:
      "Hombrera ortopédica para soporte y estabilización del hombro durante la rehabilitación.",
    price: 18,
    sizes: "S-M-L",
    featured: false,
    image: "/HOMBRERA.jpg",
  },
  {
    id: 4,
    name: "Cabestrillo Andino",
    category: "Ortesis",
    subcategory: "Inmovilizadores",
    description:
      "Cabestrillo ortopédico para inmovilización y soporte del brazo durante la recuperación.",
    price: 8,
    sizes: "S-M-L",
    featured: false,
    image: "/CABESTRILLO-ANDINO.jpg",
  },
  {
    id: 5,
    name: "Inmovilizador de Codo",
    category: "Ortesis",
    subcategory: "Inmovilizadores",
    description:
      "Inmovilizador rígido para codo, ideal para fracturas y postoperatorio. Ajuste ergonómico.",
    price: 20,
    sizes: "S-M-L",
    featured: false,
    image: "/INMOVILIZADOR-DE-CODO.jpg",
  },
  {
    id: 6,
    name: "Codera ORTOPEDIX",
    category: "Ortesis",
    subcategory: "Coderas",
    description:
      "Codera ortopédica con soporte lateral reforzado para protección y estabilización del codo.",
    price: 9,
    sizes: "S-M-L",
    featured: false,
    image: "/CODERA-ORTOPEDIX.jpg",
  },
  {
    id: 7,
    name: "Soporte de Muñeca",
    category: "Ortesis",
    subcategory: "Muñequeras",
    description:
      "Soporte ortopédico para muñeca con férula interna. Ideal para tendinitis y síndrome del túnel carpiano.",
    price: 6.3,
    sizes: "UNIVERSAL",
    featured: false,
    image: "/SOPORTE-DE-MUNECA.jpg",
  },
  {
    id: 8,
    name: "Rodillera Deportiva",
    category: "Ortesis",
    subcategory: "Rodilleras",
    description:
      "Rodillera deportiva de compresión para protección articular durante actividad física y deporte.",
    price: 6,
    sizes: "S-M-L",
    featured: false,
    image: "/RODILLERA-DEPORTIVA.jpg",
  },
  {
    id: 9,
    name: "Rodillera ORTOPEDIX",
    category: "Ortesis",
    subcategory: "Rodilleras",
    description:
      "Rodillera ortopédica con varillas laterales de estabilización para soporte articular clínico.",
    price: 9.9,
    sizes: "S-M-L",
    featured: true,
    image: "/RODILLERA-ORTOPEDIX.jpg",
  },
  {
    id: 10,
    name: "Tobillera en 8 ORTOPEDIX",
    category: "Ortesis",
    subcategory: "Tobilleras",
    description:
      "Tobillera en figura de 8 para estabilización y soporte del tobillo en esguinces y lesiones ligamentosas.",
    price: 9.5,
    sizes: "S-M-L",
    featured: true,
    image: "/TOBILLERA-EN-8-ORTOPEDIX.jpg",
  },
  {
    id: 11,
    name: "Faja Postquirúrgica",
    category: "Ortesis",
    subcategory: "Fajas",
    description:
      "Faja de compresión postquirúrgica para recuperación abdominal. Soporte y contención graduable.",
    price: 18,
    sizes: "S-M-L-XL",
    featured: true,
    image: "/FAJA-POSTQUIRURGICA.jpg",
  },
  {
    id: 12,
    name: "Andador",
    category: "Movilidad",
    subcategory: "Andadores",
    description:
      "Andador ergonómico resistente para apoyo y desplazamiento seguro. Ideal para adultos mayores y pacientes en rehabilitación.",
    price: 55,
    sizes: null,
    featured: true,
    image: "/ANDADOR.jpg",
  },
  {
    id: 13,
    name: "Muletas",
    category: "Movilidad",
    subcategory: "Muletas",
    description:
      "Par de muletas axilares de aluminio con altura regulable y almohadillas ergonómicas de alta densidad.",
    price: 19,
    sizes: "S-M-L",
    featured: false,
    image: "/MULETAS.jpg",
  },
  {
    id: 14,
    name: "Bastón en Uno",
    category: "Movilidad",
    subcategory: "Bastones",
    description:
      "Bastón plegable multifuncional con altura regulable y empuñadura ergonómica antideslizante.",
    price: 12,
    sizes: "UNIDAD",
    featured: false,
    image: "/BASTON-EN-UNO.jpg",
  },
  {
    id: 15,
    name: "Bastón 4 Soportes",
    category: "Movilidad",
    subcategory: "Bastones",
    description:
      "Bastón con base de 4 puntos de apoyo para mayor estabilidad y seguridad al caminar.",
    price: 15,
    sizes: "UNIDAD",
    featured: false,
    image: "/BASTON-4-SOPORTES.jpg",
  },
  {
    id: 16,
    name: "Compresa Pequeña",
    category: "Rehabilitación",
    subcategory: "Terapia de calor",
    description:
      "Compresa terapéutica pequeña para aplicación de calor o frío. Alivia dolores musculares y articulares.",
    price: 20,
    sizes: "PEQUEÑA",
    featured: false,
    image: "/COMPRESA.jpg",
  },
  {
    id: 17,
    name: "Compresa Grande",
    category: "Rehabilitación",
    subcategory: "Terapia de calor",
    description:
      "Compresa terapéutica grande para aplicación de calor o frío en zonas amplias del cuerpo.",
    price: 23,
    sizes: "GRANDE",
    featured: false,
    image: "/COMPRESA.jpg",
  },
  {
    id: 18,
    name: "Bandas de Tela x3",
    category: "Rehabilitación",
    subcategory: "Bandas elásticas",
    description:
      "Set de 3 bandas de tela suaves y resistentes. Ideales para ejercicios de activación muscular y rehabilitación.",
    price: 7.5,
    sizes: null,
    featured: false,
    image: "/BANDAS-DE-TELA-X3.jpg",
  },
  {
    id: 19,
    name: "Bandas Elásticas x5",
    category: "Rehabilitación",
    subcategory: "Bandas elásticas",
    description:
      "Set completo de 5 bandas elásticas con diferentes niveles de resistencia para rehabilitación progresiva.",
    price: 5.5,
    sizes: null,
    featured: false,
    image: "/BANDAS-ELASTICA-X5.jpg",
  },
  {
    id: 20,
    name: "Banda de Resistencia x3",
    category: "Rehabilitación",
    subcategory: "Bandas elásticas",
    description:
      "Set de 3 bandas de resistencia progresiva para fisioterapia y ejercicios de rehabilitación muscular.",
    price: 14.5,
    sizes: null,
    featured: false,
    image: "/BANDA-DE-RESISTENCIA-X3.jpg",
  },
];

export const categories = [
  {
    id: "movilidad",
    name: "Movilidad",
    description:
      "Andadores, bastones, muletas y más para mantener tu independencia y calidad de vida.",
    icon: "♿",
    color: "from-blue-500 to-blue-700",
    subcategories: ["Andadores", "Bastones", "Muletas"],
  },
  {
    id: "rehabilitacion",
    name: "Rehabilitación",
    description:
      "Bandas elásticas, compresas y equipos para tu proceso de recuperación física.",
    icon: "💪",
    color: "from-green-500 to-green-700",
    subcategories: ["Bandas elásticas", "Terapia de calor"],
  },
  {
    id: "ortesis",
    name: "Ortesis",
    description:
      "Rodilleras, tobilleras, fajas, correctores y soportes para cada articulación.",
    icon: "🦵",
    color: "from-indigo-500 to-indigo-700",
    subcategories: [
      "Rodilleras",
      "Tobilleras",
      "Muñequeras",
      "Fajas",
      "Collarines",
      "Coderas",
      "Hombreras",
      "Correctores",
      "Inmovilizadores",
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
    product: "Andador",
  },
  {
    id: 2,
    name: "Dr. Andrés Mora",
    role: "Fisioterapeuta",
    text: "Trabajo con ORTOPEDIX para mis pacientes y siempre encuentro productos de calidad certificada. Su asesoría profesional es excelente y los precios son competitivos.",
    rating: 5,
    product: "Bandas de Rehabilitación",
  },
  {
    id: 3,
    name: "Carmen López",
    age: 58,
    text: "Mi madre necesitaba un andador y no sabíamos cuál elegir. El equipo de ORTOPEDIX nos guió perfectamente. La atención fue increíble, como si fueran de la familia.",
    rating: 5,
    product: "Andador",
  },
  {
    id: 4,
    name: "Jorge Paredes",
    age: 45,
    text: "Me lesioné la rodilla y necesitaba una rodillera especializada. En ORTOPEDIX encontré exactamente lo que mi médico recomendó. Entrega rápida y producto de primera calidad.",
    rating: 5,
    product: "Rodillera ORTOPEDIX",
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
