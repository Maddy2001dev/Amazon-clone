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

    <div
      onClick={(e) => {
        router.push(`/products/${data.id}`);
      }}
      className="flex flex-col cursor-pointer bg-white overflow-hidden justify-center items-center gap-0 p-3"
    >
      <Image
        src="/images/products/laptopp.jpg"
        width={150}
        height={150}
        alt="product"
        className="object-cover"
      />
      <hr className="border-slate-300 mb-2 w-full border-[0.1px] px-0 mx-0" />

      <div className="self-start">
        <div className="flex gap-[1px]">
          <p className="self-start mt-[7px]">$</p>
          <p className="self-stretch font-bold text-[25px]">299</p>
          <p className="font-semibold self-start mt-[7px]">99</p>
        </div>
      </div>

      <p className="line-through self-start -mt-[7px] text-[13px]">$321.99</p>

      <p className="p text-sm mt-2">
        Acer Aspire 3 A315-24P-R7VH Slim Laptop | 15.6&quot; Full HD IPS Display
        | AMD Ryzen 3 7320U Quad-Core Processor | AMD Radeon Graphics | 8GB
        LPDDR5 | 128GB NVMe SSD | Wi-Fi 6 | Windows 11 Home in S Mode
      </p>
      <div className="flex p-[2px] gap-1 self-start items-center">
        <div className="flex gap-1">
          <Image
            src="/images/icons/star.png"
            width={15}
            height={15}
            alt="star icon"
          />
          <Image
            src="/images/icons/star.png"
            width={15}
            height={15}
            alt="star icon"
          />
          <Image
            src="/images/icons/star.png"
            width={15}
            height={15}
            alt="star icon"
          />
          <Image
            src="/images/icons/star.png"
            width={15}
            height={15}
            alt="star icon"
          />
          <Image
            src="/images/icons/star.png"
            width={15}
            height={15}
            alt="star icon"
          />
        </div>
        <p className="self-center mt-[2px] text-[12px]">1,752</p>
      </div>
      <p className="hover:text-red-600 hover:-translate-y-[1px] self-start mt-3 ml-[3px]">
        see more ...
      </p>
    </div>
  );
}
