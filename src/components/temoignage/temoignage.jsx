import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import s from './temoignage.module.sass'; // Assurez-vous que ce fichier est bien nommé et importé correctement

const Temoignage = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const testimonials = [
    { id: 1, text: "Un service exceptionnel et des designs magnifiques. Chaque visite est une nouvelle aventure !", subText: "- MARIE -" },
    { id: 2, text: "L'ambiance du salon est incroyable, on s'y sent tout de suite chez soi.", subText: "- SOPHIE -" },
    { id: 3, text: "Des créations uniques et raffinées, je ne pourrais pas être plus satisfaite.", subText: "- CLAIRE -" },
    { id: 4, text: "Maude est tout simplement incroyable ! Ses créations sont toujours uniques et de très haute qualité.", subText: "- AURELIE -" },
    { id: 5, text: "Le souci du détail de Maude est exceptionnel. Je suis toujours ravie de mes ongles après chaque visite.", subText: "- AUDE -" },
    { id: 6, text: "Un service irréprochable à chaque rendez-vous", subText: "- FATIMA -" },
    { id: 7, text: "Mes ongles n'ont jamais été aussi beaux ! Merci Maude pour ta gentillesse et ton savoir faire!", subText: "- KARINE -" },
    { id: 8, text: "Toujours à l'écoute de mes envies, Maude transforme mes idées en réalité avec une maîtrise parfaite.", subText: "- EMILIE -" },
    { id: 9, text: "Je suis impressionnée par la créativité et le professionnalisme de Maude. Chaque rendez-vous est un vrai plaisir.", subText: "- AMINA -" },
    { id: 10, text: "Les designs sont modernes, élégants, et toujours à la pointe des tendances. Maude est une artiste!", subText: "- LUCIE -" },
  ];

  return (
    <section className={s.temoignage}>
      <h2 className={s.temoignage__title}>LES TEMOIGNAGES</h2>
      <h3 className={s.temoignage__subtitle}>Découvrez les expériences de mes clientes et laissez-vous inspirer par leurs histoires</h3>
      <div className={s.temoignage__carousel}>
        <Swiper
          className={s.temoignage__carousel_swiper}
          modules={[Navigation, Pagination]}
          spaceBetween={30} // Ajustez cet espace pour s'assurer que les slides ne débordent pas
          slidesPerView={3} // Affiche 3 slides à la fois
          centeredSlides={true} // Centre le slide actif
          loop={true} // Active la boucle pour le carrousel
          onSlideChange={(swiper) => setActiveSlide(swiper.realIndex)}
          pagination={{
            clickable: true,
            renderBullet: (index, className) => (
              `<span class="${className}"></span>`
            ),
          }}    
          breakpoints={{
            768: {
              slidesPerView: 3, // Maintient l'affichage de 3 slides sur desktop
            },
            320: {
              slidesPerView: 1, // Pour mobile, affiche 1 slide à la fois
            },
          }}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={testimonial.id}>
              <div className={`${s['temoignage__item']} ${index === activeSlide ? s['temoignage__item--active'] : ''}`}>
                <p className={s.temoignage__text}>{testimonial.text}</p>
                <p className={s.temoignage__subtext}>{testimonial.subText}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Temoignage;