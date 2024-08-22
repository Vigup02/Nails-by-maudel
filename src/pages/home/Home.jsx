import React from 'react';
import Hero from '../../components/Home/Hero/Hero';
import Salon from '../../components/Home/s1_salon/Salon';
import Service from '../../components/Home/s2_service/Service';
import Galerie from '../../components/Home/s3_galerie/Galerie';
import Horaire from '../../components/Home/s4_horaire/horaire';
import Contact from '../../components/Home/s5_contact/contact';
import Temoignage from '../../components/temoignage/temoignage';
import s from './Home.module.sass';

const Home = () => {

return (
  <div className={s.homeContainer}>
     <Hero/>
     <Salon/>
     <Service/>
     <Galerie/>
     <Horaire/>
     <Contact/>
     <Temoignage/>
  </div>
  );
};
export default Home;
