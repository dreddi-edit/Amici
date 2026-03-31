import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';
import useScrollAnimation from '../hooks/useScrollAnimation';

const MAP_URL = 'https://www.openstreetmap.org/export/embed.html?bbox=6.7431%2C51.2339%2C6.7551%2C51.2399&layer=mapnik&marker=51.23693%2C6.74929';

export default function Kontakt() {
  useScrollAnimation();

  return (
    <div className="bg-[#F8F6F2] pt-28">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-20 md:py-28">
        <p className="text-xs uppercase tracking-[0.25em] text-[#D9C5B2] mb-5 fade-in">Ristorante Amici</p>
        <h1 className="font-serif text-5xl md:text-7xl leading-tight fade-up" style={{ transitionDelay: '0.1s' }}>
          Besuchen Sie<br /><em>uns</em>
        </h1>
      </div>

      {/* Contact Details */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 pb-20 grid md:grid-cols-3 gap-12 border-t border-[#E5E0D8] pt-16" data-testid="contact-details">
        <div className="fade-up">
          <div className="flex items-start gap-4 mb-4">
            <MapPin size={16} className="text-[#D9C5B2] mt-1 flex-shrink-0" />
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-[#0A0A0A]/40 mb-2">Adresse</p>
              <p className="font-serif text-lg leading-relaxed">Hansaallee / Ecke Löricker Str. 1</p>
              <p className="text-sm font-light text-[#0A0A0A]/55">40547 Düsseldorf</p>
              <p className="text-sm font-light text-[#0A0A0A]/55">Oberkassel</p>
            </div>
          </div>
        </div>

        <div className="fade-up" style={{ transitionDelay: '0.1s' }}>
          <div className="flex items-start gap-4 mb-4">
            <Phone size={16} className="text-[#D9C5B2] mt-1 flex-shrink-0" />
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-[#0A0A0A]/40 mb-2">Telefon</p>
              <a href="tel:+492115367967" className="font-serif text-lg hover:text-[#D9C5B2] transition-colors" data-testid="contact-phone">
                +49 211 536 79 67
              </a>
              <p className="text-sm font-light text-[#0A0A0A]/55 mt-1">Erreichbar ab 10:30 Uhr</p>
            </div>
          </div>
        </div>

        <div className="fade-up" style={{ transitionDelay: '0.2s' }}>
          <div className="flex items-start gap-4 mb-4">
            <Mail size={16} className="text-[#D9C5B2] mt-1 flex-shrink-0" />
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-[#0A0A0A]/40 mb-2">E-Mail</p>
              <a href="mailto:amici@ristorante-amici.de" className="font-serif text-lg hover:text-[#D9C5B2] transition-colors break-all" data-testid="contact-email">
                amici@ristorante-amici.de
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Opening Hours */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-16 border-t border-[#E5E0D8]" data-testid="contact-hours">
        <div className="grid md:grid-cols-2 gap-12 md:gap-24">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-[#D9C5B2] mb-8 fade-in">Öffnungszeiten</p>
            <div className="space-y-1 fade-up" style={{ transitionDelay: '0.1s' }}>
              {[
                { day: 'Montag – Freitag', hours: '12:00 – 14:30 & 18:00 – 22:30' },
                { day: 'Samstag', hours: '18:00 – 22:30' },
                { day: 'Sonntag', hours: 'Ruhetag' },
              ].map((item, i) => (
                <div key={i} className={`flex justify-between py-4 border-b border-[#E5E0D8] ${item.day === 'Sonntag' ? 'opacity-40' : ''}`}>
                  <span className="text-sm uppercase tracking-[0.1em] text-[#0A0A0A]/55">{item.day}</span>
                  <span className="font-serif text-base">{item.hours}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="fade-up" style={{ transitionDelay: '0.15s' }}>
            <p className="text-xs uppercase tracking-[0.25em] text-[#D9C5B2] mb-8">Reservierung</p>
            <p className="text-base font-light text-[#0A0A0A]/65 leading-relaxed mb-8">
              Nutzen Sie unser Online-Formular oder rufen Sie uns direkt an.
              Wir freuen uns, Ihren Abend bei uns perfekt zu gestalten.
            </p>
            <Link
              to="/reservierung"
              data-testid="contact-reserve-btn"
              className="inline-block bg-[#0A0A0A] text-[#F8F6F2] text-xs uppercase tracking-[0.2em] px-10 py-4 hover:bg-[#D9C5B2] hover:text-[#0A0A0A] transition-all duration-300"
            >
              Tisch reservieren
            </Link>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="mt-4" data-testid="contact-map">
        <div className="h-[400px] md:h-[520px] relative overflow-hidden">
          <iframe
            src={MAP_URL}
            title="Ristorante Amici Standort"
            width="100%"
            height="100%"
            style={{ border: 'none', filter: 'grayscale(1) contrast(1.05) brightness(0.97)' }}
            loading="lazy"
          />
          {/* Info overlay */}
          <div className="absolute bottom-6 left-6 bg-[#F8F6F2]/95 backdrop-blur-sm p-5 max-w-xs shadow-sm">
            <p className="font-serif text-base mb-1">Ristorante Amici</p>
            <p className="text-xs font-light text-[#0A0A0A]/60">Hansaallee / Ecke Löricker Str. 1</p>
            <p className="text-xs font-light text-[#0A0A0A]/60">40547 Düsseldorf</p>
            <a
              href="https://www.openstreetmap.org/node/5743960994"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 block text-xs uppercase tracking-[0.12em] hover:text-[#D9C5B2] transition-colors"
            >
              In Karte öffnen
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
