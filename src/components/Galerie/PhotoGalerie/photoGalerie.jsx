import React, { useState, useEffect, useRef } from 'react';
import s from './photoGalerie.module.sass';

const importAll = (r) => r.keys().map(r);

const nailArtImages = importAll(require.context('../../../assets/Image/Galerie/Nail Art', false, /\.(png|jpe?g|svg|webp)$/));
const coloreImages = importAll(require.context('../../../assets/Image/Galerie/Coloré', false, /\.(png|jpe?g|svg|webp)$/));
const frenchImages = importAll(require.context('../../../assets/Image/Galerie/French', false, /\.(png|jpe?g|svg|webp)$/));
const naturelImages = importAll(require.context('../../../assets/Image/Galerie/Naturel', false, /\.(png|jpe?g|svg|webp)$/));

const photos = [
  ...nailArtImages.map(src => ({ src, category: 'Nail Art' })),
  ...coloreImages.map(src => ({ src, category: 'Coloré' })),
  ...frenchImages.map(src => ({ src, category: 'French' })),
  ...naturelImages.map(src => ({ src, category: 'Naturel' })),
];

const PhotoGalerie = ({ selectedCategory }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const photosPerPage = 24;
  const filteredPhotos = photos.filter(photo => photo.category === selectedCategory);
  const totalPages = Math.ceil(filteredPhotos.length / photosPerPage);

  const galleryRef = useRef(null); // Création de la référence

  useEffect(() => {
    // Réinitialiser la page à 1 lorsque la catégorie change
    setCurrentPage(1);
  }, [selectedCategory]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    if (galleryRef.current) {
      galleryRef.current.scrollIntoView({ behavior: 'smooth' }); // Défilement vers le haut du composant
    }
  };

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