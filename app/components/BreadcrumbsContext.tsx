'use client'
import {createContext, useContext, useState} from "react";

export const BreadcrumbsContext = createContext([]);

// Fournisseur de contexte (composant qui partage l'état)
export const BreadcrumbsContextProvider = ({ children }) => {
  const [breadcrumbsList, setBreadcrumbsList] = useState([]);

  console.log('BreadcrumbsContextProvider', breadcrumbsList);

  // Ici, tu as une fonction pour mettre à jour l'état,
  // qui sera utilisée par les composants pour échanger des données.
  return (
    <BreadcrumbsContext.Provider value={{ breadcrumbsList, setBreadcrumbsList }}>
      {children}
    </BreadcrumbsContext.Provider>
  );
};


export const useBreadcrumbs = () => useContext(BreadcrumbsContext);