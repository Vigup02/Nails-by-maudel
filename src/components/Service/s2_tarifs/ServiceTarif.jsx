import React, { useEffect, useRef } from 'react';
import vernis from '../../../assets/icône_illustration/ongle/vernis-a-ongle-beige.webp';
import lime from '../../../assets/icône_illustration/ongle/lime-a-ongles-beige.webp';
import nailart from '../../../assets/icône_illustration/ongle/nail_art_beige.webp';
import Main from '../../../assets/Image/Services&Tarifs/ongle.png';
import Fleur from '../../../assets/icône_illustration/fleur/fleur_1_removebg.webp';
import Tarifaire from '../../Tarif/Tarif';
import s from './ServiceTarif.module.sass';

const service1 = [
  { name: 'Pose gel transparent', price: '43€' },
  { name: 'Pose gel couleur', price: '48€' },
  { name: 'Pose gel french', price: '50€' },
  { name: 'Vernis permanent couleur (main & pieds)', price: '29,5€' },
  { name: 'Vernis permanent French (main & pieds)', price: '31€' },
];

const service2 = [
  { name: 'Remplissage transparent', price: '33€' },
  { name: 'Remplissage couleur', price: '38€' },
  { name: 'Remplissage french', price: '40€' },
  { name: 'Dépose gel', price: '18€' },
  { name: 'Dépose vernis permanent', price: '6€' },
];

const service3 = [
  { name: 'Réparation ongle', price: '5€' },
  { name: 'Nail art', price: 'à partir de 0,5€' },
];


const ServiceTarif = () => {
  const item1Ref = useRef(null);
  const item2Ref = useRef(null);
  const item3Ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add(s.visible);
          }
        });
      },
      { threshold: 0.1 }
    );

    const item1Current = item1Ref.current;
    const item2Current = item2Ref.current;
    const item3Current = item3Ref.current;

    if (item1Current) observer.observe(item1Current);
    if (item2Current) observer.observe(item2Current);
    if (item3Current) observer.observe(item3Current);

    return () => {
      if (item1Current) observer.unobserve(item1Current);
      if (item2Current) observer.unobserve(item2Current);
      if (item3Current) observer.unobserve(item3Current);
    };
  }, []);

  return (
    <div className={s.TarifService}>
      <h2 className={s.TarifService_title}>LES PRESTATIONS</h2>
      <div className={s.TarifService_list}>
        <div ref={item1Ref} className={s.TarifService_list_item1}>
          <Tarifaire imageSrc={vernis} services={service1} />
        </div>
        <div ref={item2Ref} className={s.TarifService_list_item2}>
          <Tarifaire imageSrc={lime} services={service2} />
        </div>
        <div ref={item3Ref} className={s.TarifService_list_item3}>
          <Tarifaire imageSrc={nailart} services={service3} />
        </div>
      </div>
      <img className={s.TarifService_imgmain} src={Main} alt="Main avec ongle nail art" />
      <img className={s.TarifService_imgfleur} src={Fleur} alt="Fleur" />
    </div>
  );
};

export default ServiceTarif;
