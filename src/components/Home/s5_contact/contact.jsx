import React from 'react';
import { useNavigate } from 'react-router-dom';
import adresse from '../../../assets/icône_illustration/Maps-Pin.svg';
import tel from '../../../assets/icône_illustration/Phone.svg';
import fleurPleine from '../../../assets/icône_illustration/fleur/fleur_pleine_beige.svg';
import fleurVide from '../../../assets/icône_illustration/fleur/fleur_vide_beige.svg'; 
import SecondaryButton from '../../Buttons/SecondaryButton/SecondaryButton';
import s from './contact.module.sass';

const Contact = () => {
  const navigate = useNavigate();

  // Fonction pour naviguer vers la page Salon et l'ancre
  const handleFormulaireClick = () => {
    navigate('/salon', { state: { scrollToFormulaire: true } });
  };


return (
    <div className={s.s5Contact}>
      <h2 className={s.s5Contact_title}>CONTACT</h2>
      <div className={s.s5Contact_container}>
        <div className={s.s5Contact_container_subtitle}>
          <h3>Envie de sublimer vos ongles ?</h3>
          <h3>Voici comment me joindre ou vous rendre au salon</h3>
        </div>
        <div className={s.s5Contact_container_txt}>
          <div className={s.s5Contact_container_txt_adress}>
            <img className={s.s5Contact_container_txt_adress_img1} src={adresse} alt="localisation" />
            <h2 className={s.s5Contact_container_txt_adress_text}>27 rue Friedland, 56300 PONTIVY</h2>
          </div>
          <div className={s.s5Contact_container_txt_tel}>
            <img className={s.s5Contact_container_txt_tel_img2} src={tel} alt="téléphone" />
            <h2 className={s.s5Contact_container_txt_tel_text}>06 20 46 80 78</h2>
          </div>
        </div>
        <SecondaryButton text="Pour m'écrire c'est par ici" onClick={handleFormulaireClick}/>
        <img className={s.s5Contact_container_fleurpleine}src={fleurPleine} alt="fleur beige rempli" />
        <img className={s.s5Contact_container_fleurvide}src={fleurVide} alt="fleur beige vide" />
        <img className={s.s5Contact_container_petitefleurpleine}src={fleurPleine} alt="Petite fleur beige rempli" />
        <img className={s.s5Contact_container_petitefleurvide1} src={fleurVide} alt="Petite fleur beige vide" />
        <img className={s.s5Contact_container_petitefleurvide2} src={fleurVide} alt="Petite fleur beige vide" />
      </div>
    </div>
  );
};
export default Contact;
