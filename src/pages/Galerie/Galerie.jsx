import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import HeroGalerie from '../../components/Galerie/HeroGalerie/HeroGalerie';
import NavBarGalerie from '../../components/Galerie/NavbarGalerie/navbarGalerie';
import PhotoGalerie from '../../components/Galerie/PhotoGalerie/photoGalerie';
import s from './Galerie.module.sass';

const Galerie = () => {
  const [searchParams] = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState('Nail Art');

  useEffect(() => {
    const category = searchParams.get('category');
    if (category) {
      setSelectedCategory(category);
    }

     // Scrolle vers le haut lorsque la page se monte
     window.scrollTo({ top: 0, behavior: 'smooth' });

  }, [searchParams]);

  return (
    <div className={s.s1Galerie}>
      <HeroGalerie/>
      <NavBarGalerie
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}/>
      <PhotoGalerie selectedCategory={selectedCategory}/>
    </div>
  );
};

export default Galerie;