import React from 'react';
import s from './BurgerIcon.module.sass';

const BurgerIcon = ({ isOpen, toggleMenu }) => {
  return (
    <div className={`${s.burgerIcon} ${isOpen ? s.open : ''}`} onClick={toggleMenu}>
      <div className={s.burgerBar}></div>
      <div className={s.burgerBar}></div>
      <div className={s.burgerBar}></div>
    </div>
  );
};

export default BurgerIcon;