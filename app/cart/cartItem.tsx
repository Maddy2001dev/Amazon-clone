'use client';
import Image from 'next/image';
import { productShape } from '../components/products/ProductItem';
import Link from 'next/link';
import { useState } from 'react';

interface CartItemProps {
  product: productShape;
}

export default function CartItem({ product }: CartItemProps) {
  const [quantity, setQuantity] = useState<number>(1);
  const selections = Array.from({ length: 27 }, (el, i) => (
    <option key={i} value={i + 1}>
      Quantity: {i + 1}
    </option>
  ));
  return (
    <div className="w-full">
      <div className="flex gap-5">
        <div>
          <Image
            src={product.img}
            width={300}
            height={300}
            alt={product.name}
          />
        </div>

        <div>
          <p className="pCart">{product.description}</p>
          <p className="text-[#007600] py-1 text-[17px]">In Stock</p>
          <div>
            <Image
              src="/images/icons/prime.png"
              width={70}
              height={70}
              alt="prime icon"
            />
            <div className="flex py-1 text-[14px] gap-1">
              <input type="checkbox" />
              <p>
                This will be a gift{' '}
                <Link href="#" className="text-[#007185] hover:text-red-600">
                  Learn more
                </Link>
              </p>
            </div>
            <div className="text-[14px]">
              <p>
                <span className="font-bold text-[16px]">Style Name:</span> 0.5
                litre work container
              </p>
              <p>
                <span className="font-bold text-[16px]">Colour name:</span>{' '}
                white
              </p>
            </div>
            <div>
              <select
                className="rounded-[8px] focus:outline-none mt-1 shadow-sm shadow-slate-400 text-[13px] px-[6px] py-[4px] focus:border-[#008296] border-[#D5D9D9] bg-[#F0F2F2] hover:bg-[#E3E6E6] cursor-pointer border-[1px]"
                name="quantity"
                id="quantity"
                value={quantity}
                onChange={(e) => {
                  // if (!alreadyIn) {
                  //   setQuantity(+e.target.value);
                  // } else {
                  //   addBtn.current!.innerText = 'Update';
                  //   setQuantity(+e.target.value);
                  // }
                }}
              >
                {selections}
              </select>
              <span className="mx-2 text-slate-300">|</span>
              <button className="text-[#007185] hover:text-red-600">
                Delete
              </button>
              <span className="mx-2 text-slate-300">|</span>
              <button className="text-[#007185] hover:text-red-600">
                Save for later
              </button>
              <span className="mx-2 text-slate-300">|</span>
              <button className="text-[#007185] hover:text-red-600">
                See more like this
              </button>
              <span className="mx-2 text-slate-300">|</span>
              <button className="text-[#007185] hover:text-red-600">
                Share
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-1 justify-end">
          <p className="font-bold text-lg">${product.price}</p>
        </div>
      </div>
      <hr className="border-slate-300 mt-4 h-[3px]" />
    </div>
  );
}
