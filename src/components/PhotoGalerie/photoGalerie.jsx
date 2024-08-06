import React, { useState } from 'react';
import s from './photoGalerie.module.sass';

// Fonction pour charger toutes les images d'un dossier
const importAll = (r) => r.keys().map(r);

// Charger les images de chaque catégorie
const nailArtImages = importAll(require.context('../../assets/Image/Galerie/Nail Art', false, /\.(png|jpe?g|svg|webp)$/));
const coloreImages = importAll(require.context('../../assets/Image/Galerie/Coloré', false, /\.(png|jpe?g|svg|webp)$/));
const frenchImages = importAll(require.context('../../assets/Image/Galerie/French', false, /\.(png|jpe?g|svg|webp)$/));
const naturelImages = importAll(require.context('../../assets/Image/Galerie/Naturel', false, /\.(png|jpe?g|svg|webp)$/));

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

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const displayedPhotos = filteredPhotos.slice(
    (currentPage - 1) * photosPerPage,
    currentPage * photosPerPage
  );

  const arrangePhotos = (photos) => {
    return photos.reduce((acc, photo, index) => {
      const groupIndex = Math.floor(index / 6);
      if (!acc[groupIndex]) acc[groupIndex] = [];
      if (index % 2 === 0) {
        acc[groupIndex].push([photo]);
      } else {
        acc[groupIndex][acc[groupIndex].length - 1].push(photo);
      }
      return acc;
    }, []);
  };

  const groupedPhotos = arrangePhotos(displayedPhotos);

  return (
    <div className={s.galeriePhoto}>
      <div className={s.photos}>
        {groupedPhotos.map((group, groupIndex) => (
          group.map((photoPair, index) => (
            <div key={index} className={`${s.photoPair} ${(index === 1 && groupIndex % 2 === 0) ? s.reversePair : ''}`}>
              {photoPair.map((photo, subIndex) => (
                <img
                  key={subIndex}
                  src={photo.src}
                  alt={photo.category}
                  className={subIndex % 2 === 0 ? s.largePhoto : s.smallPhoto}
                />
              ))}
            </div>
          ))
        ))}
      </div>
      <div className={s.pagination}>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            className={currentPage === index + 1 ? s.active : ''}
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