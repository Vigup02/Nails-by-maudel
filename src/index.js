import "./index.sass";
import React from 'react';
import ReactDOM from 'react-dom';
import { StrictMode } from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import { BrowserRouter, Routes, Route,} from 'react-router-dom';
import Home from './pages/Home/Home'; // Importez Home comme composant par défaut
import Salon from './pages/Salon/Salon'; // Importez Salon comme composant par défaut
import Galerie from './pages/Galerie/Galerie'; // Importez Galerie comme composant par défaut
import Service from './pages/Service/Service'; // Importez Service comme composant par défaut
import Politique from './pages/Politique/Politique'; // Importez Politique comme composant par défaut
import App from "./App.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Home />} />
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