import React, { useState } from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';

const PARTY_IMG = 'https://ristorante-amici.de/wp-content/uploads/2018/06/IMG_1807ba-1030x676.jpg';

export default function PartyService() {
  useScrollAnimation();
  const [form, setForm] = useState({ name: '', email: '', phone: '', date: '', persons: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  const handleSubmit = e => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-[#F8F6F2] pt-20">
      {/* Split Hero */}
      <div className="min-h-screen grid md:grid-cols-2">
        {/* Image side */}
        <div
          className="img-reveal-wrapper h-72 md:h-auto sticky top-0"
          data-cursor="image"
          style={{ maxHeight: '100vh' }}
        >
          <img
            src={PARTY_IMG}
            alt="Party Service bei Ristorante Amici"
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-[#0A0A0A]/25" />
          <div className="absolute bottom-8 left-8">
            <p className="font-serif italic text-2xl text-white">Unvergessliche Feiern</p>
          </div>
        </div>

        {/* Content side */}
        <div className="px-8 md:px-14 lg:px-20 py-20 md:py-28">
          <p className="text-xs uppercase tracking-[0.25em] text-[#D9C5B2] mb-5 fade-in">Party Service</p>
          <h1 className="font-serif text-4xl md:text-5xl leading-tight mb-8 slide-left">
            Feiern Sie<br /><em>mit uns</em>
          </h1>
          <p className="text-base font-light text-[#0A0A0A]/65 leading-relaxed mb-5 fade-up" style={{ transitionDelay: '0.1s' }}>
            Ob kleines Dinner zu zweit, Familienfeier oder Firmenanlass — wir gestalten Ihren
            Abend im Ristorante Amici zu einem unvergesslichen Erlebnis.
          </p>
          <p className="text-base font-light text-[#0A0A0A]/65 leading-relaxed mb-12 fade-up" style={{ transitionDelay: '0.2s' }}>
            Darüber hinaus bieten wir Ihnen die Möglichkeit, frische Delikatessen direkt bei
            Ihnen vor Ort zu kochen. Sprechen Sie uns an — wir finden gemeinsam die perfekte Lösung.
          </p>

          <div className="h-px bg-[#E5E0D8] mb-12" />

          {!submitted ? (
            <form onSubmit={handleSubmit} data-testid="party-form">
              <p className="text-xs uppercase tracking-[0.2em] text-[#0A0A0A]/50 mb-8">Anfrage senden</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="float-group">
                  <input type="text" name="name" value={form.name} onChange={handleChange} className="float-input" placeholder=" " id="party-name" required data-testid="party-name-input" />
                  <label htmlFor="party-name" className="float-label">Name *</label>
                </div>
                <div className="float-group">
                  <input type="email" name="email" value={form.email} onChange={handleChange} className="float-input" placeholder=" " id="party-email" required data-testid="party-email-input" />
                  <label htmlFor="party-email" className="float-label">E-Mail *</label>
                </div>
                <div className="float-group">
                  <input type="tel" name="phone" value={form.phone} onChange={handleChange} className="float-input" placeholder=" " id="party-phone" data-testid="party-phone-input" />
                  <label htmlFor="party-phone" className="float-label">Telefon</label>
                </div>
                <div className="float-group">
                  <input type="date" name="date" value={form.date} onChange={handleChange} className="float-input" placeholder=" " id="party-date" data-testid="party-date-input" />
                  <label htmlFor="party-date" className="float-label">Wunschdatum</label>
                </div>
                <div className="float-group md:col-span-2">
                  <input type="number" name="persons" value={form.persons} onChange={handleChange} className="float-input" placeholder=" " id="party-persons" min="1" data-testid="party-persons-input" />
                  <label htmlFor="party-persons" className="float-label">Anzahl Personen</label>
                </div>
              </div>
              <div className="float-group mb-10">
                <textarea name="message" value={form.message} onChange={handleChange} className="float-input" placeholder=" " id="party-message" rows="3" data-testid="party-message-input" />
                <label htmlFor="party-message" className="float-label">Ihre Nachricht</label>
              </div>
              <button
                type="submit"
                data-testid="party-submit-btn"
                className="w-full md:w-auto bg-[#0A0A0A] text-[#F8F6F2] text-xs uppercase tracking-[0.2em] px-10 py-4 hover:bg-[#D9C5B2] hover:text-[#0A0A0A] transition-all duration-300"
              >
                Anfrage senden
              </button>
            </form>
          ) : (
            <div className="py-12" data-testid="party-success">
              <div className="w-8 h-px bg-[#D9C5B2] mb-6" />
              <p className="font-serif text-2xl mb-4">Vielen Dank für Ihre Anfrage.</p>
              <p className="text-sm font-light text-[#0A0A0A]/60">
                Wir werden uns so bald wie möglich bei Ihnen melden.<br />
                Für dringende Anfragen erreichen Sie uns unter{' '}
                <a href="tel:+492115367967" className="underline hover:text-[#D9C5B2]">+49 211 536 79 67</a>.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
