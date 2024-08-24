// Importation des bibliothèques nécessaires depuis React
import React from 'react';
// Importation du composant Outlet depuis react-router-dom pour gérer l'injection des routes
import { Outlet } from 'react-router-dom';
// Importation des composant globaux
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <div>
       {/* Insertion du Header pour l'ensemble de l'application */}
      <Header />
      {/* Conteneur pour afficher les pages de l'application en fonction de la route */}
        <Outlet />
      {/* Insertion du Footer pour l'ensemble de l'application */}
      <Footer />
    </div>
  );
};

export default App;