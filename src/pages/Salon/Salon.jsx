import React from 'react';
import SignupForm from '../../components/Formulaire/formulaire';
import s from './salon.module.sass';

const Salon = () => {
  
  return (
    <div className={s.salon}>
      <div className={s.salon_hero}>

      </div>
      <div className={s.salon_maude}>
        
      </div>
      <div className={s.salon_valeur}>
        
      </div>
      <div className={s.salon_salon}>
        
      </div>
      <div className={s.salon_contact}>
        
      </div>
      <div className={s.salon_formulaire}>
        <SignupForm/>
      </div>
    </div>
  );
};

export default Salon;