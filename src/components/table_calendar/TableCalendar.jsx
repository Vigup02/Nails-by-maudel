import React from 'react';
import s from './tableCalendar.module.sass';

const TableCalendar = () => {
  // Horaires d'ouverture sous forme de tableau
  // Chaque objet représente un jour de la semaine avec ses horaires d'ouverture
  const hours = [
    { day: 'Lundi', time: '9:00 - 19:00' },
    { day: 'Mardi', time: '9:00 - 19:00' },
    { day: 'Mercredi', time: 'Fermé' },
    { day: 'Jeudi', time: '9:00 - 19:00' },
    { day: 'Vendredi', time: '9:00 - 19:00' },
    { day: 'Samedi', time: 'sur rendez-vous' },
    { day: 'Dimanche', time: 'Fermé' },
  ];

return (
    <div className={s.Calendar}>
      {/* Table pour afficher les horaires d'ouverture */}
      <table className={s.Calendar_table}>
        <tbody>
          {/* Itération sur chaque entrée du tableau 'hours' */}
          {/* Création d'une ligne (<tr>) pour chaque jour de la semaine */}
          {hours.map((entry, index) => (
            <tr key={index} className={s.Calendar_table_row}>
              {/* Colonne pour le jour de la semaine */}
              <td className={s.Calendar_table_row_dayColumn}><h3>{entry.day}</h3></td>
              {/* Colonne pour le séparateur entre le jour et les horaires */}
              <td className={s.Calendar_table_row_separator}><h3>-</h3></td>
              {/* Colonne pour les horaires d'ouverture */}
              <td className={s.Calendar_table_row_timeColumn}><h3>{entry.time}</h3></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default TableCalendar;
