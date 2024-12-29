import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../actions/user.action"; // Importation de l'action pour gérer la connexion
import { useNavigate } from "react-router-dom"; // Importation de useNavigate pour rediriger l'utilisateur
import "./form.css";

const Form = () => {
  // États locaux pour gérer les champs de formulaire et la case "Remember me"
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  // Initialisation des hook
  const dispatch = useDispatch();
  const loginError = useSelector((state) => state.user.loginError);
  const navigate = useNavigate();

  // Fonction appelée lors de la soumission du formulaire
  const iSignIn = (e) => {
    e.preventDefault();
    dispatch(loginUser(email, password, navigate, rememberMe)); // Envoie l'action loginUser avec les données
  };

  // Variable pour afficher un message d'erreur en cas de problème de connexion
  let errorMessage = null;
  if (loginError) {
    errorMessage = <p style={{ color: "red" }}>{loginError}</p>;
  }

  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form onSubmit={iSignIn}>
          <div className="input-wrapper">
            <label htmlFor="email">Username</label>
            <input
              type="text"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)} // Met à jour l'état email lors de la saisie avec onChange
              required
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="input-remember">
            <input
              type="checkbox"
              id="remember-me"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
            />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          {errorMessage}
          <button className="sign-in-button" type="submit">
            Sign In
          </button>
        </form>
      </section>
    </main>
  );
};

export default Form;
