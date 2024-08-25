import React from 'react';
import { useNavigate } from 'react-router-dom';
import s from './RoundButton.module.sass';

// Définition du composant RoundButton qui accepte deux props : 'text' et 'targetCategory'.
const RoundButton = ({ text, targetCategory }) => {
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