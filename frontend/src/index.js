import React from "react";
import ReactDOM from "react-dom/client"; // Import de ReactDOM pour interagir avec le DOM et afficher l'application React dans une page web.
import App from "./App"; // Import du composant principal de l'application (App) depuis le fichier "./App.js".
import "./styles/main.css"; // Importation des styles globaux de l'application depuis le fichier CSS principal.

// Importation de Redux
import { Provider } from "react-redux";
// `Provider` est un composant qui fournit le store Redux à toute l'application React, permettant aux composants d'accéder aux données du store.
import { configureStore } from "@reduxjs/toolkit";
// `configureStore` est une méthode fournie par Redux Toolkit pour créer un store Redux avec des configurations simplifiées.
import rootReducer from "./reducers/index";
// Importation du réducteur principal (rootReducer), qui combine tous les réducteurs de l'application.

// Création du store Redux avec le réducteur principal (rootReducer) et l'activation des Redux DevTools pour le débogage.
const store = configureStore({
  reducer: rootReducer, // Spécifie le réducteur principal pour gérer les données du store.
  devTools: true,
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    {/* Fournit le store Redux à tous les composants React */}
    <App />
  </Provider>
);
// Le composant `App` est enveloppé dans le composant `Provider` pour fournir le store Redux à l'application.
