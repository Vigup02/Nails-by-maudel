
import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header/Header'; // Importez le Header comme composant par défaut
import Footer from './components/Footer/Footer'; // Importez le Footer comme composant par défaut
import s from "./app.module.sass"; // Importez les styles

const App = () => {
  return (
    <div className={s.app}>
      <Header />
      <div className={s.app_outlet}>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default App;