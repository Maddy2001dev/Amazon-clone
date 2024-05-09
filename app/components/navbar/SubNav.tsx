'use client';
import { useMenuContext } from '@/app/contexts/MenuContext';
import Image from 'next/image';

export default function SubNav() {
  const menuContext = useMenuContext();
  return (
    <div className="bg-subNav flex relative">
      <ul className="flex ml-2 gap-1">
        <li
          onClick={menuContext?.onOpen}
          className="p-1.4 py-1 flex justify-center gap-1 items-center hover:border-[1px] hover:rounded-sm border-[1px] border-subNav hover:border-white"
        >
          <Image
            src="/images/icons/menu.png"
            width={20}
            height={20}
            alt="icon menu"
          />
          <button className="text-white text-sm font-bold">All</button>
        </li>
        <li className="p-1.4 flex justify-center items-center hover:border-[1px] hover:rounded-sm border-[1px] border-subNav hover:border-white">
          <p className="text-white text-sm font-semibold">Today&apos;s Deals</p>
        </li>
        <li className="p-1.4 flex justify-center items-center hover:border-[1px] hover:rounded-sm border-[1px] border-subNav hover:border-white">
          <p className="text-white text-sm font-semibold">Customer Service</p>
        </li>
        <li className="p-1.4 flex justify-center items-center hover:border-[1px] hover:rounded-sm border-[1px] border-subNav hover:border-white">
          <p className="text-white text-sm font-semibold">Registry</p>
        </li>
        <li className="p-1.4 flex justify-center items-center hover:border-[1px] hover:rounded-sm border-[1px] border-subNav hover:border-white">
          <p className="text-white text-sm font-semibold">Gift Cards</p>
        </li>
        <li className="p-1.4 flex justify-center items-center hover:border-[1px] hover:rounded-sm border-[1px] border-subNav hover:border-white">
          <p className="text-white text-sm font-semibold">Sell</p>
        </li>
      </ul>
    </div>
  );
}
