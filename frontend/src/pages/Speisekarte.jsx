import React from 'react';
import { Link } from 'react-router-dom';
import useScrollAnimation from '../hooks/useScrollAnimation';
import { menuData } from '../data/menu';

export default function Speisekarte() {
  useScrollAnimation();

  return (
    <div className="bg-[#F8F6F2] pt-28">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-20 md:py-28">
        <p className="text-xs uppercase tracking-[0.25em] text-[#D9C5B2] mb-5 fade-in">Ristorante Amici</p>
        <h1 className="font-serif text-5xl md:text-7xl leading-tight fade-up" style={{ transitionDelay: '0.1s' }}>
          Unsere<br /><em>Speisekarte</em>
        </h1>
        <p className="mt-8 text-base font-light text-[#0A0A0A]/55 max-w-xl leading-relaxed fade-up" style={{ transitionDelay: '0.2s' }}>
          Ein Auszug unserer Karte — je nach Saison bieten wir Ihnen immer frisch zubereitete
          Köstlichkeiten. Fragen Sie nach unserem aktuellen Wochenmenu.
        </p>
      </div>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <div className="h-px bg-[#E5E0D8]" />
      </div>

      {/* Menu Categories */}
      {menuData.map((category, ci) => (
        <section
          key={ci}
          className="py-20 md:py-28"
          data-testid={`menu-category-${ci}`}
        >
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
            <div className="grid md:grid-cols-[1fr_2fr] gap-12 md:gap-24">
              {/* Category header */}
              <div className="md:sticky md:top-32 md:self-start">
                <p className="text-xs uppercase tracking-[0.2em] text-[#D9C5B2] mb-3 fade-in">{String(ci + 1).padStart(2, '0')}</p>
                <h2 className="font-serif text-3xl md:text-4xl leading-tight mb-3 slide-left">{category.category}</h2>
                <p className="text-sm font-light text-[#0A0A0A]/50 italic slide-left" style={{ transitionDelay: '0.1s' }}>{category.subtitle}</p>
                {category.image && (
                  <div className="mt-8 img-reveal-wrapper hidden md:block" data-cursor="image">
                    <img
                      src={category.image}
                      alt={category.category}
                      className="w-full h-48 object-cover"
                      loading="lazy"
                    />
                  </div>
                )}
              </div>

              {/* Dishes */}
              <div>
                {category.items.map((item, ii) => (
                  <div
                    key={ii}
                    className="py-6 border-b border-[#E5E0D8] last:border-0 fade-up"
                    style={{ transitionDelay: `${ii * 0.05}s` }}
                    data-testid={`dish-item-${ci}-${ii}`}
                  >
                    <div className="flex justify-between items-baseline gap-6 mb-1">
                      <h3 className="font-serif text-lg md:text-xl slide-left">{item.name}</h3>
                      <span className="text-sm font-light text-[#0A0A0A]/60 whitespace-nowrap slide-right">
                        {item.price !== 'nach Menge' ? `€ ${item.price}` : item.price}
                      </span>
                    </div>
                    {item.desc && (
                      <p className="text-sm font-light text-[#0A0A0A]/50 slide-right" style={{ transitionDelay: '0.05s' }}>{item.desc}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
          {ci < menuData.length - 1 && (
            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 mt-20">
              <div className="h-px bg-[#E5E0D8]" />
            </div>
          )}
        </section>
      ))}

      {/* Disclaimer */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 pb-24 border-t border-[#E5E0D8] pt-12">
        <p className="text-xs font-light text-[#0A0A0A]/40 leading-relaxed max-w-2xl">
          Alle Preise sind inklusive gesetzlicher Mehrwertsteuer und Bedienung. Die Preise unterliegen
          tagesaktuellen Marktschwankungen. Aktuelle Preise entnehmen Sie bitte der Speisekarte im Restaurant.
          Alle Angaben ohne Gewähr.
        </p>
        <div className="mt-10">
          <Link
            to="/reservierung"
            className="inline-flex items-center text-sm uppercase tracking-[0.15em] border-b border-[#0A0A0A] pb-1 hover:text-[#D9C5B2] hover:border-[#D9C5B2] transition-colors duration-300"
            data-testid="speisekarte-reserve-link"
          >
            Tisch reservieren
          </Link>
        </div>
      </div>
    </div>
  );
}
