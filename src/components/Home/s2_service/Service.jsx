import React from 'react';
import { useNavigate } from 'react-router-dom';
import fleur1 from '../../../assets/icône_illustration/fleur/fleur_1_removebg.webp';
import vernis from '../../../assets/icône_illustration/ongle/vernis-a-ongle.webp';
import lime from '../../../assets/icône_illustration/ongle/lime-a-ongles.webp';
import nailArt from '../../../assets/icône_illustration/ongle/nail_art.webp';
import broken from '../../../assets/icône_illustration/ongle/nail_broken.webp';
import fleur2 from '../../../assets/icône_illustration/fleur/fleur_pleine_latte.svg'; 
import SecondaryButton from '../../Buttons/SecondaryButton/SecondaryButton';
import s from './service.module.sass';

const Service = () => {
  const navigate = useNavigate();

return (
    <div className={s.s2Service}>
      <h2 className={s.s2Service_title}>LES PRESTATIONS</h2>
      <div className={s.s2Service_container}>
        <div className={s.s2Service_container_bloc}>
          <img className={s.s2Service_container_bloc_img} src={fleur1} alt="fleur_1" />
          <div className={s.s2Service_container_bloc_sousBloc}>
            <div className={s.s2Service_container_bloc_sousBloc_liste}>
              <div className={s.s2Service_container_bloc_sousBloc_liste_vernis}>
                <img className={s.s2Service_container_bloc_sousBloc_liste_vernis_img1} src={vernis} alt="vernis à ongle" />
                <h3 className={s.s2Service_container_bloc_sousBloc_liste_vernis_text1}>Pose gel ou Vernis permanent</h3>
              </div>
              <div className={s.s2Service_container_bloc_sousBloc_liste_lime}>
                <img className={s.s2Service_container_bloc_sousBloc_liste_lime_img2} src={lime} alt="lime à ongle" />
                <h3 className={s.s2Service_container_bloc_sousBloc_liste_lime_text2}>Remplissage / Dépose gel ou vernis</h3>
              </div>
              <div className={s.s2Service_container_bloc_sousBloc_liste_nailart}>
                <img className={s.s2Service_container_bloc_sousBloc_liste_nailart_img3} src={nailArt} alt="ongle en nail art" />
                <h3 className={s.s2Service_container_bloc_sousBloc_liste_nailart_text3}>Nail Art</h3>
              </div>
              <div className={s.s2Service_container_bloc_sousBloc_liste_broken}>
                <img className={s.s2Service_container_bloc_sousBloc_liste_broken_img4} src={broken} alt="ongle cassé" />
                <h3 className={s.s2Service_container_bloc_sousBloc_liste_broken_text4}>Réparation</h3>
              </div>
              <img className={s.s2Service_container_bloc_sousBloc_liste_fleur2} src={fleur2} alt="fleur 8 pétales" />
            </div>
            <SecondaryButton  text="Détails des services et tarifs" onClick={() => navigate('/service')} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Service;
