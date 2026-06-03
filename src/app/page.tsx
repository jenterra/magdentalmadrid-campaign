import Image from "next/image";
import { Button } from "@/components/Button";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";
import { GalleryGrid } from "@/components/GalleryGrid";
import { Header } from "@/components/Header";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import {
  BEFORE_AFTER,
  GOOGLE_REVIEWS_URL,
  HERO,
  HERO_BULLETS,
  SERVICES,
} from "@/lib/site";

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#content">
        Skip to content
      </a>
      <main id="content">
        <section id="inicio" className="hero">
          <Header />
          <div className="hero__overlay" aria-hidden />
          <div className="container hero__inner">
            <div className="hero__center">
              <div className="hero__content">
                <p className="hero__eyebrow">{HERO.eyebrow}</p>
                <h1 className="hero__title">
                  {HERO.titleBefore}{" "}
                  <span className="hero__title-highlight">{HERO.titleHighlight}</span>
                </h1>
                <ul className="hero__bullets">
                  {HERO.subtitle.map((line) => (
                    <li key={line}>{line}</li>
                  ))}
                  {HERO_BULLETS.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
            <a
              href={GOOGLE_REVIEWS_URL}
              className="hero__rating"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Ver reseñas de MAG Dental Madrid en Google (se abre en una pestaña nueva)"
            >
              {/* Native img keeps full-color PNG (Next/Image was washing out colors) */}
              <img
                src="/images/google-reviews.png"
                alt="Google Reviews"
                width={128}
                height={64}
                className="hero__rating-img"
                decoding="async"
              />
              <p className="hero__rating-text">
                ⭐ 4.9 · Excelencia comprobada en cuidado dental y atención personalizada
              </p>
            </a>
          </div>
        </section>

        {/* Services */}
        <section id="implantes" className="section services scroll-reveal">
          <div className="container">
            <hr className="services__rule" />
            <div className="services__grid">
              {SERVICES.map((s) => (
                <article key={s.title} className="services__card">
                  <div className="services__media">
                    <Image
                      src={s.image}
                      alt=""
                      fill
                      className="services__img"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <h2>{s.title}</h2>
                  <p>{s.text}</p>
                </article>
              ))}
            </div>
            <div className="section__cta">
              <Button href="#contacto">Pide tu cita sin coste</Button>
            </div>
          </div>
        </section>

        {/* Before / After */}
        <section id="resultados" className="section section--dark scroll-reveal">
          <div className="container">
            <h2 className="section__title section__title--center">fotos Antes y después</h2>
            <div className="ba-grid">
              {BEFORE_AFTER.map((img) => (
                <div key={img.src} className="ba-grid__item">
                  <Image src={img.src} alt={img.alt} width={768} height={768} />
                </div>
              ))}
            </div>
            <div className="section__cta">
              <Button href="#contacto" variant="light">
                Pide tu cita sin coste
              </Button>
            </div>
          </div>
        </section>

        {/* Specialist */}
        <section id="clinica" className="section specialist scroll-reveal">
          <div className="container">
            <div className="specialist__intro">
              <h2 className="section__title">Especialista en Implantología Avanzada</h2>
              <div className="prose">
                <p>
                  Nuestro doctor cuenta con amplia experiencia en implantes dentales y rehabilitación oral,
                  utilizando tecnología de última generación para ofrecer resultados seguros y predecibles.
                </p>
                <p>
                  somos especialistas en implantes dentales en Madrid. Ofrecemos implantes dentales permanentes,
                  implantes dentales completos, implantes dentales de la mandíbula superior, implantes boca completa
                  y dentadura fija sobre implantes con resultados naturales y duraderos. Si buscas implantes dentales
                  cerca de mí, implantes cerca de mí o una clínica de implantes dentales, nuestro equipo está listo
                  para ayudarte.
                </p>
                <p>
                  Recupera tu sonrisa con los mejores implantes dentales Madrid. En Clínica Laura G ofrecemos
                  tratamientos de implantes dentales hueso, implantes boca completa y dentadura fija sobre implantes
                  con resultados naturales y duraderos.
                </p>
              </div>
            </div>
            <div className="specialist__row">
              <div className="specialist__media">
                <Image
                  src="/images/doctor.jpg"
                  alt="Dr. Alejandro Prieto"
                  width={784}
                  height={1024}
                  className="specialist__photo"
                />
              </div>
              <div className="specialist__about">
                <h2 className="section__title">Alejandro Prieto Clínica Dental</h2>
                <p>
                  Alejandro Prieto Dental somos una de las clínicas de referencia en Madrid, en implantología avanzada
                  y alta estética dental. Liderada por el Dr. Alejandro Prieto, cirujano implantólogo de prestigio
                  internacional, atendemos casos complejos —incluida falta de hueso dental— y pacientes que buscan
                  resultados de alta estética natural con prótesis o microcarillas dentales. Nuestra clínica en el
                  Barrio de Salamanca es un espacio premium cuidado al detalle, con mejores marcas, procesos 100%
                  digitales y laboratorio dental en exclusiva. Cada paciente es único, y así lo diagnosticamos,
                  planificamos y tratamos.
                </p>
                <Button href="#contacto">Pide tu cita sin coste</Button>
              </div>
            </div>
          </div>
        </section>

        {/* Clinic */}
        <section className="section clinic scroll-reveal">
          <div className="container clinic__grid">
            <div className="clinic__text">
              <h2 className="section__title">Una clínica moderna pensada para tu comodidad</h2>
              <p>
                Nuestra clínica combina tecnología digital, materiales de alta calidad y un equipo profesional
                dedicado a cuidar de tu salud dental en un entorno cómodo y seguro.
              </p>
              <p>
                Realizamos implantes dentales en el mismo día y reemplazo dental el mismo día con técnicas de
                implantes dentales indoloros y tratamientos para implantes dentales hueso. Nuestro especialista en
                implantes dentales utiliza tecnología avanzada para devolver la funcionalidad y estética de tu
                sonrisa.
              </p>
              <Button href="#contacto">Pide tu cita sin coste</Button>
            </div>
            <Image
              src="/images/clinic.webp"
              alt="Clínica dental"
              width={800}
              height={500}
              className="clinic__img"
            />
          </div>
        </section>

        {/* Gallery */}
        <section id="5" className="section gallery-section scroll-reveal">
          <div className="container">
            <div className="gallery-section__head">
              <div>
                <h2 className="section__title">Nuestra Galería</h2>
                <p className="gallery-section__sub">
                  Discover our clinic, technology, and real patient results.
                </p>
              </div>
              <Button href="#contacto">Pide tu cita sin coste</Button>
            </div>
            <GalleryGrid />
          </div>
        </section>

        {/* Contact */}
        <section id="contacto" className="section contact scroll-reveal">
          <div className="container contact__grid">
            <div>
              <h2 className="section__title section__title--light">Solicita tu cita sin coste</h2>
              <p className="contact__lead">
                Da el primer paso hacia una sonrisa fija y segura. Nuestro equipo te asesorará sin compromiso y
                resolverá todas tus dudas.
              </p>
              <Image
                src="/images/contact-photo.webp"
                alt=""
                width={768}
                height={1024}
                className="contact__photo"
              />
            </div>
            <div className="contact__form-wrap">
              <h2 className="contact__form-title">Pide tu cita sin coste</h2>
              <p>Please feel free to contact our friendly reception team with any general or medical enquiries</p>
              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  );
}
