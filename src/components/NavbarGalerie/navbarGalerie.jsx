import React from 'react';
import NavBarButton from '../Buttons/NavBarButton/NavBarButton';
import s from './navbarGalerie.module.sass';

const NavBarGalerie = ({ selectedCategory, setSelectedCategory }) => {
  const categories = ['Nail Art', 'Coloré', 'French', 'Naturel'];

  return (
    <nav className={s.navBarGalerie}>
      {categories.map((category) => (
        <NavBarButton
          key={category}
          text={category}
          onClick={() => setSelectedCategory(category)}
          isActive={selectedCategory === category}
        />
      ))}
    </nav>
  );
};

export default NavBarGalerie;