import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

interface MusicProps {
  musicIsOpen: boolean;
  setter: () => void;
}

export default function Music({ musicIsOpen, setter }: MusicProps) {
  return (
    <>
      <div
        className={`w-full absolute h-full z-[55] bg-white top-0 transition-all duration-300 ${
          musicIsOpen ? 'translate-x-[0px]' : ''
        } translate-x-[365px] `}
      >
        <button
          onClick={() => setter()}
          className="cursor-pointer mt-1 hover:bg-slate-200 py-[8px] px-5 w-full font-bold flex items-center gap-1 text-lg"
        >
          <Image
            src="/images/icons/backArrow.png"
            width={28}
            height={28}
            alt="backArrow icon"
          />
          <p className="font-[600] text-[14px] leading-[16px]">Main Menu</p>
        </button>
        <hr className="border-[1px] border-slate-300" />
        <p className="font-bold text-lg p-5 pb-1 pt-4">Stream Music</p>
        <ul>
          <Link
            href="#"
            className="cursor-pointer group flex justify-between items-center hover:bg-slate-200 py-2 px-5 text-sm"
          >
            Amazon Music Unlimited
          </Link>
          <Link
            href="#"
            className="cursor-pointer group flex justify-between items-center hover:bg-slate-200 py-2 px-5 text-sm"
          >
            Free Streaming Music
          </Link>
          <Link
            href="#"
            className="cursor-pointer group flex justify-between items-center hover:bg-slate-200 py-2 px-5 text-sm"
          >
            Podcasts
          </Link>
          <Link
            href="#"
            className="cursor-pointer group flex justify-between items-center hover:bg-slate-200 py-2 px-5 text-sm"
          >
            Open Web Player
          </Link>
          <Link
            href="#"
            className="cursor-pointer group flex justify-between items-center hover:bg-slate-200 py-2 px-5 text-sm"
          >
            Download the app
          </Link>
        </ul>
      </div>
    </>
  );
}
