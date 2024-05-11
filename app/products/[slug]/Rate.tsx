import Image from 'next/image';
import Link from 'next/link';

export default function Rate() {
  return (
    <div className="absolute z-[10] bg-white top-[25px] -left-[67px] p-2 shadow-lg shadow-slate-400 rounded border-slate-400 border-[1px]">
      <div className="relative">
        <div className="triangle absolute -top-[22px] left-[30%]"></div>
        <header className="">
          <div className="flex items-center gap-1">
            <div className="flex items-center mb-[2px] gap-[2px]">
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
            <p className="text-[18px] font-extrabold">4.3 out of 5</p>
          </div>
          <p className="text-[14px]">1,770 global ratings</p>
        </header>
        <div className="flex flex-col gap-1 mt-4">
          <Link
            href="#"
            className="flex hover:underline text-[14px] text-[#007185] hover:text-red-600 gap-1 items-center "
          >
            <p className="w-[50px]">4 star</p>
            <div className="h-[20px] rounded w-[300px] border-slate-600 border-[1px] relative overflow-hidden">
              <div className="h-full rounded bg-yellow-400 absolute left-0 top-0 w-[65%]"></div>
            </div>
            <p>65%</p>
          </Link>
          <Link
            href="#"
            className="flex hover:underline text-[14px] text-[#007185] hover:text-red-600 gap-1 items-center "
          >
            <p className="w-[50px]">4 star</p>
            <div className="h-[20px] rounded w-[300px] border-slate-600 border-[1px] relative overflow-hidden">
              <div className="h-full rounded bg-yellow-400 absolute left-0 top-0 w-[17%]"></div>
            </div>
            <p>17%</p>
          </Link>
          <Link
            href="#"
            className="flex hover:underline text-[14px] text-[#007185] hover:text-red-600 gap-1 items-center "
          >
            <p className="w-[50px]">3 star</p>
            <div className="h-[20px] rounded w-[300px] border-slate-600 border-[1px] relative overflow-hidden">
              <div className="h-full rounded bg-yellow-400 absolute left-0 top-0 w-[7%]"></div>
            </div>
            <p>7%</p>
          </Link>
          <Link
            href="#"
            className="flex hover:underline text-[14px] text-[#007185] hover:text-red-600 gap-1 items-center "
          >
            <p className="w-[50px]">2 star</p>
            <div className="h-[20px] rounded w-[300px] border-slate-600 border-[1px] relative overflow-hidden">
              <div className="h-full rounded bg-yellow-400 absolute left-0 top-0 w-[3%]"></div>
            </div>
            <p>3%</p>
          </Link>
          <Link
            href="#"
            className="flex hover:underline text-[14px] text-[#007185] hover:text-red-600 gap-1 items-center "
          >
            <p className="w-[50px]">2 star</p>
            <div className="h-[20px] rounded w-[300px] border-slate-600 border-[1px] relative overflow-hidden">
              <div className="h-full rounded bg-yellow-400 absolute left-0 top-0 w-[8%]"></div>
            </div>
            <p>8%</p>
          </Link>
          <Link
            href="#"
            className="flex hover:underline text-[14px] text-[#007185] hover:text-red-600 gap-1 items-center "
          >
            <p className="w-[50px]">2 star</p>
            <div className="h-[20px] rounded w-[300px] border-slate-600 border-[1px] relative overflow-hidden">
              <div className="h-full rounded bg-yellow-400 absolute left-0 top-0  w-[2%]"></div>
            </div>
            <p>2%</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
