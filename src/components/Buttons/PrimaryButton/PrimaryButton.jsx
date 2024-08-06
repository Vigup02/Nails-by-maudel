// Importation des modules nécessaires
import React from 'react'; // Importation de la bibliothèque React pour créer des composants React.
import s from './PrimaryButton.module.sass'; // Importation du fichier de styles SASS spécifique au composant. `s` est l'alias pour accéder aux classes définies dans le fichier SASS.

const PrimaryButton = ({ text, onClick }) => { 
  // Définition du composant fonctionnel PrimaryButton qui prend deux props :
  // - text : le texte à afficher dans le bouton
  // - onClick : une fonction de rappel à exécuter lorsque le bouton est cliqué

  return (
    <button
      // Définition des propriétés du bouton
      className={s.primaryButton} // `className` applique la classe CSS au bouton, utilisant la classe définie dans le fichier SASS. `s.primaryButton` est la classe CSS pour styliser le bouton.
      onClick={onClick} // `onClick` définit le gestionnaire d'événements pour le clic du bouton, utilisant la fonction passée en prop `onClick`.
    >
      {text} {/* Affiche le texte passé en prop dans le bouton */}
    </button>
  );
};

export default PrimaryButton; 
// Exportation du composant pour qu'il puisse être importé et utilisé dans d'autres parties de l'application