// Importation de React, qui est une bibliothèque JavaScript pour la création d'interfaces utilisateur.
import React from "react";
// Importation des composants de la bibliothèque React Router pour gérer les routes et la navigation dans l'application.
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Importation des pages de l'application.
import Home from "./pages/Home";
import Login from "./pages/Login";
import UserAccount from "./pages/UserAccount";
import Page404 from "./pages/Page404";
// Import du composant pour protéger certaines routes (accès réservé aux utilisateurs authentifiés).
import PrivateRoute from "./private/PrivateRoute";
// Le composant PrivateRoute est un composant qui vérifie si l'utilisateur est authentifié ou non. Si l'utilisateur est authentifié, il peut accéder à la route protégée. Sinon, il est redirigé vers la page de connexion.

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route element={<PrivateRoute />}>
          <Route path="/profile" element={<UserAccount />} />
        </Route>
        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
