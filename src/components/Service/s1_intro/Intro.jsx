import React from 'react';
import vitrine from '../../../assets/Image/Services&Tarifs/vitrine1.webp';
import plante from '../../../assets/icône_illustration/fleur/fleur2-removebg.webp'; 
import s from './Intro.module.sass'

const useIntersectionObserver = (options) => {
  const [isIntersecting, setIsIntersecting] = React.useState(false);
  const ref = React.useRef(null);

  React.useEffect(() => {
    const element = ref.current;
    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    }, options);
    
    if (element) observer.observe(element);
    return () => {
      if (element) observer.unobserve(element);
    };
  }, [options]);

  return [ref, isIntersecting];
};

const Intro = () => {
  const [refBkgrd, isVisibleBkgrd] = useIntersectionObserver({ threshold: 0.1 });
  const [refImgvitrine, isVisibleImgvitrine] = useIntersectionObserver({ threshold: 0.1 });
  const [refTxt, isVisibleTxt] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <div className={s.intro}>
      <div className={`${s.intro_bkgrd} ${isVisibleBkgrd ? s.visible : ''}`} ref={refBkgrd}></div>
      <div className={s.intro_container}>
        <img className={`${s.intro_container_imgvitrine} ${isVisibleImgvitrine ? s.visible : ''}`} src={vitrine} alt="Vitrine" ref={refImgvitrine}/>
        <div className={`${s.intro_container_txt} ${isVisibleTxt ? s.visible : ''}`} ref={refTxt}>
          <div className={s.intro_container_txt_item}>
            <img className={s.intro_container_txt_item_icone} src={plante} alt="Plante"/>
            <h2 className={s.intro_container_txt_item_title}>Pourquoi choisir Nails by Maude’l ?</h2>
          </div>
          <p>Bienvenue chez Nails by Maude'l, où l'art du nail design rencontre la passion et l'expertise.</p>
          <p>Que vous cherchiez à allonger vos ongles avec des extensions en gel, à exprimer votre créativité avec du nail art personnalisé, ou à profiter d'un vernis permanent d'une tenue impeccable, vous trouverez la prestation qu'il vous faut. Chez Nails by Maude'l, les meilleures techniques et produits sont utilisés pour garantir des résultats durables et de haute qualité. Chaque soin est réalisé avec une attention particulière aux détails et une écoute attentive de vos envies, pour vous offrir une expérience unique et personnalisée.</p>
          <p>Découvrez mes différentes prestations et tarifs, et transformez vos ongles en véritables œuvres d'art!</p>
        </div>
      </div>
    </div>
  );
};

export default Intro;
