"use client";

export function ContactForm() {
  return (
    <form
      className="contact-form"
      onSubmit={(e) => {
        e.preventDefault();
        alert("Gracias. Nos pondremos en contacto contigo pronto.");
        e.currentTarget.reset();
      }}
    >
      <div className="contact-form__row">
        <label>
          <span>
            Name <span className="contact-form__required" aria-hidden="true">*</span>
          </span>
          <input name="name" type="text" placeholder="Name" required />
        </label>
        <label>
          <span>
            Email <span className="contact-form__required" aria-hidden="true">*</span>
          </span>
          <input name="email" type="email" placeholder="Email" required />
        </label>
      </div>
      <label>
        <span>
          Phone <span className="contact-form__required" aria-hidden="true">*</span>
        </span>
        <input name="phone" type="tel" placeholder="Phone" required />
      </label>
      <label>
        Message
        <textarea name="message" rows={4} placeholder="Message" />
      </label>
      <button type="submit" className="btn btn--submit">
        Make Appointment
      </button>
    </form>
  );
}
