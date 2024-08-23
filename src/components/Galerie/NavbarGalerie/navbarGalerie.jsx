import React, { forwardRef } from 'react'; // Import correct de forwardRef
import NavBarButton from '../../Buttons/NavBarButton/NavBarButton';
import s from './navbarGalerie.module.sass';

// Utilisation de forwardRef pour permettre la gestion de la référence par le parent
const NavBarGalerie = forwardRef(({ selectedCategory, setSelectedCategory }, ref) => {
  const categories = ['Nail Art', 'Coloré', 'French', 'Naturel'];

  return (
    <div className={s.s1Galerie} ref={ref}> {/* Associe la référence au conteneur */}
      <h3 className={s.s1Galerie_subtitle}>Chaque design est une histoire, chaque couleur est une émotion. Parcourez notre galerie pour découvrir les créations uniques</h3>
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
});

export default NavBarGalerie;
