'use client';
import { productShape } from '@/app/components/products/ProductItem';
import { useCartContext } from '@/app/contexts/CartContext';
import Image from 'next/image';
import { useState } from 'react';
import toast from 'react-hot-toast';
import End from './End';
import Mid from './Mid';

interface ClinetI {
  data: productShape;
}

export default function Client({ data }: ClinetI) {
  const context = useCartContext();
  const country = 'Germany';

  const alreadyIn = context?.products.find((product) =>
    data.id === product.id ? true : false
  );

  const [quantity, setQuantity] = useState<number>(1);
  const [selectedStyle, setSelectedStyle] = useState<string | undefined>(
    undefined
  );

  function handleAdd(data: productShape, quantity: number) {
    if (!alreadyIn) {
      context?.onAdd({ ...data, quantity });
      toast.success('Added to the cart!');
    }
  }

  function handleUpdate(quantity: number, id: number) {
    if (alreadyIn) {
      context?.onUpdate(quantity, id);
      toast.success('Cart Updated!');
    }
  }

  function handleRemove(id: number) {
    if (alreadyIn) {
      context?.onRemove(id);
      toast.success('Removed from the cart!');
    }
  }
  return (
    <main>
      <div className="mb-10">
        <Image
          src="/images/brand/topPage.png"
          width={600}
          height={600}
          alt="image"
          className="object-cover mx-auto"
        />
      </div>

      <div className="p-2 flex justify-around">
        <div className="relative">
          <Image
            src={data.img}
            width={500}
            height={500}
            alt="product icon"
            className="rounded-sm object-cover sticky top-0"
          />
        </div>
        <Mid
          data={data}
          country={country}
          selectedStyle={selectedStyle}
          setSelectedStyle={setSelectedStyle}
        />
        <End
          data={data}
          country={country}
          quantity={quantity}
          setQuantity={setQuantity}
          alreadyIn={alreadyIn}
          handleAdd={() => handleAdd(data, quantity)}
          handleRemove={() => handleRemove(data.id)}
          handleUpdate={() => handleUpdate(quantity, data.id)}
        />
      </div>
    </main>
  );
}
