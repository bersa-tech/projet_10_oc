import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUserName } from "../../actions/user.action";
import "./editName.css";

const EditName = ({ setIsEditing }) => {
  const dispatch = useDispatch();
  const userProfile = useSelector((state) => state.user.userProfile); // récupère le nom d’utilisateur actuel à partir du store Redux.
  const [newUserName, setNewUserName] = useState("");

  // Fonction déclenchée lorsque l'utilisateur clique sur le bouton "Save".
  const toUpdateUserName = async () => {
    if (newUserName) {
      dispatch(updateUserName(newUserName)); // dispatch de l’action avec le nouveau nom d’utilisateur.
      setIsEditing(false); // ferme le formulaire d’édition. (grace au props dans le parents)
      setNewUserName(""); // réinitialise le champ de saisie
    }
  };

  // Fonction déclenchée l'annulation lors du clique sur le bouton "Cancel".
  const toCancel = () => {
    setIsEditing(false); // ferme le formulaire d’édition
    setNewUserName(""); // réinitialise le champ de saisie
  };

  // faire le reste apres
};

export default EditName;
