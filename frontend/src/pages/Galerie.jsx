import React, { useState } from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';
import { X } from 'lucide-react';

const restaurantImages = [
  { url: 'https://ristorante-amici.de/wp-content/uploads/2018/05/07.jpg', caption: 'Ristorante Amici' },
  { url: 'https://ristorante-amici.de/wp-content/uploads/2018/06/P1000397a-1030x813.jpg', caption: 'Ristorante Amici' },
  { url: 'https://ristorante-amici.de/wp-content/uploads/2018/06/IMG_1807ba-1030x676.jpg', caption: 'Ristorante Amici' },
  { url: 'https://ristorante-amici.de/wp-content/uploads/2018/06/P1000422ba-1030x773.jpg', caption: 'Ristorante Amici' },
  { url: 'https://ristorante-amici.de/wp-content/uploads/2018/06/P1000436a-1030x773.jpg', caption: 'Ristorante Amici' },
  { url: 'https://ristorante-amici.de/wp-content/uploads/2018/06/IMG_1793a-1030x687.jpg', caption: 'Ristorante Amici' },
  { url: 'https://ristorante-amici.de/wp-content/uploads/2020/06/Amici-No-2-495x400.jpg', caption: 'Interieur' },
  { url: 'https://ristorante-amici.de/wp-content/uploads/2020/06/Amici-No1-495x400.jpg', caption: 'Interieur' },
];

const foodImages = [
  { url: 'https://ristorante-amici.de/wp-content/uploads/2018/06/P1000403a-1030x966.jpg', caption: 'Antipasti Misto' },
  { url: 'https://ristorante-amici.de/wp-content/uploads/2018/07/IMG_3220_2-1030x773.jpg', caption: 'Gamberoni alle erbe' },
  { url: 'https://ristorante-amici.de/wp-content/uploads/2018/06/IMG_1780ca-1030x670.jpg', caption: 'Lammkarree' },
  { url: 'https://ristorante-amici.de/wp-content/uploads/2018/06/P1000429ba-1030x1027.jpg', caption: 'Zuppa di Pesce' },
  { url: 'https://ristorante-amici.de/wp-content/uploads/2018/06/P1000414a-1030x979.jpg', caption: 'Heilbutt in Senfsoße' },
  { url: 'https://ristorante-amici.de/wp-content/uploads/2018/06/P1000425a-1030x773.jpg', caption: 'Sogliola alla mugnaia' },
];

export default function Galerie() {
  useScrollAnimation();
  const [tab, setTab] = useState('restaurant');
  const [lightbox, setLightbox] = useState(null);

  const images = tab === 'restaurant' ? restaurantImages : foodImages;

  return (
    <div className="bg-[#F8F6F2] pt-28">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-20 md:py-28">
        <p className="text-xs uppercase tracking-[0.25em] text-[#D9C5B2] mb-5 fade-in">Ristorante Amici</p>
        <h1 className="font-serif text-5xl md:text-7xl leading-tight fade-up" style={{ transitionDelay: '0.1s' }}>
          Galerie
        </h1>
        <p className="mt-8 text-base font-light text-[#0A0A0A]/55 max-w-xl leading-relaxed fade-up" style={{ transitionDelay: '0.2s' }}>
          Impressionen unserer Atmosphäre und unserer mit Liebe zubereiteten Gerichte.
        </p>
      </div>

      {/* Tabs */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 mb-12">
        <div className="flex gap-6 border-b border-[#E5E0D8]">
          {[
            { key: 'restaurant', label: 'Ristorante' },
            { key: 'food', label: 'Unsere Speisen' },
          ].map(t => (
            <button
              key={t.key}
              onClick={() => setTab(t.key)}
              data-testid={`gallery-tab-${t.key}`}
              className={`text-xs uppercase tracking-[0.18em] py-4 border-b-2 transition-colors duration-300 ${
                tab === t.key
                  ? 'border-[#0A0A0A] text-[#0A0A0A]'
                  : 'border-transparent text-[#0A0A0A]/40 hover:text-[#0A0A0A]'
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>

      {/* Masonry Grid */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 pb-32">
        <div
          style={{ columns: '2', columnGap: '16px' }}
          className="md:columns-3"
        >
          {images.map((img, i) => (
            <div
              key={`${tab}-${i}`}
              className="break-inside-avoid mb-4 overflow-hidden group cursor-none img-reveal-wrapper"
              style={{ transitionDelay: `${i * 0.06}s` }}
              onClick={() => setLightbox(img)}
              data-testid={`gallery-image-${i}`}
              data-cursor="image"
            >
              <img
                src={img.url}
                alt={img.caption}
                className="w-full object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-[#0A0A0A]/0 group-hover:bg-[#0A0A0A]/20 transition-all duration-300 flex items-end p-4 z-10">
                <p className="text-white text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {img.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-[#0A0A0A]/92 flex items-center justify-center p-6 md:p-16"
          onClick={() => setLightbox(null)}
          data-testid="lightbox-overlay"
        >
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors"
            data-testid="lightbox-close"
            aria-label="Schließen"
          >
            <X size={24} />
          </button>
          <img
            src={lightbox.url}
            alt={lightbox.caption}
            className="max-h-full max-w-full object-contain"
            onClick={e => e.stopPropagation()}
          />
          <p className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/50 text-xs uppercase tracking-[0.2em]">
            {lightbox.caption}
          </p>
        </div>
      )}
    </div>
  );
}
