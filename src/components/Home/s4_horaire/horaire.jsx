import React from 'react';
import horaire from '../../../assets/Image/home/img-horaire.webp';
import brancheFeuille from '../../../assets/icône_illustration/fleur/branche_6_feuille_removebg.webp';
import calendrier from '../../../assets/icône_illustration/calendar-schedule.svg';
import fleurPissenlit from '../../../assets/icône_illustration/fleur/pissenlit.svg';
import TableCalendar from '../../table_calendar/TableCalendar';
import s from './horaire.module.sass';

const Horaire = () => {

return (
    <div className={s.s4Horaire}>
      <h2 className={s.s4Horaire_title}>LES HORAIRES</h2>
      <div className={s.s4Horaire_container}>
        <div className={s.s4Horaire_container_img}>
          <img className={s.s4Horaire_container_img_1}src={horaire} alt="vernis coloré et main" />
          <img className={s.s4Horaire_container_img_2}src={brancheFeuille} alt="branches6feuilles" />
        </div>
        <div className={s.s4Horaire_container_txt}>
          <div className={s.s4Horaire_container_txt_title}>
            <img className={s.s4Horaire_container_txt_title_icône}src={calendrier} alt="calendrier" />
            <h3>Heures d'ouverture</h3>
          </div>
          <TableCalendar className={s.s4Horaire_container_txt_table}/>
        </div>
      </div>
      <img className={s.s4Horaire_fleur}src={fleurPissenlit} alt="Fleur de pissenlit" />
    </div>
  );
};
export default Horaire;
