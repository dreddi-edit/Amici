import { useEffect } from 'react';

export default function useScrollAnimation() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            if (entry.target.classList.contains('img-reveal-wrapper')) {
              entry.target.classList.add('revealed');
            } else {
              entry.target.classList.add('visible');
            }
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );

    const timer = setTimeout(() => {
      const elements = document.querySelectorAll(
        '.fade-up, .fade-in, .slide-left, .slide-right, .img-reveal-wrapper'
      );
      elements.forEach(el => observer.observe(el));
    }, 80);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, []);
}
