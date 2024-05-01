import Image from 'next/image';

export default function LocationNav() {
  return (
    <div className="mr-3 hover:border-[1px] hover:rounded-sm border-[1px] border-nav hover:border-white text-white flex flex-col items-center justify-center">
      <p className="text-center text-[12px] opacity-75 ml-1">Deliver to</p>
      <div className="flex items-center justify-center pr-2">
        <Image
          src="/images/icons/locationIcon.png"
          width={27}
          height={27}
          alt="location icon"
          className="mb-1"
        />
        <span className="font-semibold -mt-1">Germany</span>
      </div>
    </div>
  );
}
