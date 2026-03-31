import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Willkommen from './pages/Willkommen';
import Speisekarte from './pages/Speisekarte';
import Weinauswahl from './pages/Weinauswahl';
import PartyService from './pages/PartyService';
import Galerie from './pages/Galerie';
import Kontakt from './pages/Kontakt';
import Reservierung from './pages/Reservierung';
import News from './pages/News';
import './App.css';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
};

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const [large, setLarge] = useState(false);

  useEffect(() => {
    const move = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = e.clientX + 'px';
        cursorRef.current.style.top = e.clientY + 'px';
      }
    };
    const enter = (e) => {
      const target = e.target.closest('[data-cursor="image"]');
      if (target) setLarge(true);
    };
    const leave = (e) => {
      const target = e.target.closest('[data-cursor="image"]');
      if (target) setLarge(false);
    };
    document.addEventListener('mousemove', move);
    document.addEventListener('mouseover', enter);
    document.addEventListener('mouseout', leave);
    return () => {
      document.removeEventListener('mousemove', move);
      document.removeEventListener('mouseover', enter);
      document.removeEventListener('mouseout', leave);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      data-testid="custom-cursor"
      className={`custom-cursor hidden md:block${large ? ' large' : ''}`}
    />
  );
};

const PageWrapper = ({ children }) => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const id = requestAnimationFrame(() => setVisible(true));
    return () => cancelAnimationFrame(id);
  }, []);
  return (
    <div
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'none' : 'translateY(20px)',
        transition: 'opacity 0.5s ease, transform 0.5s ease',
      }}
    >
      {children}
    </div>
  );
};

const AppRoutes = () => (
  <>
    <ScrollToTop />
    <Navigation />
    <Routes>
      <Route path="/" element={<PageWrapper><Willkommen /></PageWrapper>} />
      <Route path="/speisekarte" element={<PageWrapper><Speisekarte /></PageWrapper>} />
      <Route path="/weinauswahl" element={<PageWrapper><Weinauswahl /></PageWrapper>} />
      <Route path="/party-service" element={<PageWrapper><PartyService /></PageWrapper>} />
      <Route path="/galerie" element={<PageWrapper><Galerie /></PageWrapper>} />
      <Route path="/kontakt" element={<PageWrapper><Kontakt /></PageWrapper>} />
      <Route path="/reservierung" element={<PageWrapper><Reservierung /></PageWrapper>} />
      <Route path="/news" element={<PageWrapper><News /></PageWrapper>} />
    </Routes>
    <Footer />
    <CustomCursor />
  </>
);

export default function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}
