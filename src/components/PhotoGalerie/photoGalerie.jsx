import React, { useState } from 'react';
import s from './photoGalerie.module.sass';

const photos = [
  // Remplacez ceci par vos photos avec les propriétés adéquates
  { src: 'path/to/photo1.jpg', category: 'Nail Art' },
  { src: 'path/to/photo2.jpg', category: 'Coloré' },
  { src: 'path/to/photo3.jpg', category: 'French' },
  { src: 'path/to/photo4.jpg', category: 'Naturel' },
  // Ajoutez autant de photos que nécessaire
];

const PhotoGallery = ({ selectedCategory }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const photosPerPage = 12;
  const filteredPhotos = photos.filter(photo => photo.category === selectedCategory);
  const totalPages = Math.ceil(filteredPhotos.length / photosPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const displayedPhotos = filteredPhotos.slice(
    (currentPage - 1) * photosPerPage,
    currentPage * photosPerPage
  );

  return (
    <div className={s.photoGallery}>
      <div className={s.photos}>
        {displayedPhotos.map((photo, index) => (
          <img
            key={index}
            src={photo.src}
            alt={photo.category}
            className={index % 2 === 0 ? s.largePhoto : s.smallPhoto}
          />
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

export default PhotoGallery;