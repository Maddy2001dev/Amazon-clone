'use client';
import Image from 'next/image';
import SearchInput from './SearchInput';
import SelectCategory from './SelectCategory';
import { FormEvent, useRef } from 'react';
import { usePathname, useRouter } from 'next/navigation';

export default function SearchBar() {
  const inputRef = useRef<HTMLInputElement>(null);
  const selectRef = useRef<HTMLSelectElement>(null);

  const router = useRouter();
  function handle(formEvent: FormEvent) {
    formEvent.preventDefault();
    const query = inputRef.current!.value;
    const category = selectRef.current!.value;
    if (!query && !category) router.push('/');

    router.push(
      `/?${query ? 'query=' + query : ''}&${
        category.trim() !== 'all' ? `category=${category}` : ''
      }`
    );
  }

  return (
    <div className="bg-green-600 flex-grow">
      <form className="flex items-center gap-0 outline-none" onSubmit={handle}>
        <select
          ref={selectRef}
          defaultValue={'all'}
          name="category"
          id="category"
          className="rounded-l-lg rounded-sm bg-slate-200 hover:bg-slate-300 outline-none"
        >
          <option value="all">All</option>
          <option value="laptops">Laptop</option>
          <option value="mobiles">mobile</option>
          <option value="mobile accessories">mobile accessories</option>
        </select>

        <input
          ref={inputRef}
          name="query"
          type="text"
          className="p-1 flex-grow bg-slate-100 outline-none text-2xl"
        />
        <button
          type="submit"
          className="bg-orange-300 p-1 rounded-r hover:bg-orange-500"
        >
          <Image
            src="/images/icons/search.png"
            width={30}
            height={30}
            alt="search icon"
          />
        </button>
      </form>
    </div>
  );
}

//////

// initial

// import SearchInput from './SearchInput';
// import SelectCategory from './SelectCategory';

// export default function SearchBar() {
//   return (
//     <form className="flex-grow flex justify-center items-center gap-0 -space-x-1.1 focus-within:last:border-orange-400 focus-within:border-l-3 focus-within:border-3 focus-within:rounded-l-lg">
//       {/* <SelectCategory />
//       <SearchInput /> */}
//       <select
//         name="All"
//         id="category"
//         className="rounded-l-lg rounded-sm w-12 h-12 bg-slate-200 hover:bg-slate-300 focus:border-orange-400 border-3 border-black focus:border-3 outline-none focus:z-10"
//       >
//         <option value="all">All</option>
//         <option value="laptops">Laptops</option>
//         <option value="laptops">Laptops</option>
//         <option value="laptops">Laptops</option>
//       </select>
//       <input
//         type="text"
//         className="p-1 w-full bg-slate-100 outline-none h-[43px] text-2xl"
//       />
//       <button className="bg-orange-300 p-1 h-[43px] rounded-r flex items-center justify-center hover:bg-orange-500">
//         <Image
//           src="/images/icons/search.png"
//           width={30}
//           height={30}
//           alt="search icon"
//         />
//       </button>
//     </form>
//   );
// }
