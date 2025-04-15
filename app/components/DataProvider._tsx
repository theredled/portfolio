// /components/DataProvider.tsx
'use client';

import { createContext, useContext } from 'react';

const DataContext = createContext(null);

export function DataProvider({ children, data }) {
  return (
    <DataContext.Provider value={data}>
      {children}
    </DataContext.Provider>
  );
}

export function useData() {
  const ctx = useContext(DataContext);
  if (!ctx) throw new Error('useData must be used within a DataProvider');
  return ctx;
}