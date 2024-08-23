import React from 'react';
import { useNavigate } from 'react-router-dom';
import fleurHero from '../../../assets/icône_illustration/fleur/fleurhero.svg'; 
import mainHero from '../../../assets/Image/home/main_hero-removebg.webp';
import PrimaryButton from '../../Buttons/PrimaryButton/PrimaryButton';

import s from './hero.module.sass';

const Hero = () => {
  const navigate = useNavigate();

  // Fonction pour naviguer et scroller en haut de la page
  const handleNavigate = (path) => {
  navigate(path);
  // Attendre que la navigation soit effectuée avant de scroller en haut
  setTimeout(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, 0);
};

return (
    <div className={s.homeHero}>
      <div className={s.homeHero_txt}>
        <h1>
          <span>L'Art des Ongles,</span>
          <span>une Evasion Créative</span>
        </h1>
        <h3>
          <span>Plongez dans un voyage artistique avec des designs de nail art uniques et raffinés.</span> 
          <span>Chaque création raconte une histoire, la vôtre.</span>
        </h3>
        <PrimaryButton text="Trouvez votre style" onClick={() => handleNavigate('/galerie')} />
      </div>
      <div className={s.homeHero_img}>     
        <img className={s.homeHero_img_fleur} src={fleurHero} alt="Fleur" />
        <img className={s.homeHero_img_main} src={mainHero} alt="Main_hero" />
      </div>
    </div>
  );
};
export default Hero;
