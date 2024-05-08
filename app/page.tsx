import nextDynamic from 'next/dynamic';
import ProductListing from './components/products/ProductListing';
import { getProducts } from '@/app/services';

export default async function Home({
  searchParams,
}: {
  searchParams: Record<string, string>;
}) {
  const Swipper = nextDynamic(() => import('@/app/components/Swipper'), {
    ssr: false,
  });

  // const query = {
  //   query: searchParams.query,
  //   category: `${searchParams.category ? searchParams.category : null}`,
  // };

  const { data: products, success } = await getProducts();

  if (!success) {
    return 'error';
  }
  console.log(products);
  return (
    <>
      <main className="px-1 pt-0 bg-[#E3E6E6]">
        <Swipper />
        <ProductListing products={products} />
      </main>
    </>
  );
}

export const dynamic = 'force-dynamic';
