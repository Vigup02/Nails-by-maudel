import React, { useState } from 'react'; // Importation de la bibliothèque React et du hook useState pour la gestion de l'état.
import { Link, useLocation, useNavigate } from 'react-router-dom'; // Importation du composant 'Link' et des hooks 'useLocation' et useNavigate' de react-router-dom pour la navigation.
import s from './header.module.sass'; 
import logoImg from '../../assets/Logo/Logo_terra_cotta-removebg_header.webp'; 
import NavBarButton from '../Buttons/NavBarButton/NavBarButton'; 
import ContactButton from '../Buttons/ContactButton/ContactButton'; 
import BurgerIcon from '../BurgerIcon/BurgerIcon';

const Header = () => {
  const navigate = useNavigate(); // Hook permettant de naviguer vers un autre emplacement.
  const location = useLocation(); // Hook permettant d'obtenir la localisation actuelle pour vérifier l'URL.
  const [menuOpen, setMenuOpen] = useState(false); // État pour suivre l'ouverture du menu burger.

  // Fonction pour basculer l'état du menu burger
  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Inverse l'état de `menuOpen`.
  };

  // Fonction pour gérer le clic sur un bouton de la barre de navigation
  const handleNavBarClick = (path) => {
    setMenuOpen(false); // Ferme le menu après la navigation.
    navigate(path); // Navigation vers le chemin spécifié.
  };

  // Fonction pour gérer le clic sur le bouton de contact
  const handleContactClick = () => {
    setMenuOpen(false); // Ferme le menu après la navigation.
    if (location.pathname === '/salon') {
      // Si l'utilisateur est déjà sur la page Salon, faire défiler vers la section contact
      document.getElementById('contact-section').scrollIntoView({ behavior: 'smooth' });
    } else {
      // Sinon, naviguer vers la page Salon avec un état pour faire défiler vers la section contact
      navigate('/salon', { state: { scrollToContact: true } });
    }
  };

  return (
    <header className={s.headerContainer}>
      <Link to="/" className={s.headerContainer_logo}>
        {/* Lien vers la page d'accueil */}
        <img src={logoImg} alt="Logo" />
      </Link>
      <nav className={`${s.headerContainer_navbar} ${menuOpen ? s.open : ''}`}>
        {/* Barre de navigation */}
        <NavBarButton
          text="Le Salon"
          onClick={() => handleNavBarClick('/salon')} // Utilisation de la fonction pour fermer le menu et naviguer
          isActive={location.pathname === '/salon'} // Détermine si le bouton doit être actif en fonction du chemin actuel
        />
        <NavBarButton
          text="Galerie"
          onClick={() => handleNavBarClick('/galerie')} // Utilisation de la fonction pour fermer le menu et naviguer
          isActive={location.pathname === '/galerie'} // Détermine si le bouton doit être actif en fonction du chemin actuel
        />
        <NavBarButton
          text="Services & Tarifs"
          onClick={() => handleNavBarClick('/service')} // Utilisation de la fonction pour fermer le menu et naviguer
          isActive={location.pathname === '/service'} // Détermine si le bouton doit être actif en fonction du chemin actuel
        />
        <ContactButton
          text="Contact"
          onClick={handleContactClick} // Utilisation de la fonction pour gérer le clic et fermer le menu
        />
      </nav>

      <BurgerIcon
        className={s.headerContainer_burgerIcon}
        isOpen={menuOpen}
        toggleMenu={toggleMenu} // Utilisation de la fonction pour basculer l'état du menu burger
      />
    </header>
  );
};

export default Header;
