import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import instagramImg from '../../assets/icône_illustration/reseaux_sociaux/instagram.svg';
import facebookImg from '../../assets/icône_illustration/reseaux_sociaux/facebook.svg';
import s from './footer.module.sass';

const Footer = () => {
  const navigate = useNavigate();

  const handlePolitiqueClick = () => {
    navigate('/Politique');
  };

  return (
    <footer className={s.containerFooter}>
      <div className={s.containerFooter_reseauxSociaux}>
        <a href="https://www.facebook.com/nailsbymaudel.stylisteongulaire" target="_blank" rel="noopener noreferrer">
          <img className={s.containerFooter_reseauxSociaux_fb} src={facebookImg} alt="Facebook" />
        </a>    
        <a href="https://www.instagram.com/nailsbymaudel/?hl=fr" target="_blank" rel="noopener noreferrer">
          <img className={s.containerFooter_reseauxSociaux_insta} src={instagramImg} alt="Instagram" />
        </a>        
      </div>
      <div className={s.containerFooter_contactTxt}>
        <p>NAILS BY MAUDE'L</p>
        <p>27 rue Friedland, 56300 PONTIVY</p>
        <div className={s.containerFooter_contactTxt_phone}>
          <FontAwesomeIcon className={s.containerFooter_contactTxt_phone_phoneIcon}icon={faPhone} />
          <p>06 20 46 80 78</p>
        </div>
      </div>
      <div className={s.containerFooter_politique}>
        <div onClick={handlePolitiqueClick} className={s.containerFooter_politique_footerLink}>
          <p>Politique de confidentialité</p>
          <p>Mentions légales</p>
        </div>
      </div>
    </footer>
  );
};


export default Footer;