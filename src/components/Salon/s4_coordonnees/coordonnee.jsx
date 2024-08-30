import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'; // Importation des composants Google Maps
import horaire from '../../../assets/Image/Salon/Horaire.webp'; 
import adresse from '../../../assets/icône_illustration/Maps-Pin.svg'; 
import tel from '../../../assets/icône_illustration/Phone.svg';
import fleurPleine from '../../../assets/icône_illustration/fleur/fleur_pleine_beige.svg'; 
import s from './coordonnee.module.sass'; 

const S4Coordonnees = () => {
   // Définition des coordonnées du centre de la carte (latitude et longitude)
   const center = {
    lat: 48.06663, // Latitude pour le centre de la carte
    lng: -2.96405 // Longitude pour le centre de la carte
  };

return (
    <div id="contact-section" className={s.s4Coordonnee}>
      <h2 className={s.s4Coordonnee_title}>LES COORDONNEES</h2>
      
      <div className={s.s4Coordonnee_container}>
        <img className={s.s4Coordonnee_container_item} src={horaire} alt="horaire sur porte entrée" />
        
        <div className={s.s4Coordonnee_container_txt}>
          <div className={s.s4Coordonnee_container_txt_subtitle}>
            <h3>Envie de sublimer vos ongles ?</h3>
            <h3>Voici comment me joindre ou vous rendre au salon :</h3>
          </div>
          
          <div className={s.s4Coordonnee_container_txt_adress}>
            <img className={s.s4Coordonnee_container_txt_adress_img} src={adresse} alt="localisation" />
            <h2 className={s.s4Coordonnee_container_txt_adress_text}>27 rue Friedland <span>56300 PONTIVY</span></h2>
          </div>
          
          <div className={s.s4Coordonnee_container_txt_tel}>
            <img className={s.s4Coordonnee_container_txt_tel_img} src={tel} alt="téléphone" />
            <h2 className={s.s4Coordonnee_container_txt_tel_text}>06 20 46 80 78</h2>
          </div>
          <img className={s.s4Coordonnee_container_txt_fleurpleine} src={fleurPleine} alt="fleur beige rempli" />
        </div>
        
        {/* Chargement du script Google Maps avec la clé API */}
        <LoadScript googleMapsApiKey="AIzaSyCJx1dRrxJq__qi0MAXv9QZ7EVW3-cpJ6w">
          {/* Composant GoogleMap qui affiche la carte */}
          <GoogleMap 
            mapContainerClassName={s.s4Coordonnee_container_map} 
            center={center} // Position centrale de la carte
            zoom={13} // Niveau de zoom initial
          >
            {/* Marqueur positionné au centre de la carte */}
            <Marker position={center} />
          </GoogleMap>
        </LoadScript>
      </div>
    </div>
  );
};

export default S4Coordonnees;

