import React from 'react';
import SignupForm from '../../../components/Formulaire/formulaire';
import Fleur from '../../../assets/icône_illustration/fleur/fleur_1_removebg.webp';
import Branche from '../../../assets/icône_illustration/fleur/img1_branche-removebg.webp';
import s from './s5Formulaire.module.sass';

const S5Formulaire = () => {

return (
    <div className={s.s5Formulaire}>
      <img className={s.s5Formulaire_img1}src={Fleur} alt="plante fleurie" />    
      <div className={s.s5Formulaire_container}>
        <h2 className={s.s5Formulaire_container_title}>RESTONS EN CONTACT</h2>        
        <SignupForm/> 
      </div>         
      <img className={s.s5Formulaire_img2}src={Branche} alt="branche fleurie" />
    </div>
  );
};
export default S5Formulaire;
