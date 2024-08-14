import React from 'react';
import RoundButton from '../../Buttons/RoundButton/RoundButton';
import imgNailart from '../../../assets/Image/home/img_nailart.webp';
import imgColore from '../../../assets/Image/home/img_coloré.webp';
import imgFrench from '../../../assets/Image/home/img_french.webp';
import imgNaturel from '../../../assets/Image/home/img_naturel.webp';
import s from './galerie.module.sass';

const Galerie = () => {

return (
    <div className={s.s3Galerie}>
      <h2 className={s.s3Galerie_title}>A CHAQUE JOUR SON NOUVEAU LOOK!</h2>
      <div className={s.s3Galerie_container}>
        <div className={s.s3Galerie_container_grp}>
          <img className={s.s3Galerie_container_grp_img} src={imgNailart} alt="ongle en Nail Art" />
          <RoundButton className={s.s3Galerie_container_grp_button} text="Nail Art" targetCategory="Nail Art" />
        </div>
        <div className={s.s3Galerie_container_grp}>
          <img className={s.s3Galerie_container_grp_img} src={imgColore} alt="ongle en couleur" />
          <RoundButton className={s.s3Galerie_container_grp_button} text="Coloré" targetCategory="Coloré" />
        </div>
        <div className={s.s3Galerie_container_grp}>
          <img className={s.s3Galerie_container_grp_img} src={imgFrench} alt="ongle en french" />
          <RoundButton className={s.s3Galerie_container_grp_button} text="French" targetCategory="French" />
        </div>
        <div className={s.s3Galerie_container_grp}>
          <img className={s.s3Galerie_container_grp_img} src={imgNaturel} alt="ongle effet naturel" />
          <RoundButton className={s.s3Galerie_container_grp_button} text="Naturel" targetCategory="Naturel" />
        </div>
      </div>
    </div>
  );
};
export default Galerie;
