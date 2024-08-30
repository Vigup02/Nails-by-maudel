import React from 'react'; 
import s from './NavBarButton.module.sass'; 

const NavBarButton = ({ text, onClick, isActive }) => { 
  // 3 props :
  // - text 
  // - onClick : une fonction  à exécuter quand le bouton est cliqué
  // - isActive : détermine si le bouton est actif (utilisé pour appliquer les styles)

  return (
    <button
      // Définition des propriétés du bouton
      className={`${s.navbarButton} ${isActive ? s.active : ''}`}
      onClick={onClick}
      // gère les événements lors du clic du bouton (prop `onClick`)
    >
      {text}
    </button>
  );
};

export default NavBarButton;