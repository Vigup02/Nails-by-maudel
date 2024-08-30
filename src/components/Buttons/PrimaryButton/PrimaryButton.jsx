import React from 'react';
import s from './PrimaryButton.module.sass'; 

const PrimaryButton = ({ text, onClick }) => { 
  // 2 props :
  // - text : le texte à afficher dans le bouton
  // - onClick : une fonction à exécuter lorsque le bouton est cliqué

  return (
    <button
      className={s.primaryButton}
      onClick={onClick} // `onClick` gère les événements pour le clic du bouton (fonction prop `onClick')
    >
      {text} {/*prop : texte dans le bouton */}
    </button>
  );
};

export default PrimaryButton; 
