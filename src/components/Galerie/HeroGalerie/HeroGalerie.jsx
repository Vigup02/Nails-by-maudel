import React from 'react';
import Main_Maroc from '../../../assets/Image/Galerie/img_maroc.webp';
import Main_Plante from '../../../assets/Image/Galerie/img_plante.webp';
import Cactus from '../../../assets/Image/Galerie/Animation_cactus.gif';
import Main_Smiley from '../../../assets/Image/Galerie/img_smiley.webp';
import Smiley from '../../../assets/Image/Galerie/Animation_smiley.gif';
import Main_Leopard from '../../../assets/Image/Galerie/img_léopard.webp';
import Main_Tropic from '../../../assets/Image/Galerie/img_tropic.webp';
import Leopard from '../../../assets/Image/Galerie/photo_leopard.webp';
import Maroc from '../../../assets/Image/Galerie/timbre_maroc.webp';
import Cocktail from '../../../assets/icône_illustration/tropical-drink.svg';
import s from './HeroGalerie.module.sass';

const HeroGalerie = () => {
return (
  <div className={s.Galerie}>
    <div className={s.Galerie_container}>
      <h1>Inspirations et Créations</h1>
      <h3 className={s.Galerie_container_subtitle}>Découvrez comment les voyages et les inspirations de Maude se transforment en œuvres d'art uniques pour vos ongles.</h3>
    </div>
    <img className={s.Galerie_imgmaroc} src={Main_Maroc} alt="ongle couleur bleue"/>
    <img className={s.Galerie_imgplante} src={Main_Plante} alt="ongle couleur vert"/>
    <img className={s.Galerie_anicactus} src={Cactus} alt="gif cactus"/>
    <img className={s.Galerie_imgsmiley} src={Main_Smiley} alt="ongle avec smiley"/>
    <img className={s.Galerie_anismiley} src={Smiley} alt="gif smiley"/>
    <img className={s.Galerie_imgleopard} src={Main_Leopard} alt="ongle léopard"/>
    <img className={s.Galerie_imgtropic} src={Main_Tropic} alt="ongle tropical"/>
    <img className={s.Galerie_img2maroc} src={Maroc} alt="Jardin de Majorel Maroc"/>
    <img className={s.Galerie_img2leopard} src={Leopard} alt="Leopard"/>
    <img className={s.Galerie_imgcocktail} src={Cocktail} alt="cocktail"/>
  </div>
  );
};
export default HeroGalerie;
