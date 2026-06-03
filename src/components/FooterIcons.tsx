type IconProps = { className?: string };

export function FooterPhoneIcon({ className }: IconProps) {
  return (
    <svg className={className} width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M6.5 3h3l1.5 5-2 1.2a13 13 0 006.3 6.3L16.5 14l5 1.5v3A2 2 0 0119.4 20 15 15 0 014 4.6 2 2 0 016.5 3z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function FooterEmailIcon({ className }: IconProps) {
  return (
    <svg className={className} width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.75" />
      <path d="M3 7l9 6 9-6" stroke="currentColor" strokeWidth="1.75" strokeLinejoin="round" />
    </svg>
  );
}

export function FooterHoursIcon({ className }: IconProps) {
  return (
    <svg className={className} width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.75" />
      <path d="M12 7v5l3 2" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
    </svg>
  );
}

export function FooterAddressIcon({ className }: IconProps) {
  return (
    <svg className={className} width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M4 10.5 12 4l8 6.5V20a1 1 0 01-1 1h-5v-6H10v6H5a1 1 0 01-1-1v-9.5z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function FooterFacebookIcon({ className }: IconProps) {
  return (
    <svg className={className} width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M14 9h3V6h-3c-2.2 0-4 1.8-4 4v2H7v3h3v7h3v-7h3l1-3h-4V10c0-.6.4-1 1-1z" />
    </svg>
  );
}

export function FooterInstagramIcon({ className }: IconProps) {
  return (
    <svg className={className} width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect x="4" y="4" width="16" height="16" rx="4" stroke="currentColor" strokeWidth="1.75" />
      <circle cx="12" cy="12" r="3.5" stroke="currentColor" strokeWidth="1.75" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" />
    </svg>
  );
}

export function FooterWhatsAppIcon({ className }: IconProps) {
  return (
    <svg className={className} width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 2a10 10 0 00-8.7 14.9L2 22l5.2-1.3A10 10 0 1012 2zm5.2 14.2c-.2.6-1.2 1.1-1.7 1.2-.4.1-.9.2-3.1-.7-2.6-1-4.4-3.4-4.5-3.6-.1-.2-1.1-1.4-1.1-2.7s.7-1.9 1-2.2c.3-.3.6-.4.8-.4h.6c.2 0 .4 0 .6.5.2.5.7 1.7.8 1.8.1.1.1.3 0 .4-.1.2-.2.2-.4.4-.2.2-.4.3-.6.5-.2.2-.4.3-.2.7.3.4 1.1 1.8 2.4 2.9 1.6 1.3 3 1.7 3.4 1.8.4.1 1 .1 1.3-.6.3-.7 1.3-1.7 1.4-1.8.1-.1.2-.1.5 0 .3.1 1.2.6 1.4.7.2.1.3.2.3.4 0 .2 0 .6-.2 1.2z" />
    </svg>
  );
}

export function FooterXIcon({ className }: IconProps) {
  return (
    <svg className={className} width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M16.3 3h3.1l-6.8 7.8L20 21h-5.9l-4.6-6-5.3 6H1.1l7.3-8.4L2 3h6l4.2 5.5L16.3 3zM15.1 19h1.7L8.9 5H7.1l8 14z" />
    </svg>
  );
}

export type SocialIconId = "facebook" | "instagram" | "whatsapp" | "x";

export function FooterSocialIcon({ icon, className }: { icon: SocialIconId; className?: string }) {
  switch (icon) {
    case "facebook":
      return <FooterFacebookIcon className={className} />;
    case "instagram":
      return <FooterInstagramIcon className={className} />;
    case "whatsapp":
      return <FooterWhatsAppIcon className={className} />;
    case "x":
      return <FooterXIcon className={className} />;
  }
}
