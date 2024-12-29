import React from "react";
import { NavLink } from "react-router-dom";
import "./error404.css";

const Error404 = () => {
  return (
    <div className="error-404-container">
      <h2 className="error-404-title">404 - Page Not Found !</h2>
      <NavLink to="/" className="error-404-link">
        Go to Home Page
      </NavLink>
    </div>
  );
};

export default Error404;
// utilisation de navlinke pour rediriger vers la page d'accueil
