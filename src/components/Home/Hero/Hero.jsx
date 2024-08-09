import React from 'react';
import { useNavigate } from 'react-router-dom';
import fleurHero from '../../../assets/icône_illustration/fleur/fleurhero.svg'; 
import mainHero from '../../../assets/Image/home/main_hero-removebg.png';
import PrimaryButton from '../../Buttons/PrimaryButton/PrimaryButton';

import s from './hero.module.sass';

const Hero = () => {
  const navigate = useNavigate();

return (
    <div className={s.homeHero}>
      <div className={s.homeHero_txt}>
        <h1>L'Art des Ongles, </h1>
        <h1>une Evasion Créative</h1>
        <p>Plongez dans un voyage artistique avec des designs de nail art uniques, raffinés et empreints de caractère. 
        Chaque création raconte une histoire, la vôtre.</p>
        <PrimaryButton text="Trouvez votre style" onClick={() => navigate('/galerie')} />
      </div>
      <div className={s.homeHero_img}>
        <div>
          <img className={s.homeHero_img_fleur} src={fleurHero} alt="Fleur" />
        </div>
        <div>
          <img className={s.homeHero_img_main} src={mainHero} alt="Main_hero" />
        </div>
      </div>
    </div>
  );
};
export default Hero;
