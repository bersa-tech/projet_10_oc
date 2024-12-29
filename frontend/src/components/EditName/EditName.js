import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUserName } from "../../actions/user.action"; // action pour mettre à jour le nom d’utilisateur.
import "./editName.css";

const EditName = ({ setIsEditing }) => {
  const dispatch = useDispatch();
  const userProfile = useSelector((state) => state.user.userProfile);
  const [newUserName, setNewUserName] = useState("");

  // Fonction déclenchée lorsque l'utilisateur clique sur le bouton "Save".
  const toUpdateUserName = async () => {
    if (newUserName) {
      dispatch(updateUserName(newUserName)); // dispatch de l’action avec le nouveau nom d’utilisateur.
      setIsEditing(false); // ferme le formulaire d’édition. (grace au props dans le parents)
      setNewUserName(""); // réinitialise le champ de saisie
    }
  };

  // Fonction déclenchée lors du clique sur le bouton "Cancel".
  const toCancel = () => {
    setIsEditing(false); // ferme le formulaire d’édition
    setNewUserName(""); // réinitialise le champ de saisie
  };

  return (
    <div className="edit-form">
      <h2>Edit User Info</h2>
      <div>
        <label htmlFor="newUserName">User Name :</label>
        <input
          type="text"
          id="newUserName"
          placeholder="Enter New Username"
          value={newUserName}
          onChange={(e) => setNewUserName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="firstName">First Name :</label>
        <input
          type="text"
          id="firstName"
          value={userProfile.firstName}
          disabled
          className="text_input"
        />
      </div>
      <div>
        <label htmlFor="lastName">Last Name :</label>
        <input
          type="text"
          id="lastName"
          value={userProfile.lastName}
          disabled
          className="text_input"
        />
        <div className="buttons-form">
          <button onClick={toUpdateUserName}>Save</button>
          <button onClick={toCancel}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default EditName;
