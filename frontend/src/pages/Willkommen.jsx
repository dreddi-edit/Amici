import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import useScrollAnimation from '../hooks/useScrollAnimation';
import { dishHighlights } from '../data/menu';

const heroLines = [
  { words: ['Hausgemachte', 'Pasta.'], italic: false },
  { words: ['Frischer', 'Fisch.'], italic: false },
  { words: ['Echtes', 'Italien.'], italic: true },
];

let gIdx = 0;
const linesWithDelays = heroLines.map(line => ({
  ...line,
  delays: line.words.map(() => 0.3 + (gIdx++) * 0.14),
}));

const IMAGES = {
  hero: 'https://ristorante-amici.de/wp-content/uploads/2018/05/amici_header.jpg',
  about: 'https://ristorante-amici.de/wp-content/uploads/2018/05/amici_ingresso_p-1.jpg',
  team: 'https://ristorante-amici.de/wp-content/uploads/2025/02/PHOTO-2025-02-27-12-25-20.jpg',
  parallax: 'https://ristorante-amici.de/wp-content/uploads/layerslider/Previous-v5-demo-slider/bg21.jpg',
};

const quotes = [
  'Wir verwöhnen unsere Gäste mit hausgemachten Delikatessen und einem freundlichen warmen Ambiente.',
  'Eine typische regionale Küche, sowie eine hervorragende Auswahl an exquisiten italienischen Weinen.',
];

export default function Willkommen() {
  useScrollAnimation();
  const [quoteIdx, setQuoteIdx] = useState(0);
  const [quoteVisible, setQuoteVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setQuoteVisible(false);
      setTimeout(() => {
        setQuoteIdx(i => (i + 1) % quotes.length);
        setQuoteVisible(true);
      }, 400);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[#F8F6F2]">
      {/* Hero */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden" data-testid="hero-section">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${IMAGES.hero})`, filter: 'brightness(0.5) saturate(0.7)' }}
        />
        <div className="absolute inset-0 bg-[#0A0A0A]/20" />
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <p
            className="hero-word text-xs uppercase tracking-[0.3em] text-white/70 mb-10 block"
            style={{ animationDelay: '0.1s' }}
          >
            Ristorante Amici · Düsseldorf · Oberkassel
          </p>
          {linesWithDelays.map((line, li) => (
            <div key={li} className="overflow-hidden">
              <div className={`font-serif text-5xl md:text-7xl lg:text-8xl text-white leading-[1.05] mb-1 ${line.italic ? 'italic' : ''}`}>
                {line.words.map((word, wi) => (
                  <span
                    key={wi}
                    className="hero-word mr-[0.25em] last:mr-0"
                    style={{ animationDelay: `${line.delays[wi]}s` }}
                  >
                    {word}
                  </span>
                ))}
              </div>
            </div>
          ))}
          <div
            className="mt-12 opacity-0"
            style={{ animation: 'wordReveal 0.6s ease 1.4s forwards' }}
          >
            <Link
              to="/reservierung"
              data-testid="hero-cta-btn"
              className="inline-block border border-white/70 text-white text-xs uppercase tracking-[0.2em] px-8 py-4 hover:bg-white hover:text-[#0A0A0A] transition-all duration-400"
            >
              Tisch reservieren
            </Link>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <div className="w-px h-14 bg-white/40 animate-pulse" />
          <span className="text-white/50 text-[10px] uppercase tracking-widest">Scroll</span>
        </div>
      </section>

      {/* About */}
      <section className="py-32 md:py-48 px-6 md:px-12 lg:px-24" data-testid="about-section">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 md:gap-28 items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-[#D9C5B2] mb-6 slide-left">Unser Ristorante</p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight mb-8 slide-left" style={{ transitionDelay: '0.1s' }}>
              Authentische<br /><em>Küche</em> seit<br />Jahrzehnten.
            </h2>
            <p className="text-base font-light text-[#0A0A0A]/65 leading-relaxed mb-5 slide-left" style={{ transitionDelay: '0.2s' }}>
              Seit Jahren verwöhnen wir unsere Gäste im Herzen von Oberkassel mit den feinsten
              Zutaten der italienischen Küche. Frischer Fisch, hausgemachte Pasta und exquisite Weine —
              zubereitet mit Leidenschaft und Präzision.
            </p>
            <p className="text-base font-light text-[#0A0A0A]/65 leading-relaxed mb-10 slide-left" style={{ transitionDelay: '0.3s' }}>
              Unsere vollklimatisierten Räume mit modernem Luftreinigungssystem sorgen für höchsten
              Komfort das ganze Jahr über. Im Sommer genießen Sie unsere Speisen auch auf der Terrasse.
            </p>
            <Link
              to="/speisekarte"
              className="slide-left inline-flex items-center text-sm uppercase tracking-[0.15em] border-b border-[#0A0A0A] pb-1 hover:text-[#D9C5B2] hover:border-[#D9C5B2] transition-colors duration-300"
              style={{ transitionDelay: '0.4s' }}
              data-testid="about-menu-link"
            >
              Zur Speisekarte
            </Link>
          </div>
          <div className="img-reveal-wrapper" data-cursor="image">
            <img
              src={IMAGES.about}
              alt="Ristorante Amici Eingang"
              className="w-full h-[480px] md:h-[560px] object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-14 border-y border-[#E5E0D8]" data-testid="stats-section">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 grid grid-cols-3 gap-4 text-center">
          {[
            { number: '30+', label: 'Jahre Erfahrung' },
            { number: '100+', label: 'Weinpositionen' },
            { number: '10', label: 'Weinregionen' },
          ].map((stat, i) => (
            <div key={i} className="fade-up" style={{ transitionDelay: `${i * 0.12}s` }}>
              <div className="font-serif text-5xl md:text-6xl text-[#D9C5B2] mb-2">{stat.number}</div>
              <div className="text-[10px] md:text-xs uppercase tracking-[0.18em] text-[#0A0A0A]/50">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Dish Highlights */}
      <section className="py-32 md:py-48 overflow-hidden" data-testid="dish-highlights">
        <div className="px-6 md:px-12 lg:px-24 mb-12">
          <p className="text-xs uppercase tracking-[0.25em] text-[#D9C5B2] mb-4 fade-up">Ausgewählte Gerichte</p>
          <h2 className="font-serif text-4xl md:text-5xl fade-up" style={{ transitionDelay: '0.1s' }}>Unsere Spezialitäten</h2>
        </div>
        <div className="flex gap-6 overflow-x-auto scroll-hide px-6 md:px-12 lg:px-24 pb-2">
          {dishHighlights.map((dish, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-72 md:w-80 group"
              data-cursor="image"
            >
              <div className="overflow-hidden mb-4">
                <img
                  src={dish.img}
                  alt={dish.name}
                  className="w-full h-64 md:h-72 object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
              <p className="text-xs uppercase tracking-[0.15em] text-[#D9C5B2] mb-1">{dish.price}</p>
              <h3 className="font-serif text-lg mb-1">{dish.name}</h3>
              <p className="text-sm font-light text-[#0A0A0A]/55">{dish.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Philosophy Quote */}
      <section className="py-32 bg-[#0A0A0A]" data-testid="quote-section">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="font-serif text-8xl text-[#D9C5B2]/15 leading-none mb-2 select-none">"</div>
          <div
            style={{
              opacity: quoteVisible ? 1 : 0,
              transform: quoteVisible ? 'translateY(0)' : 'translateY(10px)',
              transition: 'opacity 0.4s ease, transform 0.4s ease',
            }}
          >
            <p className="font-serif italic text-xl md:text-2xl lg:text-3xl text-white leading-relaxed mb-8">
              {quotes[quoteIdx]}
            </p>
            <p className="text-xs uppercase tracking-[0.3em] text-[#D9C5B2]">— Team Amici</p>
          </div>
        </div>
      </section>

      {/* Opening Hours */}
      <section className="py-32 md:py-48 px-6 md:px-12 lg:px-24" data-testid="opening-hours">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 md:gap-24">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-[#D9C5B2] mb-6 fade-up">Besuchen Sie uns</p>
            <h2 className="font-serif text-4xl md:text-5xl mb-12 fade-up" style={{ transitionDelay: '0.1s' }}>Öffnungszeiten</h2>
            <div className="space-y-1 fade-up" style={{ transitionDelay: '0.2s' }}>
              {[
                { day: 'Montag – Freitag', hours: '12:00 – 14:30 & 18:00 – 22:30' },
                { day: 'Samstag', hours: '18:00 – 22:30' },
                { day: 'Sonntag', hours: 'Ruhetag' },
              ].map((item, i) => (
                <div key={i} className={`flex justify-between py-4 border-b border-[#E5E0D8] ${item.day === 'Sonntag' ? 'opacity-40' : ''}`}>
                  <span className="text-sm uppercase tracking-[0.1em] text-[#0A0A0A]/60">{item.day}</span>
                  <span className="font-serif text-base">{item.hours}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="fade-up" style={{ transitionDelay: '0.15s' }}>
            <p className="text-xs uppercase tracking-[0.25em] text-[#D9C5B2] mb-6">Adresse</p>
            <p className="font-serif text-2xl mb-2">Hansaallee / Ecke Löricker Str. 1</p>
            <p className="text-sm text-[#0A0A0A]/55 mb-8">40547 Düsseldorf — Oberkassel</p>
            <div className="h-px bg-[#E5E0D8] mb-8" />
            <div className="space-y-2 mb-8">
              <a href="tel:+492115367967" className="block text-sm hover:text-[#D9C5B2] transition-colors">+49 211 536 79 67</a>
              <a href="mailto:amici@ristorante-amici.de" className="block text-sm hover:text-[#D9C5B2] transition-colors">amici@ristorante-amici.de</a>
            </div>
            <Link
              to="/reservierung"
              className="inline-flex items-center text-sm uppercase tracking-[0.15em] border-b border-[#0A0A0A] pb-1 hover:text-[#D9C5B2] hover:border-[#D9C5B2] transition-colors duration-300"
              data-testid="hours-reserve-link"
            >
              Tisch reservieren
            </Link>
          </div>
        </div>
      </section>

      {/* Parallax CTA */}
      <section
        className="parallax-bg h-[420px] md:h-[520px] relative flex items-center justify-center"
        style={{ backgroundImage: `url(${IMAGES.parallax})` }}
        data-testid="parallax-section"
      >
        <div className="absolute inset-0 bg-[#0A0A0A]/55" />
        <div className="relative z-10 text-center px-6">
          <p className="font-serif italic text-3xl md:text-5xl text-white mb-8 fade-up">
            La dolce vita — in Düsseldorf.
          </p>
          <Link
            to="/galerie"
            className="inline-block border border-white/70 text-white text-xs uppercase tracking-[0.2em] px-8 py-4 hover:bg-white hover:text-[#0A0A0A] transition-all duration-300 fade-up"
            style={{ transitionDelay: '0.1s' }}
          >
            Galerie ansehen
          </Link>
        </div>
      </section>
    </div>
  );
}
