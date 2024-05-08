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

// 'use client';
// import Image from 'next/image';

// import { useCartContext } from '@/app/contexts/CartContext';
// import { productShape } from '@/app/components/products/ProductItem';
// import toast from 'react-hot-toast';
// import { useState } from 'react';
// import Mid from './Mid';
// import End from './End';
// import { PathParamsContext } from 'next/dist/shared/lib/hooks-client-context.shared-runtime';

// ///
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
// ////

// type ProductPageProps = {
//   data: productShape;
// };

// export default function ProductPage() {
//   // console.log(params.slug);

//   const context = useCartContext();
//   const country = 'Germany';

//   const alreadyIn = context?.products.find((product) =>
//     data.id === product.id ? true : false
//   );

//   const [quantity, setQuantity] = useState<number>(1);
//   const [selectedStyle, setSelectedStyle] = useState<string | undefined>(
//     undefined
//   );

//   function handleAdd(data: productShape, quantity: number) {
//     if (!alreadyIn) {
//       context?.onAdd({ ...data, quantity });
//       toast.success('Added to the cart!');
//     }
//   }

//   function handleUpdate(quantity: number, id: number) {
//     if (alreadyIn) {
//       context?.onUpdate(quantity, id);
//       toast.success('Cart Updated!');
//     }
//   }

//   function handleRemove(id: number) {
//     if (alreadyIn) {
//       context?.onRemove(id);
//       toast.success('Removed from the cart!');
//     }
//   }

//   return (
//     <>
//       <main>
//         <div className="mb-10">
//           <Image
//             src="/images/brand/topPage.png"
//             width={600}
//             height={600}
//             alt="image"
//             className="object-cover mx-auto"
//           />
//         </div>

//         <div className="p-2 flex justify-around">
//           <div className="relative">
//             <Image
//               src={data.img}
//               width={500}
//               height={500}
//               alt="product icon"
//               className="rounded-sm object-cover sticky top-0"
//             />
//           </div>
//           <Mid
//             country={country}
//             selectedStyle={selectedStyle}
//             setSelectedStyle={setSelectedStyle}
//           />
//           <End
//             country={country}
//             quantity={quantity}
//             setQuantity={setQuantity}
//             alreadyIn={alreadyIn}
//             handleAdd={() => handleAdd(data, quantity)}
//             handleRemove={() => handleRemove(data.id)}
//             handleUpdate={() => handleUpdate(quantity, data.id)}
//           />
//         </div>
//       </main>
//     </>
//   );
// }
