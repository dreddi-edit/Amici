import React from 'react';
import { Link } from 'react-router-dom';
import useScrollAnimation from '../hooks/useScrollAnimation';

const newsItems = [
  {
    id: 1,
    date: 'April 2026',
    category: 'Betriebsferien',
    title: 'Betriebsferien 03. – 11. April 2026',
    body: 'Sehr geehrte Gäste, unser Restaurant bleibt vom 03.04.2026 bis 11.04.2026 wegen Betriebsferien geschlossen. Ab dem 13. April 2026 sind wir wie gewohnt für Sie da. Wir freuen uns, Sie wieder begrüßen zu dürfen.',
    image: 'https://ristorante-amici.de/wp-content/uploads/2018/06/P1000436a-1030x773.jpg',
  },
  {
    id: 2,
    date: 'Ganzjährig',
    category: 'Service',
    title: 'Take-Away & Private Dinner',
    body: 'Neben unserem Restaurantbetrieb bieten wir Ihnen die Möglichkeit unseres Take-Away & Delivery-Services an. Darüber hinaus kochen wir für kleine private Feiern oder ein Dinner zu zweit direkt bei Ihnen vor Ort frische Delikatessen.',
    image: 'https://ristorante-amici.de/wp-content/uploads/2025/02/PHOTO-2025-02-27-12-25-20.jpg',
  },
  {
    id: 3,
    date: 'Saisonabhängig',
    category: 'Küche',
    title: 'Saisonale Spezialitäten',
    body: 'Unsere Küche folgt dem Rhythmus der Jahreszeiten. Je nach Saison bieten wir Ihnen immer frisch zubereitete Köstlichkeiten. Fragen Sie nach unserem aktuellen Wochenmenu und entdecken Sie die besten Produkte der Saison.',
    image: 'https://ristorante-amici.de/wp-content/uploads/2018/06/P1000403a-1030x966.jpg',
  },
];

export default function News() {
  useScrollAnimation();

  return (
    <div className="bg-[#F8F6F2] pt-28">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-20 md:py-28 border-b border-[#E5E0D8]">
        <p className="text-xs uppercase tracking-[0.25em] text-[#D9C5B2] mb-5 fade-in">Ristorante Amici</p>
        <h1 className="font-serif text-5xl md:text-7xl leading-tight fade-up" style={{ transitionDelay: '0.1s' }}>
          Aktuelles
        </h1>
      </div>

      {/* News Articles */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        {newsItems.map((item, i) => (
          <article
            key={item.id}
            className="py-16 md:py-24 border-b border-[#E5E0D8] last:border-0"
            data-testid={`news-article-${i}`}
          >
            <div className={`grid md:grid-cols-2 gap-12 md:gap-20 items-center ${i % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
              <div className={i % 2 === 1 ? 'md:order-2' : ''}>
                <div className="img-reveal-wrapper" data-cursor="image">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-72 md:h-96 object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className={i % 2 === 1 ? 'md:order-1' : ''}>
                <div className="flex items-center gap-4 mb-6 slide-left">
                  <span className="text-xs uppercase tracking-[0.2em] text-[#D9C5B2]">{item.category}</span>
                  <span className="w-4 h-px bg-[#E5E0D8]" />
                  <span className="text-xs text-[#0A0A0A]/40">{item.date}</span>
                </div>
                <h2 className="font-serif text-3xl md:text-4xl leading-tight mb-6 slide-left" style={{ transitionDelay: '0.1s' }}>
                  {item.title}
                </h2>
                <p className="text-base font-light text-[#0A0A0A]/65 leading-relaxed slide-left" style={{ transitionDelay: '0.2s' }}>
                  {item.body}
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* CTA */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-24 border-t border-[#E5E0D8]">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <p className="font-serif text-2xl mb-2 fade-up">Haben Sie Fragen?</p>
            <p className="text-sm font-light text-[#0A0A0A]/55 fade-up" style={{ transitionDelay: '0.1s' }}>
              Rufen Sie uns an oder schreiben Sie uns eine E-Mail.
            </p>
          </div>
          <div className="flex gap-4 fade-up" style={{ transitionDelay: '0.2s' }}>
            <a
              href="tel:+492115367967"
              className="inline-block border border-[#0A0A0A] text-[#0A0A0A] text-xs uppercase tracking-[0.18em] px-8 py-4 hover:bg-[#0A0A0A] hover:text-[#F8F6F2] transition-all duration-300"
              data-testid="news-phone-btn"
            >
              Anrufen
            </a>
            <Link
              to="/reservierung"
              className="inline-block bg-[#0A0A0A] text-[#F8F6F2] text-xs uppercase tracking-[0.18em] px-8 py-4 hover:bg-[#D9C5B2] hover:text-[#0A0A0A] transition-all duration-300"
              data-testid="news-reserve-btn"
            >
              Reservieren
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
