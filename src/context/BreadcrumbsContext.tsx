'use client'
import {createContext, useContext, useState} from "react";
import {IBreadcrumb} from "@/src/types";

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

  return (
    <BreadcrumbsContext.Provider value={{ breadcrumbsList, setBreadcrumbsList }}>
      {children}
    </BreadcrumbsContext.Provider>
  );
};


export const useBreadcrumbs = (): IBreadcrumbsContext => useContext(BreadcrumbsContext);