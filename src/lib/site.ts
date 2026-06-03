/** MAG Dental Madrid – campaign landing (magdentalmadrid.com) */
export const SITE = {
  name: "MAG Dental Madrid",
  shortName: "MAG Dental",
  domain: "https://magdentalmadrid.com",
  tagline: "Especialistas en implantes dentales en Madrid",
  doctor: "Dr. Alejandro Prieto",
  description:
    "Implantes dentales en Madrid con carga inmediata. MAG Dental Madrid: diagnóstico 3D, cirugía guiada y garantía de por vida. Primera cita sin coste.",
} as const;

export const PHONE = "+34 608 87 88 77";
export const PHONE_LINK = "tel:+34608878877";
export const PHONE_DISPLAY = "608 87 88 77";
export const EMAIL = "contacto@magdentalmadrid.com";
export const ADDRESS = "C. de Canillas, 136 posterior, Hortaleza";
export const ADDRESS_FULL = "C. de Canillas, 136 posterior, 28043 Hortaleza, Madrid";
export const WHATSAPP = "https://wa.me/34608878877";

/** MAG Dental Google Business – Google Maps place & reviews */
export const GOOGLE_REVIEWS_URL =
  "https://www.google.com/maps/place/MAG+Dental+Madrid/@40.4650175,-3.6427471,17z/data=!3m1!4b1!4m6!3m5!1s0xd422ee7d3cfdb57:0xa19ac9c2d457b892!8m2!3d40.4650134!4d-3.6401722!16s%2Fg%2F1tfv_g88?entry=ttu&g_ep=EgoyMDI2MDUzMS4wIKXMDSoASAFQAw%3D%3D";

/** Anchor nav – optimized for implant campaign conversion */
export const NAV = [
  { href: "#inicio", label: "Inicio" },
  { href: "#implantes", label: "Implantes" },
  { href: "#resultados", label: "Resultados" },
  { href: "#clinica", label: "La clínica" },
  { href: "#galeria", label: "Galería" },
  { href: "#contacto", label: "Contacto" },
] as const;

/** Section ids for scroll-spy (page order; includes sections not in nav) */
export const NAV_SECTION_IDS = [
  "inicio",
  "implantes",
  "resultados",
  "clinica",
  "instalaciones",
  "galeria",
  "contacto",
] as const;

export const OPENING_HOURS = {
  title: "Horario",
  weekdays: "L–J: 9:30 – 20:30",
  friday: "V: 9:30 – 19:30",
  saturday: "Sáb y dom: cerrado",
} as const;

/** Google Maps embed – MAG Dental, Canillas 136 */
export const MAP_EMBED_URL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3036.8!2d-3.6427471!3d40.4650175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd422ee7d3cfdb57%3A0xa19ac9c2d457b892!2sMAG%20Dental%20Madrid!5e0!3m2!1ses!2ses!4v1700000000000!5m2!1ses!2ses";

export const SOCIAL = [
  { icon: "facebook" as const, label: "Facebook", href: "https://www.facebook.com/magdental" },
  { icon: "instagram" as const, label: "Instagram", href: "https://www.instagram.com/magdentalmadrid/" },
  { icon: "whatsapp" as const, label: "WhatsApp", href: WHATSAPP },
  { icon: "x" as const, label: "X", href: "https://twitter.com/MAGdental" },
] as const;

export const HERO = {
  eyebrow: "Especialistas en implantes dentales · Madrid",
  titleBefore: "Tu sonrisa definitiva en",
  titleHighlight: "24 horas",
  subtitle: [
    "Cirugía guiada sin dolor, diagnóstico 3D y dientes fijos el mismo día.",
    "Primera cita sin coste.",
  ],
} as const;

export const HERO_BULLETS = [
  "Garantía de por vida en implantes",
  "Financiación hasta 60 meses",
  "Laboratorio dental en exclusiva",
] as const;

export const SERVICES = [
  {
    title: "Estudio y TAC digital sin coste",
    text: "Realizamos un diagnóstico completo con tecnología 3D para planificar tu tratamiento con máxima precisión y seguridad.",
    image: "/images/service-1.jpeg",
  },
  {
    title: "Colocación de dientes definitivos",
    text: "Finalizamos el tratamiento con dientes fijos, estéticos y funcionales, diseñados a medida para una sonrisa natural y duradera.",
    image: "/images/service-2.jpeg",
  },
  {
    title: "Cirugía sin dolor: implantes y dientes en el día",
    text: "Colocamos los implantes mediante técnicas avanzadas, sin dolor y con resultados inmediatos para que salgas sonriendo el mismo día.",
    image: "/images/service-3.jpeg",
  },
] as const;

export const BEFORE_AFTER = Array.from({ length: 9 }, (_, i) => ({
  src: `/images/ba-${i + 1}.webp`,
  alt: `Antes y después implantes dentales Madrid ${i + 1} – MAG Dental`,
}));

export const GALLERY = Array.from({ length: 5 }, (_, i) => ({
  src: `/images/gallery-${i + 1}.webp`,
  alt: `Clínica dental MAG Dental Madrid ${i + 1}`,
}));

/** UI copy – Spanish only (campaign landing) */
export const COPY = {
  skipLink: "Ir al contenido",
  cta: "Pide tu cita sin coste",
  ctaShort: "Cita sin coste",
  heroRating: "⭐ 4.9 · Excelencia comprobada en cuidado dental y atención personalizada",
  googleReviewsAria: "Ver reseñas de MAG Dental Madrid en Google (se abre en una pestaña nueva)",

  beforeAfter: {
    title: "Fotos antes y después",
  },

  specialist: {
    title: "Especialista en Implantología Avanzada",
    intro: [
      "En MAG Dental Madrid, en Hortaleza (C. de Canillas, 136 posterior), el Dr. Alejandro Prieto y su equipo se especializan en implantes de carga inmediata: dientes fijos en 24 horas con cirugía guiada, planificación 3D y protocolos para casos con falta de hueso.",
      "Más de 30 años de experiencia, laboratorio dental en exclusiva y tecnología PIC pro para diseño digital de sonrisa y resultados naturales, predecibles y de alta estética.",
      "Primera visita y estudio con TAC digital sin coste. Financiación hasta 60 meses y garantía de por vida en implantes.",
    ],
    aboutTitle: "Dr. Alejandro Prieto · MAG Dental Madrid",
    aboutText:
      "Cirujano implantólogo de referencia en Madrid, con prestigio internacional y publicaciones en implantología avanzada. En nuestra clínica de Hortaleza tratamos rehabilitaciones completas, implantes en el mismo día y casos complejos con regeneración ósea. Trabajamos con flujo 100% digital —escáner intraoral, guías quirúrgicas y laboratorio propio— para controlar cada fase del tratamiento. Tu plan se explica paso a paso para que tomes decisiones con tranquilidad.",
    doctorAlt: "Dr. Alejandro Prieto, cirujano implantólogo en MAG Dental Madrid",
  },

  clinic: {
    title: "Una clínica moderna pensada para tu comodidad",
    paragraphs: [
      "En C. de Canillas, 136 posterior (Hortaleza, 28043 Madrid), encontrarás instalaciones amplias, quirófanos equipados y un entorno pensado para que te sientas acompañado en todo momento.",
      "Implantes con carga inmediata, cirugía mínimamente invasiva y prótesis fijas el mismo día cuando el caso lo permite. Tecnología de vanguardia al servicio de tu salud y de tu sonrisa.",
    ],
    imageAlt: "Clínica MAG Dental Madrid – Hortaleza, Madrid",
  },

  gallery: {
    title: "Nuestra galería",
    subtitle: "Conoce nuestra clínica, la tecnología y los resultados de nuestros pacientes.",
  },

  contact: {
    title: "Solicita tu cita sin coste",
    lead: "Da el primer paso hacia una sonrisa fija y segura. Nuestro equipo te asesorará sin compromiso y resolverá todas tus dudas.",
    formTitle: "Pide tu cita sin coste",
    formIntro:
      "Rellena el formulario y nos pondremos en contacto contigo lo antes posible para resolver tus dudas o concertar tu primera visita.",
    photoAlt: "Paciente en consulta – MAG Dental Madrid",
    formSuccess: "Gracias. Nos pondremos en contacto contigo pronto.",
  },

  form: {
    name: "Nombre",
    email: "Correo electrónico",
    phone: "Teléfono",
    message: "Mensaje",
    namePlaceholder: "Tu nombre",
    emailPlaceholder: "tu@email.com",
    phonePlaceholder: "Tu teléfono",
    messagePlaceholder: "Cuéntanos en qué podemos ayudarte",
    submit: "Solicitar cita",
  },

  footer: {
    contact: "Contacto",
    followUs: "Síguenos",
    mapTitle: "Cómo llegar",
    copyright: "Copyright © 2026 Todos los derechos reservados.",
  },

  lightbox: {
    galleryAria: "Galería de imágenes",
    beforeAfterAria: "Fotos antes y después",
    close: "Cerrar",
  },

  whatsapp: {
    tooltip: "Disponible: lun – vie 9:00 – 21:00",
    ariaLabel: "Contactar por WhatsApp",
  },
} as const;
