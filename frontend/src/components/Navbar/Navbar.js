import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { logoutUser } from "../../actions/user.action"; // Importation de l'action pour déconnecter un utilisateur
import { fetchUserProfile } from "../../actions/user.action"; // Importation de l'action pour récupérer les informations du profil utilisateur
import logo from "../../assets/argentBankLogo.webp";
import "./navbar.css";

const Navbar = () => {
  // Récupération du token dans le localStorage ou sessionStorage pour déterminer si l'utilisateur est connecté
  const tokenLocalStorage = localStorage.getItem("token");
  const tokenSessionStorage = sessionStorage.getItem("token");
  const token = tokenLocalStorage || tokenSessionStorage; // On prend le token dans l'un ou l'autre stockage si disponible
  const userProfile = useSelector((state) => state.user.userProfile); // Accès aux informations du profil utilisateur stockées dans Redux store
  // Initialisation des hooks nécessaires pour la navigation entre les pages et l'envoi d'actions à Redux
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Fonction qui gère la déconnexion de l'utilisateur
  const logSignOut = (e) => {
    e.preventDefault(); // Empêche le comportement par défaut du lien (qui serait de recharger la page)
    dispatch(logoutUser()); // Envoie l'action pour déconnecter l'utilisateur
    navigate("/"); // Redirige vers la page d'accueil après la déconnexion
  };

  // Hook useEffect pour récupérer les informations du profil utilisateur dès le chargement du composant
  useEffect(() => {
    dispatch(fetchUserProfile()); // Appel à l'action `fetchUserProfile`, récupérer les info de l'utilisateur depuis le serveur.
  }, [dispatch]); // Si `dispatch` change, l'effet est exécuté à nouveau, ce qui permet de récupérer les nouvelles informations du profil utilisateur.

  if (token) {
    return (
      <nav className="main-nav">
        <NavLink to="/" className="main-nav-logo">
          <img
            src={logo}
            alt="Argent Bank Logo"
            className="main-nav-logo-image"
          />
          <h1 className="sr-only">Argent Bank</h1>{" "}
        </NavLink>
        <div className="navbar_loginSuccess">
          <NavLink to="/profile" className="main-nav-item">
            <i className="fa fa-user-circle"></i>
            {userProfile.userName}
          </NavLink>
          <NavLink to="/" className="main-nav-item" onClick={logSignOut}>
            <i className="fa fa-sign-out"></i>
            Sign Out
          </NavLink>
        </div>
      </nav>
    );
  } else {
    return (
      <nav className="main-nav">
        <NavLink to="/" className="main-nav-logo">
          <img
            src={logo}
            alt="Argent Bank Logo"
            className="main-nav-logo-image"
          />
          <h1 className="sr-only">Argent Bank</h1>{" "}
        </NavLink>
        <div>
          <NavLink to="/login" className="main-nav-item">
            <i className="fa fa-user-circle"></i>
            Sign In
          </NavLink>
        </div>
      </nav>
    );
  }
};

export default Navbar;

// composant Navbar qui affiche le logo de la banque et les liens de navigation en fonction
// de l'état de l'authentification de l'utilisateur.
