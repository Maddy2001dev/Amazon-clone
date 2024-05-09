'use client';
import Image from 'next/image';

import { FormEvent, useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function SearchBar() {
  const inputRef = useRef<HTMLInputElement>(null);
  const selectRef = useRef<HTMLDivElement>(null);
  // const selectRef = useRef<HTMLSelectElement>(null);
  // const selectRef = useRef<HTMLDivElement>('all');
  const [isOpen, setIsOpen] = useState(false);
  const [category, setCategory] = useState('All');
  const [inputSelected, setInputSelected] = useState(false);

  useEffect(() => {
    function func(e: Event) {
      const target = e.target as HTMLElement;
      const container = inputRef.current;

      if (container && !container.contains(target)) {
        setInputSelected(false);
      }
    }

    document.addEventListener('click', func);

    return () => document.removeEventListener('click', func);
  }, []);

  useEffect(() => {
    function func(e: Event) {
      const target = e.target as HTMLElement;
      const container = selectRef.current;

      if (container && !container.contains(target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('click', func);

    return () => document.removeEventListener('click', func);
  }, []);

  const router = useRouter();
  function handle(formEvent: FormEvent) {
    formEvent.preventDefault();
    const query = inputRef.current!.value;

    if (!query && !category) router.push('/');

    router.push(
      `/?${query ? 'query=' + query : ''}&${
        category.trim() !== 'all' ? `category=${category}` : ''
      }`
    );
  }
  const overlay = (
    <div
      onClick={(e) => {}}
      className="
  justify-center items-start
  flex
  flex-row
  overflow-x-hidden
  overflow-y-auto
  fixed
  inset-0
  z-50
  outline-none
  focus:outline-none
  bg-neutral-800/70
  "
    >
      {/* <div className="relative w-full my-6 mx-auto h-full">
        <div
          className={`translate duration-300 h-full ${
            showModal ? 'translate-y-0' : 'translate-y-full'
          } ${showModal ? 'opacity-100' : 'opacity-0'}`}
        ></div>
      </div> */}
    </div>
  );

  return (
    <>
      <div className="flex-grow">
        <form
          className={`flex rounded items-center gap-0 ${
            inputSelected ? 'outline outline-orange-400 outline-[3px]' : ''
          }`}
          onSubmit={handle}
        >
          <div
            onClick={() => {
              setIsOpen((is) => !is);
              setInputSelected(false);
            }}
            className={`relative border-slate-400 border-[1px] self-stretch flex items-center cursor-pointer rounded-l bg-[#e6e6e6] hover:bg-slate-300  ${
              isOpen ? 'outline outline-orange-400 outline-[3px]' : ''
            }`}
            ref={selectRef}
          >
            <p className="flex items-center text-[14px] justify-between gap-1 px-[10px] text-center">
              {category}

              <Image
                src="/images/icons/downBlack.png"
                width={8}
                height={10}
                alt="icon"
              />
            </p>
            <ul
              onClick={(e) => {
                const el = e.target as HTMLLIElement;
                if (el.id === 'item') {
                  setCategory(() => el.innerHTML);
                }
              }}
              className={`absolute overflow-y-scroll border-slate-400 w-[150px] border-[1px] flex flex-col gap-1.6 top-[45px] bg-white ${
                isOpen ? 'visible z-[51]' : 'hidden'
              }`}
            >
              <li
                id="item"
                className="hover:bg-slate-400 border-300 border-b-[1px] p-[2px]"
              >
                all
              </li>
              <li
                id="item"
                className="hover:bg-slate-400 border-300 border-b-[1px] p-[2px]"
              >
                mobiles
              </li>
              <li
                id="item"
                className="hover:bg-slate-400 border-300 border-b-[1px] p-[2px]"
              >
                laptops
              </li>
              <li
                id="item"
                className="hover:bg-slate-400 border-300 border-b-[1px] p-[2px]"
              >
                mobile accessories
              </li>
            </ul>
          </div>

          <input
            onClick={() => {
              setInputSelected(true);
              setIsOpen(false);
            }}
            autoComplete="off"
            ref={inputRef}
            name="query"
            type="text"
            placeholder="Search Amazon"
            className="p-1 border-t-slate-400 outline-none border-b-slate-400 border-[1px] text-[14px] flex-grow bg-slate-100 text-slate-900 text-2xl"
          />
          <button
            type="submit"
            className="bg-orange-300 border-[1px] border-orange-300 p-1 self-stretch rounded-r hover:bg-orange-300/80"
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
    </>
  );
}

// 'use client';
// import Image from 'next/image';

// import { FormEvent, useRef } from 'react';
// import { useRouter } from 'next/navigation';

// export default function SearchBar() {
//   const inputRef = useRef<HTMLInputElement>(null);
//   const selectRef = useRef<HTMLSelectElement>(null);

//   const router = useRouter();
//   function handle(formEvent: FormEvent) {
//     formEvent.preventDefault();
//     const query = inputRef.current!.value;
//     const category = selectRef.current!.value;
//     if (!query && !category) router.push('/');

//     router.push(
//       `/?${query ? 'query=' + query : ''}&${
//         category.trim() !== 'all' ? `category=${category}` : ''
//       }`
//     );
//   }

//   return (
//     <div className="bg-green-600 flex-grow">
//       <form className="flex items-center gap-0 outline-none" onSubmit={handle}>
//         <select
//           ref={selectRef}
//           defaultValue={'all'}
//           name="category"
//           id="category"
//           className="rounded-l-lg rounded-sm bg-slate-200 hover:bg-slate-300 outline-none"
//         >
//           <option value="all">All</option>
//           <option value="laptops">Laptop</option>
//           <option value="mobiles">mobile</option>
//           <option value="mobile accessories">mobile accessories</option>
//         </select>

//         <input
//           ref={inputRef}
//           name="query"
//           type="text"
//           className="p-1 flex-grow bg-slate-100 outline-none text-2xl"
//         />
//         <button
//           type="submit"
//           className="bg-orange-300 p-1 rounded-r hover:bg-orange-500"
//         >
//           <Image
//             src="/images/icons/search.png"
//             width={30}
//             height={30}
//             alt="search icon"
//           />
//         </button>
//       </form>
//     </div>
//   );
// }
