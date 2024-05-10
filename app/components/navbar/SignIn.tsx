'use client';
import { useOverlayContext } from '@/app/contexts/OverlayContext';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function SignIn() {
  const [showModal, setShowModal] = useState(false);
  const overlay = useOverlayContext();

  useEffect(() => {
    if (showModal) {
      overlay?.onOpen();
    }
    if (!showModal) {
      overlay?.onClose();
    }
  }, [showModal]);

  const Modal = (
    <>
      <div className="absolute top-[56px] left-[975px] z-[51]">
        <div className="relative">
          <div className="triangle absolute top-[-10px] left-[355px]"></div>
          <div className="bg-white rounded flex flex-col justify-center gap-1 p-2 w-[500px]">
            <button className="bg-[#FFD814] hover:bg-yellow-500 border-yellow-400 shadow self-center w-[70%] shadow-slate-400 border-[1px] rounded-full px-3 py-1.6">
              Sign in
            </button>
            <div className="text-[11px] self-center flex gap-1">
              <p>New customer?</p>
              <Link href="#" className="text-[#007185] hover:underline">
                Start here.
              </Link>
            </div>
            <hr className="border-slate-200 h-[1px]" />
            <div className="p-1.6 flex justify-between ">
              <div className="border-r-slate-200 flex flex-col border-r-[1px] w-[50%] p-1">
                <Link href="#" className="font-[700] text-[16px]">
                  Your Lists
                </Link>
                <Link
                  href="#"
                  className="text-[#444] cursor-pointer text-[13px] hover:underline hover:text-[#e47911]"
                >
                  Create a List
                </Link>
                <Link
                  href="#"
                  className="text-[#444] cursor-pointer text-[13px] hover:underline hover:text-[#e47911]"
                >
                  Find a List or Registry
                </Link>
              </div>
              <div className="w-[50%] flex flex-col p-1">
                <Link href="#" className="font-[700] text-[16px]">
                  Your Account
                </Link>
                <Link
                  href="#"
                  className="text-[#444] cursor-pointer text-[13px] hover:underline hover:text-[#e47911]"
                >
                  Account
                </Link>
                <Link
                  href="#"
                  className="text-[#444] cursor-pointer text-[13px] hover:underline hover:text-[#e47911]"
                >
                  orders
                </Link>
                <Link
                  href="#"
                  className="text-[#444] cursor-pointer text-[13px] hover:underline hover:text-[#e47911]"
                >
                  Recommendations
                </Link>
                <Link
                  href="#"
                  className="text-[#444] cursor-pointer text-[13px] hover:underline hover:text-[#e47911]"
                >
                  Browsing
                </Link>
                <Link
                  href="#"
                  className="text-[#444] cursor-pointer text-[13px] hover:underline hover:text-[#e47911]"
                >
                  History
                </Link>
                <Link
                  href="#"
                  className="text-[#444] cursor-pointer text-[13px] hover:underline hover:text-[#e47911]"
                >
                  Watchlist
                </Link>
                <Link
                  href="#"
                  className="text-[#444] cursor-pointer text-[13px] hover:underline hover:text-[#e47911]"
                >
                  Video
                </Link>
                <Link
                  href="#"
                  className="text-[#444] cursor-pointer text-[13px] hover:underline hover:text-[#e47911]"
                >
                  Purchases & Rentals
                </Link>
                <Link
                  href="#"
                  className="text-[#444] cursor-pointer text-[13px] hover:underline hover:text-[#e47911]"
                >
                  Kindle Unlimited
                </Link>
                <Link
                  href="#"
                  className="text-[#444] cursor-pointer text-[13px] hover:underline hover:text-[#e47911]"
                >
                  Subscribe & Save Items
                </Link>
                <Link
                  href="#"
                  className="text-[#444] cursor-pointer text-[13px] hover:underline hover:text-[#e47911]"
                >
                  Memberships & Subscriptions
                </Link>
                <Link
                  href="#"
                  className="text-[#444] cursor-pointer text-[13px] hover:underline hover:text-[#e47911]"
                >
                  Music Library
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );

  return (
    <div
      onMouseEnter={() => setShowModal(() => true)}
      onMouseLeave={() => setShowModal(() => false)}
      className="mr-1.4 p-1.6 cursor-pointer hover:border-[1px] hover:rounded-sm border-[1px] border-nav hover:border-white"
    >
      <div className="text-white">
        <p className="text-[12px]">Hello, sign in</p>
        <div className="flex gap-1.6">
          <p className="font-extrabold text-[15px]">Account & Lists</p>
          <Image
            className="self-center mt-1"
            src="/images/icons/downFill.png"
            width={12}
            height={12}
            alt="down icon"
          />
        </div>
      </div>
      {showModal && Modal}
    </div>
  );
}
