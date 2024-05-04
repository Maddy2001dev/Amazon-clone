'use client';
import { useCartContext } from '@/app/contexts/CartContext';
import Image from 'next/image';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import toast from 'react-hot-toast';

export type productShape = {
  id: number;
  name: string;
  price: number;
  img: string;
  quantity: number;
};

type ProductItemProps = {
  data: productShape;
};

export default function ProductItem({ data }: ProductItemProps) {
  const router = useRouter();
  const context = useCartContext();

  const alreadyIn = context?.products.find((product) =>
    data.id === product.id ? true : false
  );

  function handleAdd(data: productShape) {
    if (!alreadyIn) {
      context?.onAdd(data);
      toast.success('Added to the cart');
    }
  }

  function handleRemove(id: number) {
    if (alreadyIn) {
      context?.onRemove(id);
      toast.success('Removed from the cart');
    }
  }
  return (
    // <div
    //   onClick={(e) => {
    //     router.push(`/products/${data.id}`);
    //   }}
    //   className="hover:-translate-y-[2px] hover:scale-102 hover:shadow-2xl duration-300 transition bg-[#f5f6f6] flex flex-col justify-center py-1 pb-0 shadow-lg cursor-pointer"
    // >
    //   <div className="flex items-center px-1 pb-1">
    //     <p>{data.name}</p>
    //   </div>
    //   <div>
    //     <Image
    //       src="/images/products/laptop1.jpg"
    //       width={400}
    //       height={300}
    //       alt="product"
    //     />
    //   </div>
    //   <div className="flex justify-between items-center">
    //     <div className="font-extrabold text-lg p-1 mt-1 ml-1">
    //       {data.price}$
    //     </div>
    //     <button
    //       onClick={(e) => {
    //         e.stopPropagation();

    //         handleAdd(data);
    //         handleRemove(data.id);
    //       }}
    //       className={`bg-yellow-400 rounded-3xl py-1 px-2 hover:bg-yellow-500 mr-1 text-center transition ${
    //         alreadyIn ? 'bg-slate-900' : 'bg-orange-300'
    //       } hover:bg-orange-600`}
    //     >
    //       {alreadyIn ? 'Remove from cart' : 'Add to cart'}
    //     </button>
    //   </div>
    // </div>
    <div className="flex flex-col gap-0">
      <div className="bg-slate-50 py-16 px-4">
        <Image
          src="/images/products/laptopp.jpg"
          width={300}
          height={300}
          alt="product"
        />
      </div>
    </div>
  );
}
