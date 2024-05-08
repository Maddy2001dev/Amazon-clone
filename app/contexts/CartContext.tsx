'use client';
import { ReactNode, createContext, useContext, useMemo, useState } from 'react';

import { productShape } from '../components/products/ProductItem';

interface CartContextTypes {
  products: productShape[];
  onAdd: (data: productShape) => void;
  onRemove: (id: number) => void;
  onUpdate: (quantity: number, id: number) => void;
  quantity: number;
  total: number;
  deSelect: () => void;
  getQuantityById: (id: number) => number;
}

const cartContext = createContext<CartContextTypes | undefined>(undefined);

interface CartContextProviderProps {
  children: ReactNode;
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [products, setProducts] = useState<productShape[]>([]);

  const total = useMemo(
    () => products.reduce((prev, curr) => prev + curr.price * curr.quantity, 0),
    [products]
  );

  const getQuantityById = (id: number) => {
    const product = products.filter((product) => product.id === id);

    return product[0].quantity;
  };

  const quantity = useMemo(
    () => products.reduce((prev, curr) => prev + curr.quantity, 0),
    [products]
  );

  const onAdd = (data: productShape) => {
    if (!products.some((product) => product.id === data.id)) {
      setProducts((products) => [...products, data]);
    }
  };

  const onUpdate = (quantity: number, id: number) => {
    const product = products.find((product) => product.id === id);
    if (product) {
      product.quantity = quantity;
      const filteredProducts = products.filter((product) => product.id !== id);
      setProducts((products) => [...filteredProducts, product]);
    }
  };

  const onRemove = (id: number) => {
    const updatedProducts = products.filter((product) => product.id !== id);
    setProducts(updatedProducts);
  };

  const deSelect = () => {
    setProducts(() => []);
  };

  const value = {
    products,
    onAdd,
    onRemove,
    onUpdate,
    quantity,
    total,
    deSelect,
    getQuantityById,
  };

  return <cartContext.Provider value={value}>{children}</cartContext.Provider>;
}

export const useCartContext = () => {
  const context = useContext(cartContext);

  return context;
};
