import React from 'react';
import s from './tableCalendar.module.sass';

const TableCalendar = () => {
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
      <table className={s.Calendar_table}>
        <tbody>
          {hours.map((entry, index) => (
            <tr key={index} className={s.Calendar_table_row}>
              <td className={s.Calendar_table_row_dayColumn}><h3>{entry.day}</h3></td>
              <td className={s.Calendar_table_row_separator}><h3>-</h3></td>
              <td className={s.Calendar_table_row_timeColumn}><h3>{entry.time}</h3></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default TableCalendar;
