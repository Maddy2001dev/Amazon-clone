'use client';

import Image from 'next/image';

import { useRouter } from 'next/navigation';

export type productShape = {
  id: number;
  name: string;
  price: number;
  img: string;
  quantity: number;
  description: string;
  category: string;
};

type ProductItemProps = {
  data: productShape;
};

export default function ProductItem({ data }: ProductItemProps) {
  const router = useRouter();

  return (
    <div
      onClick={(e) => {
        router.push(`/products/${data.id}`);
      }}
      className="flex flex-col cursor-pointer bg-white overflow-hidden justify-center items-start gap-0 p-3"
    >
      <Image
        src={data.img}
        width={1000}
        height={1000}
        alt="product"
        className="object-cover self-center h-auto w-[200px]"
      />
      <hr className="border-slate-300 mb-2 w-full border-[0.1px] px-0 mx-0" />

      <div className="self-start">
        <div className="flex gap-[1px]">
          <p className="self-start mt-[7px]">$</p>
          <p className="self-stretch font-bold text-[25px]">{data.price}</p>
          <p className="font-semibold self-start mt-[7px]">99</p>
        </div>
      </div>

      <p className="line-through self-start -mt-[7px] text-[13px]">$321.99</p>

      <p className="p text-sm mt-2">{data.name}</p>
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
