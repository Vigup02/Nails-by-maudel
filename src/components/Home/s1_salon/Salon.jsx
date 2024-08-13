import React from 'react';
import { useNavigate } from 'react-router-dom';
import vitrineSalon from '../../../assets/Image/home/Vitrine.webp';
import brancheFeuille from '../../../assets/icône_illustration/fleur/branche_6_feuille_removebg.webp';
import SecondaryButton from '../../Buttons/SecondaryButton/SecondaryButton';
import s from './salon.module.sass';

const Salon = () => {
    const navigate = useNavigate();

return (
    <div className={s.s1Salon}>
      <div className={s.s1Salon_bkgrd}>
      </div>
      <div className={s.s1Salon_container}>
        <img className={s.s1Salon_container_imgvitrine}src={vitrineSalon} alt="Vitrine" />
        <div className={s.s1Salon_container_txt}>
          <h2 className={s.s1Salon_container_txt_title}>LE SALON</h2>
          <h3>Un Salon où chaleur et élégance se rencontrent</h3>
          <p>Entrez dans un espace empreint de chaleur et de caractère, où l'authenticité se marie avec une élégance moderne. Chaque coin de notre salon reflète une histoire unique, créant une atmosphère accueillante et inspirante.</p>
          <div className={s.s1Salon_container_txt_button1}>
            <SecondaryButton  text="Découvrez l’univers du salon" onClick={() => navigate('/salon')} />
          </div>
        </div>
        <div className={s.s1Salon_container_button2}>
          <SecondaryButton  text="Découvrez l’univers du salon" onClick={() => navigate('/salon')} />
        </div>
        <img className={s.s1Salon_container_icone}src={brancheFeuille} alt="branches6feuilles" />
      </div>
    </div>
  );
};
export default Salon;
