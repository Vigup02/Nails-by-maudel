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
      <h2 className={s.s3Galerie_title}>LES PRESTATIONS</h2>
      <div className={s.s3Galerie_container}>
        <div className={s.s3Galerie_container_grp1}>
          <img className={s.s3Galerie_container_grp1_img1} src={imgNailart} alt="ongle en Nail Art" />
          <RoundButton text="Nail Art" targetCategory="Nail Art" />
        </div>
        <div className={s.s3Galerie_container_grp2}>
          <img className={s.s3Galerie_container_grp2_img2} src={imgColore} alt="ongle en couleur" />
          <RoundButton text="Coloré" targetCategory="Coloré" />
        </div>
        <div className={s.s3Galerie_container_grp3}>
          <img className={s.s3Galerie_container_grp3_img3} src={imgFrench} alt="ongle en french" />
          <RoundButton text="French" targetCategory="French" />
        </div>
        <div className={s.s3Galerie_container_grp4}>
          <img className={s.s3Galerie_container_grp4_img4} src={imgNaturel} alt="ongle effet naturel" />
          <RoundButton text="Naturel" targetCategory="Naturel" />
        </div>
      </div>
    </div>
  );
};
export default Galerie;
