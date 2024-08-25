import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import s from './temoignage.module.sass';

const Temoignage = () => {
  // État pour garder la trace de la diapositive active
  const [activeSlide, setActiveSlide] = useState(0);

  // Liste des témoignages à afficher dans le carrousel
  const testimonials = [
    { id: 1, text: "Très beau travail et très soigné 🥰 Fait des recherches en fonction du dessin demandé vraiment j'adore", subText: "- KATIA -" },
    { id: 2, text: "Belle découverte : travail soigné, personne très agréable et très bon rapport qualité prix. Que des satisfactions à chaque rendez-vous. Une artiste dans ce domaine: le sérieux de son travail mérite que des compliments.", subText: "- SYLVIE -" },
    { id: 3, text: "Maude est extrêmement douée 🥰 ses nails art sont géniaux. On a l'impression de prendre un café avec une amie...sauf qu'on fait ses ongles 🤣!!Si vous commencez, vous ne pourrez plus vous arrêter 😉 ++++ 🙏👍", subText: "- CINDY -" },
    { id: 4, text: "Cliente habituée depuis quelques mois, je suis devenue addict aux poses de Maude. Elle est très pro et c'est toujours un plaisir d'y venir en rendez-vous :)", subText: "- ELO -" },
    { id: 5, text: "Je suis allée demander si elle pouvait m'aider après un accident avec un taille-haie qui m'a fendu l'ongle du pouce.'Bien sûr!'et 5 min après, j’ai un revêtement de gel qui maintient parfaitement les deux moitiés de l’ongle.  Fantastique!", subText: "- ADRIAN -" },
    { id: 6, text: "La perfection toujours au RDV !! Maude est douce, patiente, attentive, et a un talent fou ! Merci de chouchouter mes ongles 😍 …", subText: "- SIXTINE -" },
    { id: 7, text: "Superbe accueil. Elle fait a main levée c'est impressionnant. Très pro. Je suis plus que contente du resultat", subText: "- SANDRA -" },
    { id: 8, text: "Toujours bien accueilli, travail bien fait et comprends les besoins de ses clientes. Merci encore. Je recommande avec plaisirs!", subText: "- CELINE -" },
    { id: 9, text: "Endroit très sympathique avec une belle décoration, après plusieurs rendez-vous semi permanent, travail au top !", subText: "- OCEANE -" },
    { id: 10, text: "Super expérience pour ma première manucure en salon, je suis ravie et j'ai hâte de recommencer !", subText: "- JULIE -" },
  ];

  return (
    <section className={s.temoignage}>
      <h2 className={s.temoignage__title}>LES TEMOIGNAGES</h2>
      <h3 className={s.temoignage__subtitle}>Découvrez les expériences de mes clientes et laissez-vous inspirer par leurs histoires</h3>
      <div className={s.temoignage__carousel}>
        {/* Composant Swiper qui gère le carrousel */}
        <Swiper
          className={s.temoignage__carousel_swiper}
          modules={[Navigation, Pagination, Autoplay]} // Modules Swiper utilisés pour la navigation, la pagination et le défilement automatique
          spaceBetween={30} // Espace entre les slides
          slidesPerView={3} // Nombre de slides affichés simultanément
          centeredSlides={true} // Centre le slide actif
          loop={true} // Permet la boucle infinie du carrousel
          onSlideChange={(swiper) => setActiveSlide(swiper.realIndex)} // Met à jour l'état de la slide active lors du changement de slide
          autoplay={{
            delay: 3000, // Intervalle de temps avant de passer à la slide suivante
            disableOnInteraction: false, // Maintient l'autoplay même après interaction de l'utilisateur
          }}
          pagination={{
            clickable: true, // Permet à l'utilisateur de cliquer sur la pagination
            renderBullet: (index, className) => (
              `<span class="${className}"></span>` // Structure HTML de chaque point de pagination
            ),
          }}
          // Callbacks pour surveiller l'état de l'autoplay
          onAutoplayStart={() => console.log('Autoplay has started')}
          onAutoplayStop={() => console.log('Autoplay has stopped')}
          breakpoints={{
            768: {
              slidesPerView: 3, // Affiche 3 slides pour les écrans larges (desktop)
            },
            320: {
              slidesPerView: 1, // Affiche 1 slide pour les petits écrans (mobile)
            },
          }}
        >
          {/* Génère un SwiperSlide pour chaque témoignage dans le tableau testimonials */}
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={testimonial.id}>
              <div className={`${s['temoignage__item']} ${index === activeSlide ? s['temoignage__item--active'] : ''}`}>
                {/* Affiche le texte du témoignage */}
                <p className={s.temoignage__text}>{testimonial.text}</p>
                {/* Affiche le sous-texte (nom de l'auteur du témoignage) */}
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
