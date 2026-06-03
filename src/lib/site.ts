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
  { href: "#contacto", label: "Contacto" },
] as const;

/** Section ids for header scroll-spy (order matters) */
export const NAV_SECTION_IDS = NAV.map((item) => item.href.slice(1));

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
