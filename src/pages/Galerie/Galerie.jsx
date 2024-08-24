// Importation de la bibliothèque React pour créer des composants React.
import React, { useState, useEffect, useRef} from 'react';
import { useSearchParams } from 'react-router-dom';
// Importation des images utilisées
import HeroGalerie from '../../components/Galerie/HeroGalerie/HeroGalerie';
import NavBarGalerie from '../../components/Galerie/NavbarGalerie/navbarGalerie';
import PhotoGalerie from '../../components/Galerie/PhotoGalerie/photoGalerie';
import ReseauxSociaux from '../../components/Galerie/reseauxsociaux/reseauxsociaux';
import Temoignage from '../../components/temoignage/temoignage';
// Importation du fichier pour les styles
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
      if (['Nail Art', 'Coloré', 'French', 'Naturel'].includes(category)) {// Scroll vers la NavBarGalerie si la catégorie correspond à RoundButton
        scrollToNavBar();
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll vers le haut si une autre catégorie est utilisée
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' }); // Si aucune catégorie spécifique n'est définie, scroll vers le haut
    }
  }, [searchParams]);

  const scrollToNavBar = () => {
    if (navBarRef.current) {
      const offsetTop = navBarRef.current.offsetTop;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    }
  };

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