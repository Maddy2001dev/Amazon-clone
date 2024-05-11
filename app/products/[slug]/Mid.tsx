import Image from 'next/image';
import Link from 'next/link';
import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';
import Rate from './Rate';
import Detail from './Detail';
import Music from './Music';
import { productShape } from '@/app/components/products/ProductItem';

interface Midprops {
  country: string;
  selectedStyle?: string;
  setSelectedStyle: Dispatch<SetStateAction<string | undefined>>;
  data: productShape;
}

export default function Mid({
  country,
  selectedStyle,
  setSelectedStyle,
  data,
}: Midprops) {
  const btn1 = useRef<HTMLButtonElement | null>(null);
  const btn2 = useRef<HTMLButtonElement | null>(null);

  const [midExpanded, setMidExpaned] = useState(false);
  const [olExpanded, setOlExpaned] = useState(false);
  const [rateOpen, setRateOpen] = useState(true);
  const [detailOpen, setDetailOpen] = useState(false);
  const [musicOpen, setMusicOpen] = useState(false);

  useEffect(() => {
    if (!selectedStyle) {
      setSelectedStyle(btn1.current?.querySelector('p')?.innerText);
    }
  }, [selectedStyle, setSelectedStyle]);

  return (
    <div className="flex flex-col gap-1.6">
      <p className="ppp">{data.description}</p>
      <Link
        href="#"
        className="text-[14px] leading-[20px] text-[#007185] hover:text-red-600 hover:underline"
      >
        Visit the acer Store
      </Link>
      <div className="flex gap-1 self-start justify-center items-center">
        <div
          onMouseEnter={() => {
            setRateOpen(() => true);
          }}
          onMouseLeave={() => setRateOpen(() => false)}
          className="flex relative justify-center cursor-pointer items-center gap-1.6"
        >
          <div className="">
            {rateOpen && <Rate />}
            <div className="flex items-center gap-[4px]">
              <p className="text-sm">4.3</p>
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
            </div>
          </div>
        </div>
        <Link
          href="#"
          className="text-[14px] ml-1 text-[#007185] hover:text-red-600 hover:underline"
        >
          1,752 ratings
        </Link>
        <span>|</span>
        <Link
          href="#"
          className="text-[14px] text-[#007185] hover:text-red-600 hover:underline"
        >
          Search this page
        </Link>
      </div>
      <p className="text-[12px] leading-[16px] text-[#0F1111]">
        6K+ bought in past month
      </p>
      <hr className="border-slate-300 mt-1 h-[3px]" />
      <div className="flex flex-col gap-1">
        <div className="flex gap-1 items-center">
          <div className="text-red-500 text-[24px] font-[300]">-7%</div>
          <div className="flex gap-[1px]">
            <p className="self-start text-[13px] pt-[6px]">$</p>
            <p className="self-stretch font-bold text-[28px] tracking-tight">
              {data.price}
            </p>
            <p className="font-semibold self-start text-[13px] pt-[6px]">99</p>
          </div>
        </div>
        <p className="text-[12px] text-[#565959]">
          List Price: <span className="line-through">$321.99</span>
        </p>
        <div className="text-[14px] flex gap-1.6 items-center">
          <p>$91.31 Shipping & Import Fees Deposit to {country}</p>
          <div
            onClick={() => setDetailOpen((is) => !is)}
            className="relative gap-[3px] flex items-center"
          >
            {detailOpen && (
              <Detail close={() => setDetailOpen(false)} isOpen={detailOpen} />
            )}
            <p className="text-[#007185] cursor-pointer hover:text-red-600">
              Details
            </p>
            <div>
              <Image
                src="/images/icons/downArrow.png"
                width={12}
                height={12}
                alt="arrow icon"
                className="hover:invert-0 cursor-pointer"
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
        <div
          onMouseEnter={() => setMusicOpen(() => true)}
          onMouseLeave={() => setMusicOpen(() => false)}
          className="flex gap-2 relative self-start"
        >
          {musicOpen && <Music />}
          <Link
            className="flex items-center justify-center gap-[4px] hover:text-red-600 text-[14px]"
            href="#"
          >
            <div className="bg-[#eda93a]/90 rounded-sm p-[2px] text-[12px] text-white">
              Extra Savings
            </div>
            <p>Amazon Music offer with this purchase 1 Applicable Promotion </p>
            <Image
              src="/images/icons/downArrow.png"
              width={12}
              height={12}
              alt="arrow icon"
              className="hover:invert-0"
            />
          </Link>
        </div>
      </div>
      <hr className="border-slate-300 mt-1 h-[3px]" />
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
          <p className="text-[12px] text-red-700">$499.99</p>
        </button>
      </div>
      <div
        className={`p-1 ${
          midExpanded ? '' : 'overflow-hidden max-h-[240px]'
        } w-[50%]`}
      >
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
      <div className="flex pl-1 gap-1.6 justify-start items-center">
        <div>
          <Image
            src={`/images/icons/${midExpanded ? 'upArrow' : 'downArrow'}.png`}
            width={12}
            height={12}
            alt="dot icon"
          />
        </div>
        <button
          className="text-[#007185] text-[14px] hover:text-red-600"
          onClick={() => setMidExpaned((is) => !is)}
        >
          {midExpanded ? 'Show less' : 'See more'}
        </button>
      </div>
      <hr className="border-slate-700 h-[1px]" />
      <div className="p-1 mt-1 max-w-[670px]">
        <p className="text-[16px] font-[700]">About this item</p>
        <ol
          className={`flex ${
            !olExpanded ? 'overflow-hidden max-h-[385px]' : ''
          } flex-col text-[#0F1111] font-[700] gap-1.6 text-[14px] leading-[20px] p-3 list-disc`}
        >
          <li>
            <p>
              Purposeful Design: Travel with ease and look great doing it with
              the Aspire&apos;s 3 thin, light design.
            </p>
          </li>
          <li>
            <p>
              Ready-to-Go Performance: The Aspire 3 is ready-to-go with the
              latest AMD Ryzen 3 7320U Processor with Radeon Graphics—ideal for
              the entire family, with performance and productivity at the core.
            </p>
          </li>
          <li>
            <p>
              Visibly Stunning: Experience sharp details and crisp colors on the
              15.6&quot; Full HD IPS display with 16:9 aspect ratio and narrow
              bezels.
            </p>
          </li>
          <li>
            <p>
              Internal Specifications: 8GB LPDDR5 Onboard Memory; 128GB NVMe
              solid-state drive storage to store your files and media
            </p>
          </li>
          <li>
            <p>
              The HD front-facing camera uses Acer’s TNR (Temporal Noise
              Reduction) technology for high-quality imagery in low-light
              conditions. Acer PurifiedVoice technology with AI Noise Reduction
              filters out any extra sound for clear communication over online
              meetings.
            </p>
          </li>
          <li>
            <p>
              Wireless Wi-Fi 6 Convenience: Maintain a strong, consistent
              wireless signal with Wi-Fi 6 (aka 802.11ax) and 2x2 MU-MIMO
              technology.
            </p>
          </li>
          <li>
            <p>
              Improved Thermals: With a 78% increase in fan surface area, enjoy
              an improved thermal system and an additional 17% thermal capacity.
              Allowing for longer, more efficient work sessions while not
              plugged in.
            </p>
          </li>
          <li>
            <p>
              Ports For All Your Accessories: 1 - USB Type-C Port USB 3.2 Gen 2
              (up to 10 Gbps) DisplayPort over USB Type-C & USB Charging, 2 -
              USB 3.2 Gen 1 Ports, 1 - HDMI 2.1 Port with HDCP support, 1 -
              Headphone/Speaker/Line-Out Jack, DC-in for AC adapter
            </p>
          </li>
          <li>
            <p>
              What&apos;s In the Box: Acer Aspire Laptop, AC Adapter, Power Cord
            </p>
          </li>
          <li>
            <p>Keyboard backlight not present on this model</p>
          </li>
        </ol>
        <div className="flex gap-1.6 justify-start items-center">
          <div>
            <Image
              src={`/images/icons/${olExpanded ? 'upArrow' : 'downArrow'}.png`}
              width={12}
              height={12}
              alt="dot icon"
            />
          </div>
          <button
            className="text-[#007185] text-[14px] hover:text-red-600"
            onClick={() => setOlExpaned((is) => !is)}
          >
            {olExpanded ? 'Show less' : 'See more'}
          </button>
        </div>
        <div className="flex flex-col mt-2">
          <Link href="#" className="flex gap-1 items-center">
            <Image
              src="/images/icons/chat.png"
              width={25}
              height={25}
              alt="dot icon"
            />
            <p className="text-[#007185] text-[14px] hover:text-red-600 hover:underline">
              Report an issue with this product or seller
            </p>
          </Link>
          <p className="text-[14px] text-[#0F1111] leading-[20px]">
            <span className="font-extrabold">Note: </span>Products with
            electrical plugs are designed for use in the US. Outlets and voltage
            differ internationally and this product may require an adapter or
            converter for use in your destination. Please check compatibility
            before purchasing.
          </p>
        </div>
      </div>
      <hr className="border-slate-700 h-[1px]" />
    </div>
  );
}
