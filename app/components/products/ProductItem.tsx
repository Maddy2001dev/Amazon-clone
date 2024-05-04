import Image from 'next/image';
import Link from 'next/link';

type ProductItemProps = {
  data: { id: number; name: string; price: number; img: string };
};

export default function ProductItem({ data }: ProductItemProps) {
  return (
    <div className="bg-[#f5f6f6] flex flex-col justify-center py-1 pb-0 shadow-lg">
      <div className="flex items-center px-1 pb-1">
        <p>{data.name}</p>
      </div>
      <div>
        <Image
          src="/images/products/laptop1.jpg"
          width={400}
          height={300}
          alt="product"
        />
      </div>
      <div className="font-extrabold text-lg p-1 mt-1 ml-1">{data.price}$</div>
      <Link
        href="#"
        className="py-1 text-center px-2 mt-1 transition bg-orange-300 hover:bg-orange-600"
      >
        Add to cart
      </Link>
    </div>
  );
}
