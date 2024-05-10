'use client';
import { useOverlayContext } from '@/app/contexts/OverlayContext';
import Image from 'next/image';
import Link from 'next/link';
import { ChangeEvent, useEffect, useState } from 'react';

export default function LanguageNav() {
  const [showModal, setShowModal] = useState(false);

  const overlay = useOverlayContext();
  const [lang, setLang] = useState('en');

  useEffect(() => {
    if (showModal) {
      overlay?.onOpen();
    }
    if (!showModal) {
      overlay?.onClose();
    }
  }, [showModal]);

  function handleChange(e: ChangeEvent) {
    const el = e.target as HTMLInputElement;
    setLang(el.value);
  }

  const Modal = (
    <>
      <div className="absolute r top-[55px] left-[1020px] z-[51]">
        <div className="relative">
          <div className="triangle absolute top-[-10px] left-[166px]"></div>
          <div className="bg-white rounded flex flex-col justify-center gap-1 p-2">
            <div className="flex gap-[8px] items-center mb-4">
              <p className="text-[13px] text-[#444]">Change language</p>
              <Link
                href="#"
                className="text-[#007185] text-[13px] hover:text-red-600 hover:underline"
              >
                Learn more
              </Link>
            </div>
            <ul className="text-[14px] flex flex-col gap-1">
              <li className="flex gap-1">
                <input
                  type="radio"
                  checked={lang === 'en'}
                  onChange={(e) => handleChange(e)}
                  value="en"
                />
                <p>English - EN</p>
              </li>
              <li className="flex gap-1">
                <input
                  onChange={(e) => handleChange(e)}
                  type="radio"
                  checked={lang === 'es'}
                  value="es"
                  className=""
                />
                <p>español - ES</p>
              </li>
              <li className="flex gap-1">
                <input
                  onChange={(e) => handleChange(e)}
                  type="radio"
                  checked={lang === 'ar'}
                  value="ar"
                  className=""
                />
                <p>العربية - AR</p>
              </li>
              <li className="flex gap-1">
                <input
                  onChange={(e) => handleChange(e)}
                  type="radio"
                  checked={lang === 'de'}
                  value="de"
                  className=""
                />
                <p>Deutsch - DE</p>
              </li>
              <li className="flex gap-1">
                <input
                  onChange={(e) => handleChange(e)}
                  type="radio"
                  checked={lang === 'he'}
                  value="he"
                  className=""
                />
                <p>עברית - HE</p>
              </li>
              <li className="flex gap-1">
                <input
                  onChange={(e) => handleChange(e)}
                  type="radio"
                  checked={lang === 'ko'}
                  value="ko"
                  className=""
                />
                <p>한국어 - KO</p>
              </li>
              <li className="flex gap-1">
                <input
                  onChange={(e) => handleChange(e)}
                  type="radio"
                  checked={lang === 'pt'}
                  value="pt"
                  className=""
                />
                <p>português - PT</p>
              </li>
              <li className="flex gap-1">
                <input
                  onChange={(e) => handleChange(e)}
                  type="radio"
                  checked={lang === 'zh'}
                  value="zh"
                  className=""
                />
                <p>中文 (简体) - ZH</p>
              </li>
            </ul>
            <hr className="border-slate-400 h-[1px]" />
            <div className="flex gap-[8px] items-center">
              <p className="text-[13px] text-[#444]">Change currency</p>
              <Link
                href="#"
                className="text-[#007185] text-[13px] hover:text-red-600 hover:underline"
              >
                Learn more
              </Link>
            </div>
            <div className="flex justify-between items-cente text-[13px]">
              <p>$ - USD - US Dollar</p>
              <Link
                href="#"
                className="text-[#007185] text-[13px] hover:text-red-600 hover:underline"
              >
                Change
              </Link>
            </div>
            <hr className="border-slate-400 h-[1px]" />
            <div className="flex items-center gap-[2px]">
              <Image
                src="/images/icons/united-states.png"
                width={25}
                height={25}
                alt="flag"
              />
              <p className="  ">you are shopping on Amazon.com</p>
            </div>
            <Link
              href="#"
              className="text-center mt-1 text-[#007185] hover:underline"
            >
              Change country/region.
            </Link>
          </div>
        </div>
      </div>
    </>
  );

  return (
    <>
      <div
        onMouseEnter={() => setShowModal(() => true)}
        onMouseLeave={() => setShowModal(() => false)}
        className="mr-[4px] cursor-pointer flex items-end justify-center gap-1.6 p-1 hover:border-[1px] hover:rounded-sm border-[1px] border-nav hover:border-white ml-3"
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
        {showModal && Modal}
      </div>
    </>
  );
}
