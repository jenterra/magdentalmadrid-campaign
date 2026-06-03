import { COPY, WHATSAPP } from "@/lib/site";

export function WhatsAppButton() {
  return (
    <a
      href={WHATSAPP}
      className="whatsapp"
      target="_blank"
      rel="noopener noreferrer"
      aria-label={COPY.whatsapp.ariaLabel}
    >
      <span className="whatsapp__tooltip">{COPY.whatsapp.tooltip}</span>
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
