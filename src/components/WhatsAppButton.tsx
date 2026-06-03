import { WHATSAPP } from "@/lib/site";

export function WhatsAppButton() {
  return (
    <a
      href={WHATSAPP}
      className="whatsapp"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
    >
      <span className="whatsapp__tooltip">Available: Mon - Friday 9 AM — 9 PM</span>
      <img
        src="/images/whatsapp.png"
        alt=""
        width={64}
        height={64}
        className="whatsapp__img"
        decoding="async"
      />
    </a>
  );
}
