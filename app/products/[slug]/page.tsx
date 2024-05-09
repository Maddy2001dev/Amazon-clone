import { productShape } from '@/app/components/products/ProductItem';

import Client from './Client';
import { getProducts } from '@/app/services';

///
// const data = {
//   id: 1,
//   name: 'laptop Asus',
//   price: 1200,
//   img: '/images/products/laptoppBig.jpg',
//   description: `Acer Aspire 3 A315-24P-R7VH Slim Laptop | 15.6&quot; Full HD IPS
//     Display | AMD Ryzen 3 7320U Quad-Core Processor | AMD Radeon
//     Graphics | 8GB LPDDR5 | 128GB NVMe SSD |`,
//   quantity: 1,
// };
////

// type ProductPageProps = {
//   data: productShape;
// };

export default async function ProductPage({
  params,
}: {
  params: Record<string, string>;
}) {
  const { data } = await getProducts({ id: +params.slug });

  return <Client data={data} />;
}
