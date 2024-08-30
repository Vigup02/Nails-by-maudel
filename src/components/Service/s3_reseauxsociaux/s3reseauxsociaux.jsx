import React from 'react';
import instagramImg from '../../../assets/icône_illustration/reseaux_sociaux/instagram-color.svg';
import facebookImg from '../../../assets/icône_illustration/reseaux_sociaux/facebook-color.svg'; 
import s from './s3reseauxsociaux.module.sass';

const ReseauxSociaux2 = () => {
return (
    <div className={s.Reseaux}>
      <h2 className={s.Reseaux_title}>OFFRES SPECIALES ET CARTES CADEAUX</h2>
      <h3 className={s.Reseaux_title}>Suivez Nails by Maude'l sur les réseaux sociaux pour ne rien manquer de nos offres spéciales, jeux concours et soldes exclusives !</h3>
      <h3 className={s.Reseaux_title}>Pour faire plaisir à vos proches, pensez à nos cartes cadeaux disponibles directement au salon. Découvrez et partagez la magie du nail art !</h3>
      <div className={s.Reseaux_container}>
        <a href="https://www.facebook.com/nailsbymaudel.stylisteongulaire" target="_blank" rel="noopener noreferrer">
          <img className={s.Reseaux_container_fb} src={facebookImg} alt="Facebook" />
        </a>    
        <a href="https://www.instagram.com/nailsbymaudel/?hl=fr" target="_blank" rel="noopener noreferrer">
          <img className={s.Reseaux_container_insta} src={instagramImg} alt="Instagram" />
        </a> 
      </div>
    </div>
  );
};
export default ReseauxSociaux2;
