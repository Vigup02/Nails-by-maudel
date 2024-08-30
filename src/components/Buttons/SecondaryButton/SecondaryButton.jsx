import React from 'react'; 
import s from './secondaryButton.module.sass'; 

const SecondaryButton = ({ text, onClick }) => { 
  // 2 props : text et onClick

  return (
    <button
      className={s.secondaryButton} 
      onClick={onClick} // `onClick` gère les événements pour le clic du bouton (fonction prop `onClick`)
    >
      {text} {/* prop : texte dans le bouton */}
    </button>
  );
};

export default SecondaryButton; 