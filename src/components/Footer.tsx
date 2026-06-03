import Image from "next/image";
import Link from "next/link";
import {
  FooterAddressIcon,
  FooterEmailIcon,
  FooterPhoneIcon,
  FooterSocialIcon,
} from "@/components/FooterIcons";
import { ADDRESS_FULL, EMAIL, GOOGLE_REVIEWS_URL, PHONE, PHONE_LINK, SITE, SOCIAL } from "@/lib/site";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <Link href="/" className="footer__logo">
          <Image src="/images/mag-logo.png" alt={SITE.name} width={134} height={75} />
        </Link>

        <div className="footer__block">
          <h2 className="footer__title">Contact</h2>
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
          </ul>
        </div>

        <div className="footer__block footer__block--social">
          <h2 className="footer__title">Follow Us</h2>
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

      <div className="footer__copy">
        <div className="container">
          <p>Copyright © 2026 All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
