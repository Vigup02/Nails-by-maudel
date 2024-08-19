import React from 'react'; 
import Maude from '../../../assets/Image/Salon/Maude_1.webp';
import Plante from '../../../assets/icône_illustration/fleur/fleur2-removebg.webp'; 
import Fleurnoire from '../../../assets/icône_illustration/fleur/fleur_pleine_black.svg';
import Fleurvide from '../../../assets/icône_illustration/fleur/fleur_vide_black.svg';
import s from './s1Maude.module.sass'; 

const S1Maude = () => {
 
  return (
    <div className={s.s1Maude}>      
      <div className={s.s1Maude_container}>
        <div className={s.s1Maude_container_txt}>
          <div className={s.s1Maude_container_txt_title}>
            <img className={s.s1Maude_container_txt_title_icone} src={Plante} alt="plante"/>
            <h2>Bienvenue dans mon univers créatif</h2>
          </div>
          <h3>L'art des ongles, inspiré par mes voyages et ma passion</h3>
          <p>Bonjour, je suis Maude, styliste ongulaire passionnée et créative.</p>
          <p>Mon voyage a commencé dans le monde de la mode, où j'ai étudié le stylisme et le modélisme. Après avoir exploré la création artistique à travers des tableaux et des cadres, j'ai eu l’opportunité de vivre pendant trois ans à Chypre avec ma famille. C'est là-bas que j'ai découvert ma passion pour le nail art et que je me suis formée en tant que styliste ongulaire. De retour en France, à Pontivy dans ma ville natale, j'ai ouvert mon premier salon, un lieu où je fusionne mon amour pour les voyages, mes rencontres et ma touche créative. Chaque design que je propose est conçu pour répondre à vos attentes tout en reflétant mes inspirations créatives.</p>
          <p>Mon objectif est de partager avec vous cette passion et de vous offrir une expérience unique et personnalisée.</p>
        </div>
        <div className={s.s1Maude_container_img}>
          <img className={s.s1Maude_container_img_photo} src={Maude} alt="Maude Liri"/>
          <img className={s.s1Maude_container_img_grdeFleur} src={Fleurnoire} alt="fleur 8 pétales"/>
          <img className={s.s1Maude_container_img_petiteFleur} src={Fleurnoire} alt="fleur 8 pétales"/>
          <img className={s.s1Maude_container_img_petitfleur1} src={Fleurnoire} alt="fleur 8 pétales"/>
          <img className={s.s1Maude_container_img_petitfleur2} src={Fleurvide} alt="fleur 8 pétales"/>
        </div>
      </div>
    </div>
  );
};

export default S1Maude;
