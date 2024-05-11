import { productShape } from '@/app/components/products/ProductItem';

import Client from './Client';
import { getProducts } from '@/app/services';

export default async function ProductPage({
  params,
}: {
  params: Record<string, string>;
}) {
  const { data } = await getProducts({ id: +params.slug });

  return <Client data={data} />;
}
