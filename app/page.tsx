import dynamic from 'next/dynamic';
import ProductListing from './components/products/ProductListing';

export default function Home() {
  const Swipper = dynamic(() => import('@/app/components/Swipper'), {
    ssr: false,
  });
  return (
    <>
      <main className="px-1 bg-[#E3E6E6]">
        <Swipper />
        <ProductListing />
      </main>
    </>
  );
}
