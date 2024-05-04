'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import Star from './Star';
import Price from '../Price';

export default function ProductPage(props) {
  return (
    <>
      <main>
        <div className="flex gap-1 items-center justify-center h-screen">
          <div className="flex flex-col gap-1">
            <div>
              <h1 className="font-extrabold text-2xl">Results</h1>
              <p className="text-[13px] text-slate-500">
                Check each product page for other buying options.
              </p>
            </div>
            <div className="p-3 rounded-sm bg-gray-100">
              <Image
                src="/images/products/laptop1.jpg"
                width={500}
                height={500}
                alt="product icon"
                className="rounded-sm"
              />
            </div>
          </div>

          <div className="p-3 flex flex-col gap-1 mt-10">
            <p className="max-w-[400px] ">
              Acer Aspire 3 A315-24P-R7VH Slim Laptop | 15.6&quot; Full HD IPS
              Display | AMD Ryzen 3 7320U Quad-Core Processor | AMD Radeon
              Graphics | 8GB LPDDR5 | 128GB NVMe SSD |
            </p>
            <Star />
            <p className="text-sm text-slate-400">6k+ bought in past month</p>
            <Price />
            <p className="text-[12px] text-slate-400 -mb-[7px]">
              Amazon Music offer with this purchase
            </p>
            <p>
              Delivery in <span className="font-bold">Mon, May 13</span>
            </p>
            <p className="text-sm -mt-[7px]">
              Ships to <span className="font-bold">Germany</span>
            </p>
            <button className="bg-yellow-400 rounded-3xl py-1 px-2 hover:bg-yellow-500 self-start">
              Add to cart
            </button>
          </div>
        </div>
      </main>
    </>
  );
}
