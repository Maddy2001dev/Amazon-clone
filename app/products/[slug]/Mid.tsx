import Image from 'next/image';
import Link from 'next/link';
import { Dispatch, SetStateAction, useEffect, useRef } from 'react';

interface Midprops {
  country: string;
  selectedStyle?: string;
  setSelectedStyle: Dispatch<SetStateAction<string | undefined>>;
}

export default function Mid({
  country,
  selectedStyle,
  setSelectedStyle,
}: Midprops) {
  const btn1 = useRef<HTMLButtonElement | null>(null);
  const btn2 = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (!selectedStyle) {
      setSelectedStyle(btn1.current?.querySelector('p')?.innerText);
    }
  }, [selectedStyle, setSelectedStyle]);

  return (
    <div className="flex flex-col gap-1.6">
      <p className="ppp">
        Acer Aspire 3 A315-24P-R7VH Slim Laptop | 15.6&quot; Full HD IPS Display
        | AMD Ryzen 3 7320U Quad-Core Processor | AMD Radeon Graphics | 8GB
        LPDDR5 | 128GB NVMe SSD | Wi-Fi 6 | Windows 11 Home in S Mode
      </p>
      <Link
        href="#"
        className="text-[14px] leading-[20px] text-[#007185] hover:text-red-600 hover:underline"
      >
        Visit the acer Store
      </Link>
      <div className="flex gap-1 self-start justify-center items-center">
        <p className="text-sm">4.3</p>
        <div className="flex justify-center items-center gap-1.6">
          <Image
            src="/images/icons/star.png"
            width={15}
            height={15}
            alt="star icon"
          />
          <Image
            src="/images/icons/star.png"
            width={15}
            height={15}
            alt="star icon"
          />
          <Image
            src="/images/icons/star.png"
            width={15}
            height={15}
            alt="star icon"
          />
          <Image
            src="/images/icons/star.png"
            width={15}
            height={15}
            alt="star icon"
          />
          <Image
            src="/images/icons/star.png"
            width={15}
            height={15}
            alt="star icon"
          />
          <Link
            href="#"
            className="text-[14px] ml-1 text-[#007185] hover:text-red-600 hover:underline"
          >
            1,752 ratings
          </Link>
        </div>
        <span>|</span>
        <Link
          href="#"
          className="text-[14px] leading-[20px] text-[#007185] hover:text-red-600 hover:underline"
        >
          Search this page
        </Link>
      </div>
      <p className="text-[12px] leading-[16px] text-[#0F1111]">
        6K+ bought in past month
      </p>
      <hr className="border-slate-700 h-[1px]" />
      <div className="flex flex-col gap-1">
        <div className="flex gap-1 items-center">
          <div className="text-red-500 text-[24px] font-[300]">-7%</div>
          <div className="flex gap-[1px]">
            <p className="self-start text-[13px] pt-[6px]">$</p>
            <p className="self-stretch font-bold text-[28px] tracking-tight">
              299
            </p>
            <p className="font-semibold self-start text-[13px] pt-[6px]">99</p>
          </div>
        </div>
        <p className="text-[12px] text-[#565959]">
          List Price: <span className="line-through">$321.99</span>
        </p>
        <div className="text-[14px] flex gap-1.6 items-center">
          <p>$91.31 Shipping & Import Fees Deposit to {country}</p>
          <div className="cursor-pointer hover:text-red-600 text-[#007185] gap-[3px] flex items-center">
            <p>Details</p>
            <div>
              <Image
                src="/images/icons/downArrow.png"
                width={14}
                height={14}
                alt="arrow icon"
                className="hover:invert-0"
              />
            </div>
          </div>
        </div>
        <p className="text-[14px]">
          Available at a lower price from
          <Link href="#" className="text-[#007185] hover:text-red-600">
            {' '}
            other sellers{' '}
          </Link>
          that may not offer free Prime shipping.
        </p>
        <div className="flex gap-2">
          <Link
            className="flex items-center justify-center gap-[4px] hover:text-red-600 text-[14px]"
            href="/"
          >
            <div className="bg-[#eda93a]/90 rounded-sm p-[2px] text-[12px] text-white">
              Extra Savings
            </div>
            Amazon Music offer with this purchase 1 Applicable Promotion{' '}
            <Image
              src="/images/icons/downArrow.png"
              width={14}
              height={14}
              alt="arrow icon"
              className="hover:invert-0"
            />
          </Link>
        </div>
      </div>
      <hr className="border-slate-700 h-[1px]" />
      <div className="text-[14px]">
        <p className="text-#555">
          Style: <span className="font-[700]">{selectedStyle}</span>
        </p>
      </div>
      <div className="flex gap-1">
        <button
          ref={btn1}
          onClick={() =>
            setSelectedStyle(btn1.current?.querySelector('p')?.innerText)
          }
          className={`flex flex-col rounded-sm border-[1px] ${
            selectedStyle === btn1.current?.querySelector('p')?.innerText
              ? 'border-[#eda93a]'
              : 'border-black'
          } font-[700] p-1 focus:shadow-[0_0_3px_2px_rgba(228,121,17,0.5)] focus:border-[#eda93a]`}
        >
          <p className="text-[14px]">R3 7320U</p>
          <p className="text-[12px] text-red-700">$299.99</p>
        </button>
        <button
          ref={btn2}
          onClick={() =>
            setSelectedStyle(btn2.current?.querySelector('p')?.innerText)
          }
          className={`flex flex-col rounded-sm border-[1px] ${
            selectedStyle === btn2.current?.querySelector('p')?.innerText
              ? 'border-[#eda93a]'
              : 'border-black'
          } font-[700] p-1 focus:shadow-[0_0_3px_2px_rgba(228,121,17,0.5)] focus:border-[#eda93a]`}
        >
          <p className="text-[14px]">R7 5700U</p>
          <p className="text-[12px] text-red-700">$299.99</p>
        </button>
      </div>
      <div className="p-1  w-[50%]">
        <div className="flex gap-1">
          <div className=" flex flex-col gap-5">
            <div className="font-[700] text-[14px] leading-[25px] flex flex-col gap-[10px]">
              <p className="">Brand</p>
              <p className="">Model Name</p>
              <p className="">Screen Size</p>
              <p className="">Color</p>
              <p className="">Hard Disk Size</p>
              <p className="">CPU Model</p>
              <p className="">Ram Memory Installed Size</p>
              <p className="">Operating System</p>
              <p className="">Special Feature</p>
              <p className="">Graphics Card Description</p>
            </div>
          </div>
          <div className="flex flex-col gap-1.6">
            <div className="text-[14px] leading-[25px] flex flex-col gap-[10px]">
              <p>acer</p>
              <p>Laptop</p>
              <p>15.6 Inches</p>
              <p>Silver</p>
              <p>128 GB</p>
              <p>Ryzen 3</p>
              <p>8 GB</p>
              <p>Windows 11 S</p>
              <p>Backlit Keyboard</p>
              <p>Integrated</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-1.6 justify-start items-center">
        <div>
          <Image
            src="/images/icons/downArrow.png"
            width={14}
            height={14}
            alt="dot icon"
          />
        </div>
        <p>See more</p>
      </div>

      <div>
        <hr className="border-slate-700 h-[1px]" />
      </div>
    </div>
  );
}
