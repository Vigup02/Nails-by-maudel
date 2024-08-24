// Importation du fichier de styles global
import "./index.sass";
// Importation des bibliothèques nécessaires depuis React
import React from 'react';
import ReactDOM from 'react-dom/client';
import { StrictMode } from 'react';
// Importation des outils de gestion d'état et de routage
import { Provider } from 'react-redux';
import { store } from './store';
import { BrowserRouter, Routes, Route,} from 'react-router-dom';
// Importation des composants/pages de l'application
import Home from './pages/Home/Home'; 
import Salon from './pages/Salon/Salon'; 
import Galerie from './pages/Galerie/Galerie'; 
import Service from './pages/Service/Service'; 
import Politique from './pages/Politique/Politique'; 
import App from "./App.jsx";

// Création du point d'ancrage principal de l'application dans le DOM
const root = ReactDOM.createRoot(document.getElementById("root"));

// Rendu de l'application principale
root.render(
  <StrictMode>
    {/* Fourniture du store Redux à toute l'application */}
    <Provider store={store}>
      {/* Configuration du routage avec React Router */}
      <BrowserRouter>
        <Routes>
          {/* Définition des routes principales, toutes sous la structure du composant App */}
          <Route path="/" element={<App />}>
            {/* Route par défaut, renvoie à la page d'accueil */}
            <Route index element={<Home />} />
            {/* Routes spécifiques pour chaque page de l'application */}
            <Route path="salon" element={<Salon />} />
            <Route path="galerie" element={<Galerie />} />
            <Route path="service" element={<Service />} />
            <Route path="politique" element={<Politique />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </StrictMode>
);