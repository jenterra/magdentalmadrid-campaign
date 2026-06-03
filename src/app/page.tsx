import Image from "next/image";
import { Button } from "@/components/Button";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";
import { BeforeAfterGrid } from "@/components/BeforeAfterGrid";
import { GalleryGrid } from "@/components/GalleryGrid";
import { Header } from "@/components/Header";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import {
  COPY,
  GOOGLE_REVIEWS_URL,
  HERO,
  HERO_BULLETS,
  SERVICES,
} from "@/lib/site";

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#content">
        {COPY.skipLink}
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
              aria-label={COPY.googleReviewsAria}
            >
              <img
                src="/images/google-reviews.png"
                alt="Google Reviews"
                width={128}
                height={64}
                className="hero__rating-img"
                decoding="async"
              />
              <p className="hero__rating-text">{COPY.heroRating}</p>
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
              <Button href="#contacto">{COPY.cta}</Button>
            </div>
          </div>
        </section>

        {/* Before / After */}
        <section id="resultados" className="section section--dark scroll-reveal">
          <div className="container">
            <h2 className="section__title section__title--center">{COPY.beforeAfter.title}</h2>
            <BeforeAfterGrid />
            <div className="section__cta">
              <Button href="#contacto" variant="light">
                {COPY.cta}
              </Button>
            </div>
          </div>
        </section>

        {/* Specialist */}
        <section id="clinica" className="section specialist scroll-reveal">
          <div className="container">
            <div className="specialist__intro">
              <h2 className="section__title">{COPY.specialist.title}</h2>
              <div className="prose">
                {COPY.specialist.intro.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
            <div className="specialist__row">
              <div className="specialist__media">
                <Image
                  src="/images/doctor.jpg"
                  alt={COPY.specialist.doctorAlt}
                  width={784}
                  height={1024}
                  className="specialist__photo"
                />
              </div>
              <div className="specialist__about">
                <h2 className="section__title">{COPY.specialist.aboutTitle}</h2>
                <p>{COPY.specialist.aboutText}</p>
                <Button href="#contacto">{COPY.cta}</Button>
              </div>
            </div>
          </div>
        </section>

        {/* Clinic */}
        <section id="instalaciones" className="section clinic scroll-reveal">
          <div className="container clinic__grid">
            <div className="clinic__text">
              <h2 className="section__title">{COPY.clinic.title}</h2>
              {COPY.clinic.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              <Button href="#contacto">{COPY.cta}</Button>
            </div>
            <Image
              src="/images/clinic.webp"
              alt={COPY.clinic.imageAlt}
              width={800}
              height={500}
              className="clinic__img"
            />
          </div>
        </section>

        {/* Gallery */}
        <section id="galeria" className="section gallery-section scroll-reveal">
          <div className="container">
            <div className="gallery-section__head">
              <div>
                <h2 className="section__title">{COPY.gallery.title}</h2>
                <p className="gallery-section__sub">{COPY.gallery.subtitle}</p>
              </div>
              <Button href="#contacto">{COPY.cta}</Button>
            </div>
            <GalleryGrid />
          </div>
        </section>

        {/* Contact */}
        <section id="contacto" className="section contact scroll-reveal">
          <div className="container contact__grid">
            <div>
              <h2 className="section__title section__title--light">{COPY.contact.title}</h2>
              <p className="contact__lead">{COPY.contact.lead}</p>
              <Image
                src="/images/contact-photo.webp"
                alt={COPY.contact.photoAlt}
                width={768}
                height={1024}
                className="contact__photo"
              />
            </div>
            <div className="contact__form-wrap">
              <h2 className="contact__form-title">{COPY.contact.formTitle}</h2>
              <p>{COPY.contact.formIntro}</p>
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
