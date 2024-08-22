import React from 'react';
import Comptoir from '../../../assets/Image/Salon/salon10.png';
import Salon1 from '../../../assets/Image/Salon/salon2.webp';
import Salon2 from '../../../assets/Image/Salon/salon3.webp';
import Salon3 from '../../../assets/Image/Salon/salon6.webp';
import Salon4 from '../../../assets/Image/Salon/salon8.webp';
import s from './LeSalon.module.sass';

const S3Salon = () => {


return (
  <section className={s.leSalon}>
    <h2 className={s.leSalon_title}>LE SALON</h2>
    <h3 className={s.leSalon_subtitle}>Le salon est un havre de chaleur et de raffinement.</h3>
    <h3 className={s.leSalon_subtitle}>Chaque élément du décor est soigneusement sélectionné pour créer une ambiance accueillante et élégante, mêlant des touches vintage à des accents modernes.</h3>
    <div className={s.leSalon_galerie}>
      <img className={s.leSalon_galerie_img1} src={Comptoir} alt="comptoir du salon"/>
      <div className={s.leSalon_galerie_cont}>
        <div className={s.leSalon_galerie_cont_item}>
          <img className={s.leSalon_galerie_cont_item_img} src={Salon1} alt="salle d'attente"/>
          <img className={s.leSalon_galerie_cont_item_img} src={Salon2} alt="salle de travail"/>
        </div>
        <div className={s.leSalon_galerie_cont_item}>
          <img className={s.leSalon_galerie_cont_item_img} src={Salon3} alt="vitrine de nuit"/>
          <img className={s.leSalon_galerie_cont_item_img} src={Salon4} alt="comptoir du salon"/>
        </div>
      </div>
    </div>
  </section>
  );
};
export default S3Salon;
