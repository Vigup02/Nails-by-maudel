import React from 'react';
import s from './ContactButton.module.sass';

const ContactButton = ({ text, onClick }) => { 
  // 2 props : 
  // - text : le texte à afficher dans le bouton
  // - onClick : une fonction à exécuter lorsque le bouton est cliqué

  return (
    <button className={s.contactButton} onClick={onClick}>
      {/* - onClick : gère lesévénements pour le clic du bouton */}
      {text} {/* Affiche le texte passé en prop dans le bouton */}
    </button>
  );
};

export default ContactButton;