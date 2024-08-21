import React from 'react';
import HeroService from '../../components/Service/Hero/HeroService';
import Intro from '../../components/Service/s1_intro/Intro';
import ServiceTarif from '../../components/Service/s2_tarifs/ServiceTarif';
import ReseauxSociaux2 from '../../components/Service/s3_reseauxsociaux/s3reseauxsociaux';
import Offre from '../../components/Service/s4_offre/Offre';
import s from './style.module.css';

const Service = () => {

return (
    <div className={s.Service}>
      <HeroService/>
      <Intro/>
      <ServiceTarif/>
      <ReseauxSociaux2/>
      <Offre/>
    </div>
  );
};
export default Service;