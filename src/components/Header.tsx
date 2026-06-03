import Image from "next/image";
import { COPY, NAV, PHONE_DISPLAY, PHONE_LINK, SITE } from "@/lib/site";

export function Header() {
  return (
    <header id="site-header" className="site-header">
      <div className="site-header__top">
        <div className="container site-header__top-inner">
          <p className="site-header__tagline">{SITE.tagline}</p>
          <a href={PHONE_LINK} className="site-header__top-phone">
            <span className="site-header__top-label">Llámanos</span>
            <strong>{PHONE_DISPLAY}</strong>
          </a>
        </div>
      </div>

      <div className="site-header__main">
        <div className="container site-header__inner">
          <a href="#inicio" className="site-header__logo" aria-label={`${SITE.name} – Inicio`}>
            <Image
              src="/images/mag-logo.png"
              alt={`${SITE.name} – Implantes dentales en Madrid`}
              width={134}
              height={75}
              priority
            />
          </a>

          <input type="checkbox" id="nav-toggle" className="nav-toggle" aria-hidden />
          <label htmlFor="nav-toggle" className="nav-toggle-btn">
            <span className="nav-toggle-btn__bars" aria-hidden />
            <span className="sr-only">Abrir menú de navegación</span>
          </label>

          <nav className="site-header__nav" aria-label="Navegación principal">
            <ul className="site-header__links">
              {NAV.map((item) => (
                <li key={item.href}>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
            <a href="#contacto" className="site-header__cta site-header__cta--mobile">
              {COPY.ctaShort}
            </a>
          </nav>

          <div className="site-header__actions">
            <a href={PHONE_LINK} className="site-header__phone">
              {PHONE_DISPLAY}
            </a>
            <a href="#contacto" className="site-header__cta">
              {COPY.ctaShort}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
