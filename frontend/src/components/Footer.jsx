import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-[#F8F6F2] border-t border-[#E5E0D8] pt-16 pb-10" data-testid="footer">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <div className="grid md:grid-cols-2 gap-12 md:gap-24 mb-16">
          {/* Left: Address + Hours */}
          <div>
            <p className="font-serif text-2xl mb-6">Ristorante Amici</p>
            <p className="text-sm font-light text-[#0A0A0A]/70 mb-1">Hansaallee / Ecke Löricker Str. 1</p>
            <p className="text-sm font-light text-[#0A0A0A]/70 mb-6">40547 Düsseldorf — Oberkassel</p>
            <div className="space-y-1 mb-6">
              <p className="text-sm font-light text-[#0A0A0A]/70">Mo – Fr: 12:00 – 14:30 & 18:00 – 22:30</p>
              <p className="text-sm font-light text-[#0A0A0A]/70">Samstag: 18:00 – 22:30</p>
              <p className="text-sm font-light text-[#0A0A0A]/70">Sonntag: Ruhetag</p>
            </div>
            <a href="tel:+492115367967" className="block text-sm hover:text-[#D9C5B2] transition-colors mb-1">+49 211 536 79 67</a>
            <a href="mailto:amici@ristorante-amici.de" className="block text-sm hover:text-[#D9C5B2] transition-colors">amici@ristorante-amici.de</a>
          </div>
          {/* Right: Navigation */}
          <div className="grid grid-cols-2 gap-8">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-[#D9C5B2] mb-5">Restaurant</p>
              <nav className="space-y-3">
                <Link to="/" className="block text-sm font-light hover:text-[#D9C5B2] transition-colors">Willkommen</Link>
                <Link to="/speisekarte" className="block text-sm font-light hover:text-[#D9C5B2] transition-colors">Speisekarte</Link>
                <Link to="/weinauswahl" className="block text-sm font-light hover:text-[#D9C5B2] transition-colors">Weinauswahl</Link>
                <Link to="/party-service" className="block text-sm font-light hover:text-[#D9C5B2] transition-colors">Party Service</Link>
              </nav>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-[#D9C5B2] mb-5">Informationen</p>
              <nav className="space-y-3">
                <Link to="/galerie" className="block text-sm font-light hover:text-[#D9C5B2] transition-colors">Galerie</Link>
                <Link to="/kontakt" className="block text-sm font-light hover:text-[#D9C5B2] transition-colors">Kontakt</Link>
                <Link to="/reservierung" className="block text-sm font-light hover:text-[#D9C5B2] transition-colors">Reservierung</Link>
                <Link to="/news" className="block text-sm font-light hover:text-[#D9C5B2] transition-colors">News</Link>
              </nav>
            </div>
          </div>
        </div>
        {/* Bottom bar */}
        <div className="border-t border-[#E5E0D8] pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-serif italic text-[#D9C5B2] text-sm">La dolce vita — in Düsseldorf</p>
          <p className="text-xs text-[#0A0A0A]/40 tracking-wider">
            © {new Date().getFullYear()} Ristorante Amici · Alle Rechte vorbehalten
          </p>
        </div>
      </div>
    </footer>
  );
}
