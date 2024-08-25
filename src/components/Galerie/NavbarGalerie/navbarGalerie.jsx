// Importation de React et de forwardRef pour gérer la référence vers le composant enfant
import React, { forwardRef } from 'react'; 
// Importation du composant NavBarButton pour les boutons de la barre de navigation
import NavBarButton from '../../Buttons/NavBarButton/NavBarButton'; 
// Importation des styles spécifiques au composant
import s from './navbarGalerie.module.sass'; 

// Utilisation de forwardRef pour permettre la gestion de la référence par le parent
const NavBarGalerie = forwardRef(({ selectedCategory, setSelectedCategory }, ref) => {
  // Définition des catégories disponibles dans la galerie
  const categories = ['Nail Art', 'Coloré', 'French', 'Naturel'];

  return (
    // Conteneur principal de la barre de navigation, associé à la référence `ref`
    <div id="navBar" className={s.s1Galerie} ref={ref}> 
      <h3 className={s.s1Galerie_subtitle}>
        Chaque design est une histoire, chaque couleur est une émotion. Parcourez notre galerie pour découvrir les créations uniques
      </h3>
      {/* Barre de navigation contenant les boutons pour chaque catégorie */}
      <nav className={s.s1Galerie_navBar}>
        {/* Création dynamique des boutons de navigation pour chaque catégorie */}
        {categories.map((category) => (
          <NavBarButton
            key={category} // Clé unique pour chaque bouton basé sur la catégorie
            text={category} // Texte du bouton, correspondant au nom de la catégorie
            // Action déclenchée lors du clic sur un bouton, mettant à jour la catégorie sélectionnée
            onClick={() => setSelectedCategory(category)} 
            // Détermine si le bouton doit être mis en surbrillance pour indiquer qu'il est actif
            isActive={selectedCategory === category} 
          />
        ))}
      </nav>
    </div>
  );
});

// Exportation du composant NavBarGalerie pour utilisation dans la page Galerie
export default NavBarGalerie;

