import React, { useState } from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';

const timeSlots = [
  '12:00', '12:30', '13:00', '13:30', '14:00',
  '18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00', '21:30', '22:00',
];

export default function Reservierung() {
  useScrollAnimation();
  const [form, setForm] = useState({
    name: '', date: '', time: '', persons: '', phone: '', email: '', notes: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  const handleSubmit = e => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-[#F8F6F2] pt-28 min-h-screen">
      <div className="max-w-3xl mx-auto px-6 md:px-12 py-20 md:py-32">
        {!submitted ? (
          <>
            <p className="text-xs uppercase tracking-[0.25em] text-[#D9C5B2] mb-5 fade-in">Tisch reservieren</p>
            <h1 className="font-serif text-5xl md:text-6xl leading-tight mb-6 fade-up" style={{ transitionDelay: '0.1s' }}>
              Reservierung
            </h1>
            <p className="text-base font-light text-[#0A0A0A]/55 mb-16 fade-up" style={{ transitionDelay: '0.2s' }}>
              Reservieren Sie Ihren Tisch online oder rufen Sie uns an:
              <a href="tel:+492115367967" className="ml-2 underline hover:text-[#D9C5B2] transition-colors">+49 211 536 79 67</a>
            </p>

            <form onSubmit={handleSubmit} className="space-y-8 fade-up" style={{ transitionDelay: '0.3s' }} data-testid="reservierung-form">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="float-group">
                  <input type="text" name="name" value={form.name} onChange={handleChange} className="float-input" placeholder=" " id="res-name" required data-testid="res-name-input" />
                  <label htmlFor="res-name" className="float-label">Ihr Name *</label>
                </div>
                <div className="float-group">
                  <input type="email" name="email" value={form.email} onChange={handleChange} className="float-input" placeholder=" " id="res-email" required data-testid="res-email-input" />
                  <label htmlFor="res-email" className="float-label">E-Mail *</label>
                </div>
                <div className="float-group">
                  <input type="tel" name="phone" value={form.phone} onChange={handleChange} className="float-input" placeholder=" " id="res-phone" required data-testid="res-phone-input" />
                  <label htmlFor="res-phone" className="float-label">Telefon *</label>
                </div>
                <div className="float-group">
                  <input type="number" name="persons" value={form.persons} onChange={handleChange} className="float-input" placeholder=" " id="res-persons" min="1" max="30" required data-testid="res-persons-input" />
                  <label htmlFor="res-persons" className="float-label">Anzahl Personen *</label>
                </div>
                <div className="float-group">
                  <input type="date" name="date" value={form.date} onChange={handleChange} className="float-input" placeholder=" " id="res-date" required data-testid="res-date-input" />
                  <label htmlFor="res-date" className="float-label">Datum *</label>
                </div>
                <div className="float-group">
                  <select name="time" value={form.time} onChange={handleChange} className="float-input" id="res-time" required data-testid="res-time-input">
                    <option value="" disabled> </option>
                    {timeSlots.map(t => <option key={t} value={t}>{t} Uhr</option>)}
                  </select>
                  <label htmlFor="res-time" className={`float-label ${form.time ? 'top-[4px] text-[0.65rem] tracking-[0.12em] uppercase text-[#0A0A0A]' : ''}`}>Uhrzeit *</label>
                </div>
              </div>
              <div className="float-group">
                <textarea name="notes" value={form.notes} onChange={handleChange} className="float-input" placeholder=" " id="res-notes" rows="3" data-testid="res-notes-input" />
                <label htmlFor="res-notes" className="float-label">Anmerkungen (Allergien, besondere Wünsche)</label>
              </div>
              <div className="pt-4">
                <button
                  type="submit"
                  data-testid="res-submit-btn"
                  className="w-full md:w-auto bg-[#0A0A0A] text-[#F8F6F2] text-xs uppercase tracking-[0.2em] px-12 py-5 hover:bg-[#D9C5B2] hover:text-[#0A0A0A] transition-all duration-300"
                >
                  Reservierung bestätigen
                </button>
              </div>
            </form>

            <div className="mt-16 pt-12 border-t border-[#E5E0D8] fade-up" style={{ transitionDelay: '0.4s' }}>
              <p className="text-xs uppercase tracking-[0.2em] text-[#D9C5B2] mb-4">Öffnungszeiten</p>
              <div className="space-y-1">
                {[
                  { day: 'Mo – Fr', hours: '12:00 – 14:30 & 18:00 – 22:30' },
                  { day: 'Sa', hours: '18:00 – 22:30' },
                  { day: 'So', hours: 'Ruhetag' },
                ].map((item, i) => (
                  <div key={i} className={`flex gap-8 text-sm ${item.day === 'So' ? 'opacity-40' : 'text-[#0A0A0A]/65'}`}>
                    <span className="w-16 font-light">{item.day}</span>
                    <span>{item.hours}</span>
                  </div>
                ))}
              </div>
            </div>
          </>
        ) : (
          <div className="py-16" data-testid="reservierung-success">
            <div className="w-10 h-px bg-[#D9C5B2] mb-8" />
            <p className="font-serif text-4xl md:text-5xl mb-6">
              Grazie, {form.name}.
            </p>
            <p className="text-base font-light text-[#0A0A0A]/65 leading-relaxed mb-4">
              Ihre Reservierungsanfrage für{' '}
              <strong className="font-medium">{form.persons} Person{form.persons !== '1' ? 'en' : ''}</strong>
              {form.date && <> am <strong className="font-medium">{form.date}</strong></>}
              {form.time && <> um <strong className="font-medium">{form.time} Uhr</strong></>}
              {' '}ist bei uns eingegangen.
            </p>
            <p className="text-base font-light text-[#0A0A0A]/65 leading-relaxed">
              Wir bestätigen Ihre Reservierung per E-Mail oder Telefon. Bei Fragen:{' '}
              <a href="tel:+492115367967" className="underline hover:text-[#D9C5B2] transition-colors">+49 211 536 79 67</a>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
