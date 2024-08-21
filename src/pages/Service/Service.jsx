import React from 'react';
import HeroService from '../../components/Service/Hero/HeroService';
import Intro from '../../components/Service/s1_intro/Intro';
import ServiceTarif from '../../components/Service/s2_tarifs/ServiceTarif';
import s from './style.module.css';

const Service = () => {

return (
    <div className={s.Service}>
      <HeroService/>
      <Intro/>
      <ServiceTarif/>
      
    </div>
  );
};
export default Service;