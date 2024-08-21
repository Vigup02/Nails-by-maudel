import React from 'react';
import Offre1 from '../../../assets/Image/Services&Tarifs/offre1.webp';
import Offre2 from '../../../assets/Image/Services&Tarifs/offre2.webp';
import Offre3 from '../../../assets/Image/Services&Tarifs/offre5.webp';
import Offre4 from '../../../assets/Image/Services&Tarifs/offre3.webp';
import Offre5 from '../../../assets/Image/Services&Tarifs/offre6.png';
import s from './Offre.module.sass';

const Offre = () => {


return (
  <section className={s.Offre}>
      <img className={s.Offre_img1} src={Offre1} alt="comptoir du salon"/>
      <div className={s.Offre_cont}>
        <div className={s.Offre_cont_item}>
          <img className={s.Offre_cont_item_img} src={Offre2} alt="salle d'attente"/>
          <img className={s.Offre_cont_item_img} src={Offre3} alt="salle de travail"/>
        </div>
        <div className={s.Offre_cont_item}>
          <img className={s.Offre_cont_item_img} src={Offre4} alt="vitrine de nuit"/>
          <img className={s.Offre_cont_item_img} src={Offre5} alt="comptoir du salon"/>
        </div>
      </div>
  </section>
  );
};
export default Offre;
