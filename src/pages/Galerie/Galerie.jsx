import React, { useState, useEffect, useRef} from 'react';
import { useSearchParams } from 'react-router-dom';
import HeroGalerie from '../../components/Galerie/HeroGalerie/HeroGalerie';
import NavBarGalerie from '../../components/Galerie/NavbarGalerie/navbarGalerie';
import PhotoGalerie from '../../components/Galerie/PhotoGalerie/photoGalerie';
import ReseauxSociaux from '../../components/Galerie/reseauxsociaux/reseauxsociaux';
import Temoignage from '../../components/temoignage/temoignage';
import s from './Galerie.module.sass';

const Galerie = () => {
  const [searchParams] = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState('Nail Art');

  // Création d'une référence pour le composant NavBarGalerie
  const navBarRef = useRef(null);

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
        setSelectedCategory={setSelectedCategory}
        ref={navBarRef} // Ajout de la référence
        />
      <PhotoGalerie selectedCategory={selectedCategory}
      navBarRef={navBarRef} // Ajout de la référence
      />
      <ReseauxSociaux/>
      <Temoignage/>
    </div>
  );
};

export default Galerie;