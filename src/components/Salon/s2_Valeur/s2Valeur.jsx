import React from 'react';
import Coeur from '../../../assets/icône_illustration/heart.svg';
import Coeurblanc from '../../../assets/icône_illustration/heart blanc.svg';
import Palette from '../../../assets/icône_illustration/palette.svg';
import Paletteblanc from '../../../assets/icône_illustration/palette blanc.svg';
import Etoile from '../../../assets/icône_illustration/Sparkles.svg';
import Etoileblanc from '../../../assets/icône_illustration/Sparkles blanc.svg';
import s from './s2Valeur.module.sass';

const S2Valeur = () => {

  return (
    <section className={s.valeur}>
      <h2 className={s.valeur_title}>LES VALEURS</h2>
      <div className={s.valeur_carousel}>
        <div className={s.valeur_carousel_item}>
          <div className={s['valeur-carousel-item-inner']}>
            <div className={s['valeur-carousel-item-inner_front']}>
              <img className={s['valeur-carousel-item-inner_front_icone']} src={Coeur} alt="coeur"/>
              <h3 className={s['valeur-carousel-item-inner_front_text']}>ECOUTE</h3>
            </div>
            <div className={s['valeur-carousel-item-inner_back']}>
              <img className={s['valeur-carousel-item-inner_back_icone']} src={Coeurblanc} alt="coeur en transparence"/>
              <h3 className={s['valeur-carousel-item-inner_back_text']}>J’accorde une grande importance à comprendre les attentes et les désirs de chaque cliente, pour créer des designs qui leur ressemblent et répondent à leurs besoins.</h3>
            </div>
          </div>
        </div>
        <div className={s.valeur_carousel_item}>
          <div className={s['valeur-carousel-item-inner']}>
            <div className={s['valeur-carousel-item-inner_front']}>
              <img className={s['valeur-carousel-item-inner_front_icone']} src={Palette} alt="palette de peinture"/>
              <h3 className={s['valeur-carousel-item-inner_front_text']}>CREATIVITE</h3>
            </div>
            <div className={s['valeur-carousel-item-inner_back']}>
              <img className={s['valeur-carousel-item-inner_back_icone']} src={Paletteblanc} alt="palette de peinture en transparence"/>
              <h3 className={s['valeur-carousel-item-inner_back_text']}>Chaque réalisation est unique, personnalisée, reflet de mes inspirations et offrant des designs innovants et originaux.</h3>
            </div>
          </div>
        </div>
        <div className={s.valeur_carousel_item}>
          <div className={s['valeur-carousel-item-inner']}>
            <div className={s['valeur-carousel-item-inner_front']}>
              <img className={s['valeur-carousel-item-inner_front_icone']} src={Etoile} alt="étoiles"/>
              <h3 className={s['valeur-carousel-item-inner_front_text']}>EXCELLENCE</h3>
            </div>
            <div className={s['valeur-carousel-item-inner_back']}>
              <img className={s['valeur-carousel-item-inner_back_icone']} src={Etoileblanc} alt="étoiles en transparence"/>
              <h3 className={s['valeur-carousel-item-inner_back_text']}>Forte d'un savoir-faire de plus de 15 ans, j’utilise les meilleures techniques et produits pour garantir des résultats durables et de haute qualité.</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default S2Valeur;
