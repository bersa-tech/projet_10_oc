// Importation de React, qui est une bibliothèque JavaScript pour la création d'interfaces utilisateur.
import React from "react";
// Importation des composants de la bibliothèque React Router pour gérer les routes et la navigation dans l'application.
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Importation des pages de l'application.
import Home from "./pages/Home";
import Login from "./pages/Login";
import UserAccount from "./pages/UserAccount";
import Page404 from "./pages/Page404";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<UserAccount />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
