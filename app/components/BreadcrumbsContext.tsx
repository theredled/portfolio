'use client'
import {createContext, useContext, useState} from "react";

interface IBreadcrumb {
    label: string,
    url: string
}

interface IBreadcrumbsContext {
  breadcrumbsList: IBreadcrumb[];
  setBreadcrumbsList: React.Dispatch<React.SetStateAction<IBreadcrumb[]>>;
}
export const BreadcrumbsContext = createContext<IBreadcrumbsContext>({
    breadcrumbsList: [],
    setBreadcrumbsList: () => {}
});


export const BreadcrumbsContextProvider = ({ children }: {children: any}) => {
  const [breadcrumbsList, setBreadcrumbsList] = useState<IBreadcrumb[]>([]);

  console.log('BreadcrumbsContextProvider', breadcrumbsList);

  return (
    <BreadcrumbsContext.Provider value={{ breadcrumbsList, setBreadcrumbsList }}>
      {children}
    </BreadcrumbsContext.Provider>
  );
};


export const useBreadcrumbs = (): IBreadcrumbsContext => useContext(BreadcrumbsContext);