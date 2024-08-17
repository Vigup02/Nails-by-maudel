import React from 'react';
import HeroSalon from '../../components/Salon/Hero/HeroSalon';
import SignupForm from '../../components/Formulaire/formulaire';
import s from './salon.module.sass';

const Salon = () => {
  
  return (
    <div className={s.salonContainer}>
      <HeroSalon/>
      <div id="formulaire-section" className={s.salon_formulaire}>
        <SignupForm/>
      </div>
    </div>
  );
};

export default Salon;