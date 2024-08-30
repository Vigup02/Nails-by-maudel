import React from 'react';
import { useNavigate } from 'react-router-dom';
import s from './RoundButton.module.sass';

const RoundButton = ({ text, targetCategory }) => {
  // 2 props : 'text' et 'targetCategory'.
  // Initialisation du hook useNavigate pour permettre la navigation dans l'application.
  const navigate = useNavigate();
  // Définition de la fonction handleClick qui est exécutée lorsque le bouton est cliqué.
  const handleClick = () => {
    // Navigue vers la page Galerie avec la catégorie spécifiée
    navigate(`/galerie?category=${targetCategory}`);
  };

  return (
    <button className={s.roundButton} onClick={handleClick}>
      <h3 className={s.roundButton_text}>{text}</h3>
    </button>
  );
};

export default RoundButton;