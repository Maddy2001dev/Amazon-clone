'use client';
import { useCartContext } from '@/app/contexts/CartContext';
import Image from 'next/image';
import Link from 'next/link';

export default function ShoppingNav() {
  const cartContext = useCartContext();
  return (
    <Link
      href="/cart"
      className="p-1.4 relative mr-1.4 text-white hover:border-[1px] hover:rounded-sm border-[1px] border-nav hover:border-white flex"
    >
      <div>
        <span className="absolute w-[19px] flex items-center justify-center top-[5px] right-auto left-[24px] text-orange-500 font-bold">
          {cartContext?.quantity}
        </span>
        <Image
          className="self-center"
          src="/images/icons/basket.png"
          width={60}
          height={60}
          alt="down icon"
        />
      </div>
      <p className="font-extrabold text-[15px] self-end -ml-2">Cart</p>
    </Link>
  );
}
