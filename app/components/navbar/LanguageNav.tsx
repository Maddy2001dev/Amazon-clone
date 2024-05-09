'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

//  <div className="relative z-[100]">
// <div className="bg-white flex items-center gap-1 p-2 absolute top-[110px] left-[1130px] z-[100]">
//   <p className="text-[13] text-[#444]">Change language</p>
//   <Link
//     href="#"
//     className="text-[#007185] text-[11px] hover:text-red-600 hover:underline"
//   >
//     Learn more
//   </Link>
// </div>
// </div>

// <div className="bg-black/60 fixed inset-0 z-[49]">

//  </div>,

export default function LanguageNav() {
  const [showModal, setShowModal] = useState(false);
  const [element, setElement] = useState<HTMLElement>();

  useEffect(() => {
    setElement(document.body);
  }, []);

  const Modal = element
    ? createPortal(
        <>
          <div className="bg-black/60 fixed inset-0"></div>
          <div className="absolute top-[110px] left-[1000px]">
            <div className="bg-white flex items-center gap-1 p-2">
              <p className="text-[13] text-[#444]">Change language</p>
              <Link
                href="#"
                className="text-[#007185] text-[11px] hover:text-red-600 hover:underline"
              >
                Learn more
              </Link>
            </div>
          </div>
        </>,
        element
      )
    : null;

  return (
    <>
      <div
        onMouseEnter={() => setShowModal(() => true)}
        onMouseLeave={() => setShowModal(() => false)}
        className="mr-1.4 flex items-end justify-center gap-1.6 p-1 hover:border-[1px] hover:rounded-sm border-[1px] border-nav hover:border-white ml-3"
      >
        <Image
          className="mt-1"
          src="/images/icons/united-states.png"
          width={25}
          height={25}
          alt="flag"
        />
        <span className="text-white">EN</span>
        <Image
          className="self-center mt-1"
          src="/images/icons/downFill.png"
          width={12}
          height={12}
          alt="down icon"
        />
      </div>
      {showModal && Modal}
    </>
  );
}
