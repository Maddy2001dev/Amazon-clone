'use client';
import { productShape } from '@/app/components/products/ProductItem';
import { useCartContext } from '@/app/contexts/CartContext';
import Image from 'next/image';
import Link from 'next/link';
import { Dispatch, SetStateAction, useRef, useState } from 'react';

interface EndProps {
  country: string | null | undefined;
  quantity: number;
  setQuantity: Dispatch<SetStateAction<number>>;
  alreadyIn?: productShape | undefined;
  handleRemove: () => void;
  handleAdd: () => void;
  handleUpdate: () => void;
  data: productShape;
}

export default function End({
  country,
  quantity,
  setQuantity,
  alreadyIn,
  handleAdd,
  handleRemove,
  handleUpdate,
  data,
}: EndProps) {
  const selections = Array.from({ length: 27 }, (el, i) => (
    <option key={i} value={i + 1}>
      Quantity: {i + 1}
    </option>
  ));
  const cartContext = useCartContext();

  const addBtn = useRef<HTMLButtonElement | null>(null);
  const [endExpanded, setEndExpaned] = useState(false);
  return (
    <div className="flex flex-col p-2 border-slate-300 border-[1px] self-start rounded-lg">
      <div className="flex items-center justify-between">
        <p>Buy new:</p>
        <Image
          src="/images/icons/dot.png"
          width={20}
          height={20}
          alt="dot icon"
        />
      </div>
      <div className="flex gap-[1px] mb-5">
        <p className="self-start pt-[6px]">$</p>
        <p className="self-stretch font-bold text-[30px] tracking-tight">
          {cartContext?.total === 0 ? data.price : cartContext?.total}
        </p>
        <p className="font-semibold self-start pt-[6px]">99</p>
      </div>
      <p className="pp text-[#565959] text-[14px]">
        $91.31 Shipping & Import Fees Deposit to {country} Details Delivery
        <span className="font-[700] text-black"> Wednesday, May 15</span>
      </p>
      <Link
        href="#"
        className="text-[12px] text-[#007185] hover:text-red-600 flex gap-1.6 items-center my-2"
      >
        <Image
          src="/images/icons/locationBlack.png"
          width={15}
          height={5}
          alt="location icon"
          className="invert-0"
        />
        Deliver to {country}
      </Link>
      <p className="text-[#007600] text-[18px]">In Stock</p>
      <select
        className="rounded-[8px] focus:outline-none mt-1 shadow-sm shadow-slate-400 text-[13px] px-[6px] py-[4px] focus:border-[#008296] border-[#D5D9D9] bg-[#F0F2F2] hover:bg-[#E3E6E6] cursor-pointer border-[1px]"
        name="quantity"
        id="quantity"
        value={quantity}
        onChange={(e) => {
          if (!alreadyIn) {
            setQuantity(+e.target.value);
          } else {
            addBtn.current!.innerText = 'Update';
            setQuantity(+e.target.value);
          }
        }}
      >
        {selections}
      </select>
      <button
        ref={addBtn}
        onClick={() => {
          if (addBtn.current?.innerText === 'Update') {
            addBtn.current!.innerText = 'Remove from cart';
            handleUpdate();
          } else {
            handleRemove();
            handleAdd();
          }
        }}
        className="bg-[#FFD814] hover:bg-yellow-500 border-yellow-400 shadow shadow-slate-400 border-[1px] rounded-full px-3 mt-3 py-1.6"
      >
        {alreadyIn ? 'Remove from cart' : 'Add to cart'}
      </button>
      <div
        className={`flex ${
          endExpanded ? '' : 'max-h-[160px] overflow-hidden'
        } flex-col gap-1.6 text-[12px] p-1.6`}
      >
        <div className="mt-2 ">
          <div className="flex justify-between gap-1 items-center">
            <p className="self-start ">Ships from</p>
            <p className="pp-end ">Amazon.com</p>
          </div>
          <div className="flex justify-between gap-10 items-center">
            <p className="self-start ">Sold by</p>
            <p className="pp-end ">Amazon.com</p>
          </div>
          <div className="flex justify-between gap-10 items-center">
            <p className="self-start ">Returns</p>
            <p className="pp-end text-[#007185] hover:text-red-600 cursor-pointer">
              Eligible for Return, Refund or Replacement within 30 days of
              receipt
            </p>
          </div>
          <div className="flex justify-between gap-10 items-center">
            <p className="self-start ">Payments</p>
            <p className="pp-end text-[#007185] hover:text-red-600 cursor-pointer">
              Secure transaction
            </p>
          </div>
          <div className="flex justify-between gap-10 items-center">
            <p className="self-start ">Support</p>
            <p className="pp-end text-[#007185] hover:text-red-600 cursor-pointer">
              Product support included
            </p>
          </div>
        </div>
      </div>
      <button
        onClick={() => setEndExpaned((is) => !is)}
        className="pl-1.6 text-[12px] hover:text-red-600 text-left text-[#007185]"
      >
        {endExpanded ? 'Show less' : 'See more'}
      </button>
    </div>
  );
}
