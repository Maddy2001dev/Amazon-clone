import ProductListing from './components/products/ProductListing';
import { getProducts } from '@/app/services';
import Swipper from './components/Swipper';
// import nextDynamic from 'next/dynamic';
export default async function Home({
  searchParams,
}: {
  searchParams: Record<string, string>;
}) {
  // const Swipper = nextDynamic(() => import('@/app/components/Swipper'), {
  //   ssr: false,
  // });

  const searchParameters = {
    query: searchParams.query,
    category: searchParams.category,
  };

  const { data: products, success } = await getProducts(searchParameters);

  if (!success) {
    return 'error';
  }

  return (
    <main className="px-1 pt-0 bg-[#E3E6E6]">
      <Swipper />
      <ProductListing products={products} />
    </main>
  );
}

export const dynamic = 'force-dynamic';
