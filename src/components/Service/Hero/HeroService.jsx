import React from 'react';
import Forme from '../../../assets/icône_illustration/Shape-Abstract--Gradient.svg'; 
import Vernis from '../../../assets/Image/Services&Tarifs/pyramide_de_vernis.png';
import s from './HeroService.module.sass';

const HeroService = () => {
  const animateText = (text) => {
    return text.split('').map((char, index) => (
      <span key={index} style={{ animationDelay: `${index * 0.05}s` }}>
        {char === ' ' ? '\u00A0' : char}
      </span>
    ));
  };

  return (
    <div className={s.HeroService}>
      <div className={s.HeroService_txt}>
        <h1>{animateText("Sublimez vos ongles avec nos prestations")}</h1>
        <h3>{animateText("Découvrez nos prestations de nail art et nos tarifs, conçus pour sublimer vos ongles avec des créations uniques et personnalisées.")}</h3>
      </div>
      <div className={s.HeroService_img}>     
        <img className={s.HeroService_img_forme} src={Forme} alt="Forme arrondie avec coin bas gauche en angle" />
        <img className={s.HeroService_img_vernis} src={Vernis} alt="Flacon de vernis en pyramide" />
      </div>
    </div>
  );
};

export default HeroService;
