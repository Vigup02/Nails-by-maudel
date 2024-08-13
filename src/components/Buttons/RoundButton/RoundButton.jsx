import React from 'react';
import { useNavigate } from 'react-router-dom';
import s from './RoundButton.module.sass';


const RoundButton = ({ text, targetCategory }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    // Scrolle vers le haut de la page
    window.scrollTo({ top: 0, behavior: 'smooth' });

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