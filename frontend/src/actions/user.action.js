// user.action.js : Crée des événements pour interagir avec le backend ou gérer les changements dans l'application.

import axios from "axios"; // ici, on importe axios pour faire des requêtes HTTP vers l'API

// ici, on définit les types d'actions possibles pour la gestion de l'authentification de l'utilisateur
export const USER_LOGIN_SUCCESS = "USER_LOGIN_SUCCESS";
export const USER_LOGIN_FAILURE = "USER_LOGIN_FAILURE";
export const LOGOUT_USER = "LOGOUT_USER";
export const USER_PROFILE = "USER_PROFILE";
export const UPDATE_USER_NAME = "UPDATE_USER_NAME";

// Créer une action pour indiquer que la connexion est réussie.
export const userLoginSuccess = () => ({
  type: USER_LOGIN_SUCCESS,
  // Retourne : Un objet avec un type USER_LOGIN_SUCCESS.
  // Cet objet sera utilisé par le réducteur pour mettre à jour l'état.
});

// Créer une action pour gérer l'échec de connexion de l'utilisateur
export const userLoginFailure = (error) => ({
  type: USER_LOGIN_FAILURE,
  payload: error,
  // Paramètre : error : Le message d'erreur à transmettre (ex. : "Mot de passe incorrect").
  // Retourne : Un objet avec un type et une payload (contenu de l'erreur).
});

// Créer une action pour déconnecter l'utilisateur
export const logoutUser = () => {
  localStorage.removeItem("token");
  sessionStorage.removeItem("token");
  return {
    type: LOGOUT_USER,
  };
  // Actions effectuées : Supprime le token d'authentification du localStorage et du sessionStorage.
  // Retourne : Une action avec un type LOGOUT_USER pour informer le réducteur.
};

// Créer une action pour gérer la connexion de l'utilisateur
export const loginUser = (email, password, navigate, rememberMe) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        "http://localhost:3001/api/v1/user/login",
        {
          email: email,
          password: password,
        }
      );

      if (response.status === 200) {
        const token = response.data.body.token;
        if (rememberMe) {
          localStorage.setItem("token", token);
        } else {
          sessionStorage.setItem("token", token);
        }
        navigate("/profile");
        dispatch(userLoginSuccess());
      } else {
        localStorage.removeItem("token");
        sessionStorage.removeItem("token");
      }

      if (response.status === 401) {
        localStorage.removeItem("token");
        sessionStorage.removeItem("token");
        navigate("/login");
      }
    } catch (error) {
      dispatch(userLoginFailure("identifiants incorrects"));
      localStorage.removeItem("token");
      sessionStorage.removeItem("token");
    }
  };
  // Actions effectuées : Envoie une requête POST à l'API.
  // Si la réponse est positive, sauvegarde le token et redirige l'utilisateur.
  // En cas d'erreur, dispatch l'action USER_LOGIN_FAILURE.

  // Paramètres :
  // email et password : Identifiants de connexion.
  // navigate : Fonction pour rediriger l'utilisateur la page /profile).
  // rememberMe : Indique si le token doit être sauvegardé dans le localStorage ou le sessionStorage.
};

// Créer une action pour récupérer le profil de l'utilisateur depuis le serveur
export const fetchUserProfile = () => {
  return async (dispatch) => {
    let token = localStorage.getItem("token");
    if (!token) {
      token = sessionStorage.getItem("token");
    }
    if (!token) {
      return;
    }
    try {
      const response = await axios.post(
        "http://localhost:3001/api/v1/user/profile",
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.status === 200) {
        const userProfile = response.data.body;
        dispatch({
          type: USER_PROFILE,
          payload: userProfile,
        });
      }
    } catch (error) {
      console.error(error);
    }
  };
  // But : Récupérer les informations du profil utilisateur via l'API.
  // Actions effectuées : Récupère le token d'authentification.
  // Si le token existe, envoie une requête avec le header Authorization.
  // Dispatch l'action USER_PROFILE avec les données reçues.
};

// dispatch est une fonction fournie par Redux. Elle est utilisée pour envoyer (ou "dispatch") une action à un reducer.
// Une action est simplement un objet qui contient :
// type : un identifiant de l'action, ici "UPDATE_USER_NAME", qui permet de savoir quel type d'opération est demandée.
// payload (optionnel) : les données associées à cette action, ici userName, qui contient le nouveau nom d'utilisateur.

// ---------------------------------------------------------------------
// ---------------------------------------------------------------------

// Créer une action pour mettre à jour le nom d'utilisateur
export const updateUserName = (userName) => {
  return async (dispatch) => {
    let token = localStorage.getItem("token");
    if (!token) {
      token = sessionStorage.getItem("token");
    }
    if (!token) {
      return;
    }
    try {
      const response = await axios.put(
        "http://localhost:3001/api/v1/user/profile",
        { userName },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.status === 200) {
        dispatch({
          type: UPDATE_USER_NAME,
          payload: userName,
        });
      }
    } catch (error) {
      console.error(error);
    }
  };
  // But : Modifier le nom d'utilisateur via l'API.
  // Actions effectuées : Envoie une requête PUT avec le nouveau nom d'utilisateur.
  // Si la requête est réussie, dispatch l'action UPDATE_USER_NAME.
};
