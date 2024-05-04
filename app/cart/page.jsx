'use client';
import { useCartContext } from '@/app/contexts/CartContext';
import CartItem from './cartItem';
export default function Cart() {
  const context = useCartContext();

  return (
    <ul className="flex w-[500] h-[500] bg-red-400">
      {context.products.map((product) => (
        <CartItem key={product.id} data={product} />
      ))}
    </ul>
  );
}
