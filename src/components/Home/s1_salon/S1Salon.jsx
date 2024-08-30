import React from 'react'; 
import { useNavigate } from 'react-router-dom'; // Importation du hook useNavigate pour la navigation
import vitrineSalon from '../../../assets/Image/home/Vitrine.webp'; 
import brancheFeuille from '../../../assets/icône_illustration/fleur/branche_6_feuille_removebg.webp'; 
import SecondaryButton from '../../Buttons/SecondaryButton/SecondaryButton'; 
import s from './S1salon.module.sass'; 

// Hook personnalisé pour observer les intersections des éléments avec la fenêtre de visualisation
const useIntersectionObserver = (options) => {
  // État pour suivre si l'élément est visible ou non
  const [isIntersecting, setIsIntersecting] = React.useState(false);
  
  // Référence à l'élément DOM observé
  const ref = React.useRef(null);

  React.useEffect(() => {
    // Capturer la valeur de la référence actuelle
    const element = ref.current;
    
    // Création d'une nouvelle instance d'IntersectionObserver
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Met à jour l'état en fonction de la visibilité de l'élément
        setIsIntersecting(entry.isIntersecting);
      },
      options
    );
    
    // Observer l'élément si celui-ci existe
    if (element) observer.observe(element);

    // Fonction de nettoyage pour arrêter l'observation lorsque le composant est démonté
    return () => {
      if (element) observer.unobserve(element);
    };
  }, [options]); // Le hook est appelé lorsque les options changent

  return [ref, isIntersecting]; // Retourner la référence et l'état de visibilité
};

const S1Salon = () => {
  // Hook pour la navigation 
  const navigate = useNavigate();

  // Fonction pour naviguer et scroller en haut de la page
  const handleNavigate = (path) => {
    navigate(path);
    // Attendre que la navigation soit effectuée avant de scroller en haut
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 0);
  };

  // Utilisation du hook useIntersectionObserver pour chaque élément
  const [refBkgrd, isVisibleBkgrd] = useIntersectionObserver({ threshold: 0.1 });
  const [refImgvitrine, isVisibleImgvitrine] = useIntersectionObserver({ threshold: 0.1 });
  const [refTxt, isVisibleTxt] = useIntersectionObserver({ threshold: 0.1 });
  const [refButton2, isVisibleButton2] = useIntersectionObserver({ threshold: 0.1 });
  const [refIcone, isVisibleIcone] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <div className={s.s1Salon}>
      {/* Section de fond, visible uniquement quand dans la vue */}
      <div 
        className={`${s.s1Salon_bkgrd} ${isVisibleBkgrd ? s.visible : ''}`} 
        ref={refBkgrd}
      >
      </div>
      
      <div className={s.s1Salon_container}>
        {/* Image de vitrine, visible uniquement quand dans la vue */}
        <img 
          className={`${s.s1Salon_container_imgvitrine} ${isVisibleImgvitrine ? s.visible : ''}`} 
          src={vitrineSalon} 
          alt="Vitrine" 
          ref={refImgvitrine}
        />
        
        <div 
          className={`${s.s1Salon_container_txt} ${isVisibleTxt ? s.visible : ''}`} 
          ref={refTxt}
        >
          <h2 className={s.s1Salon_container_txt_title}>LE SALON</h2>
          <h3>Un Salon où chaleur et élégance se rencontrent</h3>
          <p>Entrez dans un espace empreint de chaleur et de caractère, où l'authenticité se marie avec une élégance moderne. Chaque coin de notre salon reflète une histoire unique, créant une atmosphère accueillante et inspirante.</p>
          
          {/* Bouton visible uniquement quand dans la vue */}
          <div className={`${s.s1Salon_container_txt_button1} ${isVisibleButton2 ? s.visible : ''}`} ref={refButton2}>
            <SecondaryButton text="Découvrez l’univers du salon" onClick={() => handleNavigate('/salon')} />
          </div>
        </div>
        
        {/* Icône visible uniquement quand dans la vue */}
        <img 
          className={`${s.s1Salon_container_icone} ${isVisibleIcone ? s.visible : ''}`} 
          src={brancheFeuille} 
          alt="branches6feuilles" 
          ref={refIcone}
        />
      </div>
    </div>
  );
};

export default S1Salon;
