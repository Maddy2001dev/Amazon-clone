import Image from 'next/image';

export default function SignIn() {
  return (
    <div className="mr-1.4 p-1.6 text-white hover:border-[1px] hover:rounded-sm border-[1px] border-nav hover:border-white">
      <p className="text-[12px]">Hello, sign in</p>
      <div className="flex gap-1.6">
        <p className="font-extrabold text-[15px]">Account & Lists</p>
        <Image
          className="self-center mt-1"
          src="/images/icons/downFill.png"
          width={12}
          height={12}
          alt="down icon"
        />
      </div>
    </div>
  );
}
