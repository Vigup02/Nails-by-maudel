// Importation des modules nécessaires
import React from 'react'; // Importation de la bibliothèque React pour créer des composants React.
import s from './ContactButton.module.sass'; // Importation du fichier de styles SASS associé au composant. 

// Définition du composant fonctionnel ContactButton
const ContactButton = ({ text, onClick }) => { 
  // Le composant ContactButton accepte deux props : 
  // - text : le texte à afficher dans le bouton
  // - onClick : une fonction de rappel à exécuter lorsque le bouton est cliqué

  return (
    <button className={s.contactButton} onClick={onClick}>
      {/* Création d'un élément <button> avec les propriétés suivantes */}
      {/* - className : applique la classe CSS définie dans le fichier SASS importé */}
      {/* - onClick : définit le gestionnaire d'événements pour le clic du bouton */}
      {text} {/* Affiche le texte passé en prop dans le bouton */}
    </button>
  );
};

export default ContactButton; // Exportation du composant pour qu'il puisse être utilisé dans d'autres parties de l'application