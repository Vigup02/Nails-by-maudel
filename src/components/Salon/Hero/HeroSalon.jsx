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

  // Fonction pour animer le texte, mot par mot
  const animateText = (text) => {
    // Divise le texte en mots en utilisant l'espace (' ') comme séparateur
    return text.split(' ').map((word, index) => (
      // Retourne un élément <span> pour chaque mot avec une animation décalée
      <span 
        key={index} // Clé unique pour chaque <span> basée sur l'index du mot
        style={{ 
          animationDelay: `${index * 0.3}s`, // Délai d'animation sur le mot
          display: 'inline-block', // Force le mot à se comporter pour qu'il ne se coupe pas
          whiteSpace: 'nowrap' // Empêche le mot de se couper en fin de ligne, le mot reste entier
        }}
      >
        {word} {/* Affiche le mot */}
        {/* Ajoute un espace insécable après chaque mot sauf le dernier */}
        {index < text.split(' ').length - 1 && '\u00A0'}
      </span>
    ));
  };

return (
  <div className={`${s.salonHero} ${s['salonHero--parallax']}`}>
    <h1 className={s.salonHero_title}>{animateText("Un Voyage au Coeur du Nail Art")}</h1>
  </div>
  );
};
export default HeroSalon;
