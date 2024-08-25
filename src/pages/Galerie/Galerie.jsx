// Importation de la bibliothèque React pour créer des composants React.
import React, { useState, useEffect, useRef} from 'react';
// Importation du hook useSearchParams de React Router pour gérer les paramètres de recherche dans l'URL.
import { useSearchParams } from 'react-router-dom';
// Importation des composants spécifiques à la page Galerie
import HeroGalerie from '../../components/Galerie/HeroGalerie/HeroGalerie';
import NavBarGalerie from '../../components/Galerie/NavbarGalerie/navbarGalerie';
import PhotoGalerie from '../../components/Galerie/PhotoGalerie/photoGalerie';
import ReseauxSociaux from '../../components/Galerie/reseauxsociaux/reseauxsociaux';
import Temoignage from '../../components/temoignage/temoignage';
// Importation du fichier de styles pour le composant Galerie
import s from './Galerie.module.sass';

const Galerie = () => {
  // Utilisation du hook useSearchParams pour récupérer les paramètres de recherche de l'URL
  const [searchParams] = useSearchParams();
  // Déclaration d'un état pour stocker la catégorie sélectionnée, initialisée par défaut à "Nail Art"
  const [selectedCategory, setSelectedCategory] = useState('Nail Art');
  // Création d'une référence pour le composant NavBarGalerie
  const navBarRef = useRef(null);

  // Utilisation du hook useEffect pour surveiller les changements dans les paramètres de recherche (searchParams)
  useEffect(() => {
    // Extraction de la catégorie à partir des paramètres de recherche
    const category = searchParams.get('category');
    if (category) {
      // Mise à jour de l'état selectedCategory avec la catégorie récupérée
      setSelectedCategory(category);
      // Si la catégorie fait partie des catégories spécifiques, scroll vers la NavBarGalerie
      if (['Nail Art', 'Coloré', 'French', 'Naturel'].includes(category)) {
        scrollToNavBar();
      } else {
        // Si la catégorie n'est pas dans la liste, scroll vers le haut de la page
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } else {
      // Si aucune catégorie n'est spécifiée, scroll vers le haut de la page
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [searchParams]);

  // Fonction pour scroller vers le composant NavBarGalerie
  const scrollToNavBar = () => {
    if (navBarRef.current) {
      // Récupération de la position du haut du composant NavBarGalerie
      const offsetTop = navBarRef.current.offsetTop;
      // Scroll vers la position du composant avec un effet de smooth scrolling
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    }
  };

  // Rendu du composant Galerie, incluant les différents sous-composants
  return (
    <div className={s.s1Galerie}>
      {/* Inclusion du composant HeroGalerie pour afficher la section héro de la page */}
      <HeroGalerie/>
      {/* Inclusion du composant NavBarGalerie, avec passage de props et de la référence */}
      <NavBarGalerie
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        ref={navBarRef} // Ajout de la référence pour permettre le scrolling
        />
      {/* Inclusion du composant PhotoGalerie, avec passage de la catégorie sélectionnée et de la référence */}
      <PhotoGalerie selectedCategory={selectedCategory}
      navBarRef={navBarRef} // Passage de la référence pour potentiellement gérer le scroll
      />
      {/* Inclusion du composant ReseauxSociaux pour afficher les liens vers les réseaux sociaux */}
      <ReseauxSociaux/>
      {/* Inclusion du composant Temoignage pour afficher les témoignages des clients */}
      <Temoignage/>
    </div>
  );
};
// Exportation du composant Galerie pour pouvoir l'utiliser dans index.js
export default Galerie;