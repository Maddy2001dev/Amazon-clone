'use client';
import React, {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';

interface locationContextI {
  location: string | null;
}

const locationContext = createContext<locationContextI | null>(null);

interface locationProviderProps {
  children: ReactNode;
}

export default function LocationContextProvider({
  children,
}: locationProviderProps) {
  const [location, setLocation] = useState<string | 'Unknown'>('Unknown');

  useEffect(() => {
    (async function () {
      try {
        const res = await fetch(`https://get.geojs.io/v1/ip/geo.json`);

        const data = await res.json();
        setLocation(data.country);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  const value = {
    location,
  };

  return (
    <locationContext.Provider value={value}>
      {children}
    </locationContext.Provider>
  );
}

export function useLoaction() {
  return useContext(locationContext);
}
