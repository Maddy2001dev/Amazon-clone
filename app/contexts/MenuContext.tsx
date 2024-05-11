'use client';
import React, { createContext, useState, useContext, ReactNode } from 'react';

interface MenuContextProps {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const MenuContext = createContext<MenuContextProps | undefined>(undefined);

interface MenuProviderProps {
  children: ReactNode;
}

export const MenuProvider: React.FC<MenuProviderProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const onOpen = () => setIsOpen(true);
  const onClose = () => setIsOpen(false);

  const value = {
    isOpen,
    onOpen,
    onClose,
  };
  return <MenuContext.Provider value={value}>{children}</MenuContext.Provider>;
};

export const useMenuContext = () => {
  const context = useContext(MenuContext);

  return context;
};
