import React from 'react';
import fleurPleine from '../../../assets/icône_illustration/fleur/fleur_pleine_black.svg';
import fleurVide from '../../../assets/icône_illustration/fleur/fleur_vide_black.svg';
import instagramImg from '../../../assets/icône_illustration/reseaux_sociaux/instagram-color.svg';
import facebookImg from '../../../assets/icône_illustration/reseaux_sociaux/facebook-color.svg'; 
import s from './reseauxsociaux.module.sass';

const ReseauxSociaux = () => {
return (
    <div className={s.Reseaux}>
      <h2 className={s.Reseaux_title}>Envie de découvrir encore plus de créations ?</h2>
      <h2 className={s.Reseaux_title}>Suivez-moi sur mes réseaux sociaux pour  des idées inspirantes</h2>
      <div className={s.Reseaux_container}>
        <a href="https://www.facebook.com/nailsbymaudel.stylisteongulaire" target="_blank" rel="noopener noreferrer">
          <img className={s.Reseaux_container_fb} src={facebookImg} alt="Facebook" />
        </a>    
        <a href="https://www.instagram.com/nailsbymaudel/?hl=fr" target="_blank" rel="noopener noreferrer">
          <img className={s.Reseaux_container_insta} src={instagramImg} alt="Instagram" />
        </a> 
      </div>
      <img className={s.Reseaux_fleurpleine}src={fleurPleine} alt="fleur beige rempli" />
      <img className={s.Reseaux_fleurvide}src={fleurVide} alt="fleur beige vide" />
      <img className={s.Reseaux_petitefleurpleine}src={fleurPleine} alt="Petite fleur beige rempli" />
      <img className={s.Reseaux_petitefleurvide1} src={fleurVide} alt="Petite fleur beige vide" />
      <img className={s.Reseaux_petitefleurvide2} src={fleurVide} alt="Petite fleur beige vide" />
    </div>
  );
};
export default ReseauxSociaux;
