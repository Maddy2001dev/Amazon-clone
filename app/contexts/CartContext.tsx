'use client';
import { ReactNode, createContext, useContext, useMemo, useState } from 'react';

import { productShape } from '../components/products/ProductItem';

interface CartContextTypes {
  products: productShape[];
  onAdd: (data: productShape) => void;
  onRemove: (id: number) => void;
  quantity: number;
}

const cartContext = createContext<CartContextTypes | undefined>(undefined);

interface CartContextProviderProps {
  children: ReactNode;
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [products, setProducts] = useState<productShape[]>([]);

  const quantity = useMemo(
    () => products.reduce((prev, curr) => prev + curr.quantity, 0),
    [products]
  );

  const onAdd = (data: productShape) => {
    setTimeout(() => {}, 200);
    if (!products.some((product) => product.id === data.id)) {
      setProducts((products) => [...products, data]);
    }
  };
  const onRemove = (id: number) => {
    const updatedProducts = products.filter((product) => product.id !== id);
    setProducts(updatedProducts);
  };

  const value = {
    products,
    onAdd,
    onRemove,
    quantity,
  };

  return <cartContext.Provider value={value}>{children}</cartContext.Provider>;
}

export const useCartContext = () => {
  const context = useContext(cartContext);

  return context;
};