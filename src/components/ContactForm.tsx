"use client";

import { COPY } from "@/lib/site";

export function ContactForm() {
  return (
    <form
      className="contact-form"
      onSubmit={(e) => {
        e.preventDefault();
        alert(COPY.contact.formSuccess);
        e.currentTarget.reset();
      }}
    >
      <div className="contact-form__row">
        <label>
          <span>
            {COPY.form.name} <span className="contact-form__required" aria-hidden="true">*</span>
          </span>
          <input name="name" type="text" placeholder={COPY.form.namePlaceholder} required />
        </label>
        <label>
          <span>
            {COPY.form.email} <span className="contact-form__required" aria-hidden="true">*</span>
          </span>
          <input name="email" type="email" placeholder={COPY.form.emailPlaceholder} required />
        </label>
      </div>
      <label>
        <span>
          {COPY.form.phone} <span className="contact-form__required" aria-hidden="true">*</span>
        </span>
        <input name="phone" type="tel" placeholder={COPY.form.phonePlaceholder} required />
      </label>
      <label>
        {COPY.form.message}
        <textarea name="message" rows={4} placeholder={COPY.form.messagePlaceholder} />
      </label>
      <button type="submit" className="btn btn--submit">
        {COPY.form.submit}
      </button>
    </form>
  );
}
