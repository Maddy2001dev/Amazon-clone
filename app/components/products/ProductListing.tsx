import Link from 'next/link';
import ProductItem from './ProductItem';

const products = [
  {
    id: 1,
    name: 'laptop Asus',
    price: 1200,
    img: '/images/products/laptop1.jpg',
    quantity: 1,
  },
  {
    id: 2,
    name: 'laptop Asus',
    price: 1200,
    img: '/images/products/laptop1.jpg',
    quantity: 1,
  },
  {
    id: 3,
    name: 'laptop Asus',
    price: 1200,
    img: '/images/products/laptop1.jpg',
    quantity: 1,
  },
  {
    id: 4,
    name: 'laptop Asus',
    price: 1200,
    img: '/images/products/laptop1.jpg',
    quantity: 1,
  },
  {
    id: 5,
    name: 'laptop Asus',
    price: 1200,
    img: '/images/products/laptop1.jpg',
    quantity: 1,
  },
  {
    id: 6,
    name: 'laptop Asus',
    price: 1200,
    img: '/images/products/laptop1.jpg',
    quantity: 1,
  },
  {
    id: 7,
    name: 'laptop Asus',
    price: 1200,
    img: '/images/products/laptop1.jpg',
    quantity: 1,
  },
];
export default function ProductListing() {
  return (
    <main className="p-4 -mt-[400px] relative">
      <header className="bg-[#f5f6f6] mb-4 text-center text-sm py-1 flex justify-center gap-1.6">
        <p>
          You are on amazon.com. You can also shop on Amazon Germany for
          millions of products with fast local delivery. Click here to go to
        </p>
        <Link href="#" className="text-[#007185] hover:text-red-600">
          amazon.de
        </Link>
      </header>
      <div className="grid gap-3 grid-cols-4">
        {products.map((product) => (
          <ProductItem key={product.id} data={product} />
        ))}
      </div>
    </main>
  );
}
