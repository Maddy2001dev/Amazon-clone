import Image from 'next/image';
import SearchInput from './SearchInput';
import SelectCategory from './SelectCategory';

export default function SearchBar() {
  return (
    <form className="flex-grow flex justify-center items-center gap-0 -space-x-1.1 focus-within:last:border-orange-400 focus-within:border-l-3 focus-within:border-3 focus-within:rounded-l-lg">
      {/* <SelectCategory />
      <SearchInput /> */}
      <select
        name="All"
        id="category"
        className="rounded-l-lg rounded-sm w-12 h-12 bg-slate-200 hover:bg-slate-300 focus:border-orange-400 border-3 border-black focus:border-3 outline-none focus:z-10"
      >
        <option value="all">All</option>
        <option value="laptops">Laptops</option>
        <option value="laptops">Laptops</option>
        <option value="laptops">Laptops</option>
      </select>
      <input
        type="text"
        className="p-1 w-full bg-slate-100 outline-none h-[43px] text-2xl"
      />
      <button className="bg-orange-300 p-1 h-[43px] rounded-r flex items-center justify-center hover:bg-orange-500">
        <Image
          src="/images/icons/search.png"
          width={30}
          height={30}
          alt="search icon"
        />
      </button>
    </form>
  );
}
