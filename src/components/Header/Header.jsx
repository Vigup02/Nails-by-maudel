// Importation des modules nécessaires
import React, { useState } from 'react'; // Importation de la bibliothèque React pour créer des composants React.
import { Link, useLocation, useNavigate } from 'react-router-dom'; // Importation des hooks et composants de react-router-dom pour la navigation.
import s from './header.module.sass'; // Importation du fichier de styles SASS spécifique au composant Header. `s` est l'alias pour accéder aux classes définies dans le fichier SASS.
import logoImg from '../../assets/Logo/Logo_terra_cotta-removebg_header.webp'; // Importation de l'image du logo pour l'afficher dans l'en-tête.
import NavBarButton from '../Buttons/NavBarButton/NavBarButton'; // Importation du composant NavBarButton utilisé pour les boutons de la barre de navigation.
import ContactButton from '../Buttons/ContactButton/ContactButton'; // Importation du composant ContactButton utilisé pour le bouton de contact.
import BurgerIcon from '../BurgerIcon/BurgerIcon'; // Importez le nouveau composant

const Header = () => {
  // Déclaration du composant fonctionnel Header

  // Hooks de navigation
  const navigate = useNavigate(); // Hook permettant de naviguer programatiquement vers une autre route.
  const location = useLocation(); // Hook permettant d'obtenir l'objet de localisation actuel pour vérifier l'URL.
  const [menuOpen, setMenuOpen] = useState(false); // État pour suivre l'ouverture du menu

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Inverse l'état de `menuOpen`
  };

  return (
    <header className={s.headerContainer}>
      {/* Conteneur principal de l'en-tête */}
      
      <Link to="/" className={s.headerContainer_logo}>
        {/* Lien vers la page d'accueil */}
        <img src={logoImg} alt="Logo" /> {/* Affichage du logo avec une image importée */}
      </Link>
      
      <nav className={`${s.headerContainer_navbar} ${menuOpen ? s.open : ''}`}>
        {/* Classe conditionnelle ajoutée à la barre de navigation en fonction de l'état de `menuOpen` */}
        
        <NavBarButton
          text="Le Salon"
          onClick={() => navigate('/salon')} // Fonction appelée lors du clic pour naviguer vers la page `/salon`
          isActive={location.pathname === '/salon'} // Détermine si le bouton doit être actif en fonction du chemin actuel
        />
        <NavBarButton
          text="Galerie"
          onClick={() => navigate('/galerie')} // Fonction appelée lors du clic pour naviguer vers la page `/galerie`
          isActive={location.pathname === '/galerie'} // Détermine si le bouton doit être actif en fonction du chemin actuel
        />
        <NavBarButton
          text="Services & Tarifs"
          onClick={() => navigate('/service')} // Fonction appelée lors du clic pour naviguer vers la page `/service`
          isActive={location.pathname === '/service'} // Détermine si le bouton doit être actif en fonction du chemin actuel
        />
        <ContactButton
          text="Contact"
          onClick={() => navigate('/contact')} // Fonction appelée lors du clic pour naviguer vers la page `/contact`
        />
      </nav>
      <BurgerIcon className={s.headerContainer_burgerIcon} isOpen={menuOpen} toggleMenu={toggleMenu} /> {/* Utilisez le nouveau composant */}
    </header>
  );
};

export default Header;