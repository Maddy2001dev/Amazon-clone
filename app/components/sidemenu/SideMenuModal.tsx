'use client';
import Image from 'next/image';

import { useMenuContext } from '@/app/contexts/MenuContext';

export default function SideMenuModal() {
  const menuContext = useMenuContext();

  return (
    <>
      <div
        onClick={(e) => {
          if (e.target === e.currentTarget) menuContext?.onClose();
        }}
        className={`${
          menuContext?.isOpen ? 'translate-x-0' : '-translate-x-full'
        }   flex fixed justify-start items-start overflow-y-hidden overflow-x-hidden } inset-0 z-50 outline-none focus:outline-none bg-black/80`}
      >
        <div
          className={`h-full translate duration-300 ${
            menuContext?.isOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <div className="bg-slate-50 flex flex-col">
            <div>
              <div className="p-[10px] flex gap-1 items-center justify-start pl-5 bg-menuHead w-[360px]">
                <Image
                  src="/images/icons/profile.png"
                  width={30}
                  height={30}
                  alt="Profile icon"
                />
                <p className="text-white font-bold text-lg">Hello, Sign in</p>
              </div>
            </div>
            <div id="this" className="overflow-y-scroll max-h-screen">
              <p className="font-bold text-lg p-5 pb-1 pt-4">
                Digital Content & Devices
              </p>
              <ul>
                <li className="group flex justify-between items-center hover:bg-slate-200 py-2 px-5 text-sm">
                  Amazon Music
                  <Image
                    src="/images/icons/rAarrow.png"
                    width={25}
                    height={25}
                    alt="arrow icon"
                    className="group-hover:invert"
                  />
                </li>
                <li className="group flex justify-between items-center hover:bg-slate-200 py-2 px-5 text-sm">
                  Kindle E -readers & Books
                  <Image
                    src="/images/icons/rAarrow.png"
                    width={25}
                    height={25}
                    alt="arrow icon"
                    className="group-hover:invert"
                  />
                </li>
                <li className="group flex justify-between items-center hover:bg-slate-200 py-2 px-5 text-sm">
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
              <p className="font-bold text-lg p-5 pb-1 pt-4">
                Shop by Department
              </p>
              <ul>
                <li className="group flex justify-between items-center hover:bg-slate-200 py-2 px-5 text-sm">
                  Electronics
                  <Image
                    src="/images/icons/rAarrow.png"
                    width={25}
                    height={25}
                    alt="arrow icon"
                    className="group-hover:invert"
                  />
                </li>
                <li className="group flex justify-between items-center hover:bg-slate-200 py-2 px-5 text-sm">
                  Computer
                  <Image
                    src="/images/icons/rAarrow.png"
                    width={25}
                    height={25}
                    alt="arrow icon"
                    className="group-hover:invert"
                  />
                </li>
                <li className="group flex justify-between items-center hover:bg-slate-200 py-2 px-5 text-sm">
                  Smart Home
                  <Image
                    src="/images/icons/rAarrow.png"
                    width={25}
                    height={25}
                    alt="arrow icon"
                    className="group-hover:invert"
                  />
                </li>
                <li className="group flex justify-between items-center hover:bg-slate-200 py-2 px-5 text-sm">
                  Arts & Crafts
                  <Image
                    src="/images/icons/rAarrow.png"
                    width={25}
                    height={25}
                    alt="arrow icon"
                    className="group-hover:invert"
                  />
                </li>
                <li className="group flex justify-between items-center hover:bg-slate-200 py-2 px-5 text-sm">
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
              <p className="font-bold text-lg p-5 pb-1 pt-4">
                Programs & Features
              </p>
              <ul>
                <li className="group flex justify-between items-center hover:bg-slate-200 py-2 px-5 text-sm">
                  Gift Cards
                  <Image
                    src="/images/icons/rAarrow.png"
                    width={25}
                    height={25}
                    alt="arrow icon"
                    className="group-hover:invert"
                  />
                </li>
                <li className="group flex justify-between items-center hover:bg-slate-200 py-2 px-5 text-sm">
                  Shop By Interest
                  <Image
                    src="/images/icons/rAarrow.png"
                    width={25}
                    height={25}
                    alt="arrow icon"
                    className="group-hover:invert"
                  />
                </li>
                <li className="group flex justify-between items-center hover:bg-slate-200 py-2 px-5 text-sm">
                  Amazon live
                  <Image
                    src="/images/icons/rAarrow.png"
                    width={25}
                    height={25}
                    alt="arrow icon"
                    className="group-hover:invert"
                  />
                </li>
                <li className="group flex justify-between items-center hover:bg-slate-200 py-2 px-5 text-sm">
                  International Shopping
                  <Image
                    src="/images/icons/rAarrow.png"
                    width={25}
                    height={25}
                    alt="arrow icon"
                    className="group-hover:invert"
                  />
                </li>
                <li className="group flex justify-between items-center hover:bg-slate-200 py-2 px-5 text-sm">
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
              <ul>
                <li className="group flex justify-between items-center hover:bg-slate-200 py-2 px-5 text-sm">
                  Your Account
                  <Image
                    src="/images/icons/rAarrow.png"
                    width={25}
                    height={25}
                    alt="arrow icon"
                    className="group-hover:invert"
                  />
                </li>
                <li className="group flex justify-between items-center hover:bg-slate-200 py-2 px-5 text-sm">
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
                <li className="group flex justify-between items-center hover:bg-slate-200 py-2 px-5 text-sm">
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
                <li className="group flex justify-between items-center hover:bg-slate-200 py-2 px-5 text-sm">
                  Customer Service
                  <Image
                    src="/images/icons/rAarrow.png"
                    width={25}
                    height={25}
                    alt="arrow icon"
                    className="group-hover:invert"
                  />
                </li>
                <li className="group flex justify-between items-center hover:bg-slate-200 py-2 px-5 text-sm">
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
          </div>
          <div className="self-start">
            <Image
              // onClick={() => setShowModal((show) => !show)}
              onClick={menuContext?.onClose}
              src="/images/icons/x.png"
              width={38}
              height={38}
              alt="x icon"
              className="hover:cursor-pointer mt-1"
            />
          </div>
        </div>
      </div>
    </>
  );
}
