'use client';
import React, { ReactNode, createContext, useState } from 'react';

interface locationContextI {
  location: string | null;
  setTheLocation: (location: string) => void;
}

const locationContext = createContext<locationContextI | null>(null);

interface locationProviderProps {
  children: ReactNode;
}

export function LocationContextProvider({ children }: locationProviderProps) {
  const [location, setLocation] = useState<string | null>(null);

  const setTheLocation = (location: string) => setLocation(location);

  const value = {
    location,
    setTheLocation,
  };

  return;
  <locationContext.Provider value={value}>{children}</locationContext.Provider>;
}
