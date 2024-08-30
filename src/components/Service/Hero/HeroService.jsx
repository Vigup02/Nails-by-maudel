import React from 'react';
import Forme from '../../../assets/icône_illustration/Shape-Abstract--Gradient.svg'; 
import Vernis from '../../../assets/Image/Services&Tarifs/pyramide_de_vernis.png';
import s from './HeroService.module.sass';

const HeroService = () => {
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
    <div className={s.HeroService}>
      <div className={s.HeroService_txt}>
        <h1>{animateText("Sublimez vos ongles avec nos prestations")}</h1>
        <h3><span>Découvrez nos prestations de nail art et nos tarifs, conçus pour sublimer vos ongles avec des créations uniques et personnalisées.</span></h3>
      </div>
      <div className={s.HeroService_img}>     
        <img className={s.HeroService_img_forme} src={Forme} alt="Forme arrondie avec coin bas gauche en angle" />
        <img className={s.HeroService_img_vernis} src={Vernis} alt="Flacon de vernis en pyramide" />
      </div>
    </div>
  );
};

export default HeroService;
