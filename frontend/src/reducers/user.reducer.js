import {
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILURE,
  LOGOUT_USER,
  USER_PROFILE,
  UPDATE_USER_NAME,
} from "../actions/user.action";

// État initial du réducteur utilisateur
const initialState = {
  isAuthenticated: false, // Par défaut, l'utilisateur n'est pas connecté
  loginError: null, // Pas d'erreur de connexion au démarrage; loginError provient de la fonction loginUser dans user.action
  userProfile: "", // Le profil utilisateur est vide au démarrage
};

// Définition du réducteur utilisateur
const userReducer = (state = initialState, action) => {
  // On utilise un switch pour gérer les différents cas d'actions
  switch (action.type) {
    case USER_LOGIN_SUCCESS: // Gestion de la connexion réussie de l'utilisateur
      return {
        ...state, // Copie et conservation de l'état actuel, Les autres propriétés de l'état sont conservées inchangées grâce au ...state
        isAuthenticated: true,
        loginError: null,
      };
    case USER_LOGIN_FAILURE: // Gestion de l'échec de connexion
      return {
        ...state,
        isAuthenticated: false,
        loginError: action.payload, // Stocke le message d'erreur de connexion
      };
    case LOGOUT_USER: // Déconnexion de l'utilisateur
      return {
        ...state,
        isAuthenticated: false,
        loginError: null,
        userProfile: "", // Le profil utilisateur est supprimé
      };
    case USER_PROFILE: // Mise à jour du profil utilisateur
      return {
        ...state,
        userProfile: action.payload, // Stocke les informations du profil utilisateur
      };
    case UPDATE_USER_NAME: // Mise à jour du nom d'utilisateur
      const newProfile = { ...state.userProfile, userName: action.payload };
      return {
        ...state,
        userProfile: newProfile, // Met à jour le nom d'utilisateur dans le profil utilisateur
      };
    default: // Par défaut, retourne l'état actuel si aucune action n'est reconnue
      return state;
  }
};

export default userReducer;
// user.reducer.js : Gère l'état de l'utilisateur
// Met à jour l'état utilisateur en fonction des actions reçues.
