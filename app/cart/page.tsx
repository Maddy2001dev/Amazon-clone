'use client';
import { useCartContext } from '@/app/contexts/CartContext';

import Link from 'next/link';
import CartListing from './CartListing';

// const data = [
//   {
//     id: 1,
//     name: 'laptop Asus',
//     price: 1200,
//     img: '/images/products/laptoppBig.jpg',
//     description: `Acer Aspire 3 A315-24P-R7VH Slim Laptop | 15.6&quot; Full HD IPS
//     Display | AMD Ryzen 3 7320U Quad-Core Processor | AMD Radeon
//     Graphics | 8GB LPDDR5 | 128GB NVMe SSD |`,
//     quantity: 1,
//   },
//   {
//     id: 1,
//     name: 'laptop Asus',
//     price: 1200,
//     img: '/images/products/laptoppBig.jpg',
//     description: `Acer Aspire 3 A315-24P-R7VH Slim Laptop | 15.6&quot; Full HD IPS
//     Display | AMD Ryzen 3 7320U Quad-Core Processor | AMD Radeon
//     Graphics | 8GB LPDDR5 | 128GB NVMe SSD |`,
//     quantity: 1,
//   },
// ];

export default function Cart() {
  const context = useCartContext();

  return (
    <div className="p-[30px] bg-[#E3E6E6]">
      {context?.products.length === 0 ? (
        <div className="h-screen">
          <div className="bg-white p-5 rounded shadow-sm shadow-slate-400 w-full flex flex-col gap-2 h-fit text-[#333333]">
            <p className="text-3xl font-bold">Your Amazon Basket is empty.</p>

            <div className="flex items-center self-start justify-center gap-1.6">
              <p>Check products page for shopping.</p>
              <Link href="/" className="text-blue-500 hover:text-blue-800">
                continue shopping
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex gap-3">
          <div className="bg-white rounded p-[40px] shadow-sm shadow-slate-400">
            <header className="p-1 flex flex-col items-start gap-2">
              <p className="font-bold text-4xl">Shopping Basket</p>
              <button
                onClick={() => context?.deSelect()}
                className="text-[#007185] hover:text-red-600"
              >
                Deselect all items
              </button>
            </header>
            <hr className="border-slate-300 mt-1 h-[3px]" />
            <CartListing data={context?.products} />
          </div>
          <div className="bg-white rounded self-start p-[20px] shadow-sm w-[275px]  shadow-slate-40">
            <div className="flex flex-col">
              <p>
                Subtotal (
                <span className="font-semibold text-yellow-900">
                  {context?.quantity}
                </span>{' '}
                item):{' '}
              </p>
              <p className="font-bold text-xl">${context?.total}</p>
            </div>

            <div className="flex py-1 text-[14px] gap-1">
              <input type="checkbox" />
              <p>
                This will be a gift{' '}
                <Link href="#" className="text-[#007185] hover:text-red-600">
                  Learn more
                </Link>
              </p>
            </div>

            <button className="bg-[#FFD814] hover:bg-yellow-500 border-yellow-400 shadow shadow-slate-400 border-[1px] rounded-[5px] px-3 w-full mt-1 py-1.6">
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
