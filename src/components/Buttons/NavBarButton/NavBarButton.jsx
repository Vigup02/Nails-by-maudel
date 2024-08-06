// Importation des modules nécessaires
import React from 'react'; // Importation de la bibliothèque React pour créer des composants React.
import s from './NavBarButton.module.sass'; // Importation du fichier de styles SASS spécifique au composant. `s` est l'alias pour accéder aux classes définies dans le fichier SASS.

const NavBarButton = ({ text, onClick, isActive }) => { 
  // Définition du composant fonctionnel NavBarButton qui prend trois props :
  // - text : le texte à afficher dans le bouton
  // - onClick : une fonction de rappel à exécuter lorsque le bouton est cliqué
  // - isActive : un booléen pour déterminer si le bouton est actif (utilisé pour appliquer des styles conditionnels)

  return (
    <button
      // Définition des propriétés du bouton
      className={`${s.navbarButton} ${isActive ? s.active : ''}`}
      // `className` applique les classes CSS au bouton.
      // `${s.navbarButton}` : applique la classe de base pour le bouton définie dans le fichier SASS.
      // `${isActive ? s.active : ''}` : ajoute la classe `s.active` si `isActive` est vrai. Sinon, aucune classe supplémentaire n'est ajoutée.
      onClick={onClick}
      // `onClick` définit le gestionnaire d'événements pour le clic du bouton, utilisant la fonction passée en prop `onClick`.
    >
      {text}
      {/* Affiche le texte passé en prop dans le bouton */}
    </button>
  );
};

export default NavBarButton; 
// Exportation du composant pour qu'il puisse être importé et utilisé dans d'autres parties de l'application