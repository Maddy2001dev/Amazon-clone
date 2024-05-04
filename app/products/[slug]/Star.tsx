import Image from 'next/image';

export default function Star() {
  return (
    <div className="flex items-center gap-1">
      <div className="flex hover:cursor-pointer gap-[2px] justify-center items-center">
        <Image
          src="/images/icons/star.png"
          height={20}
          width={20}
          alt="star icon"
        />
        <Image
          src="/images/icons/star.png"
          height={20}
          width={20}
          alt="star icon"
        />
        <Image
          src="/images/icons/star.png"
          height={20}
          width={20}
          alt="star icon"
        />
        <Image
          src="/images/icons/star.png"
          height={20}
          width={20}
          alt="star icon"
        />
        <Image
          src="/images/icons/star.png"
          height={20}
          width={20}
          alt="star icon"
        />
      </div>
      <div className="hover:text-red-600 text-sm hover:cursor-pointer">
        1,746
      </div>
    </div>
  );
}
