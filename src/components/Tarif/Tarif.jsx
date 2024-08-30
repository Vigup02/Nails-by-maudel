import React from 'react';
import s from './Tarif.module.sass';

const Tarif = ({ imageSrc, services }) => {
  //2 props : imageSrc (URL image) et services (un tableau avec services et prix)
  return (
    <div className={s.tarifaire}>
      <div className={s.tarifaire_image}>
        {/* Affichage image via prop imageSrc */}
        <img src={imageSrc} alt="Service illustration" />
      </div>
      <div className={s.tarifaire_content}>
        {/* Table pour afficher les services et leurs prix */}
        <table>
          <tbody>
            {/* Itération sur chaque entrée du tableau 'services' : génère pour chaque service avec les détails du service (nom, prix)*/}
            {/* Création d'une ligne (<tr>) (clé unique) pour chaque service */}
            {services.map((service, index) => (
              <tr key={index}>
                {/* Colonne pour le nom du service */}
                <td className={s.service_name}>
                  {/* Affichage du nom du service */}
                  <h3>{service.name}</h3>
                </td>
                {/* Colonne pour un séparateur */}
                <td className={s.dots}>..........................................................................................................................................................</td>
                {/* Colonne pour le prix du service */}
                <td className={s.price}>
                  {/* Affichage du prix du service */}
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

