import Image from "next/image";
import Link from "next/link";
import { ADDRESS_FULL, EMAIL, PHONE, PHONE_LINK, SITE, SOCIAL } from "@/lib/site";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <Link href="/" className="footer__logo">
          <Image src="/images/mag-logo.png" alt={SITE.name} width={134} height={75} />
        </Link>
        <div>
          <h2 className="footer__title">Contact</h2>
          <ul className="footer__list">
            <li>
              <a href={PHONE_LINK}>{PHONE}</a>
            </li>
            <li>
              <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
            </li>
            <li>{ADDRESS_FULL}</li>
          </ul>
        </div>
        <div>
          <h2 className="footer__title">Follow Us</h2>
          <ul className="footer__social">
            {SOCIAL.map((s) => (
              <li key={s.label}>
                <a href={s.href} target="_blank" rel="noopener noreferrer">
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="container footer__copy">
        <p>Copyright © 2026 All Rights Reserved.</p>
      </div>
    </footer>
  );
}
