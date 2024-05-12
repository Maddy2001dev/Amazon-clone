'use client';
import { useLoaction } from '@/app/contexts/locationContext';
import Image from 'next/image';
import { useEffect, useState } from 'react';

interface Coordinates {
  latitude: number;
  longitude: number;
}

export default function LocationNav() {
  const context = useLoaction();

  return (
    <div className="hidden sm:block">
      <div className="mr-2 py-1 pr-1 cursor-pointer hover:border-[1px] hover:rounded-sm border-[1px] border-nav hover:border-white text-white flex items-center justify-center">
        <Image
          src="/images/icons/locationIcon.png"
          width={27}
          height={27}
          alt="location icon"
          className="self-end -mr-1.6 mt-[10px]"
        />
        <div className="flex flex-col items-center justify-center overflow-hidden">
          <span className="text-[12px] text-nowrap mr-[4px] leading-[14px] font-[400] text-[#ccc]">
            Deliver to
          </span>
          <span className="text-[14px] max-w-0-[60px] leading-[15px] font-[700] text-ellipsis">
            {context?.location}
          </span>
        </div>
      </div>
    </div>
  );
}
