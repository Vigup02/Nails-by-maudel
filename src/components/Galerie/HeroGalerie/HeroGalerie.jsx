// Importation de la bibliothèque React pour créer des composants React.
import React from 'react';
// Importation des images utilisées
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
// Importation du style
import s from './HeroGalerie.module.sass';

const HeroGalerie = () => {
  // Fonction pour animer le texte, mot par mot
  const animateText = (text) => {
    // Divise le texte en mots en utilisant l'espace (' ') comme séparateur
    return text.split(' ').map((word, index) => (
      // Retourne un élément <span> pour chaque mot avec une animation décalée
      <span 
        key={index} // Clé unique pour chaque <span> basée sur l'index du mot
        style={{ 
          animationDelay: `${index * 0.3}s`, // Délai d'animation sur le mot
          display: 'inline-block', // Force le mot à se comporter pour qu'il ne se coupe pas
          whiteSpace: 'nowrap' // Empêche le mot de se couper en fin de ligne, le mot reste entier
        }}
      >
        {word} {/* Affiche le mot */}
        {/* Ajoute un espace insécable après chaque mot sauf le dernier */}
        {index < text.split(' ').length - 1 && '\u00A0'}
      </span>
    ));
  };

return (
  <div className={s.Galerie}>
    <div className={s.Galerie_container}>
      <h1 className={s.Galerie_container_title}>{animateText("Inspirations et Créations")}</h1>
      <h3 className={s.Galerie_container_subtitle}>
      <span>Découvrez comment les voyages et les inspirations de Maude se transforment en œuvres d'art uniques pour vos ongles.</span>
      </h3>
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
