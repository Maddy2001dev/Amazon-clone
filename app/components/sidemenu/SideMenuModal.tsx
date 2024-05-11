'use client';

import Image from 'next/image';

import { useMenuContext } from '@/app/contexts/MenuContext';
import { useState } from 'react';
import Music from './Music';

export default function SideMenuModal() {
  const menuContext = useMenuContext();
  const [musicIsOpen, setMusicIsOpen] = useState(false);

  const initialContent = (
    <div className="">
      <p className="font-bold text-lg p-5 pb-1 pt-4">
        Digital Content & Devices
      </p>
      <ul>
        <li
          onClick={() => {
            setTimeout(() => {
              setMusicIsOpen(true);
            }, 0);
          }}
          className="cursor-pointer group flex justify-between items-center hover:bg-slate-200 py-2 px-5 text-sm"
        >
          Amazon Music
          <Image
            src="/images/icons/rAarrow.png"
            width={25}
            height={25}
            alt="arrow icon"
            className="group-hover:invert"
          />
        </li>
        <li className="cursor-pointer group flex justify-between items-center hover:bg-slate-200 py-2 px-5 text-sm">
          Kindle E -readers & Books
          <Image
            src="/images/icons/rAarrow.png"
            width={25}
            height={25}
            alt="arrow icon"
            className="group-hover:invert"
          />
        </li>
        <li className="cursor-pointer group flex justify-between items-center hover:bg-slate-200 py-2 px-5 text-sm">
          Amazon Appstore
          <Image
            src="/images/icons/rAarrow.png"
            width={25}
            height={25}
            alt="arrow icon"
            className="group-hover:invert"
          />
        </li>
      </ul>
      <hr className="border-[1px]" />
      <p className="font-bold text-lg p-5 pb-1 pt-4">Shop by Department</p>
      <ul>
        <li className="cursor-pointer group flex justify-between items-center hover:bg-slate-200 py-2 px-5 text-sm">
          Electronics
          <Image
            src="/images/icons/rAarrow.png"
            width={25}
            height={25}
            alt="arrow icon"
            className="group-hover:invert"
          />
        </li>
        <li className="cursor-pointer group flex justify-between items-center hover:bg-slate-200 py-2 px-5 text-sm">
          Computer
          <Image
            src="/images/icons/rAarrow.png"
            width={25}
            height={25}
            alt="arrow icon"
            className="group-hover:invert"
          />
        </li>
        <li className="cursor-pointer group flex justify-between items-center hover:bg-slate-200 py-2 px-5 text-sm">
          Smart Home
          <Image
            src="/images/icons/rAarrow.png"
            width={25}
            height={25}
            alt="arrow icon"
            className="group-hover:invert"
          />
        </li>
        <li className="cursor-pointer group flex justify-between items-center hover:bg-slate-200 py-2 px-5 text-sm">
          Arts & Crafts
          <Image
            src="/images/icons/rAarrow.png"
            width={25}
            height={25}
            alt="arrow icon"
            className="group-hover:invert"
          />
        </li>
        <li className="cursor-pointer group flex justify-between items-center hover:bg-slate-200 py-2 px-5 text-sm">
          See all
          <Image
            src="/images/icons/rAarrow.png"
            width={25}
            height={25}
            alt="arrow icon"
            className="group-hover:invert"
          />
        </li>
      </ul>
      <hr className="border-[1px]" />

      <p className="font-bold text-lg p-5 pb-1 pt-4">Programs & Features</p>
      <ul>
        <li className="cursor-pointer group flex justify-between items-center hover:bg-slate-200 py-2 px-5 text-sm">
          Gift Cards
          <Image
            src="/images/icons/rAarrow.png"
            width={25}
            height={25}
            alt="arrow icon"
            className="group-hover:invert"
          />
        </li>
        <li className="cursor-pointer group flex justify-between items-center hover:bg-slate-200 py-2 px-5 text-sm">
          Shop By Interest
          <Image
            src="/images/icons/rAarrow.png"
            width={25}
            height={25}
            alt="arrow icon"
            className="group-hover:invert"
          />
        </li>
        <li className="cursor-pointer group flex justify-between items-center hover:bg-slate-200 py-2 px-5 text-sm">
          Amazon live
          <Image
            src="/images/icons/rAarrow.png"
            width={25}
            height={25}
            alt="arrow icon"
            className="group-hover:invert"
          />
        </li>
        <li className="cursor-pointer group flex justify-between items-center hover:bg-slate-200 py-2 px-5 text-sm">
          International Shopping
          <Image
            src="/images/icons/rAarrow.png"
            width={25}
            height={25}
            alt="arrow icon"
            className="group-hover:invert"
          />
        </li>
        <li className="cursor-pointer group flex justify-between items-center hover:bg-slate-200 py-2 px-5 text-sm">
          See all
          <Image
            src="/images/icons/rAarrow.png"
            width={25}
            height={25}
            alt="arrow icon"
            className="group-hover:invert"
          />
        </li>
      </ul>
      <hr className="border-[1px]" />
      <p className="font-bold text-lg p-5 pb-1 pt-4">Help & Settings</p>
      <ul className="pb-[50px]">
        <li className="cursor-pointer group flex justify-between items-center hover:bg-slate-200 py-2 px-5 text-sm">
          Your Account
          <Image
            src="/images/icons/rAarrow.png"
            width={25}
            height={25}
            alt="arrow icon"
            className="group-hover:invert"
          />
        </li>
        <li className="cursor-pointer group flex justify-between items-center hover:bg-slate-200 py-2 px-5 text-sm">
          <p className="flex gap-1">
            <Image
              src="/images/icons/globe.png"
              width={25}
              height={25}
              alt="arrow icon"
              className="group-hover:invert"
            />
            English
          </p>
          <Image
            src="/images/icons/rAarrow.png"
            width={25}
            height={25}
            alt="arrow icon"
            className="group-hover:invert"
          />
        </li>
        <li className="cursor-pointer group flex justify-between items-center hover:bg-slate-200 py-2 px-5 text-sm">
          <p className="flex gap-1">
            <Image
              src="/images/icons/united-states.png"
              width={20}
              height={20}
              alt="usFlag"
            />
            United States
          </p>
          <Image
            src="/images/icons/rAarrow.png"
            width={25}
            height={25}
            alt="arrow icon"
            className="group-hover:invert"
          />
        </li>
        <li className="cursor-pointer group flex justify-between items-center hover:bg-slate-200 py-2 px-5 text-sm">
          Customer Service
          <Image
            src="/images/icons/rAarrow.png"
            width={25}
            height={25}
            alt="arrow icon"
            className="group-hover:invert"
          />
        </li>
        <li className="cursor-pointer group flex justify-between items-center hover:bg-slate-200 py-2 px-5 text-sm">
          Sign in
          <Image
            src="/images/icons/rAarrow.png"
            width={25}
            height={25}
            alt="arrow icon"
            className="group-hover:invert"
          />
        </li>
      </ul>
    </div>
  );

  return (
    <div className="overflow-y-scroll">
      {menuContext?.isOpen && (
        <div
          onClick={() => {
            menuContext?.onClose();
            setMusicIsOpen(false);
          }}
          className="justify-center items-star flex flex-row overflow-x-hidden overflow-y-auto fixed inset-0 z-[51] outline-none focus:outline-none bg-[#000] opacity-[0.6]"
        ></div>
      )}
      <div
        className={`fixed inset-0 z-[53] transition duration-300 translate-x-[${
          menuContext?.isOpen ? '0' : '-365px'
        }] w-[365px] outline-none focus:outline-none bg-white`}
      >
        <div id="container">
          <header className="bg-[#232F3E] flex items-center pl-[30px] gap-[10px] p-[8px]">
            <Image
              src="/images/icons/profile.png"
              width={35}
              height={35}
              alt="Profile icon"
            />
            <p className="text-white font-extrabold text-lg">Hello, sign in</p>
            <p>{musicIsOpen ? 'true' : 'false'}</p>
          </header>
          <main className="overflow-scroll relative h-screen">
            {menuContext?.isOpen && (
              <>
                {initialContent}
                <Music
                  setter={() => setMusicIsOpen(false)}
                  musicIsOpen={musicIsOpen}
                />
              </>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}
