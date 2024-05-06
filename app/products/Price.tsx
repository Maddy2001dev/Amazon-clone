export default function Price({ price }: { price: number }) {
  return (
    <div className="flex gap-[1px]">
      <p className="self-start pt-[6px]">$</p>
      <p className="self-stretch font-bold text-[30px] tracking-tight">
        {price}
      </p>
      <p className="font-semibold self-start pt-[6px]">99</p>
    </div>
  );
}
