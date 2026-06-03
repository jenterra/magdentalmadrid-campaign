import Image from "next/image";
import Link from "next/link";
import {
  FooterAddressIcon,
  FooterEmailIcon,
  FooterHoursIcon,
  FooterPhoneIcon,
  FooterSocialIcon,
} from "@/components/FooterIcons";
import {
  ADDRESS_FULL,
  COPY,
  EMAIL,
  GOOGLE_REVIEWS_URL,
  MAP_EMBED_URL,
  OPENING_HOURS,
  PHONE,
  PHONE_LINK,
  SITE,
  SOCIAL,
} from "@/lib/site";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <Link href="/" className="footer__logo">
          <Image src="/images/mag-logo.png" alt={SITE.name} width={134} height={75} />
        </Link>

        <div className="footer__center">
          <div className="footer__block">
            <h2 className="footer__title">{COPY.footer.contact}</h2>
            <ul className="footer__list">
              <li>
                <a href={PHONE_LINK} className="footer__item">
                  <span className="footer__icon" aria-hidden>
                    <FooterPhoneIcon />
                  </span>
                  <span>{PHONE}</span>
                </a>
              </li>
              <li>
                <a href={`mailto:${EMAIL}`} className="footer__item">
                  <span className="footer__icon" aria-hidden>
                    <FooterEmailIcon />
                  </span>
                  <span>{EMAIL}</span>
                </a>
              </li>
              <li>
                <a href={GOOGLE_REVIEWS_URL} className="footer__item" target="_blank" rel="noopener noreferrer">
                  <span className="footer__icon" aria-hidden>
                    <FooterAddressIcon />
                  </span>
                  <span>{ADDRESS_FULL}</span>
                </a>
              </li>
              <li>
                <div className="footer__item footer__item--static">
                  <span className="footer__icon" aria-hidden>
                    <FooterHoursIcon />
                  </span>
                  <span>
                    <strong>{OPENING_HOURS.title}</strong>
                    <br />
                    {OPENING_HOURS.weekdays}
                    <br />
                    {OPENING_HOURS.friday}
                    <br />
                    {OPENING_HOURS.saturday}
                  </span>
                </div>
              </li>
            </ul>
          </div>

          <div className="footer__block footer__block--social">
            <h2 className="footer__title">{COPY.footer.followUs}</h2>
            <ul className="footer__social">
              {SOCIAL.map((s) => (
                <li key={s.icon}>
                  <a
                    href={s.href}
                    className="footer__icon footer__icon--social"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                  >
                    <FooterSocialIcon icon={s.icon} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="footer__map-col">
          <h2 className="footer__map-title">{COPY.footer.mapTitle}</h2>
          <iframe
            className="footer__map"
            src={MAP_EMBED_URL}
            title={`Mapa de ubicación – ${SITE.name}`}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </div>

      <div className="footer__copy">
        <div className="container">
          <p>{COPY.footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
