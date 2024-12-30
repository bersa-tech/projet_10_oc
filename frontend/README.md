# Getting Started with Create React App

—————————————————  
PROJET 10 OC : lancer le projet  
—————————————————  
Merci d'installer les dépendances necessaires au projet.

- disponible dans le fichier package.json

Technologies utilisées dans le frontend

1. React :
   - Crée des interfaces interactives et réactives.
   - Divise l'écran en composants réutilisables (boutons, formulaires, tableaux).
2. React Router :
   - Permet de naviguer entre les pages (comme "Connexion" → "Profil").
   - Gère les URL sans recharger la page.
3. Redux :
   - Stocke et gère les données partagées (comme les informations utilisateur).
   - Ex : Si l'utilisateur se connecte, ses données sont accessibles partout dans l'app.
4. Redux Toolkit :
   - Simplifie l'utilisation de Redux (moins de code, plus efficace).
5. React Redux :
   - Connecte Redux avec React pour utiliser facilement les données dans les composants.
6. Redux Thunk :
   - Permet de gérer les actions asynchrones (comme un appel API).
   - Ex : Récupérer les données du profil utilisateur depuis le backend.
7. Axios :
   - Sert à faire des appels API pour communiquer avec le backend.
   - Ex : Envoyer un email et un mot de passe pour se connecter.
8. PropTypes :
   - Vérifie les types des données que les composants reçoivent.
   - Ex : Un bouton devrait recevoir une chaîne de caractères pour son texte, pas un nombre.

- npm install react react-dom react-router-dom redux react-redux @reduxjs/toolkit redux-thunk axios prop-types

—————————————————  
BACKEND ET MangoDB :
Démarrer le service avec cette commande :

- brew services start mongodb-community@6.0
  Accéder à la console MongoDB et interagir avec la base de donnée :
- mongosh

—————————————————
Backend :

- utilise npm run dev:server pour démarrer le backend sur le port 3001.
- npm run populate-db (remplir la base de données avec les utilisateurs)

—————————————————
Frontend :

- utilise npm start pour démarrer l'application React sur le port 3000.
