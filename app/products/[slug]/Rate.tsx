import Image from 'next/image';

export default function Rate() {
  return (
    <div className="absolute w-[300px] bg-white top-[28px] -left-[67px] p-2 shadow-lg shadow-slate-400 rounded border-slate-400 border-[1px]">
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
      <div className="flex flex-col"></div>
    </div>
  );
}
