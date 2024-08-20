import React from 'react';
import HeroSalon from '../../components/Salon/Hero/HeroSalon';
import S1Maude from '../../components/Salon/s1_Maude/s1Maude';
import S2Valeur from '../../components/Salon/s2_Valeur/s2Valeur';
import S3Salon from '../../components/Salon/s3_Lesalon/LeSalon';
import S4Coordonnees from '../../components/Salon/s4_coordonnees/coordonnee';
import S5Formulaire from '../../components/Salon/s5_formulaire/s5Formulaire';
import s from './salon.module.sass';

const Salon = () => {
  
  return (
    <div className={s.salonContainer}>
      <HeroSalon/>
      <S1Maude/>
      <S2Valeur/>
      <S3Salon/>
      <S4Coordonnees/>
      <S5Formulaire/>
    </div>
  );
};

export default Salon;