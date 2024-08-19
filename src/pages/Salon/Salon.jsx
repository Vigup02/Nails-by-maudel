import React from 'react';
import HeroSalon from '../../components/Salon/Hero/HeroSalon';
import S1Maude from '../../components/Salon/s1_Maude/s1Maude';
import S2Valeur from '../../components/Salon/s2_Valeur/s2Valeur';
import SignupForm from '../../components/Formulaire/formulaire';
import s from './salon.module.sass';

const Salon = () => {
  
  return (
    <div className={s.salonContainer}>
      <HeroSalon/>
      <S1Maude/>
      <S2Valeur/>
      <div id="formulaire-section" className={s.salon_formulaire}>
        <SignupForm/>
      </div>
    </div>
  );
};

export default Salon;