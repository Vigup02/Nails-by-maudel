import React from 'react';
import s from './Tarif.module.sass';

const Tarif = ({ imageSrc, services }) => {
  return (
    <div className={s.tarifaire}>
      <div className={s.tarifaire_image}>
        <img src={imageSrc} alt="Service illustration" />
      </div>
      <div className={s.tarifaire_content}>
        <table>
          <tbody>
            {services.map((service, index) => (
              <tr key={index}>
                <td className={s.service_name}>
                  <h3>{service.name}</h3>
                </td>
                <td className={s.dots}>..........................................................................................................................................................</td>
                <td className={s.price}>
                  <h3>{service.price}</h3>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Tarif;

