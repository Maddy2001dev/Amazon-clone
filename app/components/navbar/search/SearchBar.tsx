'use client';
import Image from 'next/image';

import { FormEvent, useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useOverlayContext } from '@/app/contexts/OverlayContext';

export default function SearchBar() {
  const inputRef = useRef<HTMLInputElement>(null);
  const selectRef = useRef<HTMLDivElement>(null);
  const [selectIsOpen, setSelectIsOpen] = useState(false);
  const [category, setCategory] = useState('All');
  const [inputSelected, setInputSelected] = useState(false);
  const overlay = useOverlayContext();
  const divContainer = useRef<HTMLDivElement>(null);
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
      const container = divContainer.current;
      const target = e.target as HTMLElement;
      if (!container?.contains(target)) {
        overlay?.onClose();
      }
    }
    document.addEventListener('click', func);
    return () => document.removeEventListener('click', func);
  }, [overlay?.onClose, overlay]);

  useEffect(() => {
    function func(e: Event) {
      const target = e.target as HTMLElement;
      const container = selectRef.current;
      if (container && !container.contains(target)) {
        setSelectIsOpen(false);
      }
    }

    document.addEventListener('click', func);

    return () => document.removeEventListener('click', func);
  }, []);

  const router = useRouter();
  function handle(formEvent: FormEvent) {
    formEvent.preventDefault();
    const query = inputRef.current!.value;

    setInputSelected(false);
    overlay?.onClose();
    if (!query && !category) router.push('/');

    router.push(
      `/?${query ? 'query=' + query : ''}&${
        category.trim() !== 'all' ? `category=${category}` : ''
      }`
    );
  }

  useEffect(() => {
    if (category != 'All') {
      inputRef.current?.focus();
      overlay?.onOpen();
    }
  }, [category]);

  return (
    <>
      <div ref={divContainer} className="flex-grow relative">
        <form
          className={`flex rounded items-center gap-0 ${
            inputSelected ? 'outline outline-orange-400 outline-[3px]' : ''
          }`}
          onSubmit={handle}
        >
          <div
            onClick={() => {
              setSelectIsOpen((is) => !is);
              if (inputSelected) {
                setInputSelected(false);
              }
            }}
            className={`relative border-slate-400 border-[1px] self-stretch flex items-center cursor-pointer rounded-l bg-[#e6e6e6] hover:bg-slate-300  ${
              selectIsOpen ? 'outline outline-orange-400 outline-[3px]' : ''
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
                selectIsOpen ? 'visible z-[51]' : 'hidden'
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
              overlay?.onOpen();
              setInputSelected(true);
              // setSelectIsOpen(false);
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
