import React from 'react';
import Hero from '../../components/Home/Hero/Hero';
import S1Salon from '../../components/Home/s1_salon/S1Salon';
import S2Service from '../../components/Home/s2_service/S2Service';
import S3Galerie from '../../components/Home/s3_galerie/s3_Galerie';
import S4Horaire from '../../components/Home/s4_horaire/S4horaire';
import S5Contact from '../../components/Home/s5_contact/s5contact';
import Temoignage from '../../components/temoignage/temoignage';
import s from './Home.module.sass';

const Home = () => {

return (
  <div className={s.homeContainer}>
     <Hero/>
     <S1Salon/>
     <S2Service/>
     <S3Galerie/>
     <S4Horaire/>
     <S5Contact/>
     <Temoignage/>
  </div>
  );
};
export default Home;
