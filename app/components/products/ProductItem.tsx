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
      className="col-span-1 cursor-pointer bg-white p-3"
    >
      <div className="flex flex-col gap-0">
        <div className="relative aspect-square overflow-hidden w-full">
          <Image
            src={data.img}
            fill
            alt={data.category}
            className="object-cover p-10 h-full w-full"
          />
        </div>
        <hr className="border-slate-300 mb-2 w-full border-[0.1px]" />

        <div className="self-start">
          <div className="flex gap-[1px]">
            <p className="self-start mt-[7px]">$</p>
            <p className="self-stretch font-bold text-[25px]">
              {data.price - data.price * 0.1}
            </p>
            <p className="font-semibold self-start mt-[7px]">99</p>
          </div>
        </div>

        <p className="line-through self-start -mt-[7px] text-[13px]">
          ${data.price}
        </p>

        <p className="p text-sm mt-2">{data.description}</p>
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
    </div>
  );
}
