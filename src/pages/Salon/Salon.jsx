import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import HeroSalon from '../../components/Salon/Hero/HeroSalon';
import S1Maude from '../../components/Salon/s1_Maude/s1Maude';
import S2Valeur from '../../components/Salon/s2_Valeur/s2Valeur';
import S3Salon from '../../components/Salon/s3_Lesalon/LeSalon';
import S4Coordonnees from '../../components/Salon/s4_coordonnees/coordonnee';
import S5Formulaire from '../../components/Salon/s5_formulaire/s5Formulaire';
import s from './salon.module.sass';

const Salon = () => {
  // Utilisation du hook `useLocation` pour obtenir l'objet de localisation actuel.
  // Cet objet contient des informations sur la route actuelle, y compris l'état passé lors de la navigation.
  const location = useLocation();

  // Utilisation du hook `useEffect` pour exécuter du code après le rendu du composant.
  // Le tableau de dépendances `[location]` indique que l'effet doit être exécuté à chaque fois que l'objet `location` change.
  useEffect(() => {
    // Vérifie si l'objet `location.state` existe et s'il contient la propriété `scrollToContact`.
    // Cela indique que l'utilisateur vient d'une navigation qui demande de scroller vers la section contact.
    if (location.state) {
      if (location.state.scrollToContact) {
        const contactSection = document.getElementById('contact-section');
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: 'smooth' });
        }
      } else if (location.state.scrollToFormulaire) {
        const formulaireSection = document.getElementById('formulaire-section');
        if (formulaireSection) {
          formulaireSection.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  }, [location]); // L'effet est déclenché chaque fois que `location` change.
  
  return (
    <div className={s.salonContainer}>
      <HeroSalon/>
      <S1Maude/>
      <S2Valeur/>
      <S3Salon/>
      <div id="contact-section">
        <S4Coordonnees/>
      </div>
      <div id="formulaire-section">
        <S5Formulaire/>
      </div>
    </div>
  );
};

export default Salon;