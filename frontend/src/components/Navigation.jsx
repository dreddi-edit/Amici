import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const NavLink = ({ to, children, onClick }) => {
  const { pathname } = useLocation();
  const isActive = pathname === to;
  return (
    <Link
      to={to}
      onClick={onClick}
      className={`text-xs uppercase tracking-[0.18em] font-medium transition-colors duration-300 hover:text-[#D9C5B2] ${isActive ? 'text-[#D9C5B2]' : 'text-[#0A0A0A]'}`}
    >
      {children}
    </Link>
  );
};

const DropdownMenu = ({ label, children }) => {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button className="text-xs uppercase tracking-[0.18em] font-medium text-[#0A0A0A] hover:text-[#D9C5B2] transition-colors duration-300 flex items-center gap-1">
        {label}
        <span className={`text-[10px] transition-transform duration-200 ${open ? 'rotate-180' : ''}`}>▾</span>
      </button>
      {open && (
        <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 z-50">
          <div className="bg-[#F8F6F2] border border-[#E5E0D8] shadow-lg py-3 min-w-[160px]">
            {children}
          </div>
        </div>
      )}
    </div>
  );
};

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHero = pathname === '/';

  return (
    <>
      <nav
        data-testid="navigation"
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          scrolled
            ? 'bg-[#F8F6F2]/95 backdrop-blur-md shadow-[0_1px_0_rgba(0,0,0,0.06)] py-4'
            : isHero
            ? 'bg-transparent py-7'
            : 'bg-[#F8F6F2]/95 backdrop-blur-md shadow-[0_1px_0_rgba(0,0,0,0.06)] py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            data-testid="nav-logo"
            className={`font-serif text-lg md:text-xl tracking-[0.12em] uppercase transition-colors duration-300 ${
              scrolled || !isHero ? 'text-[#0A0A0A]' : 'text-white'
            }`}
          >
            Ristorante Amici
          </Link>

          {/* Desktop links */}
          <div className={`hidden lg:flex items-center gap-8 transition-colors duration-300 ${
            scrolled || !isHero ? '' : '[&_button]:text-white [&_a]:text-white'
          }`}>
            <NavLink to="/">Willkommen</NavLink>
            <DropdownMenu label="Restaurant">
              <Link to="/speisekarte" className="block px-5 py-2 text-xs uppercase tracking-[0.15em] hover:text-[#D9C5B2] transition-colors">Speisekarte</Link>
              <Link to="/weinauswahl" className="block px-5 py-2 text-xs uppercase tracking-[0.15em] hover:text-[#D9C5B2] transition-colors">Weinauswahl</Link>
            </DropdownMenu>
            <NavLink to="/party-service">Party Service</NavLink>
            <NavLink to="/galerie">Galerie</NavLink>
            <DropdownMenu label="Kontakt">
              <Link to="/kontakt" className="block px-5 py-2 text-xs uppercase tracking-[0.15em] hover:text-[#D9C5B2] transition-colors">Kontakt</Link>
              <Link to="/reservierung" className="block px-5 py-2 text-xs uppercase tracking-[0.15em] hover:text-[#D9C5B2] transition-colors">Reservierung</Link>
            </DropdownMenu>
            <NavLink to="/news">News</NavLink>
          </div>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-4">
            <Link
              to="/reservierung"
              data-testid="nav-reservieren-btn"
              className={`hidden lg:inline-block text-xs uppercase tracking-[0.18em] border px-5 py-2.5 transition-all duration-300 ${
                scrolled || !isHero
                  ? 'border-[#0A0A0A] text-[#0A0A0A] hover:bg-[#0A0A0A] hover:text-[#F8F6F2]'
                  : 'border-white text-white hover:bg-white hover:text-[#0A0A0A]'
              }`}
            >
              Reservieren
            </Link>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`lg:hidden p-2 transition-colors ${scrolled || !isHero ? 'text-[#0A0A0A]' : 'text-white'}`}
              data-testid="mobile-menu-btn"
              aria-label="Menü öffnen"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-30 bg-[#F8F6F2] flex flex-col items-center justify-center gap-8"
          data-testid="mobile-menu"
        >
          <Link to="/" onClick={() => setMobileOpen(false)} className="font-serif text-3xl">Willkommen</Link>
          <Link to="/speisekarte" onClick={() => setMobileOpen(false)} className="font-serif text-3xl">Speisekarte</Link>
          <Link to="/weinauswahl" onClick={() => setMobileOpen(false)} className="font-serif text-3xl">Weinauswahl</Link>
          <Link to="/party-service" onClick={() => setMobileOpen(false)} className="font-serif text-3xl">Party Service</Link>
          <Link to="/galerie" onClick={() => setMobileOpen(false)} className="font-serif text-3xl">Galerie</Link>
          <Link to="/kontakt" onClick={() => setMobileOpen(false)} className="font-serif text-3xl">Kontakt</Link>
          <Link to="/reservierung" onClick={() => setMobileOpen(false)} className="font-serif text-3xl">Reservierung</Link>
          <Link to="/news" onClick={() => setMobileOpen(false)} className="font-serif text-3xl">News</Link>
          <div className="mt-4 border-t border-[#E5E0D8] pt-4 text-center">
            <a href="tel:+492115367967" className="text-sm text-[#0A0A0A]/60">+49 211 536 79 67</a>
          </div>
        </div>
      )}
    </>
  );
}
