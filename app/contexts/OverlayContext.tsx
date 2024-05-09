'use client';
import { ReactNode, createContext, useContext, useState } from 'react';

interface contextI {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const overlayContext = createContext<contextI | undefined>(undefined);

interface ProviderProps {
  children: ReactNode;
}

export default function OverlayProvider({ children }: ProviderProps) {
  const [isOpen, setIsOpen] = useState(false);

  const onOpen = () => setIsOpen(true);
  const onClose = () => setIsOpen(false);

  const value = {
    isOpen,
    onOpen,
    onClose,
  };

  return (
    <overlayContext.Provider value={value}>{children}</overlayContext.Provider>
  );
}

export const useOverlayContext = () => {
  const context = useContext(overlayContext);

  return context;
};
