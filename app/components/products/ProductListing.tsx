'use client';
import Link from 'next/link';
import ProductItem, { productShape } from './ProductItem';

interface ProductListingProps {
  products: productShape[];
}

export default function ProductListing({ products }: ProductListingProps) {
  return (
    <main className="p-4 min-h-fit -mt-[400px] relative">
      <header className="bg-[#f5f6f6] mb-4 text-center text-sm py-1 flex justify-center gap-1.6">
        <p>
          You are on amazon.com. You can also shop on Amazon Germany for
          millions of products with fast local delivery. Click here to go to
        </p>
        <Link href="#" className="text-[#007185] hover:text-red-600">
          amazon.de
        </Link>
      </header>
      {products.length === 0 ? (
        <div className="w-full h-screen">
          <p className="p-3 flex items-center justify-center h-[300px] text-2xl bg-[#f5f6f6]">
            Sorry, There is no item match your sreach :-( Please try again.
          </p>
        </div>
      ) : (
        <div className="grid gap-1 grid-cols-4">
          {products.map((product) => (
            <ProductItem key={product.id} data={product} />
          ))}
        </div>
      )}
    </main>
  );
}
