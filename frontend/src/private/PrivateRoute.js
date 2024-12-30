import React from "react";

// Importe des composants Outlet et Navigate de `react-router-dom`
import { Outlet, Navigate } from "react-router-dom";
// - `Outlet` : Permet de rendre des sous-composants ou des sous-routes.
// - `Navigate` : Permet de rediriger vers une autre route.

const PrivateRoute = () => {
  let token = localStorage.getItem("token"); // Récupère le jeton d'authentification dans le localStorage.
  if (!token) {
    token = sessionStorage.getItem("token");
  } // si absence dans le locatstorage, on vérifie dans le sessionStorage.
  return token ? <Outlet /> : <Navigate to="/login" />;
  // Si un jeton est présent : Affiche les sous-composants ou sous-routes Outlet
  // Si aucun jeton n'est trouvé : Redirige vers la page de connexion (`/login`) avec `<Navigate />`.
};

export default PrivateRoute;
// Ce fichier définit une route privée pour une application utilisant react-router-dom.
// Les routes privées permettent de restreindre l'accès à certaines pages pour les utilisateurs non authentifiés.
