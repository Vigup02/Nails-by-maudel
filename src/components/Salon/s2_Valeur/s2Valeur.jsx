import React from 'react';
import Coeur from '../../../assets/icône_illustration/heart.svg';
import Palette from '../../../assets/icône_illustration/palette.svg';
import Etoile from '../../../assets/icône_illustration/Sparkles.svg';
import s from './s2Valeur.module.sass';

const S2Valeur = () => {

  return (
    <section className={s.valeur}>
      <h2 className={s.valeur_title}>LES VALEURS</h2>
      <div className={s.valeur_carousel}>
        <div className={s.valeur_carousel_ecoute}>
          <img className={s.valeur_carousel_ecoute_icone} src={Coeur} alt="coeur"/>
          <p className={s.valeur_carousel_ecoute_text}>ECOUTE</p>
        </div>
        <div className={s.valeur_carousel_creativite}>
          <img className={s.valeur_carousel_creativite_icone} src={Palette} alt="palette de peinture"/>
          <p className={s.valeur_carousel_creativite_text}>CREATIVITE</p>
        </div>
        <div className={s.valeur_carousel_excellence}>
          <img className={s.valeur_carousel_excellence_icone} src={Etoile} alt="Etoiles"/>
          <p className={s.valeur_carousel_excellence_text}>EXCELLENCE</p>
        </div>
      </div>
    </section>
  );
};

export default S2Valeur;