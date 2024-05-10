'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
function Logo() {
  const router = useRouter();
  return (
    <div onClick={() => router.push('/')} className=" cursor-pointer">
      <Image
        priority
        src="/images/brand/navbarImg.png"
        width={115}
        height={60}
        alt="amazon logo"
        className="hover:border-[1px] hover:rounded-sm border-[1px] border-nav hover:border-white hover:transform hover:-translate-y-[1px] hover:scale-101"
      />
    </div>
  );
}

export default Logo;
