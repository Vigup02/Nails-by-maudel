import React, { useState } from 'react';
import NavBarGalerie from '../../components/NavbarGalerie/navbarGalerie';
import PhotoGalerie from '../../components/PhotoGalerie/photoGalerie';
import s from './Galerie.module.sass';

const Galerie = () => {
  const [selectedCategory, setSelectedCategory] = useState('Nail Art');

  return (
    <div className={s.s1Galerie}>
      <NavBarGalerie
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <PhotoGalerie selectedCategory={selectedCategory} />
    </div>
  );
};

export default Galerie;