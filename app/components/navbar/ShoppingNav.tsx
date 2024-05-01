import Image from 'next/image';

export default function ShoppingNav() {
  return (
    <div className="p-1.4 relative mr-1.4 text-white hover:border-[1px] hover:rounded-sm border-[1px] border-nav hover:border-white flex">
      <div>
        <span className="absolute top-[5px] left-[28px] text-orange-500 font-bold">
          0
        </span>
        <Image
          className="self-center"
          src="/images/icons/basket.png"
          width={60}
          height={60}
          alt="down icon"
        />
      </div>
      <p className="font-extrabold text-[15px] self-end -ml-2">Cart</p>
    </div>
  );
}
