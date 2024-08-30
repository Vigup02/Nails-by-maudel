import React, { useState, useEffect, useRef } from 'react';
import s from './photoGalerie.module.sass';

// Fonction pour importer toutes les images
const importAll = (r) => r.keys().map(r);

// Importation des images de différentes catégories
const nailArtImages = importAll(require.context('../../../assets/Image/Galerie/Nail Art', false, /\.(png|jpe?g|svg|webp)$/));
const coloreImages = importAll(require.context('../../../assets/Image/Galerie/Coloré', false, /\.(png|jpe?g|svg|webp)$/));
const frenchImages = importAll(require.context('../../../assets/Image/Galerie/French', false, /\.(png|jpe?g|svg|webp)$/));
const naturelImages = importAll(require.context('../../../assets/Image/Galerie/Naturel', false, /\.(png|jpe?g|svg|webp)$/));

// Création d'une liste d'objets photo avec leur source et catégorie
const photos = [
  ...nailArtImages.map(src => ({ src, category: 'Nail Art' })),
  ...coloreImages.map(src => ({ src, category: 'Coloré' })),
  ...frenchImages.map(src => ({ src, category: 'French' })),
  ...naturelImages.map(src => ({ src, category: 'Naturel' })),
];

const PhotoGalerie = ({ selectedCategory, navBarRef }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const photosPerPage = 24; // Nombre de photos affichées par page
  const filteredPhotos = photos.filter(photo => photo.category === selectedCategory);
  const totalPages = Math.ceil(filteredPhotos.length / photosPerPage); // Nombre total de pages

  const galleryRef = useRef(null); // Référence au conteneur de la galerie

  useEffect(() => {
    // Réinitialiser la page à 1 lorsque la catégorie change
    setCurrentPage(1);
  }, [selectedCategory]);

  // Fonction pour faire défiler vers le composant désiré (bouton de retour en haut)
  const handleBackTo = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Fonction pour changer de page et faire défiler vers le composant NavBarGalerie
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    // Utiliser la référence pour défiler vers le composant NavBarGalerie
    handleBackTo(navBarRef);
  };

  // Fonction pour faire défiler vers le haut du conteneur (bouton de retour en haut)
  const handleBackToTop = () => {
    handleBackTo(navBarRef);
  };

  // Sélection des photos à afficher en fonction de la page actuelle
  const displayedPhotos = filteredPhotos.slice(
    (currentPage - 1) * photosPerPage,
    currentPage * photosPerPage
  );

  return (
    <div className={s.galerie} ref={galleryRef}>
      <div className={s.galerie__photos}>
        {displayedPhotos.map((photo, index) => (
          <img
            key={index}
            src={photo.src}
            alt={photo.category}
            className={s.galerie__photo}
          />
        ))}
      </div>
      <button className={s.galerie__back} onClick={handleBackToTop}>
        ↑
      </button>
      <div className={s.galerie__pagination}>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            className={currentPage === index + 1 ? s['galerie__pagination-button--active'] : s['galerie__pagination-button']}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default PhotoGalerie;