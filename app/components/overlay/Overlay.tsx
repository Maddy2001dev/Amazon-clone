'use client';
import { useOverlayContext } from '@/app/contexts/OverlayContext';

export default function Overlay() {
  const overlay = useOverlayContext();
  return (
    <>
      {overlay?.isOpen === true ? (
        <div
          onClick={() => overlay?.onClose()}
          className="
  justify-center items-start
  flex
  flex-row
  overflow-x-hidden
  overflow-y-auto
  fixed
  inset-0
  z-[49]
  outline-none
  focus:outline-none
  bg-[#000]
  opacity-[0.6]
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
      ) : null}
    </>
  );
}
