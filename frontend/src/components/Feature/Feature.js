import React from "react";
import "./feature.css";

const Feature = ({ title, content, imageSrc, altText }) => {
  return (
    <div className="feature-item">
      <img src={imageSrc} alt={altText} className="feature-icon" />
      <h3 className="feature-item-title">{title}</h3>
      <p>{content}</p>
    </div>
  );
};

export default Feature;
// utilisation des props ici pour rendre le composant réutilisable
// ici on a besoin de 4 props : title, content, imageSrc, altText
