import React from 'react';
import s from './BurgerIcon.module.sass';

const BurgerIcon = ({ isOpen, toggleMenu }) => {
  //2 props : isOpen (booléen) et toggleMenu (fonction)
  return (
    // Si 'isOpen' est vrai, on ajoute aussi la classe 'open' pour animer et styliser l'icône lorsqu'elle est ouverte
    <div className={`${s.burgerIcon} ${isOpen ? s.open : ''}`} onClick={toggleMenu}>
      {/* Chaque div représente une barre horizontale de l'icône burger */}
      <div className={s.burgerBar}></div>
      <div className={s.burgerBar}></div>
      <div className={s.burgerBar}></div>
    </div>
  );
};

export default BurgerIcon;