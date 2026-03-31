import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useScrollAnimation from '../hooks/useScrollAnimation';
import { wineData } from '../data/wine';

const typeColors = {
  white: '#F0EAD6',
  red: '#C9B8B8',
  rose: '#E8CEC8',
};
const typeLabels = { white: 'Weißwein', red: 'Rotwein', rose: 'Rosé' };

const HERO_IMG = 'https://ristorante-amici.de/wp-content/uploads/2018/05/agriculture-farm-farming-39511-1.jpg';

export default function Weinauswahl() {
  useScrollAnimation();
  const [activeRegion, setActiveRegion] = useState(null);

  const filteredData = activeRegion
    ? wineData.filter(r => r.region === activeRegion)
    : wineData;

  return (
    <div className="bg-[#F8F6F2] pt-28">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-20 md:py-28">
        <p className="text-xs uppercase tracking-[0.25em] text-[#D9C5B2] mb-5 fade-in">Ristorante Amici</p>
        <h1 className="font-serif text-5xl md:text-7xl leading-tight fade-up" style={{ transitionDelay: '0.1s' }}>
          Unsere<br /><em>Weinauswahl</em>
        </h1>
        <p className="mt-8 text-base font-light text-[#0A0A0A]/55 max-w-xl leading-relaxed fade-up" style={{ transitionDelay: '0.2s' }}>
          Ein Auszug aus unserer Weinkarte nach Region — exquisite italienische Weine,
          sorgfältig ausgewählt für Ihr Genusserlebnis.
        </p>
      </div>

      {/* Hero Image */}
      <div className="img-reveal-wrapper mx-6 md:mx-12 lg:mx-24 mb-20" data-cursor="image">
        <img
          src={HERO_IMG}
          alt="Weinberge"
          className="w-full h-64 md:h-96 object-cover object-bottom"
          loading="lazy"
        />
      </div>

      {/* Region Filter */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 mb-16">
        <p className="text-xs uppercase tracking-[0.2em] text-[#0A0A0A]/40 mb-4">Filtern nach Region</p>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setActiveRegion(null)}
            data-testid="wine-filter-all"
            className={`text-xs uppercase tracking-[0.15em] px-4 py-2 border transition-all duration-200 ${
              activeRegion === null
                ? 'bg-[#0A0A0A] text-[#F8F6F2] border-[#0A0A0A]'
                : 'border-[#E5E0D8] hover:border-[#0A0A0A]'
            }`}
          >
            Alle
          </button>
          {wineData.map(r => (
            <button
              key={r.region}
              onClick={() => setActiveRegion(r.region === activeRegion ? null : r.region)}
              data-testid={`wine-filter-${r.region.toLowerCase().replace(/\s/g, '-')}`}
              className={`text-xs uppercase tracking-[0.15em] px-4 py-2 border transition-all duration-200 ${
                activeRegion === r.region
                  ? 'bg-[#0A0A0A] text-[#F8F6F2] border-[#0A0A0A]'
                  : 'border-[#E5E0D8] hover:border-[#0A0A0A]'
              }`}
            >
              {r.region}
            </button>
          ))}
        </div>
      </div>

      {/* Wine Regions */}
      {filteredData.map((region, ri) => (
        <section key={ri} className="py-16 md:py-24 border-t border-[#E5E0D8]" data-testid={`wine-region-${ri}`}>
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
            {/* Region header */}
            <div className="mb-12">
              <p className="text-xs uppercase tracking-[0.2em] text-[#D9C5B2] mb-3 fade-in">{String(ri + 1).padStart(2, '0')} — Region</p>
              <h2 className="font-serif text-5xl md:text-7xl slide-left">{region.region}</h2>
              <p className="mt-3 text-xs uppercase tracking-[0.15em] text-[#0A0A0A]/40 slide-left" style={{ transitionDelay: '0.1s' }}>
                {region.varieties.join(' · ')}
              </p>
            </div>

            {/* Wines */}
            <div className="space-y-0">
              {region.wines.map((wine, wi) => (
                <div
                  key={wi}
                  className="py-8 border-b border-[#E5E0D8] last:border-0 fade-up"
                  style={{ transitionDelay: `${wi * 0.06}s` }}
                  data-testid={`wine-item-${ri}-${wi}`}
                >
                  <div className="grid md:grid-cols-[1fr_auto] gap-4 md:gap-12 items-start">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <span
                          className="w-2 h-2 rounded-full flex-shrink-0"
                          style={{ background: typeColors[wine.type] }}
                          title={typeLabels[wine.type]}
                        />
                        <h3 className="font-serif text-xl slide-left">
                          {wine.name}
                          <span className="font-sans font-light text-sm text-[#0A0A0A]/40 ml-3">{wine.vintage}</span>
                        </h3>
                      </div>
                      <p className="text-xs uppercase tracking-[0.12em] text-[#D9C5B2] mb-3 ml-5 slide-right" style={{ transitionDelay: '0.05s' }}>{wine.producer}</p>
                      {wine.nose && (
                        <div className="ml-5 space-y-1">
                          <p className="text-sm font-light text-[#0A0A0A]/60">
                            <span className="text-xs uppercase tracking-wider text-[#0A0A0A]/35 mr-2">Nase</span>
                            {wine.nose}
                          </p>
                          <p className="text-sm font-light text-[#0A0A0A]/60">
                            <span className="text-xs uppercase tracking-wider text-[#0A0A0A]/35 mr-2">Gaumen</span>
                            {wine.palate}
                          </p>
                        </div>
                      )}
                    </div>
                    <div className="text-right ml-5 md:ml-0">
                      <p className="font-serif text-2xl">{wine.price !== 'auf Anfrage' ? `€ ${wine.price}` : 'auf Anfrage'}</p>
                      {wine.price !== 'auf Anfrage' && (
                        <p className="text-xs text-[#0A0A0A]/35">{wine.unit}</p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Disclaimer + CTA */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-20">
        <p className="text-xs font-light text-[#0A0A0A]/40 leading-relaxed max-w-2xl mb-10">
          Alle Preise sind inklusive Mehrwertsteuer und Bedienung. Preise können Marktschwankungen unterliegen.
          Darüber hinaus bieten wir saisonabhängige Weine an. Alle Angaben ohne Gewähr.
        </p>
        <Link
          to="/reservierung"
          className="inline-flex items-center text-sm uppercase tracking-[0.15em] border-b border-[#0A0A0A] pb-1 hover:text-[#D9C5B2] hover:border-[#D9C5B2] transition-colors duration-300"
          data-testid="weinauswahl-reserve-link"
        >
          Tisch reservieren
        </Link>
      </div>
    </div>
  );
}
