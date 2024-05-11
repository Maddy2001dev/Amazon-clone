import { productShape } from '../components/products/ProductItem';
import { useCartContext } from '../contexts/CartContext';
import CartItem from './cartItem';

interface CartListingProps {
  data?: productShape[];
}

export default function CartListing({ data }: CartListingProps) {
  const context = useCartContext();
  return (
    <div className="py-4 px-[20px] flex flex-col items-start gap-2">
      {data?.map((product) => (
        <CartItem key={product.id} product={product} />
      ))}
      <div className="w-full">
        <p className="text-right text-lg">
          Subtotal (
          <span className="font-semibold text-yellow-900">
            {context?.quantity}
          </span>{' '}
          item): <span className="font-bold text-xl">${context?.total}</span>
        </p>
      </div>
    </div>
  );
}
