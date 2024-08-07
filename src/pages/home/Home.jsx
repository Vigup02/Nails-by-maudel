import React from 'react';
import Hero from '../../components/Home/Hero/Hero';
import Salon from '../../components/Home/s1_salon/Salon';
import Service from '../../components/Home/s2_service/Service';
import Galerie from '../../components/Home/s3_galerie/Galerie';
import HoraireContact from '../../components/Home/s4_5_horaire_contact/HoraireContact';
import s from './home.module.css';

const Home = () => {

return (
  <div className={s.homeContainer}>
     <Hero/>
     <Salon/>
     <Service/>
     <Galerie/>
     <HoraireContact/>
  </div>
  );
};
export default Home;
