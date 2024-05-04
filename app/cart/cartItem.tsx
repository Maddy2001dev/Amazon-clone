import { productShape } from '../components/products/ProductItem';

export default function CartItem({ data }: { data: productShape }) {
  return <div className="w-300 h-300 bg-cyan-400">{data.name}</div>;
}
