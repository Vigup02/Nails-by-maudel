import React from 'react';
import NavBarButton from '../../Buttons/NavBarButton/NavBarButton';
import s from './navbarGalerie.module.sass';

const NavBarGalerie = ({ selectedCategory, setSelectedCategory }) => {
  const categories = ['Nail Art', 'Coloré', 'French', 'Naturel'];

  return (
    <div className={s.s1Galerie}>
      <h3>Chaque design est une histoire, chaque couleur est une émotion. Parcourez notre galerie pour découvrir les créations uniques</h3>
      <nav className={s.s1Galerie_navBar}>
        {categories.map((category) => (
          <NavBarButton
            key={category}
            text={category}
            onClick={() => setSelectedCategory(category)}
            isActive={selectedCategory === category}
          />
        ))}
      </nav>
    </div>
  );
};

export default NavBarGalerie;
