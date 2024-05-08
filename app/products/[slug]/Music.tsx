import Link from 'next/link';

export default function Music() {
  return (
    <div className="absolute top-[22px] overflow-visible left-12 bg-white z-[9] p-1 shadow-lg shadow-slate-400 rounded border-slate-400 border-[1px]">
      <div className="relative">
        <div className="triangle absolute -top-[18px] left-[45%]"></div>
        <ol className="list-disc list-inside flex flex-col">
          <li className="flex items-center p-1 gap-1.6 ">
            <p>Amazon Music offer with this purchase</p>
            <Link
              href="#"
              className="text-[#007185] hover:text-red-600 hover:underline"
            >
              Shop items
            </Link>
          </li>
        </ol>
      </div>
    </div>
  );
}
