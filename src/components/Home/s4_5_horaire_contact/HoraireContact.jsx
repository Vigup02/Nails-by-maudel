import React from 'react';
import { useNavigate } from 'react-router-dom';
import fleur8Img from '../../../assets/icône_illustration/fleur/fleur_8_pétales.svg'; 
import mainheroImg from '../../../assets/Image/home/main_hero-removebg.png';
import PrimaryButton from '../../Buttons/PrimaryButton/PrimaryButton';

import s from './HoraireContact.module.sass';

const HoraireContact = () => {
  const navigate = useNavigate();

return (
    <div className={s.horairecontactHero}>
      <div className={s.homeHero_txt}>
        <h1>L'Art des Ongles, </h1>
        <h1>une Evasion Créative</h1>
        <p>Plongez dans un voyage artistique avec des designs de nail art uniques, raffinés et empreints de caractère. 
        Chaque création raconte une histoire, la vôtre.</p>
        <PrimaryButton text="Trouvez votre style" onClick={() => navigate('/galerie')} />
      </div>
      <div>
        <img src={fleur8Img} alt="Fleur" />
      </div>
      <div>
        <img src={mainheroImg} alt="Main_hero" />
      </div>
    </div>
  );
};
export default HoraireContact;
