import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef } from 'react';

interface DetailProps {
  close: () => void;
  isOpen: boolean;
}

export default function Detail({ close, isOpen }: DetailProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const container = containerRef.current;

      if (container && !container.contains(target)) {
        close();
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [close]);

  return (
    <div
      ref={containerRef}
      onClick={(e) => {
        e.stopPropagation();
      }}
      className="bg-white absolute top-4 w-[300px] z-10 -left-28 p-2 shadow-lg shadow-slate-400 rounded border-slate-400 border-[1px]"
    >
      <div className="relative">
        <div className="triangle absolute -top-[22px] left-[45%]"></div>
        <header className="flex items-center justify-between">
          <p>Shipping & Fee Details</p>
          <div onClick={() => close()} className="cursor-pointer">
            <Image
              src="/images/icons/blackX.png"
              width={15}
              height={15}
              alt="close icon"
            />
          </div>
        </header>
        <hr className="border-slate-300 mt-1 h-[3px]" />
        <div className="flex flex-col gap-1.6 text-[14px] text-slate-600">
          <div className="flex items-center justify-between">
            <p>Price</p>
            <span className="text-slate-950">$299.99</span>
          </div>
          <div className="flex items-center justify-between">
            <p>$64.32</p>
            <span className="text-slate-950">$26.99</span>
          </div>
          <div className="flex items-center justify-between">
            <Link
              href="#"
              className="text-[#007185] hover:text-red-600 hover:underline cursor-pointer"
            >
              Estimated Import Fees Deposit
            </Link>
            <span className="text-slate-950">$64.32</span>
          </div>
          <div className="flex items-center justify-between"></div>
        </div>
        <hr className="border-slate-300 mt-1 h-[3px]" />
        <div className="flex items-center justify-between">
          <p className="text-slate-600">Total</p>
          <span className="text-slate-950">$391.30</span>
        </div>
      </div>
    </div>
  );
}
