import { combineReducers } from "redux";
import userReducer from "./user.reducer";

export default combineReducers({
  user: userReducer, // Gère l'état de l'utilisateur
});

// index.js (reducers) : Regroupe tous les réducteurs pour gérer l'ensemble de l'état de l'application.
