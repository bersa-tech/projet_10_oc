import React, { useEffect, useState } from "react"; // Import des hooks `useEffect`(effets secondaires) et `useState`
import { useDispatch, useSelector } from "react-redux"; // Import des hooks de Redux pour dispatcher et accéder au store.
import { fetchUserProfile } from "../../actions/user.action"; // Import de l'action pour récupérer les informations du profil utilisateur.
import EditName from "../EditName/EditName"; // Import du composant qui gère l'édition du nom de l'utilisateur.
import "./headerAccount.css";

const HeaderAccount = () => {
  const dispatch = useDispatch(); // Création d'une instance de `dispatch` pour envoyer des actions au store Redux.
  const userProfile = useSelector((state) => state.user.userProfile); // Récupération du profil dans le store Redux useSelector
  const [isEditing, setIsEditing] = useState(false);
  // Initialisation d'un état local `isEditing` à `false`.
  // `setIsEditing` permet de mettre à jour l'état `isEditing`.

  useEffect(() => {
    dispatch(fetchUserProfile()); // Appel à l'action `fetchUserProfile`, récupérer les info de l'utilisateur depuis le serveur.
  }, [dispatch]);
  // Si `dispatch` change, l'effet est exécuté à nouveau, ce qui permet de récupérer les nouvelles informations du profil utilisateur.

  return (
    <div className="header">
      {isEditing ? (
        <EditName setIsEditing={setIsEditing} /> // On passe `setIsEditing` en prop pour désactiver le mode d'édition après modification.
      ) : (
        // liaison avec le composant EditName pour gérer l'édition du nom de l'utilisateur. parents vers enfant.
        <>
          <h1>
            Welcome back
            <br />
            {userProfile.userName} !
          </h1>
          <button
            className="edit-button"
            onClick={() => setIsEditing(true)}
            // Bouton pour activer le mode d'édition (change `isEditing` à `true`)
          >
            Edit Name
          </button>
          <h2 className="sr-only">Accounts</h2>
        </>
      )}
    </div>
  );
};

export default HeaderAccount;

// useState : Gère l'état local isEditing, qui bascule entre deux interfaces : affichage du nom ou édition.
// useEffect : Permet d'exécuter une fonction après le rendu du composant.
// useDispatch : Utilisé pour envoyer des actions au store Redux, comme la récupération du profil utilisateur.
// useSelector : Permet d'accéder au state global (Redux). Ici, il est utilisé pour lire userProfile dans le store.
