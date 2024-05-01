import Image from 'next/image';

export default function LanguageNav() {
  return (
    <div className="mr-1.4 flex items-end justify-center gap-1.6 p-1 hover:border-[1px] hover:rounded-sm border-[1px] border-nav hover:border-white ml-3">
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
  );
}
