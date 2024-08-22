import React, { useEffect } from 'react';
import s from './heroSalon.module.sass';

const HeroSalon = () => {
  useEffect(() => {
    const handleScroll = () => {
        const scrollPosition = window.scrollY;
        const heroElement = document.querySelector(`.${s.salonHero}`);
        const offset = scrollPosition * 0.3; // Ajuste le facteur de parallaxe
        heroElement.style.setProperty('--parallax-offset', `${offset}px`);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
  };
}, []);

return (
  <div className={`${s.salonHero} ${s['salonHero--parallax']}`}>
    <h1 className={s.salonHero_title}>Un Voyage au Coeur du Nail Art</h1>
  </div>
  );
};
export default HeroSalon;
